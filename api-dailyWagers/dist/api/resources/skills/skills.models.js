"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var skillSchema = new schema({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: String,
    "default": "true"
  },
  created_date: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'skills'
});

var _default = new _mongoose["default"].model('skills', skillSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3NraWxscy9za2lsbHMubW9kZWxzLmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwic2tpbGxTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2RhdGUiLCJEYXRlIiwibm93IiwiY29sbGVjdGlvbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTQyxNQUF4QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxJQUFJSCxNQUFKLENBQVc7QUFDM0JJLEVBQUFBLElBQUksRUFBQztBQUNEQyxJQUFBQSxJQUFJLEVBQUNDLE1BREo7QUFFREMsSUFBQUEsUUFBUSxFQUFDO0FBRlIsR0FEc0I7QUFLM0JDLEVBQUFBLFFBQVEsRUFBQztBQUNMSCxJQUFBQSxJQUFJLEVBQUNDLE1BREE7QUFFTCxlQUFRO0FBRkgsR0FMa0I7QUFVM0JHLEVBQUFBLFlBQVksRUFBQztBQUNUSixJQUFBQSxJQUFJLEVBQUNLLElBREk7QUFFVCxlQUFRQSxJQUFJLENBQUNDO0FBRko7QUFWYyxDQUFYLEVBZWxCO0FBQUNDLEVBQUFBLFVBQVUsRUFBQztBQUFaLENBZmtCLENBQXBCOztlQWdCZSxJQUFJWCxxQkFBU1ksS0FBYixDQUFtQixRQUFuQixFQUE0QlYsV0FBNUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IHVybGVuY29kZWQgfSBmcm9tICdib2R5LXBhcnNlcic7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHNraWxsU2NoZW1hID0gbmV3IHNjaGVtYSh7XHJcbiAgICBuYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgaXNBY3RpdmU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6XCJ0cnVlXCJcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkX2RhdGU6e1xyXG4gICAgICAgIHR5cGU6RGF0ZSxcclxuICAgICAgICBkZWZhdWx0OkRhdGUubm93XHJcbiAgICAgICBcclxuICAgIH0sXHJcbn0se2NvbGxlY3Rpb246J3NraWxscyd9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdza2lsbHMnLHNraWxsU2NoZW1hKTsiXX0=