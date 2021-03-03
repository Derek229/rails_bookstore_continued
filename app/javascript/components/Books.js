import React from 'react';
import Book from './book'
const Books = (props) => {
    const { books } = props;

    const renderBooks = () => {
      if (books.length == 0) {
        return <h1> NO Items </h1>
      }
        return books.map((book) => {
          return <Book key={book.title} {...book} />;
        });

    };
    

    return (
      <div>
        <h1> Books component</h1>
        {renderBooks()}
      </div>
    )
    }
export default Books;
