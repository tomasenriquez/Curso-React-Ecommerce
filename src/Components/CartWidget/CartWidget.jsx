import "./CartWidget.css";
import Cart_logo from "./assets/shopping_cart.svg";

const CartWidget = () =>{
    return(
        <div className="CartWidget_container">
            <div className="CartWidget_shape">
                <img src={Cart_logo} alt="" />
                <div className="CartWidget_container_contador">
                    <p className="CartWidget_contador">1</p>
                </div>
            </div>
        </div>
    );
};

export default CartWidget;