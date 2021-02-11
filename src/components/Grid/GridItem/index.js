import PostCard from '../../PostCard'
import ProductCard from '../../ProductCard'

import './index.scss';

function GridItem({ itemDetails, itemType, btnColor }) {
  const { assets, name } = itemDetails
  const thumbnail = assets[0].mediumUrl
  if (itemType === 'Products' && !itemDetails.products) {
    return ''
  }

  return (
    <div className={`grid__item${itemType === 'Products' ? ' grid__item--product' : ' grid__item--default'}`}>
      {itemType === 'Grid' && <PostCard itemDetails={itemDetails} ctaText="Click for details" thumbnail={thumbnail} altText={name} />}
      {itemType === 'Products' && <ProductCard itemDetails={itemDetails.products[0]} btnColor={btnColor} thumbnail={thumbnail} altText={name} />}
    </div>
  );
}

export default GridItem;
