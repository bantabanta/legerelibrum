import BookView from './BookView';
import PropTypes from 'prop-types';

const SearchBooksResults = ({
  books,
  query,
  queryBooks,
  onUpdateQuery,
  onUpdateShelf
}) => {

  // set the proper shelf for queryBooks
  const updatedQueryBooks = queryBooks.map(queryBook => {
    books.map(book =>
      book.id === queryBook.id && (queryBook.shelf = book.shelf)
    );
    if (!queryBook.shelf) {
      queryBook.shelf = 'none'
    };
    return queryBook;
  });

  return (
    <div className="search-books-results">
      <div>
        <span>
          Showing {queryBooks.length} results for '<strong>{query}</strong>'..
          <button onClick={() => onUpdateQuery('')}>Clear search</button>
        </span>
      </div>
      <ol className="books-grid">
        {updatedQueryBooks.map((book) =>
          <BookView
            key={book.id}
            onUpdateShelf={onUpdateShelf}
            book={book} />)}
      </ol>
    </div>
  )
};

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  queryBooks: PropTypes.array.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default SearchBooksResults;
