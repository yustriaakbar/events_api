module.exports = {
    success: (res, code = 200, message = "Success", data = null) => {
        return res.status(code).json({
          message,
          data,
        });
      },
    error: (res, code = 500, type = "Error", data = null) => {
      return res.status(code).json({
        errors: {
          type,
          data,
        },
      });
    },
  };