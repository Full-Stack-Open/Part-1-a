import React from 'react'
import ReactDOM from 'react-dom'

// 2.-El componente Hello recibe el props.name a traves de las (props)
const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}</p>
      Hello {props.name}, you are {props.age} years old
    </>
  )
}

// 1.-En la etiqueta del componente Hello defino la propiedad y le asigno un valor.
// En este caso la propiedad name es un string, y se lo paso al componente Hello.
// Si el valor del prop se logra usando JavaScript, debe estar envuelto con llaves.
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age="13"/>
      <Hello name="Daisy" />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 