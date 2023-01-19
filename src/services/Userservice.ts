import axios from "axios"
export class Userservice {
    private static URL:string = 'https://jsonplaceholder.typicode.com'

    public static  getAllUsers(){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let UserURL:string = `${this.URL}/users`
        return  axios.get(UserURL)
    }
}