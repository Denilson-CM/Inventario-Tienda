export interface Categories {
  idCategoria: number;
  nombre: string;
  descripcion: string;
  fecha_registroC: Date;
}
interface Product {
  idProducto: number;
  nombre: string;
  codigo: string;
  idCategoria: number;
  nombreCategoria: string;
}
