import {useState} from "react"

function AddCakeForm({addCake,lastInsertId}){

    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState(0)

    function handleName(e){
        setName(e.target.value)
    }

    function handleImage(e){
        setImage(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handlePrice(e){
        if(e.target.value){
            setPrice(parseFloat(e.target.value))
        }
        else{
            setPrice(0)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        const newCake={id:lastInsertId+1,name,price,description,image,likes:0}
        addCake(newCake)
    }

    return(
        <>
            <h2>
                Add Cake
            </h2>
            <form onSubmit={handleSubmit} className="add-cake-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={image} onChange={handleImage} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={description} onChange={handleDescription} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={price} onChange={handlePrice} />
                </div>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </>
    )
}

export default AddCakeForm;