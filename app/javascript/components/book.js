import axios from 'axios';
import React, {useState} from 'react'
import BookForm from './BookForm';
const Book = (props) => {

  const {title, author, id, deleteBook} = props;
  
 
  const [showForm, setShowForm] = useState(false)
  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }
  const  renderBook = () => {
  return (
    <>
    <div>
      <h1> 
        {id}- {title}
   
      </h1>
      <h2> author: {author}</h2>
    </div>
    <div>
      <p>
    <span onClick={() => deleteHandler(id)}>delete</span>
    <p onClick={() =>setShowForm(true)}>edit</p>
    </p>
    </div>
    </>
  )
}

return (
<div>
  {!showForm && renderBook()}
  {showForm && <BookForm setShowForm={setShowForm} title={title} author={author}/>}
 
</div>
)
}

export default Book;