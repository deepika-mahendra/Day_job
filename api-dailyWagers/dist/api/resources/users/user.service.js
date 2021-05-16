"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      name: _joi["default"].string().required(),
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      contact: _joi["default"].number().required(),
      role: _joi["default"].string().required()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  },
  validateLoginSchema: function validateLoginSchema(body) {
    var schema = _joi["default"].object().keys({
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required()
    });

    var _Joi$validate2 = _joi["default"].validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    console.log(error);

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29udGFjdCIsIm51bWJlciIsInJvbGUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwidmFsaWRhdGVMb2dpblNjaGVtYSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxJQUFJLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEd0I7QUFFN0JDLE1BQUFBLEtBQUssRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUUsS0FBYixHQUFxQkQsUUFBckIsRUFGdUI7QUFHN0JFLE1BQUFBLFFBQVEsRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUhvQjtBQUk3QkcsTUFBQUEsT0FBTyxFQUFDUixnQkFBSVMsTUFBSixHQUFhSixRQUFiLEVBSnFCO0FBSzdCSyxNQUFBQSxJQUFJLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWI7QUFMd0IsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBU0lMLGdCQUFJVyxRQUFKLENBQWFiLElBQWIsRUFBa0JDLE1BQWxCLENBVEo7QUFBQSxRQVNYYSxLQVRXLGlCQVNYQSxLQVRXO0FBQUEsUUFTTEMsS0FUSyxpQkFTTEEsS0FUSzs7QUFVbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0MsR0FmSztBQWlCTkUsRUFBQUEsbUJBakJNLCtCQWlCY2pCLElBakJkLEVBaUJtQjtBQUNyQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JJLE1BQUFBLEtBQUssRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUUsS0FBYixHQUFxQkQsUUFBckIsRUFEdUI7QUFFN0JFLE1BQUFBLFFBQVEsRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYjtBQUZvQixLQUFsQixDQUFmOztBQURxQix5QkFNQ0wsZ0JBQUlXLFFBQUosQ0FBYWIsSUFBYixFQUFrQkMsTUFBbEIsQ0FORDtBQUFBLFFBTWRhLEtBTmMsa0JBTWRBLEtBTmM7QUFBQSxRQU1SQyxLQU5RLGtCQU1SQSxLQU5ROztBQU9yQkcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7O0FBQ0EsUUFBR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFNO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFOO0FBQ0g7QUE3QkssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJvbGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue3ZhbHVlfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB2YWxpZGF0ZUxvZ2luU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDpKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19