using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DATA.Migrations
{
    public partial class CambioFecha : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "app");

            migrationBuilder.CreateTable(
                name: "categoria",
                schema: "app",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fecha_creacion = table.Column<DateTime>(type: "datetime2", nullable: true),
                    is_active = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categoria", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "producto",
                schema: "app",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    precio_compra = table.Column<decimal>(type: "decimal(10,4)", nullable: true),
                    precio_venta = table.Column<decimal>(type: "decimal(10,4)", nullable: true),
                    fk_categoria_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    fecha_creacion = table.Column<DateTime>(type: "datetime2", nullable: true),
                    is_active = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_producto", x => x.id);
                    table.ForeignKey(
                        name: "FK_producto_categoria_fk_categoria_id",
                        column: x => x.fk_categoria_id,
                        principalSchema: "app",
                        principalTable: "categoria",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_producto_fk_categoria_id",
                schema: "app",
                table: "producto",
                column: "fk_categoria_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "producto",
                schema: "app");

            migrationBuilder.DropTable(
                name: "categoria",
                schema: "app");
        }
    }
}
