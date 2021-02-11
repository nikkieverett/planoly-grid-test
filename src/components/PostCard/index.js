import IconButton from '../Buttons/IconButton'

function PostCard({ thumbnail, altText, itemDetails, ctaText }) {
  return (
		<>
			<div className="grid__item-inner">
				<img src={thumbnail} alt={altText} className="grid__item-image" />
			</div>
			{itemDetails.products && <IconButton iconType="shopping" bgColor="white" />}
      {ctaText && <button className="grid__item-button">{ctaText}</button>}
		</>
  );
}

export default PostCard;
