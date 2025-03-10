import { Children, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
import style from "./Counter.module.css";

////how useState works
const Counter = (e) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p className={style.textXl}>{count}</p>
      </div>
    </>
  );
};

export default Counter;

// state vs props
// usestate is a local variabke for it's component
// usestate is mutable
// ***
// when parent decided that which value will be show in ui we use props
// props are inmutable

// ****
// what are react fragments
// react fragment is a wrapper for each components return jsx element , because we will return only one element
// (jsx expressions must have one parent element)
// *********
// what is Children props in react

// syntax Children props > <Button> hello</Button> in this case hello  is a Children prop
// we can also use Children props in arugments like this > <button children='hello'/> in this case hello is a children prop
// *******
// conditional rendering in react this is the syntax >
// <p> {basketName} { appleCount > 9 ? '(full)' : appleCount > 4 ? '(half full)' : ''} </p>

// **********
// how to scope CSS to a component in react

// 1 >fileName || style.module.css
// in css file(
//     .button { bg: red}
//     .textXl {
//         font-size : 3rem;
//     }

// )
// 2 > import || import style from './style.module.css'
// 3 > usecase || className = { style.Button}
// 4> use multiple class || className = {[style.button, style.textXl].join( ' ')}
// 5> second method ||  className={ ` ${style.button} ${style.textXl}`}

// EX :

// import style from './Counter.module.css'

// console.log(style)

// ////how useState works
// const Counter = (e ) => {
//  const [count, setCount] = useState(0)
// return (

//     <>
//  <div style={{
//     textAlign: 'center'
//  }}>
//  <p className={ style.textXl} >{count}</p>
//  <button onClick={ ( ) => {
//     setCount( (prev) => prev + 1)
//     setCount( (prev) => prev + 1)
//     setCount( (prev) => prev + 1)
//  }}
//  className={ ` ${style.button} ${style.textXl}`}
//  >increase-count</button>
//  </div>
//     </>
// )
// }

// export default Counter

// ***** search functionality

// {countriesData.filter( ( country) => country.name.common.toLocaleLowerCase().includes(query)).map((country) => {

//    ***** useEffect    & fetch

//    const [ countriesData, setCountriesData] = useState([])

//    useEffect( () => {
//        fetch('https://restcountries.com/v3.1/all')
//        .then(res => res.json())
//        .then(data => {
//            setCountriesData(data)
//        })
//    },[])
