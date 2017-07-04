class Employee{
    constructor(staff_id,name,basic_salary){
        this._staff_id=staff_id;
        this._name=name;
        this._basic_salary=basic_salary;
    }
    getStaffId(){
        return this._staff_id;
    }
    getName(){
        return this._name;
    }
    getBasicSalary(){
        return this._basic_salary;
    }
    setStaffId(staff_id){
        this._staff_id=staff_id;
    }
    setName(name){
        this._name=name;
    }
    setBasicSalary(basic_salary){
        this._basic_salary=basic_salary;
    }

}

module.exports=Employee;
