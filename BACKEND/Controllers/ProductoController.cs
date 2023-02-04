using BACKEND.Models;
using DATA;
using DATA.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

            var lista = _dbcontext.Productos
                .Where(x => x.CategoriaId == x.Categoria.IdCategoria) 
                .Select( x => new
                {
                    idProducto = x.IdProducto,
                    nombre = x.Nombre,
                    codigo = x.Codigo,
                    idCategoria = x.Categoria.IdCategoria,
                    nombreCategoria = x.Categoria.Nombre
                }).OrderByDescending(x => x.nombre).ToList();

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
                    var result = new Producto()
                    {
                        IdProducto = model.IdProducto,
                        Nombre = model.Nombre,
                        Codigo = model.Codigo,
                        precio_compra = model.precio_compra,
                        precio_venta = model.precio_venta,
                        FechaRegistroP = model.FechaRegistroP,
                        CategoriaId = model.CategoriaId
                    };

                    await _dbcontext.Productos.AddAsync(result);
                    await _dbcontext.SaveChangesAsync();

                    return StatusCode(StatusCodes.Status200OK, "OK");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, "");
                }
            }
        }
    }
}
