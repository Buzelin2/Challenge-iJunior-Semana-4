import './App.css'
import { useState } from 'react'


let palavra1 = "";
let palavra2 = "";
let num = "";
let sim = "";
let gerado;
var valor;

function geradora(){
gerado = '';
gerado = palavra1 + palavra2 + num + sim;
let shuffledStr = '';
let strArr = gerado.split('');

while (strArr.length > 0) {
  const randomIndex = Math.floor(Math.random() * strArr.length);
  shuffledStr += strArr[randomIndex];
  strArr.splice(randomIndex, 1);
  }  
  
  
const senhaa = shuffledStr.substring(0, valor);
var alterar = document.querySelector("#password") /* esta função gera a palavras aleatoria e substitui o valor do password */
   
alterar.innerHTML = senhaa;
 palavra1 = "";
 palavra2 = "";
 num = "";
 sim = "";
 var desmarcar = document.querySelector("#checkM").checked = false;
 var desmarcar1 = document.querySelector("#checkm").checked = false;
 var desmarcar2 = document.querySelector("#checkn").checked = false;
 var desmarcar3 = document.querySelector("#checks").checked = false;
}
{/* aqui é para desmarcar os checkbox apos o apertar o botao */}

function letrasM(){
if( document.querySelector("#checkM").checked){
     const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     for (let i = 0; i < 21; i++) {
     palavra1 += letras.charAt(Math.floor(Math.random() * letras.length));
  } 
}
}
{/*esta função gera letras maiuscula aleatorias */}

function letrasm(){
if( document.querySelector("#checkm").checked){
   const letras = "abcdefghijklmnopqrstuvwxyz";
   for (let i = 0; i < 21; i++) {
   palavra2 += letras.charAt(Math.floor(Math.random() * letras.length));
}
  
}
} 
 {/*esta função gera letras minuscula aleatorias */}

function nume(){
if( document.querySelector("#checkn").checked){
    const letras = "1234567890";
    for (let i = 0; i < 21; i++) {
   num += letras.charAt(Math.floor(Math.random() * letras.length));
  }
}
}  
{/*esta função gera numeros aleatorias */}

function simbo(){
if( document.querySelector("#checks").checked){
   const letras = "<>^@#$!&*";
   for (let i = 0; i < 21; i++) {
   sim += letras.charAt(Math.floor(Math.random() * letras.length));
  }
}
}  
{/*esta função gera simbolos aleatorias */}




function App() {
  var dificuldade = 'DIFICULDADE';
  var alo = 0;
  const [value, setValue] = useState(0);
valor = value;

//Codigo abaixo feito para medir o nivel de dificuldade da senha
  if(valor > 0){
    var dificuldade = 'MUITO FACIL';
  }
  if(valor > 5){
    alo++;
    var dificuldade = 'FACIL';
  }
  if(valor > 10){
    alo++;
    var dificuldade = 'MEDIO';
  }
  if(valor > 15){
    alo++;
    var dificuldade = 'DIFICIL';
  }
  if(valor >= 20){
    alo++;
    var dificuldade = 'IMPOSSIVEL';
  }
  return (
    <div className="App">

      <div className="main">  {/*Container principal com tudo*/}
        <p className="top_text">Password Generator</p> {/*Texto inicial*/}
        <div className="pass_gen" >{/*Local onde o texto da password sera gerado*/}
          <p className='password' id='password'>P4$5w0rD!</p>
        </div>

        <div className='tamanho'>
          <p className='length'>Character length</p>
          <p className='length_count'>{value}</p>
        </div>

        <div className='rolagem'>
          <input type='range' max = {20} value={value} class="button" onChange={(e) => setValue(e.target.valueAsNumber)}></input>   {/*mudei de button para div} */}
        </div>

        <div className="main2"> {/*Todo o resto do main*/}
          <div class="choices">
            {/* Aqui estão os botões de opção de escolha */}
            <input type="checkbox" onChange={letrasM} name="option1" class="option1"  id='checkM'></input>
            <label for="option1" class="option1">Include Uppercase Letters</label>
            <br></br>

            <input type="checkbox" onChange={letrasm} name="option1" class="option1"  id='checkm'></input>
            <label for="option1" class="option1">Include Lowercase Letters</label>
            <br></br>

            <input type="checkbox" onChange={nume} name="option1" class="option1"  id='checkn'></input>
            <label for="option1" class="option1">Include Numbers</label>
            <br></br>

            <input type="checkbox" onChange={simbo} name="option1" class="option1"  id='checks'></input>
            <label for="option1" class="option1">Include Symbols</label>
          </div>

          <div class="strength">    {/*Div que mostra a dificuldade da senha*/}
            <p class="strengthDentro">STRENGTH</p>
            <p class="difficulty">{dificuldade}</p> {/* dificuldade está aqui como exemplo, pois terá que ser algo dinamico*/}
            <div class="medidorpai">
              <div class={alo >= 1 ? 'medidor1' : 'medidor11'}></div>
              <div class={alo >= 2 ? 'medidor2' : 'medidor22'}></div>
              <div class={alo >= 3 ? 'medidor3' : 'medidor33'}></div>
              <div class={alo >= 4 ? 'medidor4' : 'medidor44'}></div>
            </div>
          </div>


          <button type="button" onClick={geradora} className='generate'>GENERATE</button> {/* botao de generate*/}
        </div>


      </div>

    </div>
  )
}

export default App
