import * as fs from "fs";
import * as path from "path";

// Obtener el nombre del archivo desde los argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Por favor, proporciona el nombre de un archivo.");
  process.exit(1);
}

const fileName = args[0];

// Leer el archivo
fs.readFile(path.resolve(fileName), "utf8", (err, data) => {
  if (err) {
    console.error(`Error al leer el archivo: ${err.message}`);
    process.exit(1);
  }
  console.log(`Contenido del archivo ${fileName}:`);
  console.log(data);
});
