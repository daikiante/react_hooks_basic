// fanctional component (ファンクショナルコンポーネント) : このファイルには関数を定義していく

import React, {useState} from 'react'

// Hello React を返す関数
// 引数は props と記述する(決まり事)
const Basic1 = (props) => {
    const clickHundler = () => {
        console.log('クリックされました')
    }

    // カウンターを定義
    const [count, setCount] = useState(0)
    return (
        // div もしくは <></> で囲っておく制約がある
        <>
            <button onClick={clickHundler}>Click</button>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <h1>Hello { props.name }</h1>
            <h1>Hello React 2</h1>
        </>
    )
}

export default Basic1
