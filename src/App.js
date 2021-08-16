import { useState } from "react";
import "./styles.css";

var emojiData = {
  "🐶": "dog face",
  "🤣": "rofl-rolloing on the floor laughing",
  "🐱": "cat face",
  "😊": "blushed",
  "😍": "heart eyes",
  "🐼 ": "panda",
  "🙄": "rolling eyes",
  "😥": "cry",
  "🦁": "lion",
  "🐮 ": "Cow",
  "🤔": "thinking",
  "🐸": "frog",
  "😫": "tired face",
  "😎": "swag",
  "🤗": "hugging"
};

var emojiList = Object.keys(emojiData);
export default function App() {
  const [meaning, setMeaning] = useState();
  const inputEmojiHandler = (e) => {
    var val = e.target.value;

    var meaning = emojiData[val];
    if (meaning === undefined) {
      console.log("Sorry we do not have this emoji in our database");
    }
    setMeaning(meaning);
  };
  const clickedEmojiHandler = (item) => {
    console.log("clicked", item);
    var meaning = emojiData[item];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Know About Emojis</h1>
      <input
        placeholder="Enter the Emoji here"
        onChange={inputEmojiHandler}
      ></input>
      <br />
      <h3>{meaning}</h3>
      <br />
      <p>or try clicking on these emojis</p>
      {emojiList.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => {
              clickedEmojiHandler(item);
            }}
          >
            {item}
          </span>
        );
      })}
     
    </div>
  );
}
