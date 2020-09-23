// fanctional component (ファンクショナルコンポーネント) : このファイルには関数を定義していく

import React, {useState} from 'react'

// Hello React を返す関数
// 引数は props と記述する(決まり事)
const Basic1 = () => {
    

    // プロダクト関数を定義
    // 関数名 : setProducts  オブジェクト : product
    const [product, setProducts] = useState({name: '', price: ''})
    return (
        // 入力された値を動的に管理する
        // onChange : 値が変わった時呼び出される
        // 値が変わった時、setProductsで変更した内容をevtに保存する
        // evt.target.value : 現在入力されているフォームの値を取得している
        // ... : productの要素を分解してくれる(付けないと、nameを書き換えた時にpriceが初期値になってしまう)

        // div もしくは <></> で囲っておく制約がある
        <>
            <form>
                <input type='text' value={product.name}onChange={evt => setProducts({...product, name: evt.target.value})}/>

                <input type='text' value={product.price}onChange={evt => setProducts({...product, price: evt.target.value})}/>

            </form>

            <h3>Product name is {product.name}</h3>
            <h3>Product price is {product.price}</h3>
        </>
    )
}

export default Basic1
