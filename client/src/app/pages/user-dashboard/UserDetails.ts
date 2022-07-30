export class UserDetails{
    user_id:number=0;
    first_name:string="";
    last_name:string="";
    email:string="";
    password:string="";
    age:number=0;
    gender:string="";
    address:string="";
    city:string="";
    state:string="";
    nationality:string="";
    pincode:number=0;
    type_of_employment:string="";
    annual_salary:number=0;


    constructor(user_id:number,first_name:string,last_name:string,email:string,password:string,age:number,
                gender:string, address:string, city:string,nationality:string,pincode:number ,type_of_employment:string="",annual_salary:number){

        this.user_id=user_id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.age=age;
        this.gender=gender;
        this.address=address;
        this.city=city;
        this.nationality=nationality;
        this.pincode=pincode;
        this.type_of_employment=type_of_employment;
        this.annual_salary=annual_salary;


        

    }
}

