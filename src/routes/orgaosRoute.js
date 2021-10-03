const { Router } = require('express')
const OrgaosController = require('../controllres/OrgaosController')

const router = Router()

router.get('/orgao', OrgaosController.listAll)
router.get('/orgao/:id', OrgaosController.list)
router.post('/orgao', OrgaosController.create)

module.exports = router