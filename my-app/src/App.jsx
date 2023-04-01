import './App.css'

function App() {


  return (
    <div className="App">

      <div className="main">  {/*Container principal com tudo*/}
        <p className="top_text">Password Generator</p> {/*Texto inicial*/}
        <div className="pass_gen">{/*Local onde o texto da password sera gerado*/}
          <p className='password'>P4$5w0rD!</p>
        </div>

        <div className='tamanho'>
          <p className='length'>Character length</p>
          <p className='length_count'>0</p>
        </div>

        <div className='rolagem'>
          <div class="button"></div>   {/*mudei de button para div} */}
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
            <p class="difficulty">DIFICULDADE</p> {/* dificuldade está aqui como exemplo, pois terá que ser algo dinamico*/}
            <div class="medidorpai">
              <div class="medidor"></div>
              <div class="medidor"></div>
              <div class="medidor"></div>
              <div class="medidor"></div>
            </div>
          </div>


          <button type="button" className='generate'>GENERATE</button> {/* botao de generate*/}
        </div>


      </div>

    </div>
  )
}

export default App
