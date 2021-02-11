import './index.scss'

function IconButton({ btnText, color, bgColor, onClick }) {
  return (
   <button style={{ backgroundColor: bgColor, color }} onClick={onClick} className="btn">{btnText}</button>
  );
}

export default IconButton;
