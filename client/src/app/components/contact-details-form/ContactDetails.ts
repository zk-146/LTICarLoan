export class ContactDetails{
    phone_number:string="";
    email:string="";

    constructor(
        phone_number: string,
        email: string,
    )
    {
        this.phone_number= phone_number;
        this.email= email;
    }
}
