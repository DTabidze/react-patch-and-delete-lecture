function Intro(data){
    
    return(
        <section>
        <img className="main-image" src={data.bakery} />
        <p className="intro">
            Let's Order some delicious cakes here!!
        </p>
      </section>
    )
}

export default Intro