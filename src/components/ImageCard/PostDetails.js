import IconButton from '../Inputs/IconButton'

import './index.scss';

function PostDetails({ itemDetails, ctaText }) {
  return (
    <>
      {itemDetails.products && <IconButton iconType="shopping" bgColor="white" />}
      {ctaText && <button className="grid__item-button">{ctaText}</button>}
    </>
  );
}

export default PostDetails;
