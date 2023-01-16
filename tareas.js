const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    constructor(){
        this._listado = {};
   }

   crearTarea(desc = ''){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea
   }

   listarTareas(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })
      return listado;
   }

   tareasPendientes(){
     const tarea = this._listado;
     if(tarea.completadoEn === null){
        return tarea;
     }
     else{
        return 'No tiene tareas pendientes'
     }
     

   }
} 



module.exports = Tareas; 