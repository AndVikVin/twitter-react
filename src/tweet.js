import React from 'react';

let Tweet = (props)=>{
    return(
        <section className="tweet">
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <button>Retweet</button>
        </section>
    );
};

export default Tweet;