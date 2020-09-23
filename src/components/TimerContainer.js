import React, {useState} from 'react'
import Timer from './Timer'

const TimerContainer = () => {

    // 初期値はtrue(falseの時はタイマーを実行させたくない為)
    const [display, setDisplay] = useState(true)

    // { display && <Timer />} : 論理積を記述している。Timer関数はいつでもtrue

    return (
        <div>
            {/*
            setDisplay(!display) : !displayは常に反対のbooleanを返すことで反対の真偽値を返す

            display && <Timer /> : displayがfalseになると全体がfalseになるのでTimer関数が呼び出されない
            */}
            <button onClick={() => setDisplay(!display)}>Switch Timer</button>
            { display && <Timer />}
        </div>
    )
}

export default TimerContainer
