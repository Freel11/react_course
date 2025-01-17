import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(cartActions.showCart());
  };

  const handleHideCart = () => {
    dispatch(cartActions.hideCart());
  };

  return (
    <button
      className={classes.button}
      onClick={showCart ? handleHideCart : handleShowCart}
    >
      <span>My {showCart ? "Products" : "Cart"}</span>
      {!showCart && (
        <span className={classes.badge}>
          {cart.length === 0 ? 0 : cart[0].quantity}
        </span>
      )}
    </button>
  );
};

export default CartButton;
