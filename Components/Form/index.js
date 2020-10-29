import React from "react";

const Form = () => {
  return (
    <div className="">
      <div className="flex  shadow-2xl mt-12 mb-12 ">
        <div className="w-1/3 bg-blue-900 text-white text-sm font-bold py-4 px-4">
          <h2>Entre em contato e saiba mais.</h2>
        </div>

        <div className=" p-2 bg-teal-500 text-center">
          <form className="w-5/6 p-2 text-left">
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/5 ">
                <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4 ">
                  Nome:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Nome"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/5">
                <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/5">
                <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Telefone:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  placeholder="Telefone"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/5">
                <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Empresa:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  placeholder="Empresa"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6 w-full">
              <div className="md:w-1/5">
                <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Mensagem:
                </label>
              </div>
              <div className="w-full">
                <textarea
                  className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  placeholder="Empresa"
                />
              </div>
            </div>

            <div className="">
              <div className=""></div>
              <div className="">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
