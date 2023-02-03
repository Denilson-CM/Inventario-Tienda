using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.Entities
{
    [Table("categoria", Schema = "app")]
    public class Categoria
    {
        [Key, Column("idCategoria")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdCategoria { get; set; }

        [Column("nombre")]
        public string Nombre { get; set; }

        [Column("descripcion")]
        public string? Descripcion { get; set; }

        [Column("fecha_registroC")]
        public DateTime? FechaRegistroC { get; set; }

        //public virtual ICollection<Producto> Productos { get; set; }
    }
}
