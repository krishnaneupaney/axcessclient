import React, {useState} from 'react';
import JSONPretty from 'react-json-pretty';


const Profile = () => {
    const { user, isAuthenticated } = useState();

    return (

    isAuthenticated && (
        <div>
            <br />
            <img src={user.picture} alt={user.name} />
            <h2> {user.name} </h2>
            <p>{user.email}</p>
            <JSONPretty data={user} />
            {JSON.stringify(user, null,2)} 

        </div>
       
        )
    )
}

export default Profile
