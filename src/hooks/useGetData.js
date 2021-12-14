import React from "react";
import firebase from "firebase";

export const useGetData = () => {
  const [cardList, setCardList] = React.useState([]);
  React.useEffect(() => {
    firebase.firestore().collection("cards")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((card) => arr.push(card.data()));
        setCardList(arr);
      });
  }, [firebase.firestore()]);
  return [cardList];
};