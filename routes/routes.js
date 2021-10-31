const express = require('express')
const router = express.Router()
const helloWorld = require('R:\Program Files (x86)\Notepad++\backend')

router.post('/path', (request, response) =>{
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
		
	}
}

module.exports = router

