// useMemo : 関数の無駄な再計算を防ぐ
import React, { useState, useMemo } from 'react'

const Memo = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const AddCount1 = () => {
        setCount1(prevCount1 => prevCount1 + 1)
    }

    const AddCount2 = () => {
        setCount2(prevCount2 => prevCount2 + 1)
    }

    // 現在の値が奇数かどうか判定
    // const isOdd = () => {
    //     let i = 0
    //     // あえて時間のかかる処理を実装している
    //     while(i < 500000000)
    //     i++
    //     return count1 % 2 !== 0
    // }

    // useMemoの引数をcount1とすることでcount2は処理が実行されない
    const isOdd = useMemo(() => {
        let i = 0
        // あえて時間のかかる処理を実装している
        while(i < 500000000)
        i++
        return count1 % 2 !== 0
    }, [count1])


    return (
        <div>
            <button onClick={AddCount1}>Count1: {count1}</button>
            <br />
            <span>{ isOdd ? 'Odd number' : 'Even number'}</span>
            <br />
            <button onClick={AddCount2}>Count2: {count2}</button>
        </div>
    )
}

export default Memo
