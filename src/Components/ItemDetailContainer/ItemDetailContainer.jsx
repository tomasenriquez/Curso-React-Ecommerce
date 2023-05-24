import React, { useEffect, useState } from 'react';
import { Productos } from '../ListaProductos/ListaProductos';
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])
    
    const { itemId } = useParams()

    const getProductDetail = new Promise((res,rej) => {
        setTimeout(() => {
          const productoFiltrado = Productos.find(e => e.id == itemId)
          res(productoFiltrado)
        }, (1000));
    })

    useEffect(() => {
        getProductDetail      
        .then(ListaProductos => setDetail(ListaProductos)) 
        .catch(err => console.log(err) )
        
    },[])


    return (
     
        <div className='item-detail-container'>
            <ItemDetail item={detail} />  
        </div>

    )
};

export default ItemDetailContainer;