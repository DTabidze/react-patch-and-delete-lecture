import heart from "../images/heart.jpeg"

function Cake({cake:{id,name,image,description,price,likes},handleLikes}){

    const cakeImgStyle={width:"500px",height:"500px", borderRadius:"10px",boxShadow:"5px 5px 5px black"} 
    
    return(
        <div key={id} className="cake">
            <button class="delete">
                X
            </button>
            <p className="cake-name" style={{backgroundColor:"orange",borderRadius:"5px",padding:"1rem"}}>{name}</p>
            <img src={image} alt={name} style={cakeImgStyle} className="cake-image" />
            <p className='cake-description'>{description}</p>
            <p className='cake-price'>${price}</p>
            <button>add to cart</button>
            <div className="likes">
                <img src={heart} alt="like" style={{width:"32px",height:"32px",verticalAlign:"middle"}} onClick={()=>handleLikes(id)} />
                <span style={{fontSize:"24px"}}>{likes} likes</span>
            </div>
        </div>
    )
}

export default Cake