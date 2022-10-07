import PropTypes from 'prop-types';
import noImage from '../icons/no-image.jpg';

const BookView = ({ book, onUpdateShelf }) => {

  // set book thumbnail fallback
  const thumbnail = () =>
    book.imageLinks
      ? book.imageLinks.smallThumbnail
      : noImage

  // handle shelf update
  const handleChange = (e) => onUpdateShelf(book, e.target.value);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${thumbnail()})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={handleChange}>
              <option value="na" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && book.authors.map((author, index) =>
          <div key={index} className="book-authors">{author}</div>
        )}
      </div>
    </li>
  )

}

BookView.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default BookView;
