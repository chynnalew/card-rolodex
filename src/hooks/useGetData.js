import React from "react";
import firebase from "firebase";

export const useGetData = () => {
  const [cardList, setCardList] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("cards")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((card) => arr.push(card.data()));
        setCardList(arr);
      });
  }, [db]);
  return [cardList];
};