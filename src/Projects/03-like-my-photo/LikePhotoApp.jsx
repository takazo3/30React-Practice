import React, { useState } from 'react'
import Title from '../components/Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"

export default function LikePhotoApp() {

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true)
      setCount(count + 1)
    } else {
      setLike(false)
      setCount(count - 1)
    }
  };
  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={`Likes: ${count}`} />
      <div className="card card-dark m-auto shadow-sm" style={{ width: 300, cursor: 'pointer' }}>
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small style={{ userSelect: "none" }}>DogyDog</small>
        </div>
        <img src="https://media.istockphoto.com/id/138190715/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%AD%90%E7%8A%AC%E3%81%AE%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%89%E3%83%AC%E3%83%88%E3%83%AA%E3%83%90%E3%83%BC.jpg?s=612x612&w=0&k=20&c=2HFLSqPC3m26vDdDVzBFAAK81CeXLJlYkzBBC5_4VpE=" alt="dog" className="img-fluid" style={{ height: "fit-content", userSelect: "none" }} onDoubleClick={toggleLike} />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: "space-between" }}
        >

          <AiOutlineComment />
          {like ? <AiFillHeart className="text-danger"  onClick={toggleLike} /> : <AiOutlineHeart  onClick={toggleLike}/>}
        </div>
      </div>
    </div>
  )
}
