function Cart({showCart}){
    const className=showCart ? "" : "hide-cart"
    return(
        <div className={`cart ${className}`}>
            <ul className="items">
            </ul>
            <p className="total">Total: $0</p>
        </div>
    )
}

export default Cart