import React from "react";
import styles from "./styles.module.css";

const Title = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <img
            className="absolute  z-0 bg-contain bg-center"
            src="/main-img3.png"
          />

          <div className="relative z-40 flex items-stretch ">
            <div
              id={styles.title}
              className="flex-1 mt-32 text-xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:mt-56 lg:mt-64 xl:mt-64"
            >
              <h1 className="lg:mt-24 xl:mt-64">JEFERSON ROCHA</h1>
              <h1 className="text-blue-900">
                Support Enginner | DevOps | Coordinator{" "}
              </h1>

              <button className="shadow-2xl bg-indigo-800 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 mt-8 rounded-lg">
                <a href="#anchor">
                  CONTATO
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="relative z-50 ">
                    <div className="flex-1 text-left mx-12 my-12 px-8 py-12 text-2xl w-3/5 ">
                    <h2 className="">Há mais de 14 anos no mercado nacional e internacional.</h2>
                    <h2> transformando tecnologia em valor para o negocio.</h2>
                    <h2>Mais que TI, um parceiro de negócios.</h2> 
               
                        
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Title;
