import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false

    }
  }

  componentDidMount(){
    fetch('https://api.tfl.gov.uk/StopPoint/940GZZLUASL/Arrivals?app_id=2f5e59ab&app_key=309c0680c02830b41c860c2a97fd1c0b')
      .then(res => res.json())
      .then(json => {
          this.setState(
            {
              isLoaded: true,
              items: json
            }
          )
      });
  }

  render() {
    var { isLoaded, items} = this.state;

    if (!isLoaded){
        return <div>Loading...</div>
    }else{

      return (
        <div className="App">
                <div style={{color: "#00008b", margin: "10% 0 5% 45%"}}><h2>Piccadilly line APP:)</h2></div>

          <div style={{margin: "0 0 10% 10%"}}><ul>            
              {items.map(item => (
                
                <li key = {item}>
                  <ol>
                  <br></br>
                    <li>{item.platformName}</li>   
                    <li><b style = {{color: "#045780"}}>TO</b> {item.destinationName}</li>
                    <li><b style = {{color: "#045780"}}>Current location:</b> {item.currentLocation}</li>
                    <li>{Math.ceil(item.timeToStation/360)} <i>minut(s)</i></li>
                  </ol>
                </li>
              ))}
          </ul>
        </div> 
        </div>
      );
    }
  }
}

export default App;
