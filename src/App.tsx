import './App.css';
import Filter from './components/(Body)/Filter';
import ListaCointainer from './components/(Body)/ListaCointainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <ListaCointainer />
    </div>
  );
}

export default App;
