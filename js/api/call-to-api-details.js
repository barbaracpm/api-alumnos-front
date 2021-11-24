// get fetch to show all students
const fetchAllStudents = async () => {
      const url = `http://localhost:8080/alumnos`;
      const res = await fetch(url).catch((error) => {
        const divContainer = document.getElementById('container');
        const studentsHTMLString =
          `<div class="flex-item">
            <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
          </div>`;
          divContainer.innerHTML = studentsHTMLString;
      });
      console.log(res, 'consolelog')
      const data = await res.json();

      let alumnos =[];
      console.log(data.alumnos);
      data.alumnos.forEach(element => {
          
          let student = {
              id: element.id,
              nombre: element.nombre,
              apellido: element.apellido
          }
          alumnos.push(student);
      })
      return alumnos;

    };

    // show all students
  const displayAllStudents = async () => {

    const getStudentsId = document.querySelector("#container-users");
    const allStudents = await fetchAllStudents();
        // create a table 
        const studentHtmlString =  allStudents.map((student) =>
        `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${student.nombre}</td>
            <td>${student.apellido}</td>
            <td>
            <button class="btn btn-danger" type="button" id="deleteBtn" onclick="fetchDeleteStudent(${student.id})">
            Delete
            </button>
            </td>
          </tr>
          </tr>
        </tbody>
      </table>`).join("");

        getStudentsId.innerHTML = studentHtmlString;
        


    };

displayAllStudents();

// Delete a student fetch
//TODO: fix security fetch (id)
const fetchDeleteStudent = async (id) => {
    //endPoint  
    const url = `http://localhost:8080/alumnos/${id}`;
    const res = await fetch(url,{
        method:"DELETE"
    }).catch((error) => {
        const divContainer = document.getElementById('container');
        const studentsHTMLString =
          `<div class="flex-item">
            <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
          </div>`;
          divContainer.innerHTML = studentsHTMLString;
    });    
  //Return the a getFetch to refresh the users
  return displayAllStudents();
};


/*
  const fetchCreateStudent = async () => {    
      const url = `http://localhost:8080/alumnos`;
      const datamock = {
        nombre:"Alex",
        apellido: "Alejandro",
        email:"Rodr@gmail.com",
        dni:"y5462492x",
        imagen:null,
        direccion:null,
        telefono:null,
        codigoPostal:null
      };
      const res = await fetch(url,{
          method:"POST",
          contentType:"application/json",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datamock)
      }).catch((error) => {
        const pokedex = document.getElementById('pokedex');
        const pokemonHTMLString =
          `<div class="flex-item">
            <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
          </div>`;
        pokedex.innerHTML = pokemonHTMLString;
      });
      console.log(res, 'consolelog')
      const data = await res.json();
    
    console.log(data,'response2');
  };

  fetchCreateStudent();
  */