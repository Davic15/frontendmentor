import './App.css';
import { Container } from './components/Container';
import data from './data/data.json';

function App() {
  return (
    <div>
      <Container data={data}/>
    </div>
  );
}

export default App;
