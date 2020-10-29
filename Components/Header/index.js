import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
      <div className="">
        <navbar className=""> 
          <div className="absolute z-50 container font-extrabold">
            <div className="text-sm md:text-xl lg:text-2xl text-white px-6">
              <Link href="/"><a className="">HOME</a></Link>
              <Link href="https://jefersonvrocha.com.br/blog/"><a className="px-3">BLOG</a></Link>
              <Link href="https://www.linkedin.com/in/jefersonvrocha/"><a className="px-3">LINKEDIN</a></Link>            
              <Link href="https://github.com/tecjeferson"><a className="px-3">GITHUB</a></Link>
            </div>
          </div>
        </navbar>
      </div>
        

    )
}

export default Header