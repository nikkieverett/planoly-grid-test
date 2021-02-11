import './index.scss'

function IconButton({ btnText, color, bgColor, onClick, url }) {
  return (
    <>
      {url && <a href={url} target="_blank" rel="noreferrer" style={{ backgroundColor: bgColor, color }} className="btn">{btnText}</a>}
      {onClick && <button style={{ backgroundColor: bgColor, color }} onClick={onClick} className="btn">{btnText}</button>}
    </>
  );
}

export default IconButton;
