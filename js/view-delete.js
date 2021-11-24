const displayAllStudents = () => {

    const getStudentsId = document.getElementById('container-users');
    const allStudents = fetchAllStudents();
    allStudents.then((students) => {
        const studentHtmlString = students.map((student) =>
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
            <td><button></td>
          </tr>
          </tr>
        </tbody>
      </table>
      `
        ).join("");
        getStudentsId.innerHTML = studentHtmlString;
    });
};
