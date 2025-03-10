import { Link } from 'react-router'
import rohit01 from '../../Assets/Images/01_rohit.jpg'

export default function Card ({ name , flag, population,region,capital,data}) {
    return (
        <>
        <Link className="card" to={name} state={data}>
            <div className="imgContainer">
                <img src= {flag} alt={flag} />
            </div>
            <div className="textContent">
                <div><h2>{name}</h2></div>
                <div><b>Population</b> {population}</div>
                <div><b>Region</b> {region}</div>
                <div><b>Capital</b> {capital}</div>
            </div>
        </Link>
        </>
    )
}