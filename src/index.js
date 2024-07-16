import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' // one . means in the same folder
const firstBook = {
  author: 'J. D. Vance',
  title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
  img: './images/book1.png',
}

const secondBook = {
  author: 'Rebecca Yarros',
  title: 'Onyx Storm',
  img: './images/book2.png',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>hdrfbiek ejrufnsierf ujnfoaeuf jYWNfhro hybfrao oayfob jhfrb</p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
