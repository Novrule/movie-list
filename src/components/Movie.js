import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ coverImg, title, id, genres, summary }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link basename={process.env.PUBLIC_URL} to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(0, 232)}...` : summary}</p>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
