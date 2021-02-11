import IconButton from '../../Inputs/IconButton/index'

import './index.scss';

function GridItem({ gridItemDetails, gridItemCtaText }) {
  const thumbnail = gridItemDetails.assets[0].mediumUrl

  return (
    <div className="grid__item">
      <div className="grid__item-inner">
        <img src={thumbnail} alt={gridItemDetails.caption} className="grid__item-image" />
      </div>
      {gridItemDetails.products && <IconButton iconType="shopping" bgColor="white" />}
      {gridItemCtaText && <button className="grid__item-button">{gridItemCtaText}</button>}
    </div>
  );
}

export default GridItem;
