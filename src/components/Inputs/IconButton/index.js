import './index.scss'

function IconButton({ iconUrl, altText, bgColor, onClick }) {

  if (!iconUrl) {
    iconUrl = 'https://shoplink.planoly.com/assets/images/icon-shopping.svg'
    altText = 'Shopping Bag'
  }

  return (
   <button style={{ backgroundColor: bgColor }} onClick={onClick} className="btn-icon">
     <img src={iconUrl} alt={altText} />
   </button>
  );
}

export default IconButton;
