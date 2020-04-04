import React from 'react';
import './Button.css';

function Button ({
  children,
  onClick,
  style,
}) {
  return (
    <button className="Button" onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export default Button;