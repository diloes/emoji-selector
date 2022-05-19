import styles from './emojiPicker.module.scss'

const EmojiButton = ({ emoji, handleClickEmoji }) => {

  const handleClick = () => {
    handleClickEmoji(emoji)
  }

  return (
    <button className={styles.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
  )
}

export default EmojiButton
