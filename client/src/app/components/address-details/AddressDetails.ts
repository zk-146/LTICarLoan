export class AddressDetails{
    address:string="";
    city:string="";
    state:string="";
    nationality:string="";
    pincode:number=0;

    constructor(
        address: string,
        city: string,
        state: string,
        nationality: string,
        pincode: number,
    )
    {
        this.address= address;
        this.city= city;
        this.state= state;
        this.nationality= nationality;
        this.pincode= pincode;
    }
}