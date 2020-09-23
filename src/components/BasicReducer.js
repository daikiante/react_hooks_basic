/*
ここではカウンターに対して
・1を足す
・3倍する
・リセットする
アクションを定義していく
*/
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
}


const BasicReducer = () => {
    // count : 実際に渡される値
    // dispatch : 処理の内容(add_1, multiple_3, reset)
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={()=>dispatch('add_1')}>Add + 1</button>
            <button onClick={()=>dispatch('multiple_3')}>multiple * 3</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}

export default BasicReducer
