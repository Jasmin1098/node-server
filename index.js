var readlineSync = require('readline-sync');

const tasks = [];

function mostrarTareas(){
    if (tasks.length === 0) {
        console.log('No hay tareas en la lista');
      } else {
        console.log('Tareas:');
        tasks.forEach((task, index) => {
          console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
        });
    }
}

function agregarTarea(description) {
    tasks.push({
      description,
      completed: false
    });
    console.log(`Tarea "${description}" agregada.`);
  }

  function eliminarTarea(index) {
    if (index >= 0 && index < tasks.length) {
      const removedTask = tasks.splice(index, 1)[0];
      console.log(`Tarea "${removedTask.description}" eliminada.`);
    } else {
      console.log('Indice de tarea no valido.');
    }
  }

  function completarTarea(index) {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log(`Tarea "${tasks[index].description}" marcada como completada.`);
    } else {
      console.log('Indice de tarea no valido.');
    }
  }  

  function main(){
    console.log('Bienvenido a la lista de tareas');
    while (true) {
        const command = readlineSync.question('Opciones: mostrar, agregar, eliminar, completar');
    
        switch (command.toLowerCase()) {
          case 'mostrar':
            mostrarTareas();
            break;
          case 'agregar':
            const description = readlineSync.question('Ingrese la descripcion de la tarea: ');
            agregarTarea(description);
            break;
          case 'eliminar':
            const indexToRemove = parseInt(readlineSync.question('Ingrese el numero de tarea a eliminar: '), 10) - 1;
            eliminarTarea(indexToRemove);
            break;
          case 'completar':
            const indexToComplete = parseInt(readlineSync.question('Ingrese el numero de tarea a completar: '), 10) - 1;
            completarTarea(indexToComplete);
            break;

          default:
            console.log('Comando no valido. Por favor, ingrese un comando valido.');
        }
      }
    }
    
    main();
  

