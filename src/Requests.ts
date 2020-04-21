import axios from 'axios';

class Requests {
    static login(credentials : {email: string, password: string}) : Promise<any> {
        return axios.put("http://localhost/tms-backend/public/users/login", credentials)
    }   

    static logout(id: number) : Promise<any> {
        return axios.put(`http://localhost/tms-backend/public/users/logout/${id}`)
    }

    static getOpenTerms() {
        return axios.get(`http://localhost/tms-backend/public/terms/open`)
    }

    static getAvailabilities(id: number) {
        return axios.get(`http://localhost/tms-backend/public/availbilities/open-timeslots/term/${id}`)
    }

}

export default Requests;