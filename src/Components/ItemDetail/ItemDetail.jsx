import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Productos } from "../ListaProductos/ListaProductos";
import './ItemDetail.css'
/* import { useParams } from 'react-router-dom'; */
/* import React, { useEffect, useState } from 'react' */


const ItemDetail = (props) => {
    
    const {title, description, price, img, stock} = props.item;

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos al carrito`);
      }; 
      
  return (
      
    <div className='detail-container'> 
        <div className='grid-container'> 

            {/* Producto - Imagen */}
            <div className='image-container'>  <img className='image-card' src={img} />  </div> 

            {/* Producto - Informacion  */}
            <div className='product-container'>

                {/* Producto - Titulo  */}
                <h1> {title} </h1>

                {/* Producto - Descripcion, Talle y Precio  */}
                <div className='descripcion-container'> 
                    <p> {description} </p>
                    <p className='product-price'> $ {price} </p>
                </div>

                <div className='Itemcount-container'>
                    <ItemCount className='itemcount'  onAdd={onAdd} maxCount={stock}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ItemDetail