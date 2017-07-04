/*
 * This is the category of employees that receives no basic salary.
 * such employee is only paid based on the hours he worked and the hourly rate assign to the job. no basic salary
 * */
const Employee=require('./employee');

class HourlyRatedEmployee extends Employee{
    constructor(staff_id,name,basic_salary,hours_worked,hourly_rate){
        super(staff_id,name,0);
        basic_salary=0;
        this._hours_worked=hours_worked;
        this._hourly_rate=hourly_rate;
    }
    //getter methods
    getHoursWorked(){
        return this._hours_worked;
    }
    getHourlyRate(){
        return this._hourly_rate;
    }
    //setter methods
    setHoursWorked(hours_worked){
        this._hours_worked=hours_worked;
    }
    setHourlyRate(hourly_rate){
        this._hourly_rate=hourly_rate;
    }
    //hourly reated employee net salary should be the hour worked times his hourly rate. no basic salary
    calculateNetSalary(){
        return this.getHourlyRate()*this.getHoursWorked();
    }

}

module.exports=HourlyRatedEmployee;


