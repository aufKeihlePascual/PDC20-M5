import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Form from "./Form";

function UserProfilePage(){

    const [userData, setUserData] = useState({
        name: 'Keihle Dianne Pascual', 
        email: 'keihlepascual@gmail.com',
        username: 'kdpascual'
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState)=> ({
            ...prevState,
            ...updatedInfo,
        }));
    };

    

    return (
        <div>
            <Navigation/>
            <Profile user={userData}/>
            <Form user={userData} onUpdate={handleUpdate}/>

        </div>
    );
}

export default UserProfilePage;