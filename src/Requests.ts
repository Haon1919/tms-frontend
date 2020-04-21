import axios from 'axios';

class Requests {
    static login(credentials : {email: string, password: string}) : Promise<any> {
        return axios.put("http://localhost/tms-backend/public/users/login", credentials)
    }   

    static logout(id: number) : Promise<any> {
        return axios.put(`http://localhost/tms-backend/public/users/logout/${id}`)
    }

    static sendResetPasswordEmail(email : string) : Promise<any> {
        return axios.put("http://localhost/tms-backend/public/users/send-reset-password-email", {email: email})
    }

    static getResetPasswordEmailID(id: number) : Promise<any> {
        return axios.get(`http://localhost/tms-backend/public/users/reset-password-email-id/${id}`)
    }
}

export default Requests;