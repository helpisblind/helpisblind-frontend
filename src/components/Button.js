import React from 'react';
import './Button.css';

function Button ({
  children,
  onClick,
  style,
  theme,
}) {
  return (
    <div className='Button'>
      <button className={theme} onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
  theme: 'primary',
}

export default Button;