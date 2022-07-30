export class Application{
    application_id:number=0;
    application_status:string="";
    emi_amt:number=0;
    loan_amt:number=0;
    no_of_emis:number=0;
    user:any=0;


    constructor(application_id:number,application_status:string,emi_amt:number,loan_amt:number,no_of_emis:number,user:any){

        this.application_id=application_id;
        this.application_status=application_status;
        this.emi_amt=emi_amt;
        this.loan_amt=loan_amt;
        this.no_of_emis=no_of_emis;
        this.user=user.user_id;

    }
}

