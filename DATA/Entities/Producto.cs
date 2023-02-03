using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.Entities
{

    [Table("producto", Schema = "app")]
    public class Producto
    {
        [Key, Column("idProducto")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdProducto { get; set; }

        [Column("nombre")]
        public string Nombre { get; set; }

        [Column("codigo")]
        public string Codigo { get; set; }

        [Column(TypeName = "decimal(10,4)")]
        public decimal? precio_compra { get; set; }

        [Column(TypeName = "decimal(10,4)")]
        public decimal? precio_venta { get; set; }

        [Column("fecha_registroP")]
        public DateTime? FechaRegistroP { get; set; }

        #region [ CATEGORIA ]
        [Column("fk_categoria_id")]
        public int CategoriaId { get; set; }

        //[ForeignKey("MarcaId")]
        public virtual Categoria Categoria { get; set; }
        #endregion
    }
}
