import request from '../utils/request';

export const getMenu = async function () {
    const response = await request.get("/menu")
    
    return response.data
}

export const getOrder = async function () {
    const response = await request.get("/order")
    
    return response.data
}

export const getQueue = async function () {
    const response = await request.get("/queue")
    
    return response.data
}

export const createOrder = async function (payload) {
    const response = await request.post("/queue", payload)
    
    return response.data
}