import React from 'react';

const AboutMe = () => {
    return (
        <div className="m-48 lg:container mx-auto ">
            <h1 className="text-5xl sm:text-center lg:text-5xl">Quais meus pontos fortes?</h1>
            <div className="">
                <div className="flex space-x-4 mb-4 my-12 ">
                    <div className="z-0 w-1/2 bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h2 className="sm:text-2xl lg:text-3xl text-white">Support Enginner</h2>
                        </div>

                        <div className="sm:text-2xl lg:text-3xl ">
                            <h3>Servidores Windows e Linux</h3>
                            <h3>Desenvolvimento NodeJs, ReactJS</h3>
                            <h3>Bash, PowerShell, JavaScript</h3>
                        </div>
                    </div>

                    <div className="z-0 w-1/2 bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h2 className="sm:text-2xl lg:text-3xl text-white">DevOps/Cloud Engineer</h2>
                        </div>

                        <div className="sm:text-2xl lg:text-3xl">
                            <h3>Azure</h3>
                            <h3>AWS</h3>
                            <h3>Cloudformation</h3>
                            <h3>YAML/JSON</h3>
                            <h3>Jenkins</h3>
                            <h3>CI/CD</h3>
                        </div>
                    </div>
                    <div className="z-0  w-1/2 bg-gray-200 text-center shadow-2xl rounded-lg hover:bg-gray-100">
                        <div className="bg-teal-500 hover:bg-teal-400 rounded-t-lg">
                            <h1 className="sm:text-2xl lg:text-3xl text-white text-white">Coordenador</h1>
                        </div>
                        <div className="sm:text-2xl lg:text-3xl">
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