"use strict";

//Constantes con elementos form e inputs del formulario UPDATE
const updateFormEl = document.querySelector(".js-upDateForm");
const updateNameInput =document.querySelector(".js-updateNameInput");
const updateSurnameInput = document.querySelector(".js-updateSurnameInput");
const updateDniInput = document.querySelector(".js-updateDniInput");
const updateEmailInput = document.querySelector(".js-updateEmailInput");
const updateTelInput = document.querySelector(".js-updateTelInput");
const updateAddrInput = document.querySelector(".js-updateAddrInput");
const updateCpInput = document.querySelector(".js-updateCpInput");
const updateImgInput = document.querySelector(".js-updateImgInput");
const updateBtn= document.querySelector(".js-updateBtn");

//Prevent default para evitar auto-enviado de datos
function submitPrevent(event) {
    event.preventDefault();
  }
  
  updateFormEl.addEventListener("submit", submitPrevent);
  

  //Función handler. Llama a getUserData para recoger valores introducidos por el usuario y llama al fetch pasándole esos valores.

  const sendUpdatedData = () => {
    const updatedData = getUserData();
    postDataFetch(updatedData); 
    resetValues();
  }

   //Función para recuperar los values de los inputs insertados por el usuario
   function getUserData() {
       
        console.log(updateNameInput.value);
        console.log(updateSurnameInput.value);
        console.log(updateDniInput.value);
        console.log(updateEmailInput.value);
        console.log(updateTelInput.value);
        console.log(updateCpInput.value);
       //console.log(updateImgInput.value);

    return {
        "nombre": updateNameInput.value,
        "apellido":updateSurnameInput.value,
        "dni":updateDniInput.value,
        "email":updateEmailInput.value,
        "telefono":updateTelInput.value,
        "direccion":updateAddrInput.value,
        "codigoPostal":updateCpInput.value,
        "imagen":updateImgInput.value,
    }
  }

  
//Evento botón submit
updateBtn.addEventListener("click", sendUpdatedData);


const ENDPOINT = '/card/';

//FETCH TIPO POST PARA ACTUALIZAR DATOS DE USUARIOS
const postDataFetch = (updatedData) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

//Función para borrar valores
const resetValues = () => {
    updateNameInput.value,
    updateSurnameInput.value,
    updateDniInput.value,
    updateEmailInput.value,
    updateTelInput.value,
    updateAddrInput.value,
    updateCpInput.value,
   updateImgInput.value,

}