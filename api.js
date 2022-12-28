import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const Api = axios.create({
    baseURL: 'https://api.vk.com/method/',
    params: {
        "access_token": process.env.VK_TOKEN,
        "v": "5.81"
    }
})

export default Api