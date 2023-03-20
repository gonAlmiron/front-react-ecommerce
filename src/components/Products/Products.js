import React, { useEffect } from "react"
import {useState} from "react"
import Table from 'react-bootstrap/Table';

// import { QRCode } from "antd";


const Products =  () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

            fetch('http://localhost:3002/api/products')
            .then((resp) => resp.json())
            .then((data) => {setProductos(data)})
    
            
            
    }, [])
    console.log(productos)

    // const url = `http://localhost/3002/api/products/${productos}`

    // const borrarProducto = () => {
    //   axios.delete(`http://localhost/3002/api/products`)
  

    // }


  return (

      <>

         <Table striped bordered hover variant="dark" className="my-4">
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
            <button className="btn btn-secondary mx-2">Editar</button>
            
            <button className="btn btn-danger mx-2">Eliminar</button>
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