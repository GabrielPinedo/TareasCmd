require('colors')
const {pausa, inquirerMenu, leerInput} = require('./helpers/inquirier');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();
const tareas = new Tareas();

const main =  async () => {
    opt = ''; 
    do{
        opt = await inquirerMenu(); 
        switch(opt){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                    tarea = tareas.listarTareas();
                    tarea.forEach(element => {
                        console.log(`Nombre de la actividad`.yellow)
                        console.log(element.desc)
                        console.log(`\n Estado de la actividad`.blue)
                        if(element.completadoEn !== null)
                        console.log(`Tarea pendiente`.red)
                        else{
                            console.log(`Tarea completada`.green)
                        }
                        console.log("=======================================")
                    });
                break;


            case '3':
                    console.log('No tiene tareas completas')
                break;
            



            case '4':
                    console.log(tareas.tareasPendientes());
                break;         

        }
    await pausa()
    }while(opt !== '0')

    console.log('Ejecución terminada')
}

main()
