import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchBooks = ({ books }) => {

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search books by title or author.."
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
};

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default SearchBooks;
