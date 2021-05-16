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
      isActive: _joi["default"].string(),
      created_dt: _joi["default"].date()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3NraWxscy9za2lsbHMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZHQiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLElBQUksRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUR3QjtBQUU3QkMsTUFBQUEsUUFBUSxFQUFDTixnQkFBSUksTUFBSixFQUZvQjtBQUc3QkcsTUFBQUEsVUFBVSxFQUFDUCxnQkFBSVEsSUFBSjtBQUhrQixLQUFsQixDQUFmOztBQURrQix3QkFPSVIsZ0JBQUlTLFFBQUosQ0FBYVgsSUFBYixFQUFrQkMsTUFBbEIsQ0FQSjtBQUFBLFFBT1hXLEtBUFcsaUJBT1hBLEtBUFc7QUFBQSxRQU9MQyxLQVBLLGlCQU9MQSxLQVBLOztBQVFsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQWJLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kdDpKb2kuZGF0ZSgpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==