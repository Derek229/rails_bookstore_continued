import React, { useState } from 'react';
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'
const App = (props) => {
  const [books, setBooks] = useState([])

  const deleteBook = (id) => {
    const filteredBooks = books.filter( book => {
        return book.id !== id
      })
      setBooks(filteredBooks)
  }

  const addBook = (book) => {
    setBooks([...books, book])
  }
    
  const getBooks = async () => {
      let res = await axios.get ("/books");
    
     setBooks(res.data)
    };
   

    return (
      <div>
        <h1>App Page</h1>
        <button onClick={getBooks}>Get Books</button>
        <BookForm addBook={addBook} />
        <Books books={books} deleteBook={deleteBook} /> 
      </div>
    );

};





export default App;


