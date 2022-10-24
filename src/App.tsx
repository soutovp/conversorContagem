import './styles/global.css';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { TextArea } from './components/TextArea';
export function App() {
  
  function manipularTexto(data?:String, props?:any){
    const textAreaEntrada = document.querySelector('#textAreaEntrada') as HTMLTextAreaElement;
    const textAreaSaida = document.querySelector('#textAreaSaida') as HTMLTextAreaElement;
    if(textAreaEntrada.value){
      let upperData = textAreaEntrada.value.toUpperCase();
      let modifiedData = upperData.split('\n');
      let counts = {};
      modifiedData.forEach((count:string) => {
        //@ts-ignore
        counts[count] = (counts[count] || 0) + 1;
      });
      let textModified= '';
      for(let i=0;i<Object.keys(counts).length;i++){
        if(Object.keys(counts)[i] === ''){
          
        }else{
          textModified += `${Object.keys(counts)[i]}; ${String(Object.values(counts)[i])}\n`
        }
      }
      return textAreaSaida.value = textModified;
    }else{
      return textAreaSaida.value = 'Nenhuma informação de entrada.'
    }
  }
  function copyToClipboard(){
    const textAreaSaida = document.querySelector('#textAreaSaida') as HTMLTextAreaElement;
    navigator.clipboard.writeText(textAreaSaida.value);
    alert('Mensagem copiada com sucesso!')
    return console.log(textAreaSaida.value);
  }
  return (
    <div className="App">
      <Header/>
      <div className='mt-5'>
        <h1 className='block text-center mb-3 font-bold bg-black text-white text-lg'>Contagem de Referências</h1>
        <div className='flex justify-center flex-col'>
            <TextArea placeholder='Insira a contagem aqui!' className='m-10' id='textAreaEntrada'/>
            <Button className='m-10' onClick={()=>{manipularTexto()}} >Enviar Contagem!</Button>
          <hr />
          <TextArea placeholder='Aguardando Envio...' className='m-10' id="textAreaSaida" disabled/>
          <Button className='m-10' onClick={()=>{copyToClipboard()}} id='clipButton'>Copiar para ClipBoard</Button>
        </div>
      </div>
    </div>
  )
}
