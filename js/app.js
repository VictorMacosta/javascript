// // operador switch
// alert('Hola! Te mostrare unos platos tipicos de alguna parte del mundo')
// let pregunta1 = prompt('elije una de las siguientes comidas arepas, medialunas, tacos o "gracias" para salir ').toLowerCase()
// while(pregunta1 != 'gracias')
// {
//     switch (pregunta1)
//     {
//         case 'arepas':
//             alert('Que rico! arepas. Las arepas son el desayuno mas popular en todo el pais venezolano')
//             let pregunta2 = prompt('Ahora dime cual de estas prefieres: patacon o pabellon').toLowerCase()
//             switch (pregunta2)
//             {
//                 case 'pabellon':
//                 alert('El pabellon es una comida tipica de los llanos venezolanos');
//                 break;

//                 case 'patacon':
//                 alert('El patacon es una de los platos mas consumidos en la ciudad de Maracaibo, Venezuela.');
//                 break;    
                
//                 default:
//                 alert('opcion invalida');
//                 break;
//             }
//             break;
    
//         case 'medialunas':
//             alert('Las medialunas son unos de los desayunos y meriendas mas populares en la Ciudad Autonoma de Buenos Aires.');
//             let pregunta3 = prompt('Ahora elije una de estas: locro, asado')
//             switch (pregunta3)
//             {
//                 case 'locro':
//                     alert('Plato tipico de la ciudad de Salta y alrededores.');                    
//                     break;

//                 case 'asado':
//                     alert('Es el plato perfecto para reuniones familiares en la Ciudad Autonoma de Buenos Aires.');                             
//                     break;        
            
//                 default:
//                     alert('opcion invalida');
//                     break;
//             }
//             break;
        
//         case 'tacos':
//             alert('Los tacos es una comida referente de Mexico.');
//             let pregunta4 = prompt('Ahora elije una de estas: cabrito o machaca')
//             switch (pregunta4) 
//             {
//                 case 'cabrito':
//                     alert('El cabrito es el plato numero uno en la lista de comidas tipicas de Monterrey, Mexico.');
//                     break;
//                 case 'machaca':
//                     alert('La machaca es el plato numero uno en la lista de comidas tipicas de Sonora, Mexico.');
//                     break;
//                 default:
//                     alert('opcion invalida')
//                     break;
//             }
//             break;
    
//         default:
//             alert('Lo siento, no he probado ese plato aun pero lo tendre en cuenta')       
//             break;
//     }
//     pregunta1 = prompt('elije una de las siguientes comidas arepas, medialunas, tacos o "gracias" para salir ').toLowerCase()
// }
// alert('genial, saliste del ciclo')


function desayuno(){

    switch (bienvenido) {
        case 'arepa':
        almuerzoVe()
            break;

        case 'medialuna':
        almuerzoArg()
            break; 

        case 'taco':
        almuerzoMex()
            break;  

        default:
            alert('opcion invalida')
            break;
    }
}


function almuerzoVe(pabellon, patacon) {
    alert('desayuno venezolano')
    let segundaComida = prompt('ahora elije una de estas: pabellon, patacon o escribe "salir" para terminar')
        switch (segundaComida) {
            case 'pabellon':
                alert('region del llano')
                break;
    
            case 'patacon':
                alert('maracaibo')
                break;
    
        
            default:
                alert('opcion invalida')
                break;
        }
    }


function almuerzoArg (asado, locro){
    alert('desayuno argentino')
    let segundaComida = prompt('ahora elije una de estas: asado, locro o escribe "salir" para terminar')
        switch (segundaComida) {
            case 'asado':
                alert('cuidad autonoma de buenos aires')
                break;
    
            case 'locro':
                alert('salta')
                break;
        
            default:
                alert('opcion invalida')
                break;
        }
    }

function almuerzoMex (cabrito, machaca){
    alert('desayuno mexicano')
    let segundaComida = prompt('ahora elije una de estas: cabrito, machaca o escribe "salir" para terminar')
        switch (segundaComida) {
            case 'cabrito':
                alert('monterrey')
                break;
    
            case 'machaca':
                alert('sonora')
                break;
        
            default:
                alert('opcion invalida')
                break;
        }
    }


let salida = prompt('Hola, estas a punto de entrar en un ciclo que te dira de donde vienen algunas comidas, si no quieres participar escribe "gracias" para salir')

let bienvenido = prompt('elije una de las siguientes: arepa, medialuna, taco')
while(salida != 'gracias'){
    desayuno()

}
alert('genial, saliste del bucle')