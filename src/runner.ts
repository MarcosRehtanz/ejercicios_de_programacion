import { exec } from "child_process";
import * as path from "path";
import { glob } from "glob";

// Obtener el nombre del archivo desde los argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(
    "Por favor, proporciona el nombre de un archivo TypeScript para ejecutar."
  );
  process.exit(1);
}

const fileName = args[0];

glob(`./src/${fileName}.*`, {
  ignore: ["node_modules/", "dist/"],
})
  .then((files) => {
    if (files.length === 0) {
      console.error(
        `No se encontraron files coincidentes con el patrón: ${fileName}`
      );
      return;
    }

    const filePath = files[0];
    console.log(filePath);
    exec(`npx ts-node ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: \n\n${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  })
  .catch((error) => {
    console.error(`Error al buscar archivos: ${error}`);
    return;
  });
