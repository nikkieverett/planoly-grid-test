import Button from '../Inputs/Button'

function ProductCard({ thumbnail, altText, itemDetails, btnColor  }) {
	const { buyUrl, name, price } = itemDetails

  return (
		<>
			<div className="grid__item-inner">
				<div className="grid__item-wrapper">
					<img src={thumbnail} alt={altText} className="grid__item-image" />
				</div>
			</div>
			<div className="product-meta">
				{name && <h5 className="product-meta__name">{name}</h5>}
				{price && <p className="product-meta__price">${price}.00</p>}
				{buyUrl && (
					<div className="product-meta__button">
						<Button url={buyUrl} btnText="Buy Now" bgColor={btnColor} />
					</div>
				)}
			</div>
		</>
  );
}

export default ProductCard;
