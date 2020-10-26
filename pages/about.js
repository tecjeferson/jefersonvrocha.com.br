import React from 'react'
import Link from 'next/link'

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <Link href="/"><a>Home</a></Link>

            <div class="z-0 sm:z-10 md:z-20 lg:z-30 xl:z-40 bg-yellow-400">yellow</div>
                <div class="z-40 ml-4 mt-0 bg-gray-400">z-40</div>
                <div class="z-30 ml-6 mt-2 bg-gray-500">z-30</div>
                <div class="z-20 ml-8 mt-4 bg-gray-600">z-20</div>
                <div class="z-10 ml-10 mt-6 bg-gray-700">z-10</div>
                <div class="z-0 ml-12 mt-8 bg-gray-800">z-0</div>
        </div>
    )
}

export default About