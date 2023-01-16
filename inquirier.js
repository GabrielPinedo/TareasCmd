const inquirer = require('inquirer')
require('colors')

const preguntas = [ 
    {
        type : 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green}Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green}Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green}Tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green}Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green}Completar tareas`
            },

            {
                value: '0',
                name: `${'0.'.green}Salir`

            },
            
            
            

        ] ,
      
    }

]
const inquirerMenu = async() => {
    console.clear()
    console.log('============================'.blue)
    console.log('   Seleccione una opción'.white)
    console.log('============================'.blue)

    const {option} = await inquirer.prompt(preguntas)
    .then(answer => {
        return answer
    })
    .catch(err => {
        return err
    })
    
    return option
}

const pausa = async () => {
   
    const question = [
        {
            type: 'input',
            name : 'enter',
            message: `Presione ${'Enter'.green} para continuar `
        }
    ]
    await inquirer.prompt(question)
    .then(answer => {
        return answer
    })
    .catch(err => {
        return err
    } )
   
}

const leerInput = async (message) =>{

    const question = [
        {
            type : 'input',
            name : 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}


module.exports =  {
    inquirerMenu, pausa, leerInput};