import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const bookshelves = [
  {key: 'CurrentlyReading' , name: 'Currently Reading'},
  {key: 'WantToRead' , name: 'Want to Read'},
  {key: 'Read' , name: 'Read'}
]

const ListBooks = () => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookshelves.map((shelf) =>
        <Bookshelf
        shelf={shelf}
        key={shelf.key} />
        )}

      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;
