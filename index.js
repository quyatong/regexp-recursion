(function (define) {

    define(function (require, exports, module) {
        /**
         * 判断是否是对象
         *
         * @param  {Object}  obj 要判断的对象
         * @return {Boolean}     判断结果
         */
        var isObject = function (obj) {
            return {}.toString.call(obj) == '[object Object]';
        };

        /**
         * 判断是否是数组
         *
         * @param  {Object}  obj 要判断的对象
         * @return {Boolean}     判断结果
         */
        var isArray = function (obj) {
            return {}.toString.call(obj) == '[object Array]';
        };


        /**
         * 判断是否是简单类型
         *
         * @param  {Object}  obj 要判断的对象
         * @return {Boolean}     判断结果
         */
        var isSimple = function (obj) {
            return typeof obj !== 'object';
        };

        /**
         * 使用正则做匹配条件 深度递归
         *
         * @param  {Object | Array} obj     要递归的
         * @param  {string}         reg     正则
         * @param  {Function}       func    回调函数
         */
        var recursion = function (obj, reg, func) {

            if (isArray(obj)) {
                obj.forEach(function (item) {
                    recursion(item, reg, func);
                });
            }
            else if (isObject) {
                for (var key in obj) {
                    if (
                        isSimple(obj[key])
                        && new RegExp(reg).test(key)
                    ) {
                        func(key, obj[key], obj);
                    }
                    else {
                        recursion(obj[key], reg, func);
                    }
                }
            }
        };

        module.exports = recursion;
    });
}(
    typeof define == 'function' && define.amd
        ? define
        : function (factory) { factory(require, exports, module); }
));
