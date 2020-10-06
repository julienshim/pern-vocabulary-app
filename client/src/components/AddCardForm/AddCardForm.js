import React, { Fragment, useState, useContext } from "react";
import CardsContext from "../../context/cards-context";
import "./AddCard.scss";

const AddCardForm = () => {
  const [book, setBook] = useState("");
  const [deck, setDeck] = useState(0);
  const [korean, setKorean] = useState("");
  const [english, setEnglish] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [hanja, setHanja] = useState("");
  const [onMaster, setOnMaster] = useState(false);

  const { dispatch } = useContext(CardsContext);

  const addCard = async (e) => {
    e.preventDefault();
    try {
      const body = {
        book,
        deck: +deck,
        korean,
        english,
        pronunciation,
        hanja,
        onMaster: !onMaster ? false : true
      };
      const uri = "http://localhost:5000/cards/add";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(uri, options);
      const jsonData = await response.json();
      console.log(jsonData);
      if (response) {
        dispatch({
          type: "ADD_CARD",
          card_id: jsonData.card_id,
          book,
          deck: +deck,
          korean,
          english,
          pronunciation,
          hanja,
          onMaster: !onMaster ? false : true,
        });
      }
      setBook("")
      setDeck(0)
      setKorean("")
      setEnglish("")
      setPronunciation("")
      setHanja("")
      setOnMaster(false)
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1>Vocabulary List</h1>
      <form className="form" onSubmit={addCard}>
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <input
          type="text"
          value={deck}
          onChange={(e) => setDeck(e.target.value)}
        />
        <input
          type="text"
          value={korean}
          onChange={(e) => setKorean(e.target.value)}
        />
        <input
          type="text"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          type="text"
          value={pronunciation}
          onChange={(e) => setPronunciation(e.target.value)}
        />
        <input
          type="text"
          value={hanja}
          onChange={(e) => setHanja(e.target.value)}
        />
        <input
          type="checkbox"
          checked={onMaster}
          onChange={(e) => setOnMaster(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default AddCardForm;
