import { useState } from 'react'
import { data as emojiList } from '../../data'
import EmojiButton from './EmojiButton'
import EmojiSearch from './EmojiSearch'

import styles from "./emojiPicker.module.scss"

const EmojiPickerContainer = ({ handleClickEmoji }) => {

  const [emojis, setEmojis] = useState(emojiList)
 
  // Función de búsqueda, esta va a funcionar cuando estemos escribiendo en el input
  // y esta se ejecuta en el componente EmojiSearch, se la pasamos por props
  const handleSearch = e => {
    
    // guardamos el value del input en minusculas 
    const value = e.target.value.toLowerCase()

    // si en value hay un valor...
    if(!!value){
      // Filtramos el emoji que coincida con las letras que estamos poniendo en
      // el input, bien sea con en name o con las keywords
      const search = emojiList.filter( emoji => { 
        return value === emoji.name.toLocaleLowerCase().includes(value) 
        || emoji.keywords.toLocaleLowerCase().includes(value)
      })
      // 'seteamos' search a la variable de estado 'emojilist'
      setEmojis(search)
    }else {
      // si en value no hay nada 'seteamos' emojilist a la variable de estado
      setEmojis(emojiList)
    }
  }

  return (
    <div className={styles.emojiPickerContainer}> 
      <EmojiSearch onSearch={handleSearch} />
      <div className={styles.emojiList}>
        { 
          emojis.map( emoji => (
            <EmojiButton
              key={emoji.name}
              emoji={emoji}
              handleClickEmoji={handleClickEmoji}  
            />
          ))
        }
      </div>
    </div>
  )
}

export default EmojiPickerContainer

/*
NOTAS: 
 - if(!!value) -> Si value tiene un valor... 
*/