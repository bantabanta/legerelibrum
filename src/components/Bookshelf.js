import BookView from './BookView';
import PropTypes from 'prop-types';

const Bookshelf = ({ shelf }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BookView />
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.object.isRequired
}

export default Bookshelf;
