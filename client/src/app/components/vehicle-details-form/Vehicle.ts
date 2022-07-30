export class VehicleDetails{
    carMake:string = "";
    carModel:string = "";
    exShowroomPrice:number = 0;
    onRoadPrice:number = 0;

    constructor(carMake:string, carModel:string, exShowroomPrice:number, onRoadPrice:number)
    {
        this.carMake = carMake;
        this.carModel = carModel;
        this.exShowroomPrice = exShowroomPrice;
        this.onRoadPrice = onRoadPrice;
    }
}