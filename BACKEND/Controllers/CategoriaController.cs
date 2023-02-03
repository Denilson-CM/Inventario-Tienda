using DATA.Entities;
using DATA;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
            List<Categoria> lista = _dbcontext.Marcas.OrderByDescending(x => x.Nombre).ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Categoria request)
        {
            await _dbcontext.Marcas.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpPost]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Cerrar(int id)
        {
            Categoria marca = _dbcontext.Marcas.Find(id);
            _dbcontext.Marcas.Remove(marca);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }
    }
}
