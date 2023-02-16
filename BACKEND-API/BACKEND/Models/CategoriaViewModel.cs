namespace BACKEND.Models
{
    public class CategoriaViewModel
    {
        public string Nombre { get; set; }
        public string? Descripcion { get; set; }
    }

    public class PostRegistroCategoriaViewModel
    {
        public PostRegistroCategoriaViewModel()
        {
            this.RegistroCategoria = new List<CategoriaViewModel>();
        }

        public List<CategoriaViewModel> RegistroCategoria { get; set; }
    }

    public class ListCategoriaViewModel : CategoriaViewModel
    {
        public Guid Id { get; set; }
        public string? Fecha_Creacion { get; set; }
    } 
}
