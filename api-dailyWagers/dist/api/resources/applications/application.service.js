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
      employee_id: _joi["default"].string().required(),
      req_id: _joi["default"].string().required(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsImVtcGxveWVlX2lkIiwic3RyaW5nIiwicmVxdWlyZWQiLCJyZXFfaWQiLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZHQiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFdBQVcsRUFBQ0gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURpQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRnNCO0FBRzdCRSxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEVBSG9CO0FBSTdCSSxNQUFBQSxVQUFVLEVBQUNSLGdCQUFJUyxJQUFKO0FBSmtCLEtBQWxCLENBQWY7O0FBRGtCLHdCQVFJVCxnQkFBSVUsUUFBSixDQUFhWixJQUFiLEVBQWtCQyxNQUFsQixDQVJKO0FBQUEsUUFRWFksS0FSVyxpQkFRWEEsS0FSVztBQUFBLFFBUUxDLEtBUkssaUJBUUxBLEtBUks7O0FBU2xCLFFBQUdELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFsQixFQUEwQjtBQUN0QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTTtBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBTjtBQUNDO0FBZEssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgZW1wbG95ZWVfaWQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJlcV9pZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2R0OkpvaS5kYXRlKCksXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gSm9pLnZhbGlkYXRlKGJvZHksc2NoZW1hKTtcclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnt2YWx1ZX07XHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9Il19