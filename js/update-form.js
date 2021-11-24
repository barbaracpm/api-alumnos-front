"use strict";

//Constantes e input del form donde pedimos el id
const getIdFormEl = document.querySelector(".js-getIdForm");
const userIdInput = document.querySelector(".js-userId");
const sendIdBtn = document.querySelector(".js-sendIdBtn");

//Constantes con elementos form e inputs del formulario UPDATE (actualizar datos del usuario)

const updateFormEl = document.querySelector(".js-upDateForm");
//const updateInputEls= document.querySelector(".js-updateInput");
const updateNameInput =document.querySelector(".js-updateNameInput");
const updateSurnameInput = document.querySelector(".js-updateSurnameInput");
const updateDniInput = document.querySelector(".js-updateDniInput");
const updateEmailInput = document.querySelector(".js-updateEmailInput");
const updateTelInput = document.querySelector(".js-updateTelInput");
const updateAddrInput = document.querySelector(".js-updateAddrInput");
const updateCpInput = document.querySelector(".js-updateCpInput");
const updateImgInput = document.querySelector(".js-updateImgInput");
const updateBtn= document.querySelector(".js-updateBtn");
const responseTextEl = document.querySelector(".js-response");

//Prevent default para evitar auto-enviado de datos
function submitPrevent(event) {
    event.preventDefault();
  }
  
  getIdFormEl.addEventListener("submit", submitPrevent);
  updateFormEl.addEventListener("submit", submitPrevent);

  //Función handler botón de enviado de ID. Llama a getUserId para obtener el id del usuario y nos abre el siguiente formulario
  let userId="";
  function handleIdBtn(){
    userId = getUserId();
    updateFormEl.classList.remove("hidden");
  }

  //Función para obtener el id del user

  function getUserId() {
    return parseInt(userIdInput.value);
  
  }

  //Evento del formulario id
   sendIdBtn.addEventListener("click", handleIdBtn);
  

  //Función button handler del formulario update (actualización datos del user). Llama a getUserData para recoger valores introducidos por el usuario y llama al fetch pasándole esos valores.

  function handleUpdatedBtn() {
    const updatedData = getUserData();
    postDataFetch(updatedData);
    //resetValues();
}

   //Función para obtener los values de los inputs insertados por el usuario
   function getUserData() {
       
        // console.log(updateNameInput.value);
        // console.log(updateSurnameInput.value);
        // console.log(updateDniInput.value);
        // console.log(updateEmailInput.value);
        // console.log(updateTelInput.value);
        // console.log(updateCpInput.value);
        // console.log(updateImgInput.value);

        const myData = {
          nombre: updateNameInput.value,
          apellido: updateSurnameInput.value,
          dni: updateDniInput.value,
          email: updateEmailInput.value,
          telefono: updateTelInput.value,
          direccion: updateAddrInput.value,
          codigoPostal: updateCpInput.value,
          imagen: null,
        }

      return myData;
  }

  
//Evento botón submit enviado datos del form
updateBtn.addEventListener("click", handleUpdatedBtn);



//FETCH TIPO POST PARA ACTUALIZAR DATOS DE USUARIOS
//ULTIMO INTENTO POST
const postDataFetch = async (updatedData) => {
  const url = `http://localhost:8080/alumnos`;
  const res = await fetch(url, {
    method: "POST",
    contentType: "application.json",
    headers: {
      'Content-type': 'application/json',
    },
    mode: "no-cors",
    body: JSON.stringify(updatedData)
  }).catch((error) => {
    responseTextEl.innerHTML = `Ha habido un error con el fetch: Error: ${error.message}`;
  });

  console.log(res, 'consolelog')
  //const data = await res.json();

  //console.log(data, 'response2');

};

//DA ERROR 403
/**function postDataFetch(data) {
  fetch("http://localhost:8080/alumnos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      responseTextEl.innerHTML = `<p class="error">No se ha podido realizar la petición..</p>`;
    });
} **/


/**const postDataFetch= async (updatedData) => {    
  //let url = `http://localhost:8080/alumnos/${userId}`;
  let url = `http://localhost:8080/alumnos`;

  console.log(userId);
  console.log(url);
  const res = await fetch(url,{
      //method:"PUT",
      method: "POST",
      headers:{
        'Content-Type':'application/json',
      },
      mode: "no-cors",
      body:JSON.stringify(updatedData) 
    }).catch((error) => {
    const responseString =

    `Hubo un problema con la petición Fetch: ${error.message}`;

    responseTextEl.innerHTML = responseString;

  });


//const data = await res.json();

//console.log(data,'response2');

};**/



/*const postDataFetch = (updatedData) => {
  console.log(updatedData);
  const url = `http://localhost:8080/alumnos/${userId}`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(updatedData),
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
*/




/*
//Función para reiniciar los valores de los inputs
const resetValues = () => {
    updateNameInput.value = "";
    updateSurnameInput.value = "";
    updateDniInput.value = "";
    updateEmailInput.value = "";
    updateTelInput.value = "";
    updateAddrInput.value = "";
    updateCpInput.value = "";
    updateImgInput.value = "";

}*/

