import React from 'react';
import './Button.css';

function Button ({
  children,
  onClick,
  style,
  theme,
  className,
}) {

  return (
    <div className={`Button ${className}`}>
      <button className={theme} onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
  theme: 'primary',
  className: '',
}

export default Button;