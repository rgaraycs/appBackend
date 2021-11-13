const express = require('express')
const router = express.Router()
const helloWorld = require('../backend/helloWorld')

router.post('/create', (request, response) =>{
	const helloWorlder = new helloWorld({
		ID:request.body.ID,
		Info:Request.body.Info
	})
	helloWorlder.save()
	.then(data =>{
		response.json(data)
	})
	.catch(error =>{
		response.json(error)
	})
		
	})
	
router.get('/helloworld', (request, response) =>{
	response.send('Hello World!')
})

module.exports = router

