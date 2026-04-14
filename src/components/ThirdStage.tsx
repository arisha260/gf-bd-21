import { useState } from "react";

type CongratsItem = {
  id: number;
  text: string;
};


const congrats: Record<number, CongratsItem> = {
    1: { id: 1,   text: 'какой была всегда'},
    2: { id: 2,   text: 'самой'},
    3: { id: 3,   text: 'самой самой'},
    4: { id: 4,   text: 'самой самой лучшей'},
    5: { id: 5,   text: 'я желаю'},
    6: { id: 6,   text: 'тебе'},
    7: { id: 7,   text: 'всего самого лучшего'},
    8: { id: 8,   text: 'потому что'},
    9: { id: 9,   text: 'ты этого достойна'},
    10: { id: 10, text: ''},
    11: { id: 11, text: ''},
    12: { id: 12, text: ''},
    13: { id: 13, text: 'я'},
    14: { id: 14, text: 'тебя'},
    15: { id: 15, text: 'очень'},
    16: { id: 16, text: 'очень очень'},
    17: { id: 17, text: 'сильно люблю'},
    18: { id: 18, text: ''},
    19: { id: 19, text: ''},
    20: { id: 20, text: 'с'},
    21: { id: 21, text: 'с днем рождения!'},
}


export function ThirdStage() {

    const [tsClickCount, setTsClickCount] = useState(1);

    return (
        <div className="stage third-stage" onClick={() => setTsClickCount(tsClickCount + 1)}>
            <div className="text">{congrats[tsClickCount]?.text}</div>
        </div>
    )
}