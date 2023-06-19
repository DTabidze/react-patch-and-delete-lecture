//import {data} from '../data/data.js'
import Main from "./Main"
import Header from "./Header"
import {useState,useEffect} from "react"
import AddCakeForm from './AddCakeForm.js'

function Bakery(){
    
    const URL="http://localhost:3000/cakes"
    const [showCart,setShowCart]=useState(false)
    const [cakes,setCakes]=useState([])
    const [searchBy,setSearchBy]=useState("")

    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(cakes=>setCakes(cakes))
    },[])

    function handleShowCart(){
        setShowCart(showCart=>!showCart)
    }

    function handleSearchBy(e){
        setSearchBy(e.target.value)
    }

    function handleLikes(id){
        const updatedCakes=cakes.map(cake=>{
            if(cake.id===id){
                cake.likes++
            }
            return cake
        })
        setCakes(updatedCakes)
    }

    function addCake(cake){
        fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(cake)
        })
        .then(res=>res.json())
        .then(cake=>setCakes([...cakes,cake]))
        
    }

    const filteredCakes=cakes.filter(cake=>searchBy==="" || cake.name.toLowerCase().includes(searchBy.toLowerCase()))

    return(
        <>
            <Header handleShowCart={handleShowCart} />
            <Main handleSearchBy={handleSearchBy} showCart={showCart} cakes={filteredCakes} handleLikes={handleLikes} />
            <AddCakeForm lastInsertId={cakes.length} addCake={addCake} />
        </>
        
    )
}
export default Bakery