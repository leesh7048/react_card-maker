import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Lee",
      theme: "light",
      title: "Software Engineer",
      email: "tmdgus7048@naver.com",
      message: "go for it",
      fileName: "Lee",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Lee2",
      theme: "dark",
      title: "Software Engineer",
      email: "tmdgus7048@naver.com",
      message: "go for it",
      fileName: "Lee",
      fileURL: "",
    },
    3: {
      id: "3",
      name: "Lee3",
      theme: "colorful",
      title: "Software Engineer",
      email: "tmdgus7048@naver.com",
      message: "go for it",
      fileName: "Lee",
      fileURL: null,
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    const updated = { ...cards };
    updated[card.id] = card;
    //기존의 아이디가 오브젝트에 없었으면 새로운것이 추가댐
    setCards(updated);
  };

  const deleteCard = (card) => {
    const updated = { ...cards };
    delete updated[card.id];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
