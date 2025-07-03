import { myAxios } from "./Server";


export const signup = (user)=>{
    return myAxios.post('/api/auth/register',user).then((Response)=> Response.data())
}