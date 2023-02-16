export interface Categories {
  id?: string;
  nombre: string;
  descripcion: string;
  fecha_Creacion?: string;
}
export interface Product {
  idProducto: number;
  nombre: string;
  codigo: string;
  idCategoria: number;
  nombreCategoria: string;
}

export interface RequestInit {
  body?: any;
  headers?: HeadersInit;
  method?: string;
  signal?: AbortSignal;
}

export interface PropsFormCategory {
  methodsFormCategorie: {
    addNewCategorie: (newCategorie: Categories) => void;
  };
}

interface eventsForm {
  change:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>;
  submit: React.FormEvent<HTMLFormElement>;
}
