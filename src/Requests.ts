import axios from 'axios';

class Requests {
    static login(credentials : {email: string, password: string}) : Promise<any> {
        return axios.put("http://localhost/tms-backend/public/users/login", credentials)
    }   

    static logout(id: number) : Promise<any> {
        return axios.put(`http://localhost/tms-backend/public/users/logout/${id}`)
    }
}

export default Requests;