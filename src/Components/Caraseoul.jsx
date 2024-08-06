import { useState } from "react";
import "../index.css";
import useInterval from "../utils/useInterval";
import Card from "./Card";
import image from "../assets/caraseoul/1.jpg";
import image2 from "../assets/bus.jpeg";
import temple from '../assets/temple1.jpg'

const list = [
  { id: "1", imgsrc: image },
  { id: "2", imgsrc: image2 },
  { id: "3", imgsrc: image },
  { id: "4", imgsrc: temple },
];

function App() {
  const [arr, setArr] = useState(list.slice(0, 3));
  const [rest, setRest] = useState(list.slice(3));

  const [isScrolling, setIsScrolling] = useState(true);

  const updateArr = (idx) => {
    const [a, b, c] = arr;

    if (idx === 0) {
      const lastRem = rest[rest.length - 1];
      const beforeArr = [lastRem, a, b];
      const beforeRem = [c, ...rest.slice(0, rest.length - 1)];
      setArr(beforeArr);
      setRest(beforeRem);
    } else {
      const firstRem = rest[0];
      const afterArr = [b, c, firstRem];
      const afterRem = [...rest.slice(1), a];
      setArr(afterArr);
      setRest(afterRem);
    }
  };

  useInterval(
    () => {
      updateArr();
    },
    isScrolling ? 3000 : null
  );
  return (
    <div>
      {arr.map((item, idx) => (
        <div>
          <Card
            key={item}
            idx={idx}
            content={item}
            onClick={() => updateArr(idx)}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
            imgsrc={item.imgsrc}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
