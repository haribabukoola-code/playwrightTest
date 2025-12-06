var typescriptsession = /** @class */ (function () {
    function typescriptsession() {
    }
    typescriptsession.prototype.dataTypefun = function () {
        var numval = 10;
        var charval = "Hello";
        var boolval = true;
        var nullval = null;
        var stringval = "This is my World";
        var arr1 = [28, 29, 22, 21, 25];
        var arr2 = [1, 2, 3, 4];
        var arr3 = [3, 2, [8, 9], 10];
        console.log(charval);
        /*  console.log(arr3[2])
      
          console.log(arr2.map(val=>val*2))
      
          console.log(arr2.reduce((sumVal, val)=>sumVal+val, 0))
      
          console.log(arr1.map(val=>val*arr2.reduce((sumVal, val)=>sumVal+val,0)))
          */
    };
    typescriptsession.prototype.objectDemo = function () {
        var emp1 = {
            empid: 101,
            empname: "John",
            empdept: "IT",
        };
        var emp2 = {
            empid: 102,
            empname: "Smith",
            empdept: "HR",
            salary: 50000
        };
        console.log(emp2);
        console.log(emp1.empname);
        emp1.location = "New York";
        console.log(emp1);
        var empcard1 = {
            empid: 203,
            empname: "Alice"
        };
        var empcard2 = {
            empid: 204,
            empname: "Wonder"
        };
        var empgeneral1 = {
            empid: 301,
            empname: "Bob",
        };
        console.log(empgeneral1);
        var str1 = 'A String Primitive';
        var str2 = "Another String Object";
        var str3 = "yet another string";
        console.log(str1, str2, str3);
    };
    typescriptsession.prototype.returntype = function (returnvalue) {
        var value = returnvalue.toString();
        return value;
    };
    typescriptsession.prototype.genericreturntype = function (returnvalue) {
        var value = returnvalue;
        return value;
    };
    return typescriptsession;
}());
var obj = new typescriptsession();
obj.dataTypefun();
obj.objectDemo();
obj.returntype(12345);
console.log(obj.returntype(500));
console.log(obj.genericreturntype(10));
console.log(obj.genericreturntype("Check"));
console.log(obj.genericreturntype(true));
console.log(obj.genericreturntype(10.55));
export {};
