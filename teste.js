const data = 'data\ndata\ndata'
function manipularTexto(data){
     if(data){
       let upperData = data.toUpperCase();
       let modifiedData = upperData.split('\n');
       let counts= {};
       modifiedData.forEach((count) => {
         counts[count] = (counts[count] || 0) + 1;
       });
       let textModified= '';
       for(let i=0;i<Object.keys(counts).length;i++){
         if(Object.keys(counts)[i] === ''){
 
         }else{
           textModified += `${Object.keys(counts)[i]}; ${String(Object.values(counts)[i])}\n`
         }
       }
       return console.log(textModified);
     }else{
       return textAreaSaida.value = 'Nenhuma informação de entrada.'
     }
   }
   manipularTexto(data);