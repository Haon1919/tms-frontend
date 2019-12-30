import React, {useState, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

//TODO: Remove when login functionaility or a better solution for testing logins is found
const testLogin = {
    userName: "John123",
    password: "dude",
    userInfo: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        ageClass: "ADULT"
    }
};

export const Login : React.FC= () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {updateUser} = useContext(UserContext);  

    const loginUser = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        if(name === testLogin.userName && password === testLogin.password && updateUser !== undefined){
            updateUser(testLogin.userInfo);
        }
    }
    return (
        <section>
            <form onSubmit={loginUser}>
                <input type="text" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />   
                <input type="password" value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
                <input type="submit" value="submit"/>
            </form>
            
        </section>
    );
}