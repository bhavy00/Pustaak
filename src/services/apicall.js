const axios = require('axios')

async function createUser(data){
    const user = await axios.post('/api/v1/notes/signup', {username: data.username, email: data.email, password: data.password})
    
    const info = {
        user_id: user._id,
        username: user.username
    }
    return info
}

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

async function loginUser(data){
    const token = await axios.post('/api/v1/notes/login', {email: data.email, password: data.password})
    try {
        const info = parseJwt(token.msg)
        return info
    } catch (error) {
        return token
    }
}

async function createNote(data){
    const note = await axios.post('/api/v1/notes', {
        user: data.user,
        title: data.title,
        body: data.content
    })
    return note
}

async function getNotes(){
    const notes = await axios.get('/api/v1/notes/:userid')
    return notes 
}

module.exports = {
    createUser,
    createNote,
    loginUser,
    getNotes
}