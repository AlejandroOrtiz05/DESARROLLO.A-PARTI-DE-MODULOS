import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
 
  const [textoAVoz,setTextoAVoz ] = useState('')
  const [vozATexto, setVozATexto] = useState ('')
 
function cambiarTexto() {
  setTextoAVoz(evento.target.value)
  
}

function convertirTextoAVoz() {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(textoAVoz);
  synth.speak(utterThis);
}

function resultado(event) {
  setVozATexto(event.results[0][0].transcript);
  
}




function grabrarVozATexto() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang ='es-ES'
  recognition.start();
  recognition.onresult = resultado
      
  
}


  return (
    
    <> <h1>Conversor TTS Y SST </h1> 
    <br /> 
    <h3>conversor de texto a voz</h3>
   <input type="text" id='textoAVoz' value={textoAVoz} onChange={cambiarTexto} /> 
   <button onClick={convertirTextoAVoz}  >convertir</button>

   <h3>conversor de voz a texto</h3>
   <button onClick={grabrarVozATexto} >grabar</button>
   {vozATexto}
   </>
  ); 
}  
 


      
  
export default Conversor
