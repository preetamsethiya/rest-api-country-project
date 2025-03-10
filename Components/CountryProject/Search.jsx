export default function Search ( {setQuery}) {
    return ( 
        <>
        <div className="searchCountainer">
        <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} type="text" className="searchInput"  placeholder="Search..."/>
        </div>
        </>
    )
}