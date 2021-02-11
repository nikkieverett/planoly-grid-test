import GridItem from '../GridItem/index'

import './index.scss'



const GridContainer = ({ gridItems, gridItemCtaText }) => {
  return (
    <div className="grid">
      {gridItems.map(item => (
        <GridItem gridItemDetails={item} gridItemCtaText={gridItemCtaText} key={item.id} />
      ))}
    </div>
  );
}

export default GridContainer;

