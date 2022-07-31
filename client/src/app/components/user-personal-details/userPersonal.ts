export class UserPersonalDetails{
    firstName:string = "";
    lastName:string = "";
    email:string = "";
    password:number = 0;
    age:number = 0;
    gender:string = "";
    user:object={ }

    constructor(
    firstName:string,
    lastName:string,
    email:string,
    password:number,
    age:number,
    gender:string,
    user:number)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.user = {
            user_id: user
        };
    }
}