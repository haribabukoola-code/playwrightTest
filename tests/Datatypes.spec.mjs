var typescriptsession = /** @class */ (function () {
    function typescriptsession() {
    }
    typescriptsession.prototype.dataTypefun = function () {
        var arr1 = [28, 29, 22, 21, 25];
        var arr2 = [1, 2, 3, 4];
        var arr3 = [3, 2, [8, 9], 10];
        console.log(arr2);
        console.log(arr3[2]);
        console.log(arr2.map(function (val) { return val * 2; }));
        console.log(arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0));
        console.log(arr1.map(function (val) { return val * arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0); }));
    };
    return typescriptsession;
}());
export {};
