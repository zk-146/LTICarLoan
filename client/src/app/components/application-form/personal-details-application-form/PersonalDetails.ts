export class PersonalDetails{
    first_name:string="";
    last_name:string="";
    age:number=0;
    gender:string="";
    address:string="";
    state:string="";
    city:string="";
    pincode:string="";

    constructor(
        first_name: string,
        last_name: string,
        age: number,
        gender: string,
        address: string,
        state:string,
        city:string,
        pincode:string,
    )
    {
        this.first_name= first_name;
        this.last_name= last_name;
        this.age= age;
        this.gender= gender;
        this.address=address;
        this.state=state; 
        this.city=city;
        this.pincode=pincode;
    }
}
