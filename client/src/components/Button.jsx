import React from 'react';

//botón que al presionarlo inicia un evento
const Button = ({ text, onClick }) => { 
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;