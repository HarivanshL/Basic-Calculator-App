import React from 'react'
import '../css-sheets/Button.css'

const Button = ({value, onClick}) => {

  const style = () => {
    if(value === '=' || value === 'AC'){
      return 'button-primary'
    }
    else{
      return 'button-secondary'
    }
  }

  return (
    <>
        <button className={style()} onClick={ () => onClick(value)}>
            {value}
        </button>
    </>
  )
}

export default Button
