using BACKEND.Models;
using DATA;
using DATA.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Threading;

namespace BACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IVContext _dbcontext;

        public ProductoController(IVContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var results = _dbcontext.Productos
                .Where(s => s.IsActive ?? true)
                .OrderByDescending(s => s.Fecha_Creacion)
                .ToList();

            var list = new List<ListViewModel>();

            foreach (var item in results)
            {
                var model = new ListViewModel
                {
                    Id = item.Id,
                    NombreProducto = item.Nombre,
                    CodigoProducto = item.Codigo,
                    CategoriaId = item.CategoriaId,
                    NombreCategoria = _dbcontext.Productos.Where(x => x.CategoriaId == x.Categoria.Id).Select(x => x.Nombre).FirstOrDefault().ToString(),
                    Fecha_Creacion = item.Fecha_Creacion.Value.ToString("dd/MM/yyyy")
                };

                list.Add(model);
            }

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] PostRegistroProductoViewModel model)
        {
            if (ModelState.IsValid)
            {
                using (var transaction = _dbcontext.Database.BeginTransaction())
                {
                    try
                    {
                        int contadorE = 0;
                        int bandera = 0;

                        foreach (var item in model.RegistoProducto)
                        {
                            var existe = _dbcontext.Productos
                            .Where(x => x.Nombre.ToUpper().Trim() == item.NombreProducto.ToUpper().Trim() || x.Codigo.ToUpper().Trim() == item.CodigoProducto.ToUpper().Trim())
                            .FirstOrDefault();

                            if (existe == null)
                            {
                                var result = new Producto()
                                {
                                    Id = Guid.NewGuid(),
                                    Nombre = item.NombreProducto,
                                    Codigo = item.CodigoProducto,
                                    precio_compra = item.precio_compra,
                                    precio_venta = item.precio_venta,
                                    CategoriaId = item.CategoriaId
                                };

                                await _dbcontext.Productos.AddAsync(result);
                                bandera++;
                            }
                            else
                            {
                                contadorE++;
                            }

                        }

                        await _dbcontext.SaveChangesAsync();

                        transaction.Commit();
                        return StatusCode(StatusCodes.Status200OK, new { success = $"{contadorE} productos ya existían en la base de datos y se crean {bandera} nuevos productos.." });
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrio un erro al Guardar");
                    }
                }
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Modelo Invalido" );
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] ListViewModel model)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                try
                {
                    var repetido = _dbcontext.Productos
                    .Where(x => x.Id != model.Id)
                    .Where(x => x.Nombre.ToLower().Trim() == model.NombreProducto.ToLower().Trim() || x.Codigo.ToUpper().Trim() == model.CodigoProducto.ToUpper().Trim())
                    .FirstOrDefault();

                    if (repetido != null)
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "Ya existe un producto con el mismo Nombre o Codigo");
                    }

                    var objProducto = _dbcontext.Productos.Where(s => s.Id == model.Id).FirstOrDefault();

                    if (objProducto != null)
                    {
                        objProducto.Nombre = model.NombreProducto;
                        objProducto.Codigo = model.CodigoProducto;
                        objProducto.precio_compra = model.precio_compra;
                        objProducto.precio_venta = model.precio_venta;
                        objProducto.CategoriaId = model.CategoriaId;

                        _dbcontext.Productos.Attach(objProducto);
                        await _dbcontext.SaveChangesAsync();

                        transaction.Commit();

                        return StatusCode(StatusCodes.Status200OK, "Producto Actualizado");

                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "eL Producto no existe");
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrio un error al Editar");
                }
            }
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                try
                {
                    Categoria marca = _dbcontext.Categorias.Find(id);
                    _dbcontext.Categorias.Remove(marca);
                    await _dbcontext.SaveChangesAsync();

                    transaction.Commit();
                    return StatusCode(StatusCodes.Status200OK, "Producto Eliminado");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrio un error al Eliminar");
                }
            }
        }

        [HttpGet]
        [Route("detalle/{id}")]
        public IActionResult Detalle(Guid id)
        {
            var result = _dbcontext.Productos
                .Where(x => x.Id == id)
                .Where(x => x.CategoriaId == x.Categoria.Id)
                .Select(x => new
                {
                    id = x.Id,
                    nombre = x.Nombre,
                    codigo = x.Codigo,
                    pCompra = x.precio_compra,
                    pVenta = x.precio_venta,
                    idCategoria = x.CategoriaId,
                    nombreCategoria = x.Categoria.Nombre,
                    fecha_Creacion = x.Fecha_Creacion.Value.ToShortDateString()
                }).FirstOrDefault();

            if (result != null)
            {
                return StatusCode(StatusCodes.Status200OK, new { success = true, response = result });
            }
            return StatusCode(StatusCodes.Status200OK, new { success = true, response = "No existe el producto" });

        }
    }
}
