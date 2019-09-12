import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      courses : [],
    };
  }

  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response=>{
    console.log(response);
    this.setState({
      photos: response.data.photos.photo,
      loading: false
    });
  })
    .catch(error => {
      console.log('error fetching and parsing data', error);
    });

}

export default App;
