import React,{Component} from 'react'


class Body extends Component {
  constructor(){
    super()
    this.state = {
      city: '',
      state: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.city = evt.target.value
    var weather = 'api.openweathermap.org/data/2.5/weather?q='
    fetch(weather,{
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        city: 'irvine',
        state: 'CA'
      })
    })
    return weather + this.city
  }

  render(){
    return (
      <div className="check">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" />
        <input type="submit" onSubmit={this.handleSubmit} />
      </div>
    )
  }
}



export default Body
