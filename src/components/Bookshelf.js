import BookView from './BookView';
import PropTypes from 'prop-types';

const Bookshelf = ({ shelf, books, onUpdateShelf }) => {

  const shelfBooks = books.filter((book) => book.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) =>
            <BookView
              key={book.id}
              onUpdateShelf={onUpdateShelf}
              book={book} />
          )}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
