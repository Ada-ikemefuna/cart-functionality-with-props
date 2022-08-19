import React from 'react'

const Cart = ({ cartItems, onAdd, onRemove }) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const total = itemsPrice
    return (
        <div className="block col_1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <p>Cart Is Empty</p>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="flex_1">
                    <div className='col_2'>{item.name}</div>
                    <div className='col_2'>
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>
                    </div>
                    <div className='col_2 text-right'>
                        {item.qty} &times; ₦{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className="flex_1">
                        <div className="col_2">Items Price</div>
                        <div className="col_1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>

                    {/* <div className="flex_1">
                    <div className="col_2">Tax Price</div>
                    <div className="col_1 text-right">${taxPrice.toFixed(2)}</div>
                </div> */}

                    {/* <div className="flex_1">
                        <div className="col_2">Shipping Price</div>
                        <div className="col_1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div> */}

                    <div className="flex_1">
                        <div className="col_2"> <strong>Total Price</strong></div>
                        <div className="col_1 text-right"> <strong> ₦{total.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="flex_1">
                        <button onClick={() => alert('Implement Checkout')}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart