import { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({onAdd, maxCount}) => {
  
  const stock = maxCount;

  const [count, setCount] = useState(1);

  const addProduct = () => {
    setCount(count + 1);
  };
  
  const removeProduct = () => {
    if (count > 1) setCount(count - 1);
  };


  return (
    <>
      <div className="Itemcount">
        
        <div className='ItemCount-add'>

            <button className="removeButton counterButton" onClick={removeProduct}> - </button>

            <strong className="count"> {count} </strong>

            <button className="addButton counterButton" onClick={addProduct} disabled={count === stock ? true : null }> + </button>
            
        </div>

        <button className='addCarrito' onClick={() => onAdd(count)}> Agregar al carrito </button>

      </div>
    </>
  );
};

export default ItemCount;