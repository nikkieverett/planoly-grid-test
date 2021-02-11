import './index.scss';

function GridItem({ thumbnail, altText }) {
  return (
		<div className="grid__item-inner">
			<div className="grid__item-wrapper">
				<img src={thumbnail} alt={altText} className="grid__item-image" />
			</div>
		</div>
  );
}

export default GridItem;
