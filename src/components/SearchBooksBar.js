import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBooksBar = ({ query, onUpdateQuery }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Back to My Books
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={query}
          placeholder="Search by Title or Author.."
          onChange={(event) => onUpdateQuery(event.target.value)}
        />
      </div>
    </div>
  )
};

SearchBooksBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
};

export default SearchBooksBar;
