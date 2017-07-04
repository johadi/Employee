/*
 * this is the based class for all employees of any type
 * */
const Employee=require('./employee');

class HourlyRatedEmployee extends Employee{
    constructor(staff_id,name,basic_salary=0,hours_worked,hourly_rate){
        super(staff_id,name,0);
        this._hours_worked=hours_worked;
        this._hourly_rate=hourly_rate;
    }
    getHoursWorked(){
        return this._hours_worked;
    }
    getHourlyRate(){
        return this._hourly_rate;
    }
    setHoursWorked(hours_worked){
        this._hours_worked=hours_worked;
    }
    setHourlyRate(hourly_rate){
        this._hourly_rate=hourly_rate;
    }
    calculateNetSalary(){
        this.getHourlyRate()*this.getHoursWorked();
    }

}

module.exports=Employee;


