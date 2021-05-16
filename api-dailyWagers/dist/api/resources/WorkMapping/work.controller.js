"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _work = _interopRequireDefault(require("./work.models"));

var _work2 = _interopRequireDefault(require("./work.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _work["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _workService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _workService$validati = _work2["default"].validationSchema(req.body), error = _workService$validati.error, value = _workService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _work["default"].create(value).then(function (item) {
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
  //    findOne(req,res,next){
  //         let {id} = req.params;
  //         Work.find({'employee_id':id})
  //         .populate('req_id')
  //         .then(data => {
  //             res.json(data)
  //         })
  //         .catch(err => res.status(500).json(err));
  //     },
  //  async findOne(req,res,next){
  //         const {id} = req.params;
  //        const options={
  //            populate:'req_id'
  //        }
  //        await Work.paginate({'employee_id':id}).then(data=>req.json(data))
  //         .catch(err => res.status(500).json(err));
  //         console.log(id);
  //     },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _work["default"].find({
      'employee_id': id
    }).populate('req_id').then(function (user) {
      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _work["default"].findOneAndUpdate({
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

    _work["default"].findByIdAndRemove(id).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsIldvcmsiLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwid29ya1NlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJwb3B1bGF0ZSIsInVzZXIiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImVtcCIsImZpbmRCeUlkQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ01DLElBRE4sRUFDVztBQUNqQjtBQUNBQyxxQkFBS0MsSUFBTCxHQUFZQyxJQUFaLENBQWlCLFVBQUFDLElBQUk7QUFBQSxhQUFJTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVCxDQUFKO0FBQUEsS0FBckIsV0FDTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQURWO0FBRUgsR0FMUztBQU1KRSxFQUFBQSxNQU5JLGtCQU1HVixHQU5ILEVBTU9DLEdBTlAsRUFNVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVVVSxrQkFBWUMsZ0JBQVosQ0FBNkJaLEdBQUcsQ0FBQ2EsSUFBakMsQ0FGVixFQUVKQyxLQUZJLHlCQUVKQSxLQUZJLEVBRUVDLEtBRkYseUJBRUVBLEtBRkY7O0FBQUEsb0JBR1JELEtBQUssSUFBSUEsS0FB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O0FBQ0QsYUFBT1AsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFwRVMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3JrIGZyb20gJy4vd29yay5tb2RlbHMnO1xyXG5pbXBvcnQgd29ya1NlcnZpY2UgZnJvbSAnLi93b3JrLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRkluZCBhbGwgdXNlcnMhIVwifSlcclxuICAgICAgICBXb3JrLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHdvcmtTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IFdvcmsuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbi8vICAgIGZpbmRPbmUocmVxLHJlcyxuZXh0KXtcclxuLy8gICAgICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXM7XHJcbi8vICAgICAgICAgV29yay5maW5kKHsnZW1wbG95ZWVfaWQnOmlkfSlcclxuLy8gICAgICAgICAucG9wdWxhdGUoJ3JlcV9pZCcpXHJcbi8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbi8vICAgICAgICAgICAgIHJlcy5qc29uKGRhdGEpXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4vLyAgICAgfSxcclxuXHJcbi8vICBhc3luYyBmaW5kT25lKHJlcSxyZXMsbmV4dCl7XHJcbi8vICAgICAgICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXM7XHJcbi8vICAgICAgICBjb25zdCBvcHRpb25zPXtcclxuLy8gICAgICAgICAgICBwb3B1bGF0ZToncmVxX2lkJ1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgYXdhaXQgV29yay5wYWdpbmF0ZSh7J2VtcGxveWVlX2lkJzppZH0pLnRoZW4oZGF0YT0+cmVxLmpzb24oZGF0YSkpXHJcbi8vICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbi8vICAgICB9LFxyXG4gZmluZE9uZShyZXEscmVzKXtcclxuICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgIFdvcmsuZmluZCh7J2VtcGxveWVlX2lkJzppZH0pLnBvcHVsYXRlKCdyZXFfaWQnKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG59LFxyXG5cclxuICAgIHVwZGF0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcclxuICAgICAgICBXb3JrLmZpbmRPbmVBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6dHJ1ZX0pLnRoZW4oZW1wPT57XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIFdvcmsuZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInVzZXIgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG59Il19