function obtenerDatos(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let comentarios = document.getElementById("comentarios").value.trim();
    
  alert("Tu nombre es: " + nombre  + "\n" +" tu email es: " + correo + "\n" +"Tu telefono es: " + telefono)

// Para miguel solo ver en consola por que al igual el form formatea la informacion
    console.log(nombre);   
    console.log(correo);          
    console.log(telefono);        
    console.log(ciudad);      
    console.log(direccion);        
    console.log(comentarios);    

    

  } 



// JSON inicial (podría estar vacío o con datos previos)
const datosJSON = {
  usuarios: []
};

// Escuchar el evento 'submit' del formulario
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita la recarga de la página

  // Capturar los datos del formulario en un objeto FormData
  const formData = new FormData(event.target);

  // Convertir FormData en un objeto JSON
  const nuevoUsuario = {};
  formData.forEach((value, key) => {
    nuevoUsuario[key] = value;
  });

  // Agregar el nuevo usuario al JSON
  datosJSON.usuarios.push(nuevoUsuario);

  // Mostrar el JSON actualizado en consola (o hacer algo con él)
  console.log(datosJSON);
});
