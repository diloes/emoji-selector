import { useState, forwardRef, useRef, useEffect } from "react"
import EmojiPickerContainer from "./EmojiPickerContainer"

import styles from "./emojiPicker.module.scss"

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
    // esto para que aparezca el cursor despuñes del emoji
    refInput.current.selectionStart = cursorPosition + emoji.symbol.length
    refInput.current.selectionEnd = cursorPosition + emoji.symbol.length
    refInput.current.focus()
  }

  const containerRef = useRef(null)

  // Para resetear:
  useEffect(() => {
    // evento de click en la ventana
    window.addEventListener('click', e => {
      // si damos click a un elemento que no sea el containerRef 
      if(!containerRef.current.contains(e.target)){
        // cerramos la ventana con los emojis
        setIsOpen(false)
      }
    })
  },[])
  
  return ( 
    <div ref={containerRef} className={styles.inputContainer}>
      <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😁</button>
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
