namespace BACKEND.Models
{
    public class ProductoViewModel
    {
        public string Nombre { get; set; }
        public string Codigo { get; set; }
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

    public class EditProductoViewModel : ProductoViewModel
    {
        public Guid Id { get; set; }
    }
}
