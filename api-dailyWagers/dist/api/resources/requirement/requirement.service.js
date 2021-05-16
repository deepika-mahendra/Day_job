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
      title: _joi["default"].string(),
      description: _joi["default"].string(),
      employer: _joi["default"].string(),
      location: _joi["default"].string(),
      skill_req: _joi["default"].string(),
      worker_req: _joi["default"].number(),
      duration: _joi["default"].number(),
      start_dt: _joi["default"].date(),
      end_dt: _joi["default"].date(),
      payment: _joi["default"].number(),
      benifits: _joi["default"].string(),
      url: _joi["default"].string(),
      isActive: _joi["default"].string(),
      created_date: _joi["default"].date()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlcXVpcmVtZW50L3JlcXVpcmVtZW50LnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwidGl0bGUiLCJzdHJpbmciLCJkZXNjcmlwdGlvbiIsImVtcGxveWVyIiwibG9jYXRpb24iLCJza2lsbF9yZXEiLCJ3b3JrZXJfcmVxIiwibnVtYmVyIiwiZHVyYXRpb24iLCJzdGFydF9kdCIsImRhdGUiLCJlbmRfZHQiLCJwYXltZW50IiwiYmVuaWZpdHMiLCJ1cmwiLCJpc0FjdGl2ZSIsImNyZWF0ZWRfZGF0ZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxLQUFLLEVBQUNILGdCQUFJSSxNQUFKLEVBRHVCO0FBRTdCQyxNQUFBQSxXQUFXLEVBQUNMLGdCQUFJSSxNQUFKLEVBRmlCO0FBRy9CRSxNQUFBQSxRQUFRLEVBQUNOLGdCQUFJSSxNQUFKLEVBSHNCO0FBSTdCRyxNQUFBQSxRQUFRLEVBQUNQLGdCQUFJSSxNQUFKLEVBSm9CO0FBSzlCSSxNQUFBQSxTQUFTLEVBQUNSLGdCQUFJSSxNQUFKLEVBTG9CO0FBTTlCSyxNQUFBQSxVQUFVLEVBQUNULGdCQUFJVSxNQUFKLEVBTm1CO0FBTzdCQyxNQUFBQSxRQUFRLEVBQUNYLGdCQUFJVSxNQUFKLEVBUG9CO0FBUTdCRSxNQUFBQSxRQUFRLEVBQUNaLGdCQUFJYSxJQUFKLEVBUm9CO0FBUzdCQyxNQUFBQSxNQUFNLEVBQUNkLGdCQUFJYSxJQUFKLEVBVHNCO0FBVTdCRSxNQUFBQSxPQUFPLEVBQUNmLGdCQUFJVSxNQUFKLEVBVnFCO0FBVzdCTSxNQUFBQSxRQUFRLEVBQUNoQixnQkFBSUksTUFBSixFQVhvQjtBQVk3QmEsTUFBQUEsR0FBRyxFQUFDakIsZ0JBQUlJLE1BQUosRUFaeUI7QUFhN0JjLE1BQUFBLFFBQVEsRUFBQ2xCLGdCQUFJSSxNQUFKLEVBYm9CO0FBYzdCZSxNQUFBQSxZQUFZLEVBQUNuQixnQkFBSWEsSUFBSjtBQWRnQixLQUFsQixDQUFmOztBQURrQix3QkFrQkliLGdCQUFJb0IsUUFBSixDQUFhdEIsSUFBYixFQUFrQkMsTUFBbEIsQ0FsQko7QUFBQSxRQWtCWHNCLEtBbEJXLGlCQWtCWEEsS0FsQlc7QUFBQSxRQWtCTEMsS0FsQkssaUJBa0JMQSxLQWxCSzs7QUFtQmxCLFFBQUdELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFsQixFQUEwQjtBQUN0QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTTtBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBTjtBQUNDO0FBeEJLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIHRpdGxlOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246Sm9pLnN0cmluZygpLFxyXG4gICAgICAgICAgZW1wbG95ZXI6Sm9pLnN0cmluZygpLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjpKb2kuc3RyaW5nKCksXHJcbiAgICAgICAgICAgc2tpbGxfcmVxOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICB3b3JrZXJfcmVxOkpvaS5udW1iZXIoKSxcclxuICAgICAgICAgICAgZHVyYXRpb246Sm9pLm51bWJlcigpLFxyXG4gICAgICAgICAgICBzdGFydF9kdDpKb2kuZGF0ZSgpLFxyXG4gICAgICAgICAgICBlbmRfZHQ6Sm9pLmRhdGUoKSxcclxuICAgICAgICAgICAgcGF5bWVudDpKb2kubnVtYmVyKCksXHJcbiAgICAgICAgICAgIGJlbmlmaXRzOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgdXJsOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLnN0cmluZygpLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2RhdGU6Sm9pLmRhdGUoKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==