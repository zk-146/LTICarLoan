export class UserDetails{
    first_name:string="";
    last_name:string="";
    age:number=0;
    gender:string="";
    type_of_employment:string="";
    yearly_salary:number=0;
    exisiting_emi:string="";
    phone:string="";
    email:string="";

    constructor(
        first_name: string,
        last_name: string,
        age: number,
        gender: string,
        type_of_employment: string,
        yearly_salary: number,
        exisiting_emi: string,
        phone:string,
        email:string,
    )
    {
        this.first_name= first_name;
        this.last_name= last_name;
        this.age= age;
        this.gender= gender;
        this.type_of_employment= type_of_employment;
        this.yearly_salary= yearly_salary;
        this.exisiting_emi= exisiting_emi;
        this.phone = phone;
        this.email = email;
    }
}
