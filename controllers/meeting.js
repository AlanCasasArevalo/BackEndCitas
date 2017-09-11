"use strict";

const Meeting = require("../models/meeting");

function getMeetingById(req, res) {    
	let meetingId = req.params.meetingId;
	Meeting.findById(meetingId, (err, meeting) =>{
		if (err){
			return res.status(500).send({
				message : `Error al realizar la peticion: ${err}`
			});
		}

		if (!meeting){
			return res.status(404).send({
				message: "La cita no existe"
			});
		}
		res.status(200).send({
			meeting : meeting
		});
	});
}

function getMeetings(req, res) {
    	Meeting.find({}, (err, meetings) => {
		if (err){
			return res.status(500).send({
				message : `Error al realizar la peticion: ${err}`
			});
		}

 		if (!meetings){
			return res.status(404).send({
				message: "No existen citas"
			});
		}
		res.status(200).send({
			meetings
		});

	});    
}

function insertMeeting(req,res) {
	console.log("POST /api/meeting");
	
	let newMeetings = new Meeting();
	
	newMeetings.date = req.body.date;
	newMeetings.isOcuppied = req.body.isOcuppied
	newMeetings.description = req.body.description;
	newMeetings.price = req.body.price;

	
	console.log(newMeetings);
	newMeetings.save((err, meetingSaved) => {
		if (err){
			res.status(500).send({
				message:`Error al savar en la base de datos ${err}`
			});
		}
		res.status(200).send({
			meeting: meetingSaved
		});
	});
}

function updateMeeting(req,res) {
	let meetingId = req.params.meetingId;
	let meetingToUpdate = req.body;

	Meeting.findByIdAndUpdate(meetingId, meetingToUpdate, (err, meetingUpdated) => {
		if (err){
			res.status(500).send({
				message : `Error al actualizar la cita ${err}`
			});
		}
		res.status(200).send({
			message: "La cita ha sido actualizado correctamente.",
			meeting:meetingUpdated
		});
	});
}

function deleteMeeting(req, res) {
	let meetingToDelete = req.params.meetingId;

	Meeting.findById(meetingToDelete, (err, meetingDeleted) => {
		if (err){
			res.status(500).send({
				message:`Error al borrar la cita:  ${err}`
			});
		}

		// Metodo de borrar con fallo por si lo hay
		meetingDeleted.remove(err => {
			// Si hay fallo mensaje y codigo al usuario
			if (err){
				res.status(500).send({
				    message:`Error al borrar la cita:  ${err}`
				});
			}

			// Si todo ok mensaje al usuario
			res.status(200).send({
				message: "La cita ha sido borrado"
			});
		});
	});
}

// Exportamos todos los metodos para que puedan ser usados en otros modulos
module.exports = {
	getMeetingById,
	getMeetings,
	insertMeeting,
	updateMeeting,
	deleteMeeting
};