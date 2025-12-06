class typescriptsession{


public dataTypefun(){

    const numval=10
    const charval:string ="Hello"
    const boolval:boolean=true
    const nullval:null=null
    const stringval:string="This is my World"
    const arr1: number[]= [28,29,22,21,25]
    const arr2= [1,2,3,4]
    const arr3=[3,2,[8,9], 10]

    console.log(charval)

  /*  console.log(arr3[2])

    console.log(arr2.map(val=>val*2))

    console.log(arr2.reduce((sumVal, val)=>sumVal+val, 0))

    console.log(arr1.map(val=>val*arr2.reduce((sumVal, val)=>sumVal+val,0)))
    */

}
public objectDemo(){
  interface employee{
    empid:number
    empname:string
    empdept:string
    salary?:number
  }

  const emp1:employee={
    empid:101,
    empname:"John",
    empdept:"IT",
  }
  const emp2:employee={
    empid:102,
    empname:"Smith",
    empdept:"HR",
    salary:50000
  }

console.log(emp2)
console.log(emp1.empname)
interface employee{
  location?:string
}

emp1.location="New York"
console.log(emp1)

type employeecard =Pick<employee, 'empid' | 'empname'>

const empcard1:employeecard={
  empid:203,
  empname:"Alice"

}
const empcard2:employeecard={
  empid:204,
  empname:"Wonder"

}

type employeegeneral=Omit<employee, 'empdept' | 'location' | 'salary'>

const empgeneral1:employeegeneral={
  empid:301,
  empname:"Bob",

}

console.log(empgeneral1)

  let str1:string = 'A String Primitive'
  let str2:String = "Another String Object"
  let str3:string = `yet another string`
  console.log(str1,str2,str3)
  

}
public returntype(returnvalue:number):string{

  const value= returnvalue.toString()
    return value
  }

  public genericreturntype<T>(returnvalue:T):T{
   const value= returnvalue
    return value
  }
}
const obj=new typescriptsession()
obj.dataTypefun()
obj.objectDemo()
obj.returntype( 12345)


console.log(obj.returntype(500))
console.log(obj.genericreturntype(10))
console.log(obj.genericreturntype("Check"))
console.log(obj.genericreturntype(true))
console.log(obj.genericreturntype(10.55))