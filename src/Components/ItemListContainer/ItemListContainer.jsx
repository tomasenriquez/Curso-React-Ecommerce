import './ItemListContainer.css';

const ItemListContainer = ({greetings}) => {
    return (
        <div className="ItemListContainer_container">

            <h1>{greetings}</h1>
        </div>

        
    );
}

export default ItemListContainer;