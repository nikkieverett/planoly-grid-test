import GridItem from '../GridItem/index'

import './index.scss'

const GridContainer = ({ gridItems, gridType, btnColor }) => {
  return (
    <div className="grid">
      {gridItems.map(item => (
        <GridItem itemDetails={item} itemType={gridType} key={item.id} btnColor={btnColor} />
      ))}
    </div>
  );
}

export default GridContainer;

