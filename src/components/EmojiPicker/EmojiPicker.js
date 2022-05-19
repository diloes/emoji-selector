import { useState, forwardRef } from "react"
import EmojiPickerContainer from "./EmojiPickerContainer"
import { data as emojiList } from '../../data'

// Recibimos los props y además como un parámetro añadido el ref
export const EmojiPicker = (props, refInput) => {
  
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClickEmoji = (emoji) => {

    // guardamos la posicion del cursor
    const cursorPosition = refInput.current.selectionStart

    // guardamos el texto actual en el input
    const text = refInput.current.value

    // dividimos el value en dos elementos
    const prev = text.slice(0, cursorPosition)
    const next = text.slice(cursorPosition)

    // agregamos el emoji en medio, donde está el cursor
    refInput.current.value = prev + emoji.symbol + next
  }

  return (
    <div>
      <button onClick={handleClickOpen}>😁</button>
      {
        isOpen
        ? <EmojiPickerContainer handleClickEmoji={handleClickEmoji} />
        : ''
      }
    </div>
  )
}

// Este sería como el componente padre que envuelve a EmojiPicker
// el forwardRef nos sirve para usaer el ref de otro componente
export default forwardRef(EmojiPicker)
