'use strict'

const mongoose = require('mongoose');
const Client = require('../models/client')
const service = require('../services');

function signUp(req, res) {
  const client = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    birthDate: req.body.birthDate,
    nationalId: req.body.nationalId,
    password: req.body.password
  })

  client.save((error) => {
    if(error) res.status(500).send({
        message: ` error al crear usuario ${error}`
    })

    return res.status(200).send({
        token: service.createToken( client )
    })
  })
}

function signIn(req, res) {
    Client.find({
		email:req.body.email
	}, (err, user) => {
		if (err) return res.status(500).send({
			message: err
		});
		if(!user) return res.status(404).send({
			message: "No existe el usuario "
		});

		req.client = client;
		res.status(200).send({
			message:"Te has logueado correctamente",
			token: service.createToken(client)
		});
	});
}

module.exports = {
    signUp,
    signIn
}



