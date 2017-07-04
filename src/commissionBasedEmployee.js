/*
 * This is a category of Employee that earns more to his basic salary.
 *  employee of this kind receives basic salary and extra commission from the sales volumes he/she made before the salary payment
 * */
const Employee=require('./employee');

class CommissionBasedEmployee extends Employee{
    constructor(staff_id,name,basic_salary,sales_volumes,commission_rate){
        super(staff_id,name,basic_salary);
        this._sales_volumes=sales_volumes;
        this._commission_rate=commission_rate;
    }
    //getter methods
    getSalesVolumes(){
        return this._sales_volumes;
    }
    getCommissionRate(){
        return this._commission_rate;
    }
    //setter methods
    setSalesVolumes(sales_volumes){
        this._sales_volumes=sales_volumes;
    }
    setCommissionRate(commission_rate){
        this._commission_rate=commission_rate;
    }
    //net salary involving his basic salary and commission
    calculateNetSalary(){
        return super.calculateNetSalary() + this.getSalesVolumes()*this.getCommissionRate();
    }

}

module.exports=CommissionBasedEmployee;

