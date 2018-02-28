import React from 'react';
import Tweet from './tweet.js';
import NewTweet from './newTweet.js'

let Thread = ()=>{
    return [
        <NewTweet key='a' />,
        <section className="thread" key='b'>
            <Tweet name="Gilbert Chavarria" text="Found some time for @mute this weekend. Great Noir / Sci-Fi from @ManMadeMoon. @netflix has become an perfect home for projects like this and Paul Rudd showed up! #scifi" />
            <Tweet name="Joe Warren" text="Finally took some time to dive into @gatsbyjs and I'm really digging it so far #reactjs #gatsbyjs" />
        </section>
    ]
};

export default Thread;