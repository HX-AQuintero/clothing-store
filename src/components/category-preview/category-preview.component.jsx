import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle to={title}>{title}</CategoryTitle>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
