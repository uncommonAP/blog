import React, { Component } from 'react'

class NewArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let field = event.target.name
    let next_state = Object.assign({}, this.state, {[field]: event.target.value})
    this.setState({ next_state })
  }

  render() {
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <label id='title' name='title'>Title
          <input onChange={this.handleChange} id='title' name='title' value={this.state.title}/>
        </label>
        <label id='body' name='body'>Body
          <input onChange={this.handleChange} id='body' name='body' value={this.state.body}/>
        </label>
      </form>
    )
  }
}

export default NewArticle
