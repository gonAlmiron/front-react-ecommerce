import React, { useEffect } from 'react'
import {useState} from 'react'
import Table from 'react-bootstrap/Table';
import NuevoProductoDos from './NuevoProducto';
import axios from 'axios';

// import { QRCode } from "antd";


const Products =  () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

            fetch('https://api-ecommerce-coder-production.up.railway.app/api/products')
            .then((resp) => resp.json())
            .then((data) => {setProductos(data)})      
    }, [])
    console.log(productos)


    const deleteProduct = (productId) => {

      axios.delete(`https://api-ecommerce-coder-production.up.railway.app/api/products/${productId}`)
      setProductos(productos.filter(prod => prod.id !== productId));

    }
    // const handleDelete = (productos)=> {
    //   try {
    //     axios.delete(`http://localhost:3002/api/products/${productos.id}`)
    //   } 
    //     catch(err) {
    //         console.log(err.message)
    //         console.log(err.stack)
    //   }
    // }

  return (
      <>
        <NuevoProductoDos/>
         <Table striped bordered hover className="my-4">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Edición</th>
        </tr>
      </thead>

      {productos.map((prod) => {
        return(
          <tbody key={prod._id}>
          <tr>
            <td>{prod.name}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
            <td>
            <button className="btn btn-secondary mx-2">Comprar</button>
            
            <button onClick={() => {deleteProduct(prod._id)}} className="btn btn-danger mx-2">Eliminar</button>
              </td>
            
            {/* <td> <QRCode value={url}/></td> */}
          </tr>
          </tbody>
          )
      })
   }
    </Table>
      </> 
    )
}

export default Products