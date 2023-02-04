import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootswatch/dist/vapor/bootswatch.min.css';
import './index.css';
import { urlEliminarC, urlGuardarC, urlListaC, urlListaP } from './endpoints';

interface ICategoria{
    idCategoria: number;
    nombre: string;
    descripcion: string;
    fecha_registroC: Date;
}

interface IProducto{
    idProducto: number;
    nombre: string;
    codigo: string;
    idCategoria: number;
    nombreCategoria: string;
}

function App() {

    const [categorias,setCategorias] = useState<ICategoria[]>([])
    const [productos,setProductos] = useState<IProducto[]>([])
    const [nombre, setNombre] = useState("");

    async function cargarCategorias() {
        try {
            const response = await axios.get(urlListaC);
            setCategorias(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function cargarProductos() {
        try {
            const response = await axios.get(urlListaP);
            setProductos(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        cargarProductos();
    }, [])

    async function guardarCategoria() {
        axios({
            method: 'post',
            url: urlGuardarC,
            data: {
              nombre : nombre
            }
          });
    }

    const eliminarCategoria = async (id: number) => {
        // const response = await fetch(urlCEliminar + {id}, {
        //     method: "DELETE"
        // })

        // if (response.ok) {
        //     await cargarCategorias();
        // }
    }

    return (
        <div className="container bg-dark p-4 vh-100">

            <h2 className="text-white">PRODUCTOS</h2>
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={guardarCategoria}>

                        <div className="input-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Pendiente para configurar"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <button className="btn btn-success" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-12">
                    <div className="list-group">
                    {
                        productos.map( item => (
                            <div key={item.idProducto} className="list-group-item list-group-item-action">
                                <h5 className="text-primary">{item.nombre}</h5>

                                <div className="d-flex justify-content-between">
                                    <small className="text-muted" >Categoria: {item.nombreCategoria}</small>
                                    <small className="text-muted" >Codigo: {item.codigo}</small>
                                    <button onClick={() => eliminarCategoria(item.idProducto) } className="btn btn-sm btn-outline-danger">Eliminar</button>
                                </div>

                            </div>    
                            )
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
