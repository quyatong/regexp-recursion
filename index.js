/**
 * 使用正则做匹配条件 深度递归
 *
 * @param  {Object | Array} obj     要递归的
 * @param  {string}         reg     正则
 * @param  {Function}       func    回调函数
 */
var recursion = function (obj, reg, func) {

    if ({}.toString.call(obj) == '[object Array]') {
        obj.forEach(function (item) {
            recursion(item, reg, func);
        });
    }
    else if ({}.toString.call(obj) == '[object Object]') {
        for (var key in obj) {
            if (new RegExp(reg).test(key)) {
                func(key, obj[key]);
            }
            else {
                recursion(obj[key], reg, func);
            }
        }
    }
};


module.exports = recursion;
