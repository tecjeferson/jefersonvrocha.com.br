import React from 'react';
import styles from './styles.module.css'

const Profile = () => {
    return(
        <div className="mx-auto" id={styles.paragrafContainer}>
            <div className='m-12' >

            </div>
            <h1 className=" text-3xl lg:text-5xl text-center ">SOBRE</h1>
                <div className="mx-4 shadow-2xl  rounded-lg ">

                    <p className="text-lg lg:text-3xl mx-4 p-4" id={styles.paragraf}>
                        Há mais de 14 anos gerando valor em empresas nacionais e internacionais, focado não apenas na tecnologia, 
                        mas no negócio. Mindset de transformar Tecnologia da Informação
                        em soluções para o Business com uma linguagem simples e objetiva.
                    </p>
                </div>
        </div>
    )
}

export default Profile