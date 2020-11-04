import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
//falta habilitar mensagem de enviado no form
function useFormik({ initialValues, validate }) {
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState(initialValues)
  const [sendMailJS, setEmailJS] = useState(false)


  useEffect(()=>{
    validateValues(values)
  }, [values])
  
  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    setValues({
      ...values,
      [fieldName]: value,
    });
    setEmailJS({
      ...values,
      [fieldName]: value
    });
  }

  function handleBlur(event){
    const fieldName = event.target.getAttribute('name')
    setTouched({
      ...touched,
        [fieldName]:true
    })
  }

  function validateValues(values){
    setErrors(validate(values))
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

function Form() {
  
    

    const formik = useFormik({
    initialValues: {
      userEmail: "",
      userName: "",
      userPhone: "",
      userCompany: "",
      userMessage: ""
    },
    validate: function (values ){
      const errors = {};
     
    
      if(values.userName.length < 3){
        errors.userName = 'Entre com um nome válido'
      }
      if(!values.userEmail.includes('@')){
        errors.userEmail ='Entre com email válido'
      }
      if(values.userMessage.length < 3){
        errors.userMessage = 'Entre com uma mensagem válida.'
      }
      else{
        errors.setEmailJs = true
        
      }
      return errors
    
    }
  });
  function sendEmail() {                          
    emailjs.sendForm(
      "service_1kctaau",
      "template_wkf5sw2",
      "contact_form",
      "user_bcmFJDm9NMVe0zwXOVJhZ")
  }
  return (
    
    <div className="mb-12 md:mt-64 lg:mt-64 md:mx-6 lg:mx-64 " id="anchor">
      <h1 className=" text-3xl  text-center lg:text-5xl">CONTATO</h1>
      <div className="shadow-2xl">
      <div className="flex ">
        <div className="w-1/3 md:w-1/5  bg-blue-900 text-white text-sm font-bold py-4 px-4" >
          <h2>Entre em contato e saiba mais.</h2>
        </div>
        <div className="w-4/5 p-2 bg-teal-500 text-center">
          <form
            onSubmit={
              (event) =>{
                event.preventDefault();
                
                { formik.errors.setEmailJs &&
                   sendEmail(),
                  alert('Email enviado com sucesso!')
                               
                }
              }

            }
            className="contact_form  p-2 text-left"
            id="contact_form"
            >
            <div className=" mb-6 ">
              <div className="">
                <label className=" text-white font-bold  ">
                  Nome:
                </label>
              </div>
              <div className="">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Nome"
                  name="userName"
                  id="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  />{formik.errors.userName && <span className="formField_error text-red-700">{formik.errors.userName}</span>}
              </div>
            </div>
            <div className="mb-6">
              <div className="">
                <label className="text-white font-bold mb-1 pr-4">
                  Email:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="email"
                  placeholder="email@email.com"
                  name="userEmail"
                  id="userEmail"
                  onChange={formik.handleChange}
                  value={formik.values.userEmail}
                  />
                  {formik.errors.userEmail && <span className="formField_error text-red-700">{formik.errors.userEmail}</span>}
              </div>
            </div>

            <div className="mb-6">
              <div className="">
                <label className="text-white font-bold mb-1  pr-4">
                  Telefone:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type=""
                  placeholder="Telefone"
                  name="userPhone"
                  id="userPhone"
                  onChange={formik.handleChange}
                  value={formik.values.userPhone}
                  />
              </div>
            </div>
            <div className="mb-6">
              <div className="">
                <label className="text-white font-bold mb-1  pr-4">
                  Empresa:
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Empresa"
                  name="userCompany"
                  id="userCompany"
                  onChange={formik.handleChange}
                  value={formik.values.userCompany}
                  />
              </div>
            </div>

            <div className="mb-6 w-full">
              <div className="">
                <label className="block  text-white font-bold mb-1 md:mb-0 pr-4">
                  Mensagem:
                </label>
              </div>
              <div className="w-full">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  placeholder="Mensagem"
                  name="userMessage"
                  id="userMessage"
                  onChange={formik.handleChange}
                  value={formik.values.userMessage}
                  />
                  {formik.errors.userMessage && <span className="formField_error text-red-700">{formik.errors.userMessage}</span>}
                  { formik.setFormik &&
                   <h3 className="bg-green-200  rounded text-center">Mensagem enviada com sucesso. Obrigado!</h3>                              
                }
              </div>
            </div>

            <div className="">
              <div className=""></div>
              <div className="">
                <input
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  value="Enviar"
                  />
              </div>
            </div>
          </form>
        </div>
                  </div>
      </div>
    </div>
  );
}

export default Form;
