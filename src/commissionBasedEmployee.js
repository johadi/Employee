/*
 * this is the based class for all employees of any type
 * */
const Employee=require('./employee');

class CommissionBasedEmployee extends Employee{
    constructor(staff_id,name,basic_salary,sales_volumes,commission_rate){
        super(staff_id,name,basic_salary);
        this._sales_volumes=sales_volumes;
        this._commission_rate=commission_rate;
    }
    getSalesVolumes(){
        return this._sales_volumes;
    }
    getCommissionRate(){
        return this._commission_rate;
    }
    setSalesVolumes(sales_volumes){
        this._sales_volumes=sales_volumes;
    }
    setCommissionRate(commission_rate){
        this._commission_rate=commission_rate;
    }
    calculateNetSalary(){
        return super.calculateNetSalary() + this.getSalesVolumes()*this.getCommissionRate();
    }

}

module.exports=Employee;

