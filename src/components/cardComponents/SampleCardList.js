import kirby from "../../img/kirbyGif.gif";
import rekt from '../../img/rekt.jpeg';
import bones from "../../img/bones.png";
import racoon from '../../img/racoon.jpeg'
const sampleCardList = [
  {
    attack1: "TRASH",
    attack1Description: "get in the ring and throw trash everywhere",
    attack1Stats: "100",
    attack2: "",
    attack2Description: "",
    attack2Stats: "",
    background: "black",
    borderColor: "#4fb06c",
    description: "Tacos for breakfast!",
    id: "0970249a-b570-46ea-8dc3-090b0ebfbbbee",
    img: racoon,
    level: "27",
    name: "Kevin",
    textColor: "#cd32c8",
  },
  {
    attack1: "Bones Day",
    attack1Description: "Does he have bones today?",
    attack1Stats: "50",
    attack2: "No Bones Day",
    attack2Description: "No bones today...",
    attack2Stats: "-20",
    background: "blue",
    borderColor: "#141b85",
    description:
      "The ultimate pug to tell you if your day is looking up or down",
    id: "8960896b-91c3-47c3-ac6f-36b5c7512b26",
    img: bones,
    level: "100",
    name: "Bones",
    textColor: "#d496c4",
  },
  {
    attack1: "REDUX",
    attack1Description: "ouch... brain hurt",
    attack1Stats: "20",
    attack2: "test",
    attack2Description: "this is a test attack that does stuff",
    attack2Stats: "38",
    background: "pink",
    borderColor: "#f3dddd",
    description: "does coding and stuff",
    id: "BMvWbCDDSijl1vWjXl6Q",
    img: kirby,
    level: "10",
    name: "Coder",
    textColor: "#1a0505",
  },
  {
    attack1: "wrekt",
    attack1Description: "rekt",
    attack1Stats: "80",
    attack2: "Maximum Rektage",
    attack2Description: "lol",
    attack2Stats: "5",
    background: "red",
    borderColor: "#454545",
    description: "lmao pls",
    id: "gJEzItM2AulCO8IMlChm",
    img: rekt,
    level: "2",
    name: "Get Wrekt",
    textColor: "#ffffff",
  },
];

export function getSampleCards() {
  return sampleCardList;
}
