/*
1) busca el id: "boton" y le agrega un listener "click" con una funcion
2) al activarse el listener, la funcion lanza un metodo GET para obtener info de esa URL, a la vez establece 
   una function para cuando se retorne la data
3) con la data retornada (en formato array-like) se ejecuta un forEach por cada elemento
4) con cada elemento se crea un elemento "<li>"
5) a ese <li> se le agrega de contenido el name de cada friend
6)  cada <li> se agrega como hijo de la lista en el body del HTML
 */

$("#boton").click(function() {                              //(1)

    // limpia la lista si es que tiene algo, antes de recargarla (evita que se imprima una lista seguida de otra)
    while ($("#lista")[0].children.length !== 0) {
        let lista = document.getElementById("lista");
        let elem = document.querySelector("li");
        lista.removeChild(elem);
    }

    // obtiene la data con JQuery
    $.get("http://localhost:5000/amigos", function(data) {  //(2)
        data.forEach(function(friend) {                     //(3)
            let li = document.createElement("li");          //(4)
            li.innerHTML = friend.name;                     //(5)
            $("#lista").append(li);                         //(6)           
        })
    })

    // borra la imagen de carga una vez cargada la lista
    let img = $("img")[0];
    if (img !== undefined) $("body")[0].removeChild(img);
    
})

$("#search").click(function() {
    let value = $("#input")[0].value;
    
    // verifica que los valores del input sean correctos
    if (value === "") $("#amigo")[0].innerHTML = "⛔ Deberías ingresar un número ⛔";
    else if (isNaN(value)) $("#amigo")[0].innerHTML = "❌ Eso no tiene pinta de número 🔢 ❌";

    // si son correctos, realiza la funcion
    else {
        $.get(`http://localhost:5000/amigos/${value}`, function(data) {
            let friend = $("#amigo")[0];
            // friend.innerHTML = data.name;
            friend.innerHTML = `Tu amigo ${data.name}, tiene ${data.age} años, y su correo es ${data.email}.`;
            document.querySelector("#input").value = "";
        })
    }
    
})


$("#delete").click(function() {
    let value = $("#inputDelete")[0].value;

    // verifica que los datos del input sean correctos
    if (value === "") $("#success")[0].innerHTML = "⛔ Deberías ingresar un número ⛔";
    else if (isNaN(value)) $("#success")[0].innerHTML = "❌ Eso no tiene pinta de número 🔢 ❌";

    // si son correctos elimina el ID seleccionado
    // se debe llamar al metodo `ajax` porque el `DELETE` no esta implementado como el `GET`
    else {
        $.ajax({
            url: `http://localhost:5000/amigos/${value}`,
            type: `DELETE`,
            success: function(result) {
                $("#success")[0].innerHTML = "Tu amiguito fue borrado. Sorry 😥";
                setTimeout(function() {
                    $("#success")[0].innerHTML = ""
                }, 3000);
                document.querySelector("#inputDelete").value = "";
            }
        });
    }
});