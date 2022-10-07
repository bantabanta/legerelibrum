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
    if (!queryBook.shelf) {queryBook.shelf = 'none'};
    return queryBook;
  });

  return (
    <div className="search-books-results">
      {
        updatedQueryBooks.length > 0
          ? (
            <div>
              <span>
                Showing {queryBooks.length} results for '<strong>{query}</strong>'..
                <button onClick={() => onUpdateQuery('')}>Clear search</button>
              </span>
              <ol className="books-grid">
                {updatedQueryBooks.map((book) =>
                  <BookView
                    key={book.id}
                    onUpdateShelf={onUpdateShelf}
                    book={book} />)}
              </ol>
            </div>
          )
          : (
            <div>
              <div>
                Sorry, there are no results for '<strong>{query}</strong>'..
                <button onClick={() => onUpdateQuery('')}>Clear search</button>
              </div><br></br>
              <span>Suggestions:</span>
              <ul>
                <li>Make sure all words are spelled correctly.</li>
                <li>Try more general keywords.</li>
                <li>Try fewer keywords.</li>
              </ul>
            </div>
          )
      }
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
