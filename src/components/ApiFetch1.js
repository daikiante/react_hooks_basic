// APIを叩くサイト : https://jsonplaceholder.typicode.com/
// npm install axios
import React, {useState, useEffect} from 'react'
// import axios from 'axios'


// 非同期処理で値を取得する方法は2種類 : axios fetch
const ApiFetch1 = () => {

    // APIから取得した投稿を格納する変数
    const [posts, setPosts] = useState([])

    // id を管理するステート
    const [id, setId] = useState(1)

    const [clicked, setClicked] = useState(false)

    const handlerClicked = () => {
        setClicked(!clicked)
    }
    useEffect(() => {

        // axiosで取得する場合
        // // 受け取った値をresに格納してアロー関数として値を受け渡す
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        //     // res.data : resに入っているdata(jsonデータ)を取ってきている
        //     setPosts(res.data)
        // })


        // fetchで取得する場合
        // JavaScriptはhtmlでデータが返ってくるので.jsonとしてあげる
        // さらに受け取ったjsonデータをdata変数に代入してsetPostsに格納している
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'}).then(res => res.json()).then(data => {
            setPosts(data)
        })
    }, [clicked])

    return (
        <div>
        <input type='text' value={id} onChange={evt=>setId(evt.target.value)} />
        <br />


        {/* handlerClicked : setClickedを切り替える処理*/}
        <button type='button' onClick={handlerClicked}>Get Post</button>

        <br />
        { posts.title }


            {/*
            <ul>
                {
                    posts.map(post => <li key={post.id}> {post.title} </li>)
                }
            </ul>
            */}
        </div>
    )
}

export default ApiFetch1
