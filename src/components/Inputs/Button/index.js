import './index.scss'

function IconButton({ btnText, color, bgColor, onClick, url }) {
  return (
    <>
      {/* If a url is provided return an <a> button */}
      {url && (
        <a href={url} target="_blank" rel="noreferrer" style={{ backgroundColor: bgColor, color }} className="btn">
          {btnText}
        </a>
      )}
      {/* If an onclick function is provided return a <button> button */}
      {onClick && (
        <button style={{ backgroundColor: bgColor, color }} onClick={onClick} className="btn">
          {btnText}
        </button>
      )}
    </>
  );
}

export default IconButton;
