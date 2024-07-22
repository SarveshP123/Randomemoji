import React, { useState, useEffect } from "react";
import './Randomemojii.css';

const EmojiApp = () => {
    const [emojis, setEmojis] = useState([])
    const [currentemojii, setCurrentemojji] = useState({ emojiName: '', emojiCode: '' });

    useEffect(() => {
        const fetchEmojis = async () => {
            const response = await fetch(
                "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
            );
            const data = await response.json();
            const emojiList = data.slice(0, 1500).map(item => ({
                emojiName: item.character,
                emojiCode: item.unicodeName,
            }));
            setEmojis(emojiList);
        };
        fetchEmojis();
    }, []);
    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * emojis.length);
        setCurrentemojji(emojis[randomNum]);
    };
    return (
        <div className="background">
            <div>
            <button className="btn" onClick={handleClick}>
                {currentemojii.emojiName || `click me`}
            </button>
            <p id='emoji-name'>{currentemojii.emojiCode}</p>
            </div>
        </div>
    )
}

export default EmojiApp;