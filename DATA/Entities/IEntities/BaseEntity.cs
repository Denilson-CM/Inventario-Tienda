using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace DATA.Entities.IEntities
{
    public class BaseEntity : IEntity
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Column("created_at")]
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;

        [Column("modified_at")]
        public DateTime? ModifiedAt { get; set; } = DateTime.UtcNow;

        [Column("is_active")]
        public bool? IsActive { get; set; } = true;
    }
}
