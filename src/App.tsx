import { useState } from "react";
import {FirstStage} from "./components/First-stage";
import { SecondStage } from "./components/SecondStage";
import { ThirdStage } from "./components/ThirdStage";
import { Heart2Def } from "./components/icons/Heart2";

export function App() {

  const [clickCount, setClickCount] = useState(45);

  console.log(clickCount)

  return (
    <div className="page" onClick={() => setClickCount(clickCount + 1)}>
      <div className="container">
        {clickCount <= 10 ? <FirstStage clickCount={clickCount}/> : ''}

        {clickCount > 15 && clickCount < 47 ? <SecondStage  clickCount={clickCount}/> : ''}

        {clickCount >= 47 && clickCount < 70 ? <ThirdStage /> : ''}

        { clickCount >= 70 ?
          <div className="heart-container">
            <Heart2Def/>
          </div>
        :
          '' //nothing
        }

      </div>
    </div>
  )
}

