function Search({handleSearchBy}){
    return(
        <div className="search">
            <label>Search:</label>
            <input type="text" onChange={handleSearchBy}  />
            {/* <button>search</button> */}
        </div>
    )
}

export default Search