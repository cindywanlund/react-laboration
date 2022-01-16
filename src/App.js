import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_STYLES = {
  position: 'relative',
  zIndex: 1
}

/*const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}*/

const MOVIE_DETAIL_MODAL = {
  top: 0,
  left: '50%',
  color: 'red'

}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div style={BUTTON_STYLES} onClick={() => console.log('clicked')}>
      <button onClick={() => setIsOpen(true)}>Info about movie</button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1 style={MOVIE_DETAIL_MODAL}>Title of movie</h1>
      </Modal>
    </div>
    {/* <div style={OTHER_CONTENT_STYLES}>Other content</div> */}
    </>
  )
}


/*import React, { useEffect, useState } from "react"
import Modal from './Modal'

import { List } from "./components/List";
import { fetchData } from "./utils/api";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchData().then(response => setFilms(response))
  })
  
  return (
    <div>
      <List films={films}/>
    </div>
  );
}

export default App;
*/