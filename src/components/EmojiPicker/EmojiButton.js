const EmojiButton = ({ emoji, handleClickEmoji }) => {

  return (
    <button onClick={handleClickEmoji}>{emoji.symbol}</button>
  )
}

export default EmojiButton

// TODO: Resolver error al clickar