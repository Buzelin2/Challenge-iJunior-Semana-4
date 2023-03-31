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
        <button className='botao_rolagem'></button>
      </div>
      <div className="main2"> {/*Todo o resto do main*/}
      <button className='generate'>GENERATE</button> {/* botao de generate*/}
      </div>
      

      </div>

    </div>
  )
}

export default App
