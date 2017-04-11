import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { ToolsFormData } from '../models/tools-form-data';
import { IDuctConvert } from '../models/duct-convert';
import { ICalcOperatingPressure } from '../models/operating-pressure';

@Component({
  //selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public units = [
    { value: '1', display: 'cfm' },
    { value: '0', display: 'L/s'}
  ];

  public ducts = [
    { value: 0, display: 'Round'},
    { value: 1, display: 'Rectangular'},
    { value: 2, display: 'Flat Oval'}
  ];

  public pressures = [
    { value: 0, display: 'Calculate Pressure'},
    { value: 1, display: 'Calculate Stiffener Spacing'},
    { value: 2, display: 'Calculate Gauge'}
  ];

  public constructions = [
    { value: true, display: 'Spiral Duct'},
    { value: false, display: 'Longseam Duct'}
  ];

  public materials = [
    { value: 'Steel', display: 'Galvanized Steel'},
    { value: 'Stainless Steel', display: 'Stainless Steel'},
    { value: 'Aluminum', display: 'Aluminum'}
  ];

  public gauges = [
    { value: 28, display: '28 ga (0.0225 in.)'},
    { value: 26, display: '26 ga (0.0295 in.)'},
    { value: 24, display: '24 ga (0.0370 in.)'},
    { value: 22, display: '22 ga (0.0460 in.)'},
    { value: 18, display: '18 ga (0.0760 in.)'},
    { value: 16, display: '16 ga (0.0860 in.)'},
    { value: 14, display: '14 ga'},
    { value: 12, display: '12 ga'},
    { value: 10, display: '10 ga'},
    { value: 8, display: '8 ga'}
  ];

  public ductClasses = [
    {value: 'Class A', display: 'Class A'},
    {value: 'Class B', display: 'Class B'},
    {value: 'Class C', display: 'Class C'},
    {value: 'Class D', display: 'Class D'}
  ];

  public savedResults = [
    { DuctType: 'Duct Type',
      Spiral: 'Spiral',
      Material: 'Material',
      Diameter: 'Diameter',
      DuctTemp: 'Duct Temp',
      Gauge: 'Gauge / Class',
      RingSpacing: 'Ring Spacing',
      Pressure: 'Pressure',
      ResultValue: 'Result Value',
      ResultUnit: 'Result Unit',
      StiffenerSize: 'Stiffener Size'}
  ];

  //public active : boolean;\
  public errorMessage: string;
  public data : ToolsFormData;
  public ductConvert : IDuctConvert = {
    name : '',
    type : this.ducts[0].value,
    rectMinor : 0,
    rectMajor : 0,
    ovalMinor : 0,
    ovalMajor : 0,
    diameter : 0,
    minor : 0,
    result1 : 0,
    result2 : 0
  };

  public operatingPressure : ICalcOperatingPressure = {
    type : this.pressures[0].value,
    spiral : this.constructions[0].value,
    material : this.materials[0].value,
    gauge : this.gauges[0].value,
    diameter : 0,
    stiffenerSpacing : 0,
    ductTemp : 0,
    ductClass : this.ductClasses[0].value,
    pressure : 0,
    operatingPressure : 0,
    stiffenerSize : ''
  };

  constructor( private toolsService: ToolsService) {
    //this.active = true;
   }

  ngOnInit() {
    this.data = {
      Value: 0,
      Unit: this.units[0].value,
      Result: 0
    }
  }

  public onConvertVolumeFlowRate(){
    //console.log(this.config.apiUrl);
    //alert(JSON.stringify(this.config));
    
    // Set the domain the request is coming from
    let value = String(this.data.Value);
    let toCfm = String(this.data.Unit);

    this.toolsService.convertVolumeFlowRate(value,toCfm)
        .subscribe((result:string) => {
          // Success
          this.data.Result = Number(result);
          console.log(this.data.Result);
        },
        // On Error
        (err:any) => {
          console.log(err);
        },
        // Finally
        () => console.log('convertValueFlowRate() called'));
  
    // Trick to reset the pristine state of the form
    // This is a temporary workaraound until a form reset procedure is available
    //this.active = false;
    //setTimeout(() => this.active = true, 0);
  }

  public onConvertDuctTypes(){
    this.ductConvert.name = "foo";

    this.toolsService.convertDuctTypes(this.ductConvert)
      .subscribe((data: IDuctConvert) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.ductConvert = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcPressure(){
    // Check the type and call the correct toolsService

    if ( this.operatingPressure.type == 0 )
    {
      this.toolsService.calcPressure(this.operatingPressure)
        .subscribe((data:ICalcOperatingPressure) => {
          if ( data ){
            this.operatingPressure = data;
          } else {
            console.log("error")
          }
        })
    }else if ( this.operatingPressure.type == 1 ) 
    {
      this.toolsService.calcStiffenerSpacing(this.operatingPressure)
        .subscribe((data:ICalcOperatingPressure) => {
          if ( data ){
            this.operatingPressure = data;
          } else {
            console.log("error")
          }
        })
    }else if ( this.operatingPressure.type == 2 )
    {
      this.toolsService.calcMinThickness(this.operatingPressure)
        .subscribe((data:ICalcOperatingPressure) => {
          if (data ) {
              this.operatingPressure = data;
          } else {
              console.log("error")
          }
        })
    }
  }

  public onSaveResults() {
    var tmpResultVal = String(this.operatingPressure.gauge);
    var tmpResultUnit = 'ga';
    var tmpGauge = String(this.operatingPressure.ductClass);
    if ( this.operatingPressure.type==0)
    {
      tmpResultVal = String(this.operatingPressure.operatingPressure);
      tmpResultUnit = 'in. wg';
      tmpGauge = String(this.operatingPressure.gauge);
    } else if ( this.operatingPressure.type==1) {
      tmpResultVal = String(this.operatingPressure.stiffenerSpacing);
      tmpResultUnit = 'feet';
      tmpGauge = String(this.operatingPressure.gauge);
    } 

    var saveResult = {
     DuctType: this.pressures[this.operatingPressure.type].display,
     Spiral: String(this.operatingPressure.spiral),
     Material: this.operatingPressure.material,
     Diameter: String(this.operatingPressure.diameter),
     DuctTemp: String(this.operatingPressure.ductTemp),
     Gauge: tmpGauge,
     RingSpacing: String(this.operatingPressure.stiffenerSpacing),
     Pressure: String(this.operatingPressure.pressure),
     ResultValue: tmpResultVal,
     ResultUnit: tmpResultUnit,
     StiffenerSize: String(this.operatingPressure.stiffenerSize)
    };

    this.savedResults.push(saveResult);
  }
}