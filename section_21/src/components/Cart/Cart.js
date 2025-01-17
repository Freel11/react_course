import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  let content;

  if (cart.length === 0) {
    content = <p>Your shopping cart is empty.</p>;
  } else {
    const { title, quantity, price } = cart[0];

    content = (
      <ul>
        <CartItem item={{ title, quantity, price, total: quantity * price }} />
      </ul>
    );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
    </Card>
  );
};

export default Cart;
