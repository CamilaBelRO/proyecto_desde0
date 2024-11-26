import React from 'react';
import {onClick} from 'react';
import './Button.css'; 
function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  <link rel="" href="" />
  export default Button;