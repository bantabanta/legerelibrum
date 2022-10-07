import PropTypes from 'prop-types';
import { useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import SearchBooksResults from './SearchBooksResults';
import SearchBooksBar from './SearchBooksBar';

const SearchBooks = ({ books, onUpdateShelf }) => {
  const [query, setQuery] = useState('');
  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    fetchQueryBooks(query);
  };

  // API call to update books, handling no results
  const fetchQueryBooks = (query) => {
    if (query !== '') {
      const setBooks = async () => {
        const res = (await BooksAPI.search(query));
        res.error
          ? setQueryBooks([])
          : setQueryBooks(res)
      };
      setBooks();
    } else {
      setQueryBooks([]);
    };
  };

  return (
    <div className="search-books">
      <SearchBooksBar
        query={query}
        onUpdateQuery={updateQuery} />
      {
        query !== '' && (
          <SearchBooksResults
            query={query}
            queryBooks={queryBooks}
            onUpdateShelf={onUpdateShelf}
            onUpdateQuery={updateQuery}
            books={books}
          />
        )}
    </div>
  )
};

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default SearchBooks;
