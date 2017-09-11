"use strict";

// Requerimiento de modulos
const express = require("express");
const meetingController = require("../controllers/meeting");
const clientControllers = require("../controllers/client");
const auth = require("../middlewares/auth");
const api = express.Router(); 

api.get("/meetings", meetingController.getMeetings);
api.get("/meeting/:meetingId", meetingController.getMeetingById);
api.post("/meeting", meetingController.insertMeeting);
api.put("/meeting/:meetingId", meetingController.updateMeeting);
api.delete("/meeting/:meetingId", meetingController.deleteMeeting);
api.post("/signup", clientControllers.signUp);
api.post("/signin", clientControllers.signIn);
api.get("/private", auth, (req, res) => {
	res.status(200).send({
		message: "Tienes acceso"
	});
});

module.exports = api;
