export class EligibilityForm{
    personalDetails:object={};
    vehicleDetails:object={};
    contactDetails:object={};

    constructor(personalDetails:object,vehicleDetails:object,contactDetails:object)
    {
        this.personalDetails=personalDetails;
        this.vehicleDetails=vehicleDetails;
        this.contactDetails=contactDetails;
    }
}