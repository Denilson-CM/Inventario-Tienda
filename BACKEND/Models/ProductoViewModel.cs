namespace BACKEND.Models
{
    public class ProductoViewModel
    {
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public decimal? precio_compra { get; set; }
        public decimal? precio_venta { get; set; }
        public DateTime? FechaRegistroP { get; set; }
        public int CategoriaId { get; set; }
    }
}
