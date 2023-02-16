namespace BACKEND.Models
{
    public class ProductoViewModel
    {
        public string NombreProducto { get; set; }
        public string CodigoProducto { get; set; }
        public decimal? precio_compra { get; set; }
        public decimal? precio_venta { get; set; }
        public Guid CategoriaId { get; set; }
    }

    public class PostRegistroProductoViewModel
    {
        public PostRegistroProductoViewModel()
        {
            this.RegistoProducto = new List<ProductoViewModel>();
        }

        public List<ProductoViewModel> RegistoProducto { get; set; }
    }

    public class ListViewModel : ProductoViewModel
    {
        public Guid Id { get; set; }
        public string? Fecha_Creacion { get; set; }
        public string? NombreCategoria { get; set; }
    }
}
