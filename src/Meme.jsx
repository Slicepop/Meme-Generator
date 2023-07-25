import { useState } from 'react';
import memesData from "/src/memesData.js"


export default function Meme() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    const [imgSrc, setImgSrc] = useState(0);
    function newImg(){
        setImgSrc(memesData.data.memes[getRandomInt(100)].url)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={newImg}
                >
                    Get a new meme image 🐱‍🐉
                </button>
            </div>
            <div className="meme">

                <img src={imgSrc} alt="meme" />
            </div>
        </main>
    )
}