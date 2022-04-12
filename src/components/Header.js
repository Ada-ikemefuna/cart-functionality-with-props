import React from 'react';

const Header = ({countCartItems}) => {
  return (
    <section className='block center_flex flex_1'>
      <h1 className="title"><a href="/">Small Shopping Cart</a></h1>
      <div className="navlinks">
        <a href="/">
            Cart {''}
            {countCartItems ? (
                <button className='badge'>{countCartItems}</button>
            ) : ('')
        }
            
            </a>
        <a href="/">Sign in</a>
      </div>  
    </section>
  )
}

export default Header;