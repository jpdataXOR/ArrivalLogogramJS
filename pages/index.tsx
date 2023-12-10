import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [typedLetters, setTypedLetters] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === "") {
      setTypedLetters("");
    } else {
      const lastWord = event.target.value.trim().split(" ").pop() || "";
      const currentLetter = lastWord.charAt(lastWord.length - 1);
      setTypedLetters(
        lastWord.replace(
          currentLetter,
          `<span style="color: red;">${currentLetter}</span>`,
        ) || "",
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Start Typing...</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={styles.largeTextbox}
      />
      <div
        className={styles.centeredDisplay}
        dangerouslySetInnerHTML={{ __html: typedLetters }}
      ></div>
      <div className={styles.linkContainer}>
        <Link href="/logogramdrafts.html">Draw Logogram</Link>
      </div>
    </div>
  );
};

export default Home;
