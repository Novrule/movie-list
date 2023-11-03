import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const response = await fetch(url);
    const json = await response.json();

    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className={styles.movie_img}
          />
          <div>
            <h2 className={styles.movie_title}>{movie.title}</h2>
            <h3 className={styles.movie_year}></h3>
            <ul className={styles.movie_genres}>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
