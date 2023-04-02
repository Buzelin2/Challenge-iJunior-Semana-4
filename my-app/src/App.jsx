import './App.css'
import { useState } from 'react'

function App() {
  var dificuldade = 'DIFICULDADE';
  var alo = 0;
  const [value, setValue] = useState(0);


//Codigo abaixo feito para medir o nivel de dificuldade da senha
  if(value > 0){
    var dificuldade = 'MUITO FACIL';
  }
  if(value > 5){
    alo++;
    var dificuldade = 'FACIL';
  }
  if(value > 10){
    alo++;
    var dificuldade = 'MEDIO';
  }
  if(value > 15){
    alo++;
    var dificuldade = 'DIFICIL';
  }
  if(value >= 20){
    alo++;
    var dificuldade = 'IMPOSSIVEL';
  }
  return (
    <div className="App">

      <div className="main">  {/*Container principal com tudo*/}
        <p className="top_text">Password Generator</p> {/*Texto inicial*/}
        <div className="pass_gen">{/*Local onde o texto da password sera gerado*/}
          <p className='password'>P4$5w0rD!</p>
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
            <input type="checkbox" name="option1" class="option1"></input>
            <label for="option1" class="option1">Include Uppercase Letters</label>
            <br></br>

            <input type="checkbox" name="option1" class="option1"></input>
            <label for="option1" class="option1">Include Lowercase Letters</label>
            <br></br>

            <input type="checkbox" name="option1" class="option1"></input>
            <label for="option1" class="option1">Include Numbers</label>
            <br></br>

            <input type="checkbox" name="option1" class="option1"></input>
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


          <button type="button" className='generate'>GENERATE</button> {/* botao de generate*/}
        </div>


      </div>

    </div>
  )
}

export default App
