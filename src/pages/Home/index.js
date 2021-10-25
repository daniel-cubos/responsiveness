import './style.css';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false',
        {
          method: 'GET'
        }
      )

      const { results } = await response.json();
      setMovies(results.reverse());
    }

    loadMovies();
  }, [])

  return (
    <div className="container-home">
      <Header />
      <section className="section-movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} cover={movie.poster_path} title={movie.title} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
