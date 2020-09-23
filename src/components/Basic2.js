import React, {useState} from 'react'

// 配列に対する操作を学ぶ

const Basic2 = () => {

    // useStateを定義 初期値は空
    const [products, setProducts] = useState([])

    // 配列に要素を対していく関数
    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: 'Hello React'
        }])
    }

    // mapで展開するときはユニークなkeyを指定しないとエラーになる
    return (
        <div>
            <button onClick={newProducts}>Add New Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} id: {product.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default Basic2
