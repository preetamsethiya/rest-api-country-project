// npm install --save-dev parcel

// if(module.hot) {
//     module.hot.accept()
// }

// npx parcel index.html
// how to remove console.log from production builds > google search

/////render multiple elements*****************

// import { createRoot } from 'react-dom/client'
// import './style.css'

// function Card({ title, image, brand, price}) {
//     return (<div className="card" >
//         <img src={image}
//             alt="iphone" />
//         <div className="card-content">
//             <h3>{title} </h3>
//             <p>{brand}</p>
//             <p><b>${price}</b></p>
//         </div>
//     </div>)
// }

// const root = createRoot(document.getElementById('root'))

// fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then((data) => {

//         root.render(<div className='container'> {data.products.map((product) => {

//             return (
//                 <Card
//                 key={product.id}
//                 title={product.title}
//                 brand={product.brand}
//                 price={product.price}
//                 image={product.thumbnail}
//                 />
//             )
//         })}</div>)
//     })

// root.render( <Card
// title='iphone'
// image="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
// price= '1200'
// brand='Apple'
// />)

// how to use image in React ?****************
import { createRoot } from "react-dom/client";
import { lazy, useState } from "react";
import App from "./App";
import "./style.css";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import CountryList from "./Components/CountryProject/CountryList";
import AppleCounter from "./Components/AppleCounter";
import Counter from "./Components/Counter";
import CountryDetail from "./Components/CountryProject/CountryDetail";
import react, { useEffect } from "react";
import { createPortal } from "react-dom";
import { jsx } from "react/jsx-runtime";

const Root = createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CountryList />} />
        {/* <Route path=":name" element={<AppleCounter/>}/> */}
      </Route>
      {/* <Route path=":name" element={<Counter/>}/> */}
      <Route path=":country" element={<CountryDetail />} />
      <Route path="/*" element={<h1> country not found</h1>} />
    </Routes>
  </BrowserRouter>
);

{
  //   routing *******
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App/>}>
  //   <Route index element={<CountryList/>}/>
  //   {/* <Route path=":name" element={<AppleCounter/>}/> */}
  //   </Route>
  //   {/* <Route path=":name" element={<Counter/>}/> */}
  //   <Route path=":country" element={<CountryDetail/>}/>
  //   <Route path="/*" element={<h1> country not found</h1>}/>
  // </Routes>
  // </BrowserRouter>
}

{
  //   dynamic routing *******
  // <Route path=":country" element={<CountryDetail/>}/>
}

{
  //   /shimmer effect ***********
  // {Array.from({length:10}).map((el , i) => {
  //   return <div key={i} className=' card shimmer'></div>
  // })}
  // return !countriesData.length? <Shimmer/> : ()
  // pass data from oen paga to another page in react using react router ************
  // <Link to={pagename} state={shareData}></Link>
  // import { useLocation} from 'react-router'
  // const {state} = useLocation()
  // localStorage && context, contextAPI in react
  // const [isDark, setIsDark]=useState(JSON.parse(localStorage.getItem('theme')))
  // return (
  //    <>
  //    <Header theme={[isDark, setIsDark]}/>
  //    <Outlet context={[isDark, setIsDark]}/>
  //    const [isDark] = useOutletContext()
  //    <div onClick={() => (setIsDark(!isDark), localStorage.setItem('theme',!isDark))}
  // import createContext from react
  // export const themeContext = createContext=()
  // themeContext.provider value={value} wrap elements
  // useContext from react
  // const [theme] = useContext(themeContext)
  // console.length(theme)
}

{
  //   custom hooks in react
  // import { useContext } from "react";
  // import themeContext from '../context/themeContext'
  // export function usetheme (){
  //   const [isDark , setIsDark ] = useContext(themeContext)
  //   return [isDark, setIsDark]
  // }
}

{
  // filter in react
  // .filter(
  //   (country) =>
  //     country.name.common.toLocaleLowerCase().includes(query) ||
  //     country.region.toLocaleLowerCase().includes(query)
  // )
  // <select
  // onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
  // className="selectContainer"
  // >
}
{
  // deploy project on netlify
  // goto package.json file
  // remove > "main": "index.js"
  // add script> "script" {
  //   "build" : "parcel build index.html"
  // }
  // open terminal
  // run > npm run build
  // if you want to remove source file you can remove it
  // step 1 > go to github account & create new project > prohject name
  // if project is new , so do this>
  // $ echo " # countries " READNE.MD
  // git init
  // git add README.MD
  // git commit -m "first commit"
  // git branch -M main
  // git remote add origin https://github.com/procoderr/countries.git
  // git push -u origin main
  // Initialized empty Git repository in "your window file location"
  // create .gtignore file
  // add files
  // dist
  // node_modules
  // .pacel-cache
  // git push
  // goto netlify
  // add new site
  // import an exesting project
  // choose from github
  // otherize & choose file
  // deploy
}
{
  // how to work with form in react
  // [expenses, setExpenses] = useState ( expenseData)
  // (  destructure expense)
  // get data from form >
  // const data = new FormData(e.target)
  // const data = {}
  // for ( const value of data.entries()){
  //   console.log(key,value)
  //   data[key] = value
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   getFormData(e.target)
  //   const exense = {...getFormData(e.target), id:crypto.randomUUID()}
  // setExpenses( (prev) => [...prev, exense])
  // }
  // const getFormData = (form) => {
  //   const data = new FormData(form)
  //   const data = {}
  //   for ( const value of data.entries()){
  //     console.log(key,value)
  //     data[key] = value
  // }
  // return data
  // }
}

{
  // unidiractional data flow in react
  // [title , setTitle] = useState('')
  // another way
  // const [ expense, setExpenses] = useState( {
  //   title: '',
  //   catagory: '',
  //   amout:''
  // })
  // const handleSubmit = (e) => {
  //   e.prventDefault()
  //   const expense = { title, catagory, amout, id: crypto.randomUUID()} donot use
  //   setExpenses( (prev) => [...prev, {...expense, id: crypto.randomUUID()}])
  // }
  // <input type='text' name='title' value={expense.title}  onchange={ (e) =>setExpenses((prev) =>( {...prev, expense.title}))}>
  // <input type='text' name='title' value={title}  onchange={ (e) => setTitle(e.target.value)}>
}

{
  // useref hook in react
  // useref contains current key>
  // ex > const myRef = useref('hii')
  // console.log(myRef)
  // useEffect pura script file run karne ke baad chalta hai
  // <input type='text' name='title' value={title}  onchange={ (e) => setTitle(e.target.value)}
  // ref={titleRef}>
  //   titleRef.current.value
}

{
  // form validation in react
  // const [error, setError] = useState({})
  // const validate = (formData) => {
  //   const errorsData = {}
  //   if(!formData.title) {
  //     errorsData.title = "title is requared"
  //   }
  //   if (!formData.catagory) {
  //     errorsData.catagory = "Catagory is requared"
  //   }
  //   if (!formData.amount) {
  //     errorsData.amount = " Amount is requared"
  //   }
  //   setError(errorsData)
  // }
  // const handleSubmit = (e) => {
  //   e.preventDafualt( )
  //   const validateResult = validate(expense)
  //   if(Object.keys(validateResult).length) return
  // }
  // code reusable in react && dynamic function handleChange
  // const handleChange = (e) => {
  //   const { name, value} = e.target
  //   setExpenses( (prev) => {{
  //     ...prev,
  //     [name] : value
  //   }})
  //   errorsData = {}
  // }
}

{
  // custome form fields in react
  // export default function Input ({ label, id, name, value, onChange, error} ) {
  //   return (
  //     <div className='input-container'>
  //       <label htmlFor={id} > {label}</label>
  //       <input
  //       id={id}
  //       name={name}
  //       value={value}
  //       onChange={onChange
  //         />
  //         <p className="error"> {error}</p>
  //       }
  //     </div>
  //   )
  // }
  // <Input
  // label="Title"
  // id="title"
  // name='title'
  // value={expense.title}
  // onChange={handleChange}
  // error={errors.title}
  // />
  //   const [ expense, setExpenses] = useState( {
  //       title: '',
  //       catagory: '',
  //       amout:'',
  //       email: ''
  //     })
  // const validationConfig = {
  //   title: [
  //     { requared: true, message:"Please enter title"},
  //     {minLength:5, message:"title should be at list 5 character long"},
  //   ],
  //   catogary: [{ requared: true, message:"Please enter catogary"} ],
  //   amount: [{ requared: true, message:"Please enter amount"}],
  //   email: [{ requared: true, message:"Please enter email"}, { pattern: rejax,message:"please enter a valid email"}],
  // }
  // const validate = (formData) => {
  //   const errorData = {}
  //   Object.entries(formData).forEach( ([key,value]) => {
  //     validationConfig[key].some((rule) => {
  //       if(rule.requared && !value) {
  //         errorData[key] = rule.message
  //         return true
  //       }
  //       if(rule.minLength && rule.minLength < 5) {
  //         errorData[key] = rule.message
  //         return true
  //       }
  //       if(rule.pattern && !rule.pattern.test(value)){
  //         errorData[key] = rule.message
  //         return true
  //       }
  //     })
  //   })
  // }
  //    <Input
  //   label="Title"
  //   id="title"
  //   name='title'
  //   value={expense.title}
  //   onChange={handleChange}
  //   error={errors.title}
  //   />
}

{
  // filter data using custom hook in react
  // const filteredData = expenses.filter( (expense) => {
  //   const [catagory, setCatagory] = useState('')
  //   return expense.catogory.toLocaleLowerCase().incudes(catagory)
  // })
  // <Select onchange={(e) => setCatagory(e.target.value.toLocaleLowerCase())}}></Select>
  // hook >
  // export function useFilter (dataList, callback) {
  //   const = [query,setQuery] = useState('')
  //   const filteredData = DataList.filter( (data) => {
  //    return callback(data).toLocaleLowerCase().incudes(query)
  //   })
  // return [fulteredData, setQuery]
  // }
  // import {useFilter} from '../hooks/useFilter'
  // const [filteredData, setQuery] = useFilter(expenses,(data) => data.catagory )
  // <Select onchange={(e) => setQuery(e.target.value.toLocaleLowerCase())}}></Select>
  // show total
  // const total = fitlteredData.reduce((eccumuLator, current) => accumuLator + current.amount,0)
}

{
  // reload vs code window > ctrl + shif + r > reload window
  // create custom context menu in react
  // const [menuPosition, setMenuposition] = useState({})
  // const [rowId , setRowId] = useState('')
  // <tr
  // key={id}
  // onChange={ (e) => {
  //   e.preventDefault()
  //  setMenuposition( { left: e.clientx, right: e.clienty})
  // }}
  // rowId={id}
  // />
  // <ContextMenu menuPosition={menuPosition} setMenuposition={setMenuposition} setExpenses={setExpenses} rowId={rowId}/>
  // <table onClick={() => setMenuposition({})}>
  // </table>
  // export default function ContextMenu ({menuPosition , setMenuposition} ) {
  //   if (!menuPosition.left) return
  //   return (
  //     <div className="context-menu " style={menuPosition}>
  //       <div onClick={setMenuposition({})}
  //     >Edit</div>
  //       <div
  //       onClick={( ) => {
  //         setExpenses( (prev) => prev.filter(expense => expense.id !== rowId))
  //         setMenuposition({})}>Delete</div>
  //     </div>
  //   )
  // }
}

{
  // Edit functionality in react
  // const [editingRowId, setEditingRowId] = useState('')
  // const function handleSubmit() {
  //   if(editingRowId) {
  //     setExpenses( (prevExpense) =>
  //       prevExpense.map((singleExpense) => {
  //         if(singleExpense.id === editingRowId) {
  //           return {...expense, id: editingRowId}
  //         }
  //         return singleExpense
  //       })
  //     )
  //     setEditingRowId('')
  //     return
  //   }
  // }
  // to convert string to number > parseInt(num)
  // validate number rejax
  // <div onclick={
  //   setEditingRowId(rowId)
  //   const result = Array.find((Element) => {
  //     return element.id === rowId
  //   })
  //   setExpense(result)
  // }>edit</div>
}

{
  // shorting in react;
  // setExpenses((preExpense) => {
  //   return [...preExpense.sort((a, b) => a.amount - b.amount)];
  // });
  // const [sortCallback, setSortCallback] = useState(() => () => {});
  // numeric sorting
  // fileteredData.sort(sortCallback).map((expense) => expense.id == rowId)
  // setSortCallback(() => (a, b) =>  a.amount - b.amount)
  // setSortCallback(() => (a, b) =>  b.amount - a.amount)
  // setSortCallback(() => () => {})
  // alphabetically sorting
  // setSortCallback( ( ) => (a,b) => a.title.localeCompare(b.title))
  // setSortCallback( ( ) => (a,b) => b.title.localeCompare(a.title))
}

{
  // localStorage in react using custom hook
  //   import {useState} from react
  //   export function useLocalStroge ( key, initialData) {
  //     const [data , setData] = useState(initialData)
  //     useEffect( ( ) => {
  //       const exestingData = JSON.parse(localStorage.getItem(key))
  //     if ( exestingData) {
  //       setData(exestingData)
  //     }else{
  //       localStorage.setItem(key,JSON.stringify(initialData))
  //     }
  //     },[])
  //     const updateLocalStorage = (newData) => {
  //       if(typeof newData === 'function'){
  //         localStorage.setItem(key, JSON.stringify(newData(data)))
  //       }else{
  //         localStorage.setItem(key, JSON.stringify(newData))
  //       }
  //       setData(newData)
  //     }
  //     return [data, updateLocalStorage]
  //   }
}

{
  // how to use tailwind css with react useing vite
  // npm install -D tailwindcss postcss autoprefixer
  // npx tailwindcss init -p
  // in tailwindConfig.js file
  // content : [
  //   './index.html',
  //   './src/**/*.{js,ts,jsx,tsx}',
  // ],
  // in index.css file
  // @tailwind base;
  // @tailwind CSSTransformComponent;
  // @tailwind utilities;
}

{
  // NavLink in react
  // <NavLink className={({isAtive}) => isAtive? 'underline' : ''} to={}/>
}

{
  // create popup using react portal
  // e.stopPropagation()
  // function () {
  //   return (
  //     createPortal(
  //       <div></div>,
  //       document.querySelector('#portal')
  //     )
  //   )
  // }
  // <modal header={<div>
  //   <p>name</p>
  //   <h1>css</h1>
  // </div>}>
  // children>
  // <input type="text" name='name' />
  // </modal>
}

{
  //   cdeo spliting & lazy loading in react
  // build in vite
  // > npm run dev
  // run in proiduction mode >
  // npm run preview
  // const about = lazy(() =>  import('./file path name'))
  // agar kisi component ko lazy load kar rhe hain toh , jaha per vah component render kr rha hai use <suspense >
  // </suspense> tag se wrap karte hain
  // >
  // file load hone me time lagta hai isliye suspense me ek fallback prop dete hain
  // <suspense fallback={<h1> Loading..</h1>}>
  //   <Outlet/>
  // </suspense>
  // wait function for lazy load component,
  // const wait = (time) => {
  //   return new promise ( resolve => {
  //     setTimeout(() => {
  //       resolve()
  //     }, time)
  //   })
  // }
  // const about = lazy(() => wait(1000).then(() =>  import('./file path name')))
  // agar file default export nhi hua hai toh >
  // const about = lazy(() => wait(1000).then(() =>  import('./file path name').then(module=> ({ default: module.about}))))
  // agar data file ko lazy load karna ho toh lazy load data file>
  // const [todosList , setTodosList] = useState([])
  // <Button onclick={() => {
  //   import('../data').then(module => setTodosList(module.todos))
  // }}>click for load data </Button>
}

{
  // class oldCounter extends Component {
  //  (>> agar props ki access constructor ke andar chihite toh props ko as a   argument constructor me resive karna hota hai)
  //   (for create state)
  //   constructor() {
  //     super()
  //     this.state  = {
  //       count: 0
  //       count2: 0
  //     }
  //   }
  //   (componetDidMount run's after component loaded)
  //   componetDidMount () {
  //     console.log('CompponetDidMount')
  //   }
  //   (componetDidUpdate run's after component updated)
  //   componetDidUpdate () {
  //     console.log('CompponetDidIpdate')
  //   }
  //   (componetWuillUnmount run's after component exit from ui > this called cleanup function)
  //     componetWuillUnmount () {
  //     console.log('componetWuillUnmount')
  //   }
  //   (for return jsx )
  //   render( ) {
  //     const {name} =this.props
  //     return (
  //       <h1> {name} </h1>
  //       <h2> {this.state.count} </h2>
  //       (for updata state )
  //       <h2 onClick={() => this.setState({count:this.state.count + 1})}>  </h2>
  //       <h2 onClick={() => this.setState({count2:this.state.count2 + 1})}>  </h2>
  //        < bind this in react >
  //       ( following code will not run in class component kyunki normal function ka apna this hota hai agar is code ko run karna hai toh function ko alag defined karna hoga aur function ke referance ko this ke sath bind krana hoga!)
  //       <h2 onClick={function ()( this.setState({count2:this.state.count2 + 1}))}>  </h2>
  //       (code like this)
  //       <h2 onClick={ this.setState(increaseCounter).bind(this)}>  </h2>
  //       ( constructor ke andar bhi bind code likha ja sakta hai ya bind kiya ja sakta hai)
  //     )
  //   }
  // }
  // <oldCounter name='new counter'/>
  // agar kisi function ke events ko clear karna hai toh us code ko useEffect se return karna chahiye >
  // return () => {
  //   clearInterval(timerId)
  // }
}

{
  // higher order function in react class componet
  //  const WithComponent(component) {
  //   return class NewComponent extends Component {
  //     render() {
  //       return <component {...this.props}/>
  //     }
  //   }
  //  }
}
