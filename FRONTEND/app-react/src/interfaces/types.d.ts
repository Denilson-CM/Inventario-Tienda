export interface Categories {
  id: string;
  nombre: string;
  descripcion: string;
  createdAt: string;
}
interface Product {
  idProducto: number;
  nombre: string;
  codigo: string;
  idCategoria: number;
  nombreCategoria: string;
}
