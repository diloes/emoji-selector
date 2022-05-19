const EmojiButton = ({ emoji, handleClickEmoji }) => {

  const handleClick = () => {
    handleClickEmoji(emoji)
  }

  return (
    <button onClick={handleClick}>{emoji.symbol}</button>
  )
}

export default EmojiButton
