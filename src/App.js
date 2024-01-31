import logo from './logo.svg';
import './App.css';
import Movies from './components/Movie'
import movies from './moviesarray';

const App = () => {
  return (
    movies.map(v => 
    <Movies 
      name={v.name} 
      year={v.year} 
      rating={v.rating} 
      img={v.image}/>)
  );
}



export default App;
