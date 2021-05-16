"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _employer = _interopRequireDefault(require("./employer.models"));

var _employer2 = _interopRequireDefault(require("./employer.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _employer["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _employerService$vali, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _employerService$vali = _employer2["default"].validationSchema(req.body), error = _employerService$vali.error, value = _employerService$vali.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _employer["default"].create(value).then(function (item) {
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

    _employer["default"].findById(id).then(function (data) {
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

    _employer["default"].findOneAndUpdate({
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

    _employer["default"].findByIdAndRemove(id).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2VtcGxveWVyL2VtcGxveWVyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJlbXBsb3llciIsImZpbmQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJlbXBsb3llclNlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCIkc2V0IiwiZW1wIiwiZmluZEJ5SWRBbmRSZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFDYztBQUNWQSxFQUFBQSxPQURVLG1CQUNGQyxHQURFLEVBQ0VDLEdBREYsRUFDTUMsSUFETixFQUNXO0FBQ2pCO0FBQ0FDLHlCQUFTQyxJQUFULEdBQWdCQyxJQUFoQixDQUFxQixVQUFBQyxJQUFJO0FBQUEsYUFBSUwsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBSjtBQUFBLEtBQXpCLFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUlQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FEVjtBQUVILEdBTFM7QUFNSkUsRUFBQUEsTUFOSSxrQkFNR1YsR0FOSCxFQU1PQyxHQU5QLEVBTVc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FFVVUsc0JBQWdCQyxnQkFBaEIsQ0FBaUNaLEdBQUcsQ0FBQ2EsSUFBckMsQ0FGVixFQUVKQyxLQUZJLHlCQUVKQSxLQUZJLEVBRUVDLEtBRkYseUJBRUVBLEtBRkY7O0FBQUEsb0JBR1JELEtBQUssSUFB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SDs7QUFDRCxhQUFPUCxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVCxDQUFQO0FBQ0gsS0FMRCxXQU1PLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSDtBQWxEUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtcGxveWVyIGZyb20gJy4vZW1wbG95ZXIubW9kZWxzJztcclxuaW1wb3J0IGVtcGxveWVyU2VydmljZSBmcm9tICcuL2VtcGxveWVyLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRkluZCBhbGwgdXNlcnMhIVwifSlcclxuICAgICAgICBlbXBsb3llci5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9PSBlbXBsb3llclNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vY3JlYXRlIHVzZXJcclxuICAgICAgICAgICAgYXdhaXQgZW1wbG95ZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgZW1wbG95ZXIuZmluZEJ5SWQoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcImVtcCBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuICAgICAgICBlbXBsb3llci5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OnRydWV9KS50aGVuKGVtcD0+e1xyXG4gICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcImVtcCBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICBlbXBsb3llci5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwidXNlciBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbn0iXX0=