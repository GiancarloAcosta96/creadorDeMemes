import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(valor){
    setlinea1(valor.target.value);
  }

  const onChangeLinea2 = function(valor){
    setlinea2(valor.target.value);
  }

  const onChangeImagen = function(valor){
    setImagen(valor.target.value);
  }

  const onClickExportar = function(valor) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("imagen/png");
      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <h1>Creador de Memes</h1>

      <select onChange={onChangeImagen}>
        <option value="meme1">Meme 1</option>
        <option value="meme2">Meme 2</option>
        <option value="meme3">Meme 3</option>
        <option value="meme4">Meme 4</option>
        <option value="meme5">Meme 5</option>
        <option value="meme6">Meme 6</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder='linea1'/> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder='linea2'/> <br/>

      <button onClick={onClickExportar}>Guardar Meme</button>

      <div className='memeDiv' id='meme'>
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"}/>
      </div>
      
    </div>
  );
}

export default App;
