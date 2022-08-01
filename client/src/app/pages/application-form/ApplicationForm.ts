export class ApplicationForm{
    application_status:string = "";
    no_of_emis:number=0;
    loan_amt:number=0;
    emi_amt: number = 0;
    loan_tenure:number=0;
    user:object = { };

    constructor(emi_amt:number, no_of_emis:number, loan_amt:number, loan_tenure:number, application_status:string, user_id: number)
    {
        this.no_of_emis=Math.round(no_of_emis);
        this.loan_amt=Math.round(loan_amt);
        this.application_status = application_status;
        this.emi_amt = Math.round(emi_amt);
        this.loan_tenure = Math.round(no_of_emis);
        this.user = {
            user_id: user_id
        }
    }
}