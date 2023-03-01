const fs = require("fs");

fs.writeFile("./ejemplo-fechahora.txt", new Date().toString(), (error) =>{
if (error) return console.log("Error al escribir la fecha y hora actual")

fs.readFile("./ejemplo-fechahora.txt",(error, resultado) => {
    if (error) return console.log("Error al leer el archivo")
    console.log(resultado)
    
})

})