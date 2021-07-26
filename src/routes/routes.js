const router = require('express').Router()

router.get('/clientes', (req, res) =>{

    res.send({
        teste: 1234
    })
})

module.exports = router