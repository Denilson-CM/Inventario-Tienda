export interface Categories {
  id?: string;
  nombre: string;
  descripcion: string;
  createdAt?: string;
}
export interface Product {
  idProducto: number;
  nombre: string;
  codigo: string;
  idCategoria: number;
  nombreCategoria: string;
}

export interface RequestInit {
  body?: string;
  headers?: HeadersInit;
  method?: string;
  signal?: AbortSignal;
}

export interface PropsFormCategory {
  methodsFormCategorie: {
    addNewCategorie: (newCategorie: Categories) => void;
  };
}

export interface PropsInputForm {
  valuesInputForm: {};
}
