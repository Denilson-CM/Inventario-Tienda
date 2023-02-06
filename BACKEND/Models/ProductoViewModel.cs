namespace BACKEND.Models
{
    public class ProductoViewModel
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public decimal? precio_compra { get; set; }
        public decimal? precio_venta { get; set; }
        public DateTime? CreatedAt { get; set; }
        public Guid CategoriaId { get; set; }
    }
}
