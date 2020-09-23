import React, {useState, useEffect} from 'react'

// useEffect : レンダリングされる度に実行される
// 使用シーン : コンポーネントが読み込まれた時に1回だけ行いたい処理がある場合、あるステートが変化した時だけ行いたい処理など
// 例えば : APIとバックエンドが連携している時、コンポーネントを立ち上げた時にあるデータを一括で取得したい時

const BasicUseEffect = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')

    // 第二引数には反応して欲しいステートの名前を渡すと、処理を返してくれる
    // 第二引数に空のリストを渡すとレンダリングされた時の1回だけ実行される
    useEffect(() => {
        console.log('useEffect を使っています')
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(prevCount=>prevCount + 1)}>Click {count}</button>

            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
        </div>
    )
}

export default BasicUseEffect
