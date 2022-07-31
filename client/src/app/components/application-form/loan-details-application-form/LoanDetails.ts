export class VehicleDetails{
    loan_type:string = "";
    interest_rate:number = 0;
    loan_amt:number = 0;
    no_of_emi: number=0;
    processing_fee: number=0;
    // loan_tenure:string = "";
    vehicle:object={ }

    constructor(loan_type:string, interest_rate:number, loan_amt:number, no_of_emi:number, processing_fee:number, vehicle:number)
    {
        this.loan_type = loan_type;
        this.interest_rate = interest_rate;
        this.loan_amt = loan_amt;
        this.no_of_emi = no_of_emi;
        this.processing_fee = processing_fee;
        this.vehicle = {
            car_id: vehicle
        };
    }
}
