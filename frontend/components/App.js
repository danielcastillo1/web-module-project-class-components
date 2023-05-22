import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <ul>
        <li>Workout</li>
        <li>Wash Clothes</li>
        <li>Clean the garage</li>
      </ul>
      
      <form>
        <input />
        <button>Add a Todo!</button>
      </form>

      <button>Clear</button>
      </div>
    
    )
  }
}
