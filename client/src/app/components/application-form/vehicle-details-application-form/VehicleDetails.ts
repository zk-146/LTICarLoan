export class VehicleDetails{
    model_name:string = "";
    company_name:string = "";
    price:number = 0;
    user:object={ }

    constructor(model_name:string, company_name:string, price:number, user:number)
    {
        this.model_name = model_name;
        this.company_name = company_name;
        this.price = price;
        this.user = {
            user_id: user
        };
    }
}
