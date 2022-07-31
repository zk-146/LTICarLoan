export class EligibilityForm{
    personalDetails:object={};
    employmentDetails:object={};
    vehicleDetails:object={};
    loanDetails:object={};
    identityDetails:object={};

    constructor(personalDetails:object,employmentDetails:object, vehicleDetails:object, loanDetails:object, identityDetails:object)
    {
        this.personalDetails=personalDetails;
        this.employmentDetails=employmentDetails;
        this.vehicleDetails=vehicleDetails;
        this.loanDetails=loanDetails;
        this.identityDetails=identityDetails;
    }
}