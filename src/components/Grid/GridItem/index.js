import ImageCard from '../../ImageCard/index'
import PostDetails from '../../ImageCard/PostDetails'
import ProductDetails from '../../ImageCard/ProductDetails'

import './index.scss';

function GridItem({ itemDetails, itemType, btnColor }) {
  const { assets, name } = itemDetails
  const thumbnail = assets[0].mediumUrl
  if (itemType === 'Products' && !itemDetails.products) {
    return ''
  }

  return (
    <div className={`grid__item${itemType === 'Products' ? ' grid__item--product' : ' grid__item--default'}`}>
      <ImageCard thumbnail={thumbnail} altText={name} />
      {itemType === 'Grid' && <PostDetails itemDetails={itemDetails} ctaText="Click for details" />}
      {itemType === 'Products' && <ProductDetails itemDetails={itemDetails.products[0]} btnColor={btnColor} />}
    </div>
  );
}

export default GridItem;
