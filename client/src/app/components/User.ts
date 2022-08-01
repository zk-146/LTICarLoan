export class UserDetails{
    first_name:string="";
    last_name:string="";
    age:number=0;
    gender:string="";
    type_of_employment:string="";
    annual_salary:number=0;
    exisiting_emi:string="";
    phone:string="";
    email:string="";
    address:string="";
    state:string="";
    city:string="";
    pincode:number=0;

    constructor(
        first_name: string,
        last_name: string,
        age: number,
        gender: string,
        type_of_employment: string,
        annual_salary: number,
        exisiting_emi: string,
        phone:string,
        email:string,
        address:string,
        state:string,
        city:string,
        pincode:number,
    )
    {
        this.first_name= first_name;
        this.last_name= last_name;
        this.age= age;
        this.gender= gender;
        this.type_of_employment= type_of_employment;
        this.annual_salary= annual_salary;
        this.exisiting_emi= exisiting_emi;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.state = state;
        this.city = city;
        this.pincode = pincode;
    }
}
