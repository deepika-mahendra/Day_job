"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _requirement = _interopRequireDefault(require("./requirement.models"));

var _requirement2 = _interopRequireDefault(require("./requirement.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _requirement["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _requirementService$v, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _requirementService$v = _requirement2["default"].validationSchema(req.body), error = _requirementService$v.error, value = _requirementService$v.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _requirement["default"].create(value).then(function (item) {
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

    _requirement["default"].findById(id).then(function (data) {
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

    _requirement["default"].findOneAndUpdate({
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

    _requirement["default"].findByIdAndRemove(id).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlcXVpcmVtZW50L3JlcXVpcmVtZW50LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJyZXF1aXJlIiwiZmluZCIsInRoZW4iLCJkYXRhIiwianNvbiIsImVyciIsInN0YXR1cyIsImNyZWF0ZSIsInJlcXVpcmVtZW50U2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJlbXAiLCJmaW5kQnlJZEFuZFJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNQyxJQUROLEVBQ1c7QUFDakI7QUFDQUMsNEJBQVFDLElBQVIsR0FBZUMsSUFBZixDQUFvQixVQUFBQyxJQUFJO0FBQUEsYUFBSUwsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBSjtBQUFBLEtBQXhCLFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUlQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FEVjtBQUVILEdBTFM7QUFNSkUsRUFBQUEsTUFOSSxrQkFNR1YsR0FOSCxFQU1PQyxHQU5QLEVBTVc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FFVVUseUJBQW1CQyxnQkFBbkIsQ0FBb0NaLEdBQUcsQ0FBQ2EsSUFBeEMsQ0FGVixFQUVKQyxLQUZJLHlCQUVKQSxLQUZJLEVBRUVDLEtBRkYseUJBRUVBLEtBRkY7O0FBQUEsb0JBR1JELEtB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O0FBQ0g7O0FBQ0QsYUFBT1AsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFsRFMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1aXJlIGZyb20gJy4vcmVxdWlyZW1lbnQubW9kZWxzJztcclxuaW1wb3J0IHJlcXVpcmVtZW50U2VydmljZSBmcm9tICcuL3JlcXVpcmVtZW50LnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRkluZCBhbGwgdXNlcnMhIVwifSlcclxuICAgICAgICByZXF1aXJlLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHJlcXVpcmVtZW50U2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy9jcmVhdGUgdXNlclxyXG4gICAgICAgICAgICBhd2FpdCByZXF1aXJlLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiByZXMuanNvbihpdGVtKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZpbmRPbmUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIHJlcXVpcmUuZmluZEJ5SWQoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcImVtcCBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuICAgICAgICByZXF1aXJlLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wPT57XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIHJlcXVpcmUuZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInVzZXIgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG59Il19