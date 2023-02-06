using BACKEND.Models;
using DATA;
using DATA.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Threading;

namespace BACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IVContext _dbcontext;
        private Guid IdGuid = Guid.NewGuid();

        public ProductoController(IVContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {

            List<Producto> lista = _dbcontext.Productos.OrderByDescending(x => x.Nombre).ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] ProductoViewModel model)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                try
                {
                    var existe = _dbcontext.Productos
                        .Where(x => x.Nombre.ToUpper().Trim() == model.Nombre.ToUpper().Trim() || x.Codigo.ToUpper().Trim() == model.Codigo.ToUpper().Trim());

                    if (existe != null)
                    {
                        var result = new Producto()
                        {
                            Id = IdGuid,
                            Nombre = model.Nombre.Trim(),
                            Codigo = model.Codigo.Trim(),
                            precio_compra = model.precio_compra,
                            precio_venta = model.precio_venta,
                            CreatedAt = model.CreatedAt,
                            CategoriaId = model.CategoriaId
                        };

                        await _dbcontext.Productos.AddAsync(result);
                        await _dbcontext.SaveChangesAsync();

                        transaction.Commit();
                        return StatusCode(StatusCodes.Status200OK, "Producto Guardado");
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status200OK, "Ya existe un producto con el mismo Nombre o Codigo");
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrio un erro al Guardar");
                }
            }
        }

        [HttpPost]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] ProductoViewModel model)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                try
                {
                    var repetido = _dbcontext.Productos
                    .Where(x => x.Id != model.Id)
                    .Where(x => x.Nombre.ToLower().Trim() == model.Nombre.ToLower().Trim() || x.Codigo.ToUpper().Trim() == model.Codigo.ToUpper().Trim())
                    .FirstOrDefault();

                    if (repetido != null)
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "Ya existe un producto con el mismo Nombre o Codigo");
                    }

                    var objProducto = _dbcontext.Productos.Where(s => s.Id == model.Id).FirstOrDefault();

                    if (objProducto != null)
                    {
                        objProducto.Nombre = model.Nombre;
                        objProducto.Codigo = model.Codigo;
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
                        return StatusCode(StatusCodes.Status400BadRequest, "La talla no existe");
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrio un error al Editar");
                }
            }
        }

        [HttpPost]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Cerrar(int id)
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
    }
}
