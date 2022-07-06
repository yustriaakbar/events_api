const Event = require('../models').Event;
const Category = require('../models').Category;
const responseData = require("../helpers/response-data");
const db = require('../models/index');
const Op = db.Sequelize.Op;

module.exports = {

  getById(req, res) {
    return Event
      .findByPk(req.params.id, {
        include: [],
      })
      .then((data) => {
        if (!data) {
          return responseData.error(res, 404, "Event Not Found!");
        }
        responseData.success(res, 200, "Success", data);
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },

  list(req, res) {
    return Event
      .findAll({
        where: {
            name: {
              [Op.like]: '%' + req.query.search + '%'
            }
        },
        order: [
          ['date', 'DESC']
        ],
        include: [{
            model: Category,
            as: 'category'
        }]
      })
      .then(events => {
        responseData.success(res, 200, "Success", events);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  store(req, res) {
    return Event
      .create({
        name: req.body.name,
        category_id: req.body.category_id,
        date: req.body.date,
        hours: req.body.hours,
        min_age: req.body.min_age,
        quota: req.body.quota,
        location: req.body.location,
      })
      .then((event) => {
        responseData.success(res, 201, "Success", event);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  update(req, res) {
    return Event
      .findByPk(req.params.id, {})
      .then(event => {
        if (!event) {
            return responseData.error(res, 404, "Event Not Found!");
        }

        return event
          .update({
            name: req.body.name,
            category_id: req.body.category_id,
            date: req.body.date,
            hours: req.body.hours,
            min_age: req.body.min_age,
            quota: req.body.quota,
            location: req.body.location,
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
    return Event
      .findByPk(req.params.id)
      .then(data => {
        if (!data) {
            return responseData.error(res, 404, "Event Not Found!");
        }

        return data
          .destroy()
          .then(() => responseData.success(res, 200, "Event successfully deleted!"))
          .catch((error) => {
            return responseData.error(res, 404, "Bad Request");
          });
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },
}