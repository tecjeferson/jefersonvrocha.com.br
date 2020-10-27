import React, { useState} from 'react'
import Link from 'next/link'
import {MenuItems} from "./MenuItems"


const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }

        return(
            <div className="absolute z-50 navitem">
                {isNavVisible && (
                    <nav className="navbarItems">
                    <h1 className=""><i className="fa fa-react"></i></h1>
                <div className="menu-icon">
                   
                </div>
                <ul className="">
                    {MenuItems.map((item, index)=>{
                        return(
                            
                        <Link href={item.url}>
                            <a className={item.cName}>
                                {item.title}
                            </a>
                        </Link>
                        )
                    })}
                </ul>
                    </nav>
                )}             
                
                <button onClick={toggleNav}>Press</button>
            </div>
        )

}

export default Navbar