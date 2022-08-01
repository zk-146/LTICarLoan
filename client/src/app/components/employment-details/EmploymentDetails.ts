export class EmploymentDetails{
    type_of_employment:string="";
    annual_salary:number=0;

    constructor(
        type_of_employment: string,
        annual_salary: number,
    )
    {
        this.type_of_employment= type_of_employment;
        this.annual_salary= annual_salary;
    }
}
