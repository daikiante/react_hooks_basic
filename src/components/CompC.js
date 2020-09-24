// 孫コンポーネントからディスパッチを実行して親(App.js)を変える

import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {

    // App.jsのAppContext.Providerで定義した値を取得している
    // コンテキストが複数ある場合はカーリーブラケットで囲んで取得している
    const {dispatchProvided} = useContext(AppContext)
    return (
        <div>
            <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>
        </div>
    )
}

export default CompC
