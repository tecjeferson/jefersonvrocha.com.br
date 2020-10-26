import React from 'react';

const AboutMe = () => {
    return(
        <div>
<div className="my-12 ">
                    <h1 className="w-full text-5xl text-center ">Quais meus pontos fortes?</h1>
                    <div className="flex mb-4 my-12 ">
                        <div className="w-1/2 bg-gray-200 text-center mx-10 shadow-2xl rounded-lg hover:bg-gray-100">
                            <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                                <h2 className="text-2xl text-white">Support Enginner</h2>
                            </div>
                            
                            <div className="">
                                <h3>Servidores Windows e Linux</h3>
                                <h3>Desenvolvimento NodeJs, ReactJS</h3>
                                <h3>Bash, PowerShell, JavaScript</h3>
                            </div>
                        </div>
                        <div className="w-1/2 bg-gray-200 text-center mx-10 shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h2 className="text-2xl text-white">DevOps/Cloud Engineer</h2>
                        </div>
                            <h3>Azure</h3>
                            <h3>AWS</h3>
                            <h3>Cloudformation</h3>
                            <h3>YAML/JSON</h3>
                            <h3>Jenkins</h3>
                            <h3>CI/CD</h3>
                            <h3></h3>
                            <h3></h3>
                        </div>
                        <div className="w-1/2 bg-gray-200 text-center mx-10 shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h1 className="text-2xl text-white">Coordenador</h1>
                        </div>
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
    )
}

export default AboutMe