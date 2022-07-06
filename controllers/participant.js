const Event = require('../models').Event;
const Participant = require('../models').Participant;
const responseData = require("../helpers/response-data");
const db = require('../models/index');
const Op = db.Sequelize.Op;

module.exports = {

  getById(req, res) {
    return Participant
      .findByPk(req.params.id, {
        include: [],
      })
      .then((data) => {
        if (!data) {
          return responseData.error(res, 404, "Participant Not Found!");
        }
        responseData.success(res, 200, "Success", data);
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },
  
  getByNik(req, res) {
    return Participant
      .findOne({
        where: {
          nik: {
            [Op.like]: req.body.nik
          }
      },
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: Event,
        as: 'event'
        }]
      })
      .then((data) => {
        if (!data) {
          return responseData.error(res, 404, "Participant Not Found!");
        }
        responseData.success(res, 200, "Success", data);
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },

  list(req, res) {
    return Participant
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ],
        include: [{
            model: Event,
            as: 'event'
        }]
      })
      .then(participants => {
        responseData.success(res, 200, "Success", participants);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  store(req, res) {
    return Participant
      .create({
        event_id: req.body.event_id,
        full_name: req.body.full_name,
        nik: req.body.nik,
        birthdate: req.body.birthdate,
        address: req.body.address,
        // phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
      })
      .then((participant) => {
        responseData.success(res, 201, "Success", participant);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  update(req, res) {
    return Participant
      .findByPk(req.params.id, {})
      .then(participant => {
        if (!participant) {
            return responseData.error(res, 404, "Participant Not Found!");
        }

        return participant
          .update({
            event_id: req.body.event_id,
            full_name: req.body.full_name,
            nik: req.body.nik,
            birthdate: req.body.birthdate,
            address: req.body.address,
            // phone: req.body.phone,
            email: req.body.email,
            gender: req.body.gender,
          })
          .then((data) => {
            responseData.success(res, 200, "Success", data);
          })
          .catch((error) => {
            return responseData.error(res, 400, error);
          });
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  destroy(req, res) {
    return Participant
      .findByPk(req.params.id)
      .then(data => {
        if (!data) {
            return responseData.error(res, 404, "Participant Not Found!");
        }

        return data
          .destroy()
          .then(() => responseData.success(res, 200, "Participant successfully deleted!"))
          .catch((error) => {
            return responseData.error(res, 404, "Bad Request");
          });
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },
}