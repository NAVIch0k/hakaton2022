import axios from 'axios'
import FormData from 'form-data'
const instance = axios.create({
    baseURL: 'https://хакатон2022.рф/api',
    withCredentials: true
})

export const Registration_API = {
    set_data(escort_file, users) {
        let formData = new FormData()
        formData.append("escort_file", escort_file, escort_file.name);
        users.forEach(e => {
            for (const key in e) {
                switch (key) {
                    case 'pd_file': {
                        formData.append(key, e[key], e[key].name)
                        break
                    }
                    case 'photo_file': {
                        formData.append(key, e[key], e[key].name)
                        break
                    }
                    case 'parent_file':{
                        if (e[key]) {
                            formData.append(key, e[key], e[key].name)
                        }else{
                            formData.append(key, escort_file , "empty")
                        }
                        break
                    }
                    case 'name':{
                        formData.append(key, e[key])
                        break
                    }
                    case 'age':{
                        formData.append(key, e[key],)
                        break
                    }
                    case 'email':{
                        formData.append(key, e[key],)
                        break
                    }
                    case 'phone':{
                        formData.append(key, e[key],)
                        break
                    }
                    case 'registration':{
                        formData.append(key, e[key],)
                        break
                    }
                    case 'study_place':{
                        formData.append(key, e[key],)
                        break
                    }
                }
            }
        });
        return instance.post('/registration', formData)
    }
}