/*
* This is the base class for all employees of any type. employee of this kind only receives basic salary. no other payment
* */
class Employee{
    constructor(staff_id,name,basic_salary){
        this._staff_id=staff_id;
        this._name=name;
        this._basic_salary=basic_salary;
    }
    //getter methods
    getStaffId(){
        return this._staff_id;
    }
    getName(){
        return this._name;
    }
    getBasicSalary(){
        return this._basic_salary;
    }
    //setter methods
    setStaffId(staff_id){
        this._staff_id=staff_id;
    }
    setName(name){
        this._name=name;
    }
    setBasicSalary(basic_salary){
        this._basic_salary=basic_salary;
    }
    //net salary of an ordinary employee should just be his basic salary
    calculateNetSalary(){
        return this.getBasicSalary();
    }

}

module.exports=Employee;
