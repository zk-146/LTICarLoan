export class UserPersonalDetails{
    first_name:string = "";
    last_name:string = "";
    email:string = "";
    phone:string="";
    password:number = 0;
    age:number = 0;
    gender:string = "";
    user:object={ }

    constructor(
        first_name:string,
        last_name:string,
    email:string,
    phone:string,
    password:number,
    age:number,
    gender:string,
    user:number)
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.user = {
            user_id: user
        };
    }
}