"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _skills = _interopRequireDefault(require("./skills.models"));

var _skills2 = _interopRequireDefault(require("./skills.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _skills["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _skillsService$valida, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _skillsService$valida = _skills2["default"].validationSchema(req.body), error = _skillsService$valida.error, value = _skillsService$valida.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _skills["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              console.log(value);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _skills["default"].findById(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _skills["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  "delete": function _delete(req, res) {
    var id = req.params.id;

    _skills["default"].findByIdAndRemove(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3NraWxscy9za2lsbHMuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInNraWxscyIsImZpbmQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJza2lsbHNTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCIsImZpbmRCeUlkQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ01DLElBRE4sRUFDVztBQUNqQjtBQUNBQyx1QkFBT0MsSUFBUCxHQUFjQyxJQUFkLENBQW1CLFVBQUFDLElBQUk7QUFBQSxhQUFJTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBdkIsV0FDTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURWO0FBRUgsR0FMUztBQU1KRSxFQUFBQSxNQU5JLGtCQU1HVixHQU5ILEVBTU9DLEdBTlAsRUFNVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVVVSxvQkFBY0MsZ0JBQWQsQ0FBK0JaLEdBQUcsQ0FBQ2EsSUFBbkMsQ0FGVixFQUVKQyxLQUZJLHlCQUVKQSxLQUZJLEVBRUVDLEtBRkYseUJBRUVBLEtBRkY7O0FBQUEsb0JBR1JELEtBQUssSUFBSUEsS0FBSyxDQUFD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R0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFsRFMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBza2lsbHMgZnJvbSAnLi9za2lsbHMubW9kZWxzJztcclxuaW1wb3J0IHNraWxsc1NlcnZpY2UgZnJvbSAnLi9za2lsbHMuc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZmluZEFsbChyZXEscmVzLG5leHQpe1xyXG4gICAgICAgIC8vIHJlcy5qc29uKHttc2c6XCJGSW5kIGFsbCB1c2VycyEhXCJ9KVxyXG4gICAgICAgIHNraWxscy5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9PSBza2lsbHNTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IHNraWxscy5jcmVhdGUodmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4gcmVzLmpzb24oaXRlbSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmaW5kT25lKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICBza2lsbHMuZmluZEJ5SWQoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcImVtcCBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuICAgICAgICBza2lsbHMuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzp0cnVlfSkudGhlbihlbXA9PntcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJlbXAgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgc2tpbGxzLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG5cclxufSJdfQ==