
 const AppleBasket = ({ appleCount, basketName} ) => {
    return ( 
        <>
        <div >
            <h1>
                <span>{appleCount} </span> Apple
            </h1>
            <p> {basketName} { appleCount > 9 ? '(full)' : appleCount > 4 ? '(half full)' : ''} </p>
        </div>
        </>
    )
}
export default AppleBasket