import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { Productos } from "../ListaProductos/ListaProductos";
import ItemList from "../ItemList";
import { useParams } from "react-router";



const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [productos, setProductos] = useState([]); 
 
  const getsListProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if(categoryId){
        const productosFiltrados = Productos.filter(e => e.category === categoryId)
        res(productosFiltrados);
      }  
      res(Productos)
      
    }, 1000);
  });
 
 
  useEffect(() => {
    getsListProducts.then((arrayProductos) => setProductos(arrayProductos)) 
      .catch((err) => console.log(err));

  }, [categoryId]);
  

  return (
    <>
        
        <div className="container">

            <h1> Todos los productos {categoryId}</h1>

            {/* Lista de Productos */}
            <ItemList items={productos} />

        </div>
    </>
  ); 
};

export default ItemListContainer;