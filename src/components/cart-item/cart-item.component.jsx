import {
  CartItemContainer,
  ProductImage,
  ItemDetails,
  ProductInfo,
  ProductPrice,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ProductInfo>{name}</ProductInfo>
        <ProductPrice>
          {quantity} x ${price}
        </ProductPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
