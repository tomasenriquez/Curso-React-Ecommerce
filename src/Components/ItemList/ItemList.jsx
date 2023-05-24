import React from "react";
import Item from "../Item";
import "./ItemList.css";

const ItemList = (props) => {

  return (
    <>
        {/* Lista de Productos */}
        <div className="product-list-container"> { props.items.map((item) => {   
               
                return (
                     <div className='card-container'>     
                        <Item producto={item} key={item.id}/>
                    </div>
                    ) 
                })
            }
        
        </div>
    </>
  );
};

export default ItemList;