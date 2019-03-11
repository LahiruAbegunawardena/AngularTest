import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  vehicleDta = {
    absoluteOwner: '',
    barcode: '',
    brand: '',
    buildYear: '',
    chasisNumber: '',
    classOfVehicle: '',
    countryOfOrigin: '',
    cylinderCapacity: '',
    email: {
      email: '',
      isprimary: true
    },
    engineNumber: '',
    firstRegDate: '',
    fuelType: '',
    image: '1234',
    imei: '213',
    internalRefNum: '',
    make: '',
    mobileNumber: '',
    model: '',
    odoMeterReading: '',
    officialMobileNumber: '',
    officialPhoneNum: {
      ext: '011',
      phoneNum: ''
    },
    orgId: '',
    photo: '233.jpg',
    portEntryPassNum: '',
    portEntryValidPeriod: {
      end: '',
      start: ''
    },
    previousOwnerDetails: '',
    purchasedValue: '',
    regNumber: '',
    registeredAddress: '',
    revenueLicense: '',
    rmvRegNumber: '',
    statusWhenRegister: '',
    taxationClass: '',
    type: 0,
    typeOfIdDocument: '',
    vehicleId: '',
    vehicleInsurance: '',
    warranty: true,
    warrantyPeriod: '',
    weightUnladenGross: ''
  };
  ngOnInit() {
  }

  sbmitIt() {
    this.vehicleDta.orgId = 'ANGULAR_LahiruAbegunawardena';
    this.auth.setData(this.vehicleDta).subscribe(res=> {
      console.log(res);
    });
    console.log(this.vehicleDta);
  }

}
