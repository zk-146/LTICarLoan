export class Register{
    
    userPersonalDetails:object={};
    addressDetails:object={};
    employmentDetails:object={};

    constructor(userPersonalDetails:object,addressDetails:object,employmentDetails:object)
    {
        this.userPersonalDetails=userPersonalDetails;
        this.addressDetails=addressDetails;
        this.employmentDetails=employmentDetails;
    }
}