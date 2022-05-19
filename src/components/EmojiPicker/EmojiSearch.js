import styles from './emojiPicker.module.scss'

const EmojiSearch = ({ onSearch }) => {
  
  return (
    <input onChange={onSearch} className={styles.search} />
  )
}

export default EmojiSearch