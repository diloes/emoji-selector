import React from 'react'

const EmojiSearch = ({ onSearch }) => {
  
  return (
    <input onChange={onSearch} />
  )
}

export default EmojiSearch