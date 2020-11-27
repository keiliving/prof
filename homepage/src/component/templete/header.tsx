import React, { FC } from 'react';

const Header:FC<{parent_func:Function}> = ({parent_func}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>,num:number)   => {
    e.preventDefault()
    return parent_func(num);
};
  return (
    <div className="header">
      <h1>keiliving</h1>

    <div className="nav">

      <li onClick={(e) => handleClick(e,1)}>about</li>
      <li onClick={(e) => handleClick(e,2)}>skils</li>
      <div className="contact">
      <li onClick={(e) => handleClick(e,3)}>contact</li>
      </div>
    </div>
    </div>
  )
}

export default Header
