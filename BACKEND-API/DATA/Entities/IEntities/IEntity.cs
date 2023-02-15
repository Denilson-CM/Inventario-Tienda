using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.Entities.IEntities
{
    interface IEntity
    {
        public Guid Id { get; set; }
        public DateTime? Fecha_Creacion { get; set; }
        public bool? IsActive { get; set; }
    }
}
