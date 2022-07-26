"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTeam = exports.deleteTeam = exports.createTeam = exports.getAllTeamForDashboard = exports.updateAboutUser = exports.deleteAboutUser = exports.createAboutUser = exports.getAllAboutUserForDashboard = exports.updateStudentWork = exports.deleteStudentWork = exports.createStudentWork = exports.getAllStudentWorksForDashboard = exports.updateCategory = exports.deleteCategory = exports.createCategory = exports.getAllCategoryForDashboard = exports.updateWork = exports.deleteWork = exports.createWork = exports.getPrevWorkForDashboard = exports.getNextWorkForDashboard = exports.getAllWorksForDashboard = exports.getNextWorksByCategoryAndLimits = exports.getWorksByCategoryAndLimits = exports.queryByCategoryId = exports.getCategory = exports.getWorks = exports.getNewestWorks = void 0;

var _firebase = _interopRequireDefault(require("../firebaseConfig/firebase"));

var _firestore = require("firebase/firestore");

var _storage = require("firebase/storage");

var _util = require("@firebase/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = (0, _storage.getStorage)();
/**
 * 取5筆資料
 * **/

var getNewestWorks = function getNewestWorks(callback) {
  var q, data;
  return regeneratorRuntime.async(function getNewestWorks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.where)("display", "==", '1'), (0, _firestore.limit)(5));
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return doc.data();
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * 到 firebase 撈作品資料表 全部
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 1 設定顯示的
 * **/


exports.getNewestWorks = getNewestWorks;

var getWorks = function getWorks(callback) {
  var q, data;
  return regeneratorRuntime.async(function getWorks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.where)("display", "==", '1'));
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context2.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return doc.data();
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 處理作品的圖片路徑


exports.getWorks = getWorks;

var mapDataWithImage = function mapDataWithImage(folder, data, callback) {
  var dataSorted, twoarr;
  return regeneratorRuntime.async(function mapDataWithImage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          dataSorted = data.sort(function (a, b) {
            return b.sort_num - a.sort_num;
          });
          twoarr = dataSorted.map(function _callee(element) {
            var imagesRef, newimgurl;
            return regeneratorRuntime.async(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    imagesRef = (0, _storage.ref)(storage, "".concat(folder, "/").concat(element.img));
                    _context3.next = 3;
                    return regeneratorRuntime.awrap((0, _storage.getDownloadURL)(imagesRef)["catch"](function (error) {
                      switch (error.code) {
                        case 'storage/object-not-found':
                          break;

                        case 'storage/unauthorized':
                          break;

                        case 'storage/canceled':
                          break;

                        case 'storage/unknown':
                          break;

                        default:
                          console.log('');
                      }
                    }));

                  case 3:
                    newimgurl = _context3.sent;
                    return _context3.abrupt("return", _objectSpread({}, element, {
                      imgpath: newimgurl
                    }));

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          });
          _context4.t0 = callback;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Promise.all(twoarr));

        case 5:
          _context4.t1 = _context4.sent;
          (0, _context4.t0)(_context4.t1);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var mapDataWithUid = function mapDataWithUid(data, callback) {
  var dataSorted, latestSortNum, twoarr;
  return regeneratorRuntime.async(function mapDataWithUid$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          dataSorted = data.sort(function (a, b) {
            return b.sort_num - a.sort_num;
          });
          latestSortNum = (parseInt(dataSorted[0].sort_num) + 1).toString();
          twoarr = dataSorted.map(function _callee2(element) {
            return regeneratorRuntime.async(function _callee2$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", _objectSpread({}, element, {
                      latestSortNum: latestSortNum
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          });
          _context6.t0 = callback;
          _context6.next = 6;
          return regeneratorRuntime.awrap(Promise.all(twoarr));

        case 6:
          _context6.t1 = _context6.sent;
          (0, _context6.t0)(_context6.t1);

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};
/**
 * 到 firebase 撈分類資料表
 * 不用處理圖片路徑的 直接 set
 * **/


var getCategory = function getCategory(callback) {
  var q, data;
  return regeneratorRuntime.async(function getCategory$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "category"));
          _context7.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context7.sent;
          // mapCategoryData(data.docs.map(doc=> doc.data()))
          callback(data.docs.map(function (doc) {
            return doc.data();
          }));

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
};
/**
 * query by catergory id
 * 按分類 分好作品  給ROW用
 * **/


exports.getCategory = getCategory;

var queryByCategoryId = function queryByCategoryId(cid, callback) {
  var q, data;
  return regeneratorRuntime.async(function queryByCategoryId$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.where)("category", "==", cid), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.where)("display", "==", '1'), (0, _firestore.limit)(15));
          _context8.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context8.sent;
          // console.log(data.docs.map(doc=> doc.data()))
          mapDataWithImage('data', data.docs.map(function (doc) {
            return doc.data();
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};
/**
 * 按照分類ID 取得作品的 並且分頁
 * lastestdoc 很重要
 * **/


exports.queryByCategoryId = queryByCategoryId;
var latestDoc = null;

var getWorksByCategoryAndLimits = function getWorksByCategoryAndLimits(cid, callback) {
  var q, data;
  return regeneratorRuntime.async(function getWorksByCategoryAndLimits$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.where)("category", "==", cid), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.where)("display", "==", '1'));
          _context9.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context9.sent;
          latestDoc = data.docs[data.docs.length - 1];
          mapDataWithImage('data', data.docs.map(function (doc) {
            return doc.data();
          }), function (res) {
            callback(res);
          });

        case 6:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.getWorksByCategoryAndLimits = getWorksByCategoryAndLimits;

var getNextWorksByCategoryAndLimits = function getNextWorksByCategoryAndLimits(cid, callback) {
  var q, data;
  return regeneratorRuntime.async(function getNextWorksByCategoryAndLimits$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.where)("category", "==", cid), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.startAfter)(latestDoc), (0, _firestore.where)("display", "==", '1'), (0, _firestore.limit)(10));
          _context10.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context10.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return doc.data();
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
};
/**
 * 到 firebase 撈作品資料表 
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 全部 要給後台用(admin) 
 * **/


exports.getNextWorksByCategoryAndLimits = getNextWorksByCategoryAndLimits;

var getAllWorksForDashboard = function getAllWorksForDashboard(callback) {
  var q, data;
  return regeneratorRuntime.async(function getAllWorksForDashboard$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.limit)(30));
          _context11.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context11.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context11.stop();
      }
    }
  });
};

exports.getAllWorksForDashboard = getAllWorksForDashboard;

var getNextWorkForDashboard = function getNextWorkForDashboard(item, callback) {
  var q, data;
  return regeneratorRuntime.async(function getNextWorkForDashboard$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.startAfter)(item.time_added), (0, _firestore.limit)(30));
          _context12.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context12.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
};

exports.getNextWorkForDashboard = getNextWorkForDashboard;

var getPrevWorkForDashboard = function getPrevWorkForDashboard(item, callback) {
  var q, data;
  return regeneratorRuntime.async(function getPrevWorkForDashboard$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "data"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.endBefore)(item.time_added), (0, _firestore.limitToLast)(30));
          _context13.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context13.sent;
          mapDataWithImage('data', data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context13.stop();
      }
    }
  });
};

exports.getPrevWorkForDashboard = getPrevWorkForDashboard;

var createWork = function createWork(data, callback) {
  var collectionRef;
  return regeneratorRuntime.async(function createWork$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          collectionRef = (0, _firestore.collection)(_firebase["default"], "data");
          _context14.prev = 1;
          _context14.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)(collectionRef, data));

        case 4:
          callback('success');
          _context14.next = 10;
          break;

        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](1);
          callback(_context14.t0);

        case 10:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createWork = createWork;

var deleteWork = function deleteWork(uid, callback) {
  var workDoc;
  return regeneratorRuntime.async(function deleteWork$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          workDoc = (0, _firestore.doc)(_firebase["default"], 'data', uid);
          _context15.prev = 1;
          _context15.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.deleteDoc)(workDoc));

        case 4:
          callback('success');
          _context15.next = 10;
          break;

        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](1);
          callback(_context15.t0);

        case 10:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteWork = deleteWork;

var updateWork = function updateWork(uid, currentData, callback) {
  var workDoc;
  return regeneratorRuntime.async(function updateWork$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          workDoc = (0, _firestore.doc)(_firebase["default"], 'data', uid);
          _context16.prev = 1;
          _context16.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.updateDoc)(workDoc, currentData));

        case 4:
          callback('success');
          _context16.next = 10;
          break;

        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](1);
          callback(_context16.t0);

        case 10:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; //admin category


exports.updateWork = updateWork;

var getAllCategoryForDashboard = function getAllCategoryForDashboard(callback) {
  var q, data;
  return regeneratorRuntime.async(function getAllCategoryForDashboard$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "category"), (0, _firestore.orderBy)('sort_num', 'desc'));
          _context17.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context17.sent;
          mapDataWithUid(data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context17.stop();
      }
    }
  });
};

exports.getAllCategoryForDashboard = getAllCategoryForDashboard;

var createCategory = function createCategory(data, callback) {
  var collectionRef;
  return regeneratorRuntime.async(function createCategory$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          collectionRef = (0, _firestore.collection)(_firebase["default"], "category");
          _context18.prev = 1;
          _context18.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)(collectionRef, data));

        case 4:
          callback('success');
          _context18.next = 10;
          break;

        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](1);
          callback(_context18.t0);

        case 10:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createCategory = createCategory;

var deleteCategory = function deleteCategory(uid, callback) {
  var categoryDoc;
  return regeneratorRuntime.async(function deleteCategory$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          categoryDoc = (0, _firestore.doc)(_firebase["default"], 'category', uid);
          _context19.prev = 1;
          _context19.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.deleteDoc)(categoryDoc));

        case 4:
          callback('success');
          _context19.next = 10;
          break;

        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](1);
          callback(_context19.t0);

        case 10:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteCategory = deleteCategory;

var updateCategory = function updateCategory(uid, currentData, callback) {
  var categoryDoc;
  return regeneratorRuntime.async(function updateCategory$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          categoryDoc = (0, _firestore.doc)(_firebase["default"], 'category', uid);
          _context20.prev = 1;
          _context20.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.updateDoc)(categoryDoc, currentData));

        case 4:
          callback('success');
          _context20.next = 10;
          break;

        case 7:
          _context20.prev = 7;
          _context20.t0 = _context20["catch"](1);
          callback(_context20.t0);

        case 10:
        case "end":
          return _context20.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; // 學生作品


exports.updateCategory = updateCategory;

var getAllStudentWorksForDashboard = function getAllStudentWorksForDashboard(callback) {
  var q, data;
  return regeneratorRuntime.async(function getAllStudentWorksForDashboard$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "studentWork"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.limit)(30));
          _context21.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context21.sent;
          mapDataWithImage('studentWork', data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context21.stop();
      }
    }
  });
};

exports.getAllStudentWorksForDashboard = getAllStudentWorksForDashboard;

var createStudentWork = function createStudentWork(data, callback) {
  var collectionRef;
  return regeneratorRuntime.async(function createStudentWork$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          collectionRef = (0, _firestore.collection)(_firebase["default"], "studentWork");
          _context22.prev = 1;
          _context22.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)(collectionRef, data));

        case 4:
          callback('success');
          _context22.next = 10;
          break;

        case 7:
          _context22.prev = 7;
          _context22.t0 = _context22["catch"](1);
          callback(_context22.t0);

        case 10:
        case "end":
          return _context22.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createStudentWork = createStudentWork;

var deleteStudentWork = function deleteStudentWork(uid, callback) {
  var StudentWorkDoc;
  return regeneratorRuntime.async(function deleteStudentWork$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          StudentWorkDoc = (0, _firestore.doc)(_firebase["default"], 'studentWork', uid);
          _context23.prev = 1;
          _context23.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.deleteDoc)(StudentWorkDoc));

        case 4:
          callback('success');
          _context23.next = 10;
          break;

        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](1);
          callback(_context23.t0);

        case 10:
        case "end":
          return _context23.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteStudentWork = deleteStudentWork;

var updateStudentWork = function updateStudentWork(uid, currentData, callback) {
  var StudentWorkDoc;
  return regeneratorRuntime.async(function updateStudentWork$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          StudentWorkDoc = (0, _firestore.doc)(_firebase["default"], 'studentWork', uid);
          _context24.prev = 1;
          _context24.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.updateDoc)(StudentWorkDoc, currentData));

        case 4:
          callback('success');
          _context24.next = 10;
          break;

        case 7:
          _context24.prev = 7;
          _context24.t0 = _context24["catch"](1);
          callback(_context24.t0);

        case 10:
        case "end":
          return _context24.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; // 學生作品分類
// ABOUT 組員 人員


exports.updateStudentWork = updateStudentWork;

var getAllAboutUserForDashboard = function getAllAboutUserForDashboard(callback) {
  var q, data;
  return regeneratorRuntime.async(function getAllAboutUserForDashboard$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "AboutUser"), (0, _firestore.orderBy)('time_added', 'desc'), (0, _firestore.limit)(30));
          _context25.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context25.sent;
          mapDataWithImage('img_about', data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context25.stop();
      }
    }
  });
};

exports.getAllAboutUserForDashboard = getAllAboutUserForDashboard;

var createAboutUser = function createAboutUser(data, callback) {
  var collectionRef;
  return regeneratorRuntime.async(function createAboutUser$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          collectionRef = (0, _firestore.collection)(_firebase["default"], "AboutUser");
          _context26.prev = 1;
          _context26.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)(collectionRef, data));

        case 4:
          callback('success');
          _context26.next = 10;
          break;

        case 7:
          _context26.prev = 7;
          _context26.t0 = _context26["catch"](1);
          callback(_context26.t0);

        case 10:
        case "end":
          return _context26.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createAboutUser = createAboutUser;

var deleteAboutUser = function deleteAboutUser(uid, callback) {
  var AboutUserDoc;
  return regeneratorRuntime.async(function deleteAboutUser$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          AboutUserDoc = (0, _firestore.doc)(_firebase["default"], 'AboutUser', uid);
          _context27.prev = 1;
          _context27.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.deleteDoc)(AboutUserDoc));

        case 4:
          callback('success');
          _context27.next = 10;
          break;

        case 7:
          _context27.prev = 7;
          _context27.t0 = _context27["catch"](1);
          callback(_context27.t0);

        case 10:
        case "end":
          return _context27.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteAboutUser = deleteAboutUser;

var updateAboutUser = function updateAboutUser(uid, currentData, callback) {
  var AboutUserDoc;
  return regeneratorRuntime.async(function updateAboutUser$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          AboutUserDoc = (0, _firestore.doc)(_firebase["default"], 'AboutUser', uid);
          _context28.prev = 1;
          _context28.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.updateDoc)(AboutUserDoc, currentData));

        case 4:
          callback('success');
          _context28.next = 10;
          break;

        case 7:
          _context28.prev = 7;
          _context28.t0 = _context28["catch"](1);
          callback(_context28.t0);

        case 10:
        case "end":
          return _context28.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; // ABOUT 組別 分類


exports.updateAboutUser = updateAboutUser;

var getAllTeamForDashboard = function getAllTeamForDashboard(callback) {
  var q, data;
  return regeneratorRuntime.async(function getAllTeamForDashboard$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "Team"), (0, _firestore.orderBy)('sort_num', 'desc'));
          _context29.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.getDocs)(q));

        case 3:
          data = _context29.sent;
          mapDataWithUid(data.docs.map(function (doc) {
            return _objectSpread({}, doc.data(), {
              uid: doc.id
            });
          }), function (res) {
            callback(res);
          });

        case 5:
        case "end":
          return _context29.stop();
      }
    }
  });
};

exports.getAllTeamForDashboard = getAllTeamForDashboard;

var createTeam = function createTeam(data, callback) {
  var collectionRef;
  return regeneratorRuntime.async(function createTeam$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          collectionRef = (0, _firestore.collection)(_firebase["default"], "Team");
          _context30.prev = 1;
          _context30.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)(collectionRef, data));

        case 4:
          callback('success');
          _context30.next = 10;
          break;

        case 7:
          _context30.prev = 7;
          _context30.t0 = _context30["catch"](1);
          callback(_context30.t0);

        case 10:
        case "end":
          return _context30.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.createTeam = createTeam;

var deleteTeam = function deleteTeam(uid, callback) {
  var TeamDoc;
  return regeneratorRuntime.async(function deleteTeam$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          TeamDoc = (0, _firestore.doc)(_firebase["default"], 'Team', uid);
          _context31.prev = 1;
          _context31.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.deleteDoc)(TeamDoc));

        case 4:
          callback('success');
          _context31.next = 10;
          break;

        case 7:
          _context31.prev = 7;
          _context31.t0 = _context31["catch"](1);
          callback(_context31.t0);

        case 10:
        case "end":
          return _context31.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteTeam = deleteTeam;

var updateTeam = function updateTeam(uid, currentData, callback) {
  var TeamDoc;
  return regeneratorRuntime.async(function updateTeam$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          TeamDoc = (0, _firestore.doc)(_firebase["default"], 'Team', uid);
          _context32.prev = 1;
          _context32.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.updateDoc)(TeamDoc, currentData));

        case 4:
          callback('success');
          _context32.next = 10;
          break;

        case 7:
          _context32.prev = 7;
          _context32.t0 = _context32["catch"](1);
          callback(_context32.t0);

        case 10:
        case "end":
          return _context32.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.updateTeam = updateTeam;