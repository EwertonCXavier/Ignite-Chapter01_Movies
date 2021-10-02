import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}



interface PropsContent {
  movies: MovieProps[];
}


export function Content(props: PropsContent) {
  console.log("Here we go!");
  console.log(props);
  return (
    <main>
      <div className="movies-list">
        {props.movies.map(movie=> (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}