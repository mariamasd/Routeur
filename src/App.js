
import './App.css';
import MovieCard from './MovieCard';
import Header from './Header';
import {Routes,Route} from "react-router-dom"
import Description from './Description';
import Formulaire from './Formulaire';
function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<MovieCard/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='/formulaire' element={<Formulaire/>}/>
      </Routes>
    </div>
  );
}

export default App;
