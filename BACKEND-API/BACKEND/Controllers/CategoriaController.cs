using DATA.Entities;
using DATA;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BACKEND.Models;

namespace BACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly IVContext _dbcontext;
        public CategoriaController(IVContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var results = _dbcontext.Categorias
                .Where(s => s.IsActive ?? true)
                .OrderByDescending(s => s.Fecha_Creacion)
                .ToList();

            var list = new List<ListCategoriaViewModel>();

            foreach (var item in results)
            {
                var model = new ListCategoriaViewModel
                {
                    Id = item.Id,
                    Nombre = item.Nombre,
                    Descripcion = item.Descripcion,
                    Fecha_Creacion = item.Fecha_Creacion.Value.ToString("dd/MM/yyyy")
                };

                list.Add(model);
            }

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] PostRegistroCategoriaViewModel model)
        {
            if (ModelState.IsValid)
            {
                using (var transaction = _dbcontext.Database.BeginTransaction())
                {
                    try
                    {
                        int contadorE = 0;
                        int bandera = 0;

                        foreach (var item in model.RegistroCategoria)
                        {
                            var existe = _dbcontext.Categorias
                           .Where(x => x.Nombre.ToUpper().Trim() == item.Nombre.ToUpper().Trim())
                           .FirstOrDefault();

                            if (existe == null)
                            {
                                var result = new Categoria()
                                {
                                    Id = Guid.NewGuid(),
                                    Nombre = item.Nombre,
                                    Descripcion = item.Descripcion
                                };

                                await _dbcontext.Categorias.AddAsync(result);
                                bandera++;
                            }
                            else
                            {
                                contadorE++;
                            }
                        }

                        await _dbcontext.SaveChangesAsync();

                        transaction.Commit();
                        return StatusCode(StatusCodes.Status200OK, new { success = $"{contadorE} categorias ya existían en la base de datos y se crean {bandera} nuevas categorias.." });
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return StatusCode(StatusCodes.Status500InternalServerError, "");
                    }
                }
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Modelo Invalido");
        }

        [HttpDelete]
        [Route("Eliminar/{id}")]
        public async Task<IActionResult> Eliminar(Guid id)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                var lstFK = _dbcontext.Productos
                .Where(x => x.Id == id)
                .ToList().FirstOrDefault();

                if (lstFK == null)
                {
                    try
                    {
                        Categoria marca = _dbcontext.Categorias.Find(id);
                        _dbcontext.Categorias.Remove(marca);
                        await _dbcontext.SaveChangesAsync();

                        transaction.Commit();
                        return StatusCode(StatusCodes.Status200OK, "Categoria Eliminada");
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return StatusCode(StatusCodes.Status500InternalServerError,"");
                    }
                }
                else
                {
                    return StatusCode(StatusCodes.Status404NotFound, "La categoria hace referencia a un producto");
                }
            }
        }

        [HttpGet]
        [Route("detalle/{id}")]
        public IActionResult Detalle(Guid id)
        {
            var result = _dbcontext.Categorias
                .Where(x => x.Id == id)
                .Select(x => new
                {
                    id = x.Id,
                    nombre = x.Nombre,
                    descripcion = x.Descripcion,
                    is_active = x.IsActive,
                    fecha_Creacion = x.Fecha_Creacion.Value.ToShortDateString()
                }).FirstOrDefault();

            if (result != null)
            {
                return StatusCode(StatusCodes.Status200OK, new { success = true, response = result });
            }
            return StatusCode(StatusCodes.Status200OK, new { success = true, response = "No existe la categoria" });

        }
    }
}
