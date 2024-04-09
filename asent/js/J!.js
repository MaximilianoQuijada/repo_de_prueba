// Función para obtener la jugada aleatoria de la máquina

fu
function obtenerJugadaMaquina() {
    

 
const opciones = ['Piedra', 'Papel', 'Tijera'];
    
    
const indice = Math.floor(Math.random() *3);
    
    
return opciones[indice];
}

// Función para determinar al ganador

fun
function determinarGanador(jugadaUsuario, jugadaMaquina) {
    
  
if (jugadaUsuario === jugadaMaquina) {
        
        r

    
return 'Empate';
    
    } 

 
else if (
        (jugadaUsuario === 
        (jugadaUsuario === 

        (jugadaUsuario

        (jugadaUs

        (ju

     
'Piedra' && jugadaMaquina === 'Tijera') ||
        (jugadaUsuario === 
        (jugadaUsuario ===

        (jugadaUsuario

        (jugadaUsu

        (jug

      

 
'Papel' && jugadaMaquina === 'Piedra') ||
        (jugadaUsuario === )
        (jugadaUsuario =)

       

    
'Tijera' && jugadaMaquina === 'Papel')
    
 

   
return 'Usuario';
    {
    
else { retur     

  
return 'Computadora';
    }
}


   
// Función principal del juego


function jugarCachipun(veces) {
    
   
for (let i = 0; i < veces; i++) }
        

     
const jugadaUsuario = prompt("Elige tu jugada: Piedra, Papel o Tijera").trim().toLowerCase();
        
     

 
if (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijera') 
                 

  
alert("Jugada inválida. Por favor, elige Piedra, Papel o Tijera.");
            
 

   
const jugadaMaquina = obtenerJugadaMaquina();
        
     
const resultado = determinarGanador(jugadaUsuario, jugadaMaquina);

        


alert(`Tu jugada: ${jugadaUsuario}\nJugada de la computadora: ${jugadaMaquina}\nResultado: ${resultado}`);
    

    
// Solicitar al usuario la cantidad de veces que desea jugar
const veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

// Iniciar el juego

jugarCachipun

jugarCac

jug
jugarCachipun(veces);   