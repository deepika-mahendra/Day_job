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
      name: _joi["default"].string().required(),
      dob: _joi["default"].date().required(),
      address: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      State: _joi["default"].string().required(),
      Pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      email: _joi["default"].string().email().required(),
      Adhar_no: _joi["default"].number().required(),
      experience: _joi["default"].number().required(),
      skill_req: _joi["default"].string().required(),
      status: _joi["default"].string().required(),
      gender: _joi["default"].string().required(),
      isActive: _joi["default"].string(),
      created_date: _joi["default"].string()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsInN0cmluZyIsInJlcXVpcmVkIiwibmFtZSIsImRvYiIsImRhdGUiLCJhZGRyZXNzIiwiY2l0eSIsIlN0YXRlIiwiUGluIiwibnVtYmVyIiwiY29udGFjdCIsImVtYWlsIiwiQWRoYXJfbm8iLCJleHBlcmllbmNlIiwic2tpbGxfcmVxIiwic3RhdHVzIiwiZ2VuZGVyIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2RhdGUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsV0FBVyxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRGlCO0FBRTdCQyxNQUFBQSxJQUFJLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGd0I7QUFHN0JFLE1BQUFBLEdBQUcsRUFBQ1AsZ0JBQUlRLElBQUosR0FBV0gsUUFBWCxFQUh5QjtBQUk3QkksTUFBQUEsT0FBTyxFQUFDVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnFCO0FBSzdCSyxNQUFBQSxJQUFJLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFMd0I7QUFNN0JNLE1BQUFBLEtBQUssRUFBQ1gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQU51QjtBQU83Qk8sTUFBQUEsR0FBRyxFQUFDWixnQkFBSWEsTUFBSixHQUFhUixRQUFiLEVBUHlCO0FBUTdCUyxNQUFBQSxPQUFPLEVBQUNkLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFScUI7QUFTN0JVLE1BQUFBLEtBQUssRUFBQ2YsZ0JBQUlJLE1BQUosR0FBYVcsS0FBYixHQUFxQlYsUUFBckIsRUFUdUI7QUFVN0JXLE1BQUFBLFFBQVEsRUFBQ2hCLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFWb0I7QUFXN0JZLE1BQUFBLFVBQVUsRUFBQ2pCLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFYa0I7QUFZN0JhLE1BQUFBLFNBQVMsRUFBQ2xCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFabUI7QUFhN0JjLE1BQUFBLE1BQU0sRUFBQ25CLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFic0I7QUFjN0JlLE1BQUFBLE1BQU0sRUFBQ3BCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFkc0I7QUFlN0JnQixNQUFBQSxRQUFRLEVBQUNyQixnQkFBSUksTUFBSixFQWZvQjtBQWdCN0JrQixNQUFBQSxZQUFZLEVBQUN0QixnQkFBSUksTUFBSjtBQWhCZ0IsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBb0JJSixnQkFBSXVCLFFBQUosQ0FBYXpCLElBQWIsRUFBa0JDLE1BQWxCLENBcEJKO0FBQUEsUUFvQlh5QixLQXBCVyxpQkFvQlhBLEtBcEJXO0FBQUEsUUFvQkxDLEtBcEJLLGlCQW9CTEEsS0FwQks7O0FBcUJsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQTFCSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBlbXBsb3llZV9pZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgbmFtZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZG9iOkpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWRkcmVzczpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY2l0eTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgU3RhdGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIFBpbjpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgY29udGFjdDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgQWRoYXJfbm86Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2U6Sm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHNraWxsX3JlcTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgc3RhdHVzOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBnZW5kZXI6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kYXRlOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue3ZhbHVlfTtcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgIH0iXX0=