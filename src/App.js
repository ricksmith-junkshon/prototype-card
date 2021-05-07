import logo from './logo.svg';
import './App.css';
import Box from "./components/box";

const names = ['OnDemand', 'Reserved 1yr', 'Reserved 3yr']
const names2 = ['Average CPU', 'Peak CPU', 'Average Memory', 'Peak Memory']

function App() {
  return (
    <div className="App">
      <div class="container">
        <Box names={names}/>
        <Box names={names2}/>
      </div>
    </div>
  );
}

export default App;
