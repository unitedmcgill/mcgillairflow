import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { ToolsFormData } from '../models/tools-form-data';
import { IDuctConvert } from '../models/duct-convert';
import { ICalcOperatingPressure } from '../models/operating-pressure';
import { ISupportDesign } from '../models/support-design';
import { IStackDesign } from '../models/stack-design';

@Component({
  //selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public burstCollapse = [
    { value: 'burst', display: 'Calcualte Burst'},
    { value: 'collapse', display: 'Calculate Collapse'}
  ];

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

  public insulations = [
    { value: 0, display: 'Uni-Seal Single-wall' },
    { value: 1, display: '1 in. Accousti-K27' },
    { value: 2, display: '2 in. Accousti-K27' },
    { value: 3, display: '3 in. Accousti-K27' }
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
    { value: 20, display: '20 ga (0.0590 in.)'},
    { value: 18, display: '18 ga (0.0760 in.)'},
    { value: 16, display: '16 ga (0.0860 in.)'},
    { value: 14, display: '14 ga'},
    { value: 12, display: '12 ga'},
    { value: 10, display: '10 ga'},
    { value: 8, display: '8 ga'}
  ];

  public loads = [
    { value: 0.0, display: 'Empty Duct (Air)'},
    { value: 0.5, display: 'Half Full Duct'},
    { value: 1.0, display: 'Full Duct'}
  ];

  public ductClasses = [
    {value: 'Class A', display: 'Class A'},
    {value: 'Class B', display: 'Class B'},
    {value: 'Class C', display: 'Class C'},
    {value: 'Class D', display: 'Class D'}
  ];

  public savedResultsStack = [
    { SafetyFactor: 'Safety',
      Spiral: 'Spiral',
      Material: 'Mat.',
      Diameter: 'Dia',
      Wind: 'Wind',
      Height: 'Ht.',
      Gauge: 'Ga.',
      Velocity: 'Vel',
      Stress: 'Stress',
      Buckling: 'Buck',
      Yield: 'Yield',
      Deflection: 'Def.',
      PassFail: 'Pass?'
    }
  ];

  public savedResultsSupport = [
    { Insulation: 'Ins.',
      Load: 'Load',
      Density: 'Dnsty',
      SafetyFactor: 'Safety',
      Spiral: 'Spiral',
      Material: 'Mat.',
      Diameter: 'Dia',
      Wind: 'Wind',
      Snow: 'Snow',
      RingSpacing: 'Spacing',
      InnerGauge: 'In',
      OuterGauge: 'Out',
      AllowDeflection: 'Alwd Def.', 
      ActualDeflection: 'Act. Def.', 
      MaxLength: 'Max Len.',
      PassFail: 'Pass?',
      MaterialLoad: 'Mat. Load'
    }
  ];

  public savedResultsBurst = [
    { Spiral: 'Spiral',
      Material: 'Material',
      Diameter: 'Diameter',
      DuctTemp: 'Duct Temp',
      Gauge: 'Gauge / Class',
      CalcType: 'Calc Type',
      Pressure: 'Burst / Collapse Pressure',
      OperatingPressure: 'Operating Pressure'
    }
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
  public burst : string;
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

  public stackDesign : IStackDesign = {
    safetyFactor : 0,
    spiral : this.constructions[0].value,
    material : this.materials[0].value,
    diameter : 0,
    wind : 0,
    height : 0,
    gauge :  this.gauges[0].value,
    velocity : 0,
    stress : 0,
    buckling : 0,
    yield : 0,
    deflection : 0,
    passFail : 'Pass'
  };

  public supportDesign : ISupportDesign = {
    insulation : this.insulations[0].value,
    load : this.loads[0].value,
    density : 0, 
    safetyFactor : 0,
    spiral : this.constructions[0].value,
    material : this.materials[0].value,
    diameter : 0,
    wind : 0,
    snow : 0,
    ringSpacing : 0,
    innerGauge : this.gauges[0].value,
    outerGauge : this.gauges[0].value,
    allowedDeflection : 0,
    actualDeflection : 0,
    maxLength : 0,
    passFail : 'Pass',
    materialLoad : 0
  };

  constructor( private toolsService: ToolsService) {
    //this.active = true;
   }

  ngOnInit() {
    this.data = {
      Value: 0,
      Unit: this.units[0].value,
      Result: 0
    };

    this.burst = this.burstCollapse[0].value;
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

  public onCalcStackDesign(){

    this.toolsService.calcStack(this.stackDesign)
      .subscribe((data:IStackDesign) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.stackDesign = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcSupportDesign(){

    this.toolsService.calcSupport(this.supportDesign)
      .subscribe((data: ISupportDesign) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.supportDesign = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onSaveResultsSupportDesign() {
    var saveResult = {
      Insulation: String(this.supportDesign.insulation),
      Part: String(this.supportDesign.load),
      Density: String(this.supportDesign.density),
      SafetyFactor: String(this.supportDesign.safetyFactor),
      Spiral: String(this.supportDesign.spiral),
      Material: String(this.supportDesign.material),
      Diameter: String(this.supportDesign.diameter),
      Wind: String(this.supportDesign.wind),
      Snow: String(this.supportDesign.snow),
      RingSpacing: String(this.supportDesign.ringSpacing),
      InnerGauge: String(this.supportDesign.innerGauge),
      OuterGauge: String(this.supportDesign.outerGauge),
      Load: String(this.supportDesign.materialLoad),
      AllowDeflection: String(this.supportDesign.allowedDeflection),
      ActualDeflection: String(this.supportDesign.actualDeflection),
      MaxLength: String(this.supportDesign.maxLength),
      PassFail: String(this.supportDesign.passFail),
      MaterialLoad: String(this.supportDesign.materialLoad)
    };

    this.savedResultsSupport.push(saveResult);
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

  public onSaveResultsBurst() {

    var saveResult = {
     Spiral: String(this.operatingPressure.spiral),
     Material: this.operatingPressure.material,
     Diameter: String(this.operatingPressure.diameter),
     DuctTemp: String(this.operatingPressure.ductTemp),
     Gauge: String(this.operatingPressure.gauge),
     CalcType: this.burst,
     Pressure: String(this.operatingPressure.pressure),
     OperatingPressure: String(this.operatingPressure.operatingPressure)
    };

    this.savedResultsBurst.push(saveResult);
  }

  public onBurstCollapse(){
    this.toolsService.calcBurstCollapse(this.burst, this.operatingPressure)
      .subscribe((data:ICalcOperatingPressure) => {
        if (data ) {
            this.operatingPressure = data;
        } else {
            console.log("error")
        }
      })
  }

  public onRemoveResult(i){
    this.savedResults.splice(i,1);
  }

  public onRemoveResultBurst(i){
    this.savedResultsBurst.splice(i,1);
  }

  public onRemoveResultSupport(i){
    this.savedResultsSupport.splice(i,1);
  }

}