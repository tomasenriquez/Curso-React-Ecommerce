import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({producto}) => {

  return (
    <>
        {/* Lista de Productos */}
        <div className='card-container-content'>

            <div className='item-container'>
                
                <img src={producto.img}/>
                <h3> {producto.title} </h3> 
                <button> <Link className='button-comprar' to={`/item/${producto.id}`}> Comprar </Link> </button>
                <div classname={ItemCount}></div>

            </div>

        </div> 
  </>
  )
};

export default Item;