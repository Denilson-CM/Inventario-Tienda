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

        private Guid IdGuid = Guid.NewGuid();
        public CategoriaController(IVContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Categoria> lista = _dbcontext.Categorias.OrderByDescending(x => x.Nombre).ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] CategoriaViewModel model)
        {
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                try
                {
                    var result = new Categoria()
                    {
                        Id = IdGuid,
                        Nombre = model.Nombre,
                        Descripcion = model.Descripcion,
                        CreatedAt = model.CreatedAt
                    };
                    await _dbcontext.Categorias.AddAsync(result);
                    await _dbcontext.SaveChangesAsync();

                    transaction.Commit();
                    return StatusCode(StatusCodes.Status200OK, "Categoria Guardada");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "");
                }
            }
        }

        [HttpPost]
        [Route("Eliminar/{id}")]
        public async Task<IActionResult> Cerrar(Guid id)
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
    }
}
