import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
export const ProductImage = styled.img`
  width: 30%;
  border-radius: 3px;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const ProductInfo = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
