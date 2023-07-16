import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  CheckoutQuantity,
  CheckoutInfo,
  CheckoutValue,
  CheckoutArrow,
  CheckoutRemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutInfo>{name}</CheckoutInfo>
      <CheckoutQuantity>
        <CheckoutArrow onClick={removeItemHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={addItemHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutInfo>${quantity * price}</CheckoutInfo>
      <CheckoutRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
