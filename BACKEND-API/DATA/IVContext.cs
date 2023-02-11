using DATA.Entities;
using Microsoft.EntityFrameworkCore;

namespace DATA
{
    public class IVContext : DbContext
    {
        public IVContext(DbContextOptions<IVContext> options) : base(options)
        {

        }

        #region [ DbSet's ]
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        #endregion

    }
}