import GridItem from '../GridItem/index'

import './index.scss'

const GridContainer = ({ gridItems }) => {
  return (
    <div className="grid">
      {gridItems.map(item => (
        <GridItem gridItemDetails={item} gridItemCtaText="Click for Details" key={item.id} />
      ))}
    </div>
  );
}

export default GridContainer;

