// 親 : AppContext  子 : B  孫 : C
import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {

    // これを実行するとApp.jsで指定されているプロバイダーの中身が代入される
    const value = useContext(AppContext)

    return (
        <div>
            <h3>C</h3>
            { value }
        </div>
        
    )
}

export default C
