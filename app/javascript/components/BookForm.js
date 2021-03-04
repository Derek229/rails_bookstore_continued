import axios from 'axios'
import React, {useState} from 'react'

const BookForm = (props) => {

const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')

 const { addBook } = props
  

const handleSubmit = async (e) => {
    e.preventDefault();
    const formObj ={title: title, author: author}
    let res = await axios.post('/books', formObj)
    addBook(res.data)
    setTitle('')
    setAuthor('')
  }

  return (
    <form className= "book-form" onSubmit={handleSubmit}>
      <p>title </p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>author</p>
     <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
    < button type='submit'>add</button>
    </form>
  )
}
export default BookForm