import { useRef } from "react"
import EmojiPicker from "./EmojiPicker"

// Componente Principal 
const EmojiPickerInput = () => {

  // usamos el hook useRef
  const refInput = useRef(null)

  // hacemos foco en el input al clickar
  const handleClick = () => {
    refInput.current.focus()
  }

  return (
    <div>
      <input ref={refInput} />
      <button onClick={handleClick}>Focus</button>
      {/* Pasamos el ref a un componente hijo */}
      <EmojiPicker ref={refInput} /> 
    </div>
  )
}

export default EmojiPickerInput

