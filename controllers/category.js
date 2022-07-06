const Category = require('../models').Category;
const responseData = require("../helpers/response-data");

module.exports = {

  getById(req, res) {
    return Category
      .findByPk(req.params.id, {
        include: [],
      })
      .then((data) => {
        if (!data) {
          return responseData.error(res, 404, "Category Not Found!");
        }
        responseData.success(res, 200, "Success", data);
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },

  list(req, res) {
    return Category
      .findAll({
        limit: 10,
        order: [
          ['createdAt', 'DESC']
        ],
      })
      .then(categories => {
        responseData.success(res, 200, "Success", categories);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  store(req, res) {
    return Category
      .create({
        name: req.body.category_name,
      })
      .then((category) => {
        responseData.success(res, 201, "Success", category);
      })
      .catch((error) => {
        return responseData.error(res, 400, error);
      });
  },

  update(req, res) {
    return Category
      .findByPk(req.params.id, {})
      .then(category => {
        if (!category) {
            return responseData.error(res, 404, "Category Not Found!");
        }

        return category
          .update({
            name: req.body.category_name,
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
    return Category
      .findByPk(req.params.id)
      .then(data => {
        if (!data) {
            return responseData.error(res, 404, "Category Not Found!");
        }

        return data
          .destroy()
          .then(() => responseData.success(res, 200, "Category successfully deleted!"))
          .catch((error) => {
            return responseData.error(res, 404, "Bad Request");
          });
      })
      .catch((error) => {
        return responseData.error(res, 400, "Bad Request");
      });
  },
}