import Intro from "./Intro.js"
import Cakes from "./Cakes.js"
import bakery from '../images/bakery.avif';
import Search from "./Search.js"
import Cart from "./Cart.js"

function Main({cakes,showCart,handleLikes,handleSearchBy}){
    return(
        <main>
            <Cart showCart={showCart} />
            <Intro bakery={bakery} />
            <Search handleSearchBy={handleSearchBy} />
            <Cakes cakes={cakes} handleLikes={handleLikes} />
        </main>
    )
}

export default Main