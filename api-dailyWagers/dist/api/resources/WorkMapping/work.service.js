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
      employee_id: _joi["default"].array().required(),
      req_id: _joi["default"].string().required(),
      isActive: _joi["default"].string().required(),
      created_dt: _joi["default"].date().required()
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
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsImFycmF5IiwicmVxdWlyZWQiLCJyZXFfaWQiLCJzdHJpbmciLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZHQiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFdBQVcsRUFBQ0gsZ0JBQUlJLEtBQUosR0FBWUMsUUFBWixFQURpQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFDTixnQkFBSU8sTUFBSixHQUFhRixRQUFiLEVBRnNCO0FBRzdCRyxNQUFBQSxRQUFRLEVBQUNSLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFIb0I7QUFJN0JJLE1BQUFBLFVBQVUsRUFBQ1QsZ0JBQUlVLElBQUosR0FBV0wsUUFBWDtBQUprQixLQUFsQixDQUFmOztBQURrQix3QkFRSUwsZ0JBQUlXLFFBQUosQ0FBYWIsSUFBYixFQUFrQkMsTUFBbEIsQ0FSSjtBQUFBLFFBUVhhLEtBUlcsaUJBUVhBLEtBUlc7QUFBQSxRQVFMQyxLQVJLLGlCQVFMQSxLQVJLOztBQVNsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQWRLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX2lkOkpvaS5hcnJheSgpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJlcV9pZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGNyZWF0ZWRfZHQ6Sm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==