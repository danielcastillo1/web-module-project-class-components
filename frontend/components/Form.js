import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        input: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd();
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add a Todo!</button>
      </form>)
  }
}

