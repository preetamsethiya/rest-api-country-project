

import { Outlet } from "react-router";

export default function Header ({theme}) {
   const [ isDark,setIsDark] = theme
    return (
        <>
        <header className={`${isDark?'dark':''}`}>
            <div className="headerContainer">
                <div className="content1">Where in the world ?</div>
                <div onClick={() => (setIsDark(!isDark), localStorage.setItem('theme',!isDark))} className="content2">Dark mode</div>
            </div>
        </header>
        </>
    )
    
}