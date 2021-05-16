"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _application = _interopRequireDefault(require("./application.models"));

var _application2 = _interopRequireDefault(require("./application.service"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _application["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _applicationService$v, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _applicationService$v = _application2["default"].validationSchema(req.body), error = _applicationService$v.error, value = _applicationService$v.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _application["default"].create(value).then(function (item) {
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
  //   findOne(req,res,next){
  //     let {id} = req.params.id;
  //     application.findById(id)
  //     .populate('employee_id')
  //     .then(data => {
  //         res.json(data)
  //     })
  //     .catch(err => res.status(500).json(err));
  // },
  findOne: function findOne(req, res, next) {
    var id = req.params.id;
    var options = {
      populate: 'employee_id ref_id'
    };

    _application["default"].paginate({
      'req_id': id
    }, options).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });

    console.log(id);
  },
  update: function update(req, res) {
    var id = req.params.id;

    _application["default"].findOneAndUpdate({
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

    _application["default"].findByIdAndRemove(id).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXBwbGljYXRpb24iLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwiYXBwbGljYXRpb25TZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwib3B0aW9ucyIsInBvcHVsYXRlIiwicGFnaW5hdGUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCIsImZpbmRCeUlkQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2VBRWM7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ01DLElBRE4sRUFDVztBQUNqQjtBQUNBQyw0QkFBWUMsSUFBWixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUE1QixXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUxTO0FBTUpFLEVBQUFBLE1BTkksa0JBTUdWLEdBTkgsRUFNT0MsR0FOUCxFQU1XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRVVVLHlCQUFtQkMsZ0JBQW5CLENBQW9DWixHQUFHLENBQUNhLElBQXhDLENBRlYsRUFFSkMsS0FGSSx5QkFFSkEsS0FGSSxFQUVF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T0wsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsVUFBQUEsR0FBRyxFQUFFO0FBQU4sU0FBckIsQ0FBUDtBQUNIOztBQUNELGFBQU9QLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQVA7QUFDSCxLQUxELFdBTU8sVUFBQUUsR0FBRztBQUFBLGFBQUlQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FOVjtBQU9IO0FBM0RTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwbGljYXRpb24gZnJvbSAnLi9hcHBsaWNhdGlvbi5tb2RlbHMnO1xyXG5pbXBvcnQgYXBwbGljYXRpb25TZXJ2aWNlIGZyb20gJy4vYXBwbGljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRkluZCBhbGwgdXNlcnMhIVwifSlcclxuICAgICAgICBhcHBsaWNhdGlvbi5maW5kKCkudGhlbihkYXRhID0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9PSBhcHBsaWNhdGlvblNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vY3JlYXRlIHVzZXJcclxuICAgICAgICAgICAgYXdhaXQgYXBwbGljYXRpb24uY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIC8vICAgZmluZE9uZShyZXEscmVzLG5leHQpe1xyXG4gICAgLy8gICAgIGxldCB7aWR9ID0gcmVxLnBhcmFtcy5pZDtcclxuICAgIC8vICAgICBhcHBsaWNhdGlvbi5maW5kQnlJZChpZClcclxuICAgIC8vICAgICAucG9wdWxhdGUoJ2VtcGxveWVlX2lkJylcclxuICAgIC8vICAgICAudGhlbihkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgcmVzLmpzb24oZGF0YSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIGZpbmRPbmUocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcG9wdWxhdGU6J2VtcGxveWVlX2lkIHJlZl9pZCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBhcHBsaWNhdGlvbi5wYWdpbmF0ZSh7J3JlcV9pZCc6aWR9LG9wdGlvbnMpLnRoZW4oZGF0YT0+IHJlcy5qc29uKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnI9PnJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpXHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wPT57XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG59Il19