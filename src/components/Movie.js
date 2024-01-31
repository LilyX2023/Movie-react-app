import moviesarray from '../moviesarray'

const Movie = (props) => {
    console.log(typeof props.b)
      return (
          <div >
            <h3>Movie: {props.name}</h3>
            <h3>Year: {props.year}</h3>
            <h3>Rating: {props.rating}</h3>
            <img src= {props.img}
            />
          </div>
        );
  }
  
export default Movie
