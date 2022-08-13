const router = require('express').Router()

const {
    makeuser,
    createnote,
    editnote,
    getnote,
    loginuser
} = require('../controller/note')

router.route('/signup').post(makeuser)
router.route('/login').post(loginuser)
router.route('/:user_id').post(createnote).get(getnote)
router.route('/:user_id/:note_id').patch(editnote)

module.exports = router