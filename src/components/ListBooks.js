import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

const ListBooks = ({ books, onUpdateShelf }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Books</h1>
      </div>

      <div className="list-books-content">
        {bookshelves.map((shelf) =>
          <Bookshelf
            key={shelf.key}
            shelf={shelf}
            onUpdateShelf={onUpdateShelf}
            books={books} />
        )}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default ListBooks;
