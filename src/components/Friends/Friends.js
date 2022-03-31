import React, { useEffect, useState } from 'react';
import SingleFriends from '../SingleFriends/SingleFriends';

const Friends = () => {
    const [friends , setFriends] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    } , [])
    return (
        <div>
            <h2>Hello Friends . how r u</h2>
            <p>Parle kicu taka dis: {friends.length}</p>
            {
                friends.map(friend => <SingleFriends 
                    friend={friend}
                    key={friend.id}
                ></SingleFriends>)
            }
        </div>
    );
};

export default Friends;