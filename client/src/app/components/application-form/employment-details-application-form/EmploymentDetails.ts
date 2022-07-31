export class EmploymentDetails{
    type_of_employment:string="";
    yearly_salary:number=0;
    exisiting_emi:string="";

    constructor(
        type_of_employment: string,
        yearly_salary: number,
        exisiting_emi: string,
    )
    {
        this.type_of_employment= type_of_employment;
        this.yearly_salary= yearly_salary;
        this.exisiting_emi= exisiting_emi;
    }
}
