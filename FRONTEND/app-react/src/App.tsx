import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import { urlBase } from './endpoints';

function App() {

    const [categorias,setCategorias] = useState([])

    const cargarCategorias = async () => {

        const response = await fetch(urlBase);

        if (response.ok) {

            const data = await response.json();
            setCategorias(data);
            console.log(data);
        } else {

            console.log("status code:" + response.status);
        }
    }

    useEffect(() => {
        cargarCategorias();
    }, [])

    return (
        <div className="container bg-dark p-4 vh-100">

            <h2 className="text-white">MARCAS</h2>
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-12">
                    <div className="list-group">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
