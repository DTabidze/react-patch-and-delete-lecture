import Cake from "./Cake.js"

function Cakes({cakes,handleLikes}){

    return(
        <article className="cakes">
        {cakes.map(cake=><Cake key={cake.id} cake={cake} handleLikes={handleLikes} />)}
      </article>
    )
}

export default Cakes