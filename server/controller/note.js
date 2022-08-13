const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secrets')
const {User, Note} = require('../models/note')

const makeuser = async (res, req) => {
    const {username, email, password: plainTextPassword } = req.body
    const password = await bcrypt.hash(plainTextPassword, 10)
    const user = await User.create({username: username, email: email, password: password})
    res.status(201).json(user) 
}

const loginuser = async (res, req) => {
    const {email, password} = req.body
    const user = await User.findOne({email}).lean()
    
    if (!user){
        return res.status(500).json({msg: "username or password is incorrect"})
    }
    if (await bcrypt.compare(password, user.password)){
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            }, JWT_SECRET
        )
        return res.status(200).json({msg: token})
    }
    return res.status(500).json({msg: "username or password is incorrect"})
}

const createnote = async (res,req) => {
    const note = await Note.create({user: req.params.user_id, title: req.body.title, body: req.body.content})
    res.status(201).json(note)
}

const editnote = async (res, req) => {
    const note = await Note.findOneAndUpdate({
        user: req.params.user_id,
        _id: req.params.note_id,
    }, req.body)
    res.status(200).json(note)
}

const getnote = async (res, req) => {
    const note = await Note.find({user: user_id})
    res.status(200).json(note)
}

module.exports = {
    makeuser,
    createnote,
    editnote,
    getnote,
    loginuser
}