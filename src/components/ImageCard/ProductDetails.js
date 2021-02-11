import Button from '../Inputs/Button'
import './index.scss';

function PostDetails({ itemDetails, btnColor }) {
	const { buyUrl, name, price } = itemDetails

	console.log(itemDetails)
  return (
    <div className="product-meta">
			{name && <h5 className="product-meta__name">{name}</h5>}
			{price && <p className="product-meta__price">${price}.00</p>}
			{buyUrl && (
				<div className="product-meta__button">
					<Button url={buyUrl} btnText="Buy Now" bgColor={btnColor} />
				</div>
			)}
    </div>
  );
}

export default PostDetails;
