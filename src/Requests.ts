import axios from 'axios';

const API_BASE_URL = "http://localhost:8888/tms-backend/public/";

class Requests {
    static login(credentials : {email: string, password: string}) : Promise<any> {
        return axios.put("http://localhost/tms-backend/public/users/login", credentials)
    }   

    static logout(id: number) : Promise<any> {
        return axios.put(`http://localhost/tms-backend/public/users/logout/${id}`)
    }

    static sendResetPasswordEmail(email : string) : Promise<any> {
        return axios.post(API_BASE_URL+"users/send-reset-password-email", {email: email})
    }

    static getUserForResetPasswordEmailId(id: any) : Promise<any> {
        return axios.get(API_BASE_URL+`users/reset-password-email-id/${id}`)
    }
}

export default Requests;