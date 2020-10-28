import React from 'react';
import styles from './styles.module.css'

const AboutMe = () => {
    return (
        <div className="m-12 container mx-auto " id={styles.boxesSkills}>
            <h1 className="text-3xl  text-center lg:text-5xl">HABILIDADES</h1>
            <div id={styles.containerBox} className="w-11/12 mx-auto " >
                <div className="md:flex space-y-6 md:space-x-4 md:space-y-0">
                    <div className="z-0  bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h2 className="lg:text-2xl text-white">Support Enginner</h2>
                        </div>

                        <div className="lg:text-2xl " id={styles.boxes}>
                            <h3>Servidores Windows e Linux</h3>
                            <h3>Desenvolvimento NodeJs, ReactJS</h3>
                            <h3>Bash, PowerShell, JavaScript</h3>
                        </div>
                    </div>

                    <div className="z-0 bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h2 className="lg:text-2xl text-white">DevOps/Cloud Engineer</h2>
                        </div>

                        <div className="md:mx-10 lg:mx-12 lg:text-2xl" id={styles.boxes}>
                            <h3>Azure</h3>
                            <h3>AWS</h3>
                            <h3>Cloudformation</h3>
                            <h3>YAML/JSON</h3>
                            <h3>Jenkins</h3>
                            <h3>CI/CD</h3>
                        </div>
                    </div>
                    <div className="z-0 bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h1 className="lg:text-2xl text-white text-white">Coordenador</h1>
                        </div>
                        <div className="lg:text-2xl" id={styles.boxes}>
                            <h3>Analise de Investimentos</h3>
                            <h3>Redução de custos</h3>
                            <h3>Gerenciamento e negociação de contratos</h3>
                            <h3>Treinamento e desenvolvimento de pessoas</h3>
                            <h3>Transformação digital</h3>
                            <h3>Consultoria</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe