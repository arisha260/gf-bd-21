import { useState } from "react";

type CongratsItem = {
  id: number;
  text: string;
};


const congrats: Record<number, CongratsItem> = {
    1: { id: 1,   text: 'Привет!'},
    2: { id: 2,   text: 'Дорогая'},
    3: { id: 3,   text: 'Дорогая, любимая'},
    4: { id: 4,   text: 'Дорогая, любимая, моя'},
    5: { id: 5,   text: 'Опять'},
    6: { id: 6,   text: 'Опять фигачу'},
    7: { id: 7,   text: 'Опять фигачу открытку'},
    8: { id: 8,   text: 'Опять фигачу открытку с'},
    9: { id: 9,   text: 'Опять фигачу открытку с такой же'},
    10: { id: 10, text: 'Опять фигачу открытку с такой же идеей'},
    11: { id: 10, text: 'Потому что'},
    12: { id: 10, text: 'ничего'},
    13: { id: 10, text: 'ничего лучше'},
    14: { id: 10, text: 'не придумал'},
    15: { id: 10, text: ''},
    16: { id: 10, text: ''},
    17: { id: 10, text: ''},
    18: { id: 10, text: 'пупфцппфуп'},
    19: { id: 10, text: 'Поздравляю'},
    20: { id: 10, text: 'тебя'},
    21: { id: 10, text: 'с'},
    22: { id: 10, text: 'с днем рождения!'},
    23: { id: 10, text: 'Желаю'},
    24: { id: 10, text: 'Желаю тебе'},
    25: { id: 10, text: 'Всегда'},
    26: { id: 10, text: 'оставаться'},
    28: { id: 10, text: 'оставаться такой же'},
}

const columns = [
  ['Красивой', 'Умной', 'Доброй', 'Нежной', 'Милой', 'Заботливой', 'Искренней', 'Чуткой', 'Верной', 'Ласковой', 'Очаровательной', 'Прекрасной', 'Сильной', 'Независимой', 'Теплой', 'Изобретательной', 'Дальновидной', 'Наблюдательной', 'Увлеченной', 'Тонкой',],
  ['Няшкой-милашкой', 'Любимой', 'Единственной', 'Вдохновляющей', 'Смелой', 'Игривой', 'Страстной', 'Зажигательной', 'Уверенной', 'Искушающей', 'Опасной', 'Сексуальной', 'Неземной', 'Лучезарной', 'Волшебной', 'Дивной', 'Тактичной', 'Сентименталной', 'Прелестной', 'Пылкой',],
  ['Светлой', 'Обаятельной', 'Внимательной', 'Забавной', 'Творческой', 'Светлой', 'Обаятельной', 'Желанной', 'Комфортной', 'Открытой', 'Уютной', 'Легкой', 'Неподражаемая', 'Гибкой', 'Стройной', 'Неотразимой', 'Эмоциональной', 'Самой-самой', 'Самоотверженной', 'Настоящей'],
];

interface Props {
  clickCount: number,
}

export function SecondStage({clickCount}: Props) {

    const key = clickCount - 15;

    const [ssClickCount, setSsClickCount] = useState(0);

    return (
        <div className="stage second-stage">
            { key < 27?
            <div className="text">{congrats[key]?.text}</div>
            :
            <div className="ss-text-container" onClick={() => setSsClickCount(ssClickCount + 1)}>
                <div className={`text ss-big-text ${ssClickCount > 0 && ssClickCount <= 3 ? 'add-blur' : ''}`}>оставаться такой же</div>
                <div className="ss-text-grid">
                    {columns.map((col, colIn) => (
                        <div className="ss-col" key={colIn}>
                            {col.map((word, wordIn) => (
                                <div
                                key={wordIn}
                                className={`ss-text ${ssClickCount > colIn && ssClickCount <= 3 ? 'visible' : ''} ${ssClickCount < 3 ? 'unvisible' : ''}`}
                                style={{
                                    transitionDelay: `${wordIn * 0.05}s`
                                }}
                                >
                                {word}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}