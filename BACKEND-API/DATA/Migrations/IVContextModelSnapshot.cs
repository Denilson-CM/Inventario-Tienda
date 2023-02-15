﻿// <auto-generated />
using System;
using DATA;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DATA.Migrations
{
    [DbContext(typeof(IVContext))]
    partial class IVContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DATA.Entities.Categoria", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("descripcion");

                    b.Property<DateTime?>("Fecha_Creacion")
                        .HasColumnType("datetime2")
                        .HasColumnName("fecha_creacion");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit")
                        .HasColumnName("is_active");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("nombre");

                    b.HasKey("Id");

                    b.ToTable("categoria", "app");
                });

            modelBuilder.Entity("DATA.Entities.Producto", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<Guid>("CategoriaId")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("fk_categoria_id");

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("codigo");

                    b.Property<DateTime?>("Fecha_Creacion")
                        .HasColumnType("datetime2")
                        .HasColumnName("fecha_creacion");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit")
                        .HasColumnName("is_active");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("nombre");

                    b.Property<decimal?>("precio_compra")
                        .HasColumnType("decimal(10,4)");

                    b.Property<decimal?>("precio_venta")
                        .HasColumnType("decimal(10,4)");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.ToTable("producto", "app");
                });

            modelBuilder.Entity("DATA.Entities.Producto", b =>
                {
                    b.HasOne("DATA.Entities.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");
                });
#pragma warning restore 612, 618
        }
    }
}
