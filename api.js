import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://api.vk.com/method/',
    params: {
        "access_token": "vk1.a.SnyFZDt_wef331sE_GImsFf7-kEw63qgzrwbCmxrB5rf1m11fbFtogw6mRNr4GGXt9k4g2W2cU9odjhO6k0TpAdMr4SYCeLbJCiBDDOPRBIMPEaMLpRt1oONQsMQFZ1ZTFmvA7mNZscMwtlRDxaGjsi5fqH46h4CapifwdIkysSGi60ev1X6F7OP7DTDLCD8GShFwm0xbCq-KhIb-Opswg",
        "v": "5.81"
    }
})

export default Api