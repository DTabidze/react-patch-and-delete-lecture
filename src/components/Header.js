import cart from "../images/cart.jpeg"

function Header({handleShowCart}){
    return(
        <header className="App-header">
            <h1>
                Welcome to my Bakery
            </h1>
            <div className="cart-icon">
                <img src={cart} alt="cart" onClick={handleShowCart} />
                <span>0</span>
            </div>
        </header>
    )
}

export default Header;