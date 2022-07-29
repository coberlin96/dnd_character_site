import { stringify } from "querystring"

let api = "https://dnd-project-rest-api.herokuapp.com/api"
let token = "dd537470ea2b6d46f4e3896ce29272af0aedbd75a1a208c5" //TEMPORARY
let headers = {'Content-Type': 'application/json', 'x-access-token': `Bearer ${token}`
            }

export const userServerCalls = {
    create: async(data: any = {})=>{
        const response = await fetch(`https://dnd-project-rest-api.herokuapp.com/auth/signup`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create user')
        }
        return await response.json()
    },
    get: async(email:string)=>{
        const response = await fetch(`https://dnd-project-rest-api.herokuapp.com/auth/signup/${email}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        if (!response.ok){
            throw new Error('Failed to retrieve user')
        }
        return await response.json() 
        
    }
}


export const characterServerCalls = {
    get: async(id:string) =>{
        const response = await fetch(`${api}/character/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    getAll: async() =>{
        const response = await fetch(`${api}/character`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`${api}/character`,{
            method: `POST`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data')
        }
        return await response.json()
    },
    update: async(id:string, data:{}) =>{
        const response = await fetch(`${api}/character/${id}`,{
            method: `PUT`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`${api}/character/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return await response.json()
    }
}

export const statsServerCalls = {
    get: async(id:string) =>{
        const response = await fetch(`${api}/stats/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    getAll: async() =>{
        const response = await fetch(`${api}/stats`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`${api}/stats`,{
            method: `POST`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data')
        }
        return await response.json()
    },
    update: async(id:string, data:{}) =>{
        const response = await fetch(`${api}/stats/${id}`,{
            method: `PUT`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`${api}/stats/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return await response.json()
    }
}

export const classesServerCalls = {
    get: async(id:string) =>{
        const response = await fetch(`${api}/classes/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    getAll: async() =>{
        const response = await fetch(`${api}/classes`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`${api}/classes`,{
            method: `POST`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data')
        }
        return await response.json()
    },
    update: async(id:string, data:{}) =>{
        const response = await fetch(`${api}/classes/${id}`,{
            method: `PUT`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`${api}/classes/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return await response.json()
    }
}

export const subclassesServerCalls = {
    get: async(id:string) =>{
        const response = await fetch(`${api}/subclasses/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    getAll: async() =>{
        const response = await fetch(`${api}/subclasses`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`${api}/subclasses`,{
            method: `POST`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data')
        }
        return await response.json()
    },
    update: async(id:string, data:{}) =>{
        const response = await fetch(`${api}/subclasses/${id}`,{
            method: `PUT`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`${api}/subclasses/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return await response.json()
    }
}

export const skillsServerCalls = {
    get: async(id:string) =>{
        const response = await fetch(`${api}/skills/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    getAll: async() =>{
        const response = await fetch(`${api}/skills`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`${api}/skills`,{
            method: `POST`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data')
        }
        return await response.json()
    },
    update: async(id:string, data:{}) =>{
        const response = await fetch(`${api}/skills/${id}`,{
            method: `PUT`,
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`${api}/skills/${id}`,{
            method: `GET`,
            headers: headers
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return await response.json()
    }
}

