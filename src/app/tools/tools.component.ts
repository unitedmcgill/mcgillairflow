import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { ToolsFormData } from '../models/tools-form-data';
import { IDuctConvert } from '../models/duct-convert';
import { ICalcOperatingPressure } from '../models/operating-pressure';
import { ISupportDesign } from '../models/support-design';
import { IStackDesign } from '../models/stack-design';
import { IUnderground } from '../models/underground';
import { IThermalData } from '../models/thermal-data';
import { IReinforcement } from '../models/reinforcement';
import { IOrificeTube } from '../models/orifice-tube';
import { IDuctDFuser } from '../models/duct-d-fuser';
import { IFactair } from '../models/factair';

@Component({
  //selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public factairHz : string[] = ['63 Hz','125 Hz','250 Hz',
                                 '500 Hz', '1000 Hz', '2000 Hz',
                                 '4000 Hz', '8000 Hz'];
  
  public factairDistances = [
     {value: 1, display: '1'},
     {value: 2, display: '2'},
     {value: 3, display: '3'},
     {value: 4, display: '4'},
     {value: 5, display: '5'},
     {value: 6, display: '6'},
     {value: 10, display: '10'}
  ];
  
  public openclose = [
    { value: 'Open', display: 'Open'},
    { value: 'Close', display: 'Close'}
  ];

  public factairs = [
    { value: 25, display: 'Model 25 (no ball/handle)' },
    { value: 50, display: 'Model 50 (handle only)' },
    { value: 75, display: 'Model 75 (ball only)' },
    { value: 100, display: 'Model 100 (ball/handle)' }
  ];
  
  public yesno = [
    { value: '1', display: 'Yes'},
    { value: '0', display: 'No'}
  ];

  public yesnoInt = [
    { value: 1, display: 'Yes'},
    { value: 0, display: 'No'}
  ];

  public ddCalcTypes = [
    { value: 'Pick', display: 'Pick Diameter'},
    { value: 'Calc', display: 'Diameter based on Performance'}
  ];

  public velocityRanges = [
    { value: 650, display: '500 to 800 fpm (Best Performance)'},
    { value: 950, display: '800 to 1100 fpm (Better Performance)'},
    { value: 1250, display: '1100 to 1400 fpm (Good Performance)'},
    { value: 1600, display: '1400 to 1800 fpm (Fair Performance)'},
    { value: 1800, display: '1800 fpm (Fair Performance)'}
  ];

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

  public ductTypes = [
    { value: 'Rectangular', display: 'Rectangular'},
    { value: 'Spiral Oval', display: 'Spiral Oval'},
    { value: 'Longseam Oval', display: 'Longseam Oval'}
  ];

  public calcTypes = [
    {value: 'Gauge', display: 'Calculate Gauge'},
    {value: 'Reinforcement', display: 'Calculate Reinforcement'}
  ];

  public pressureClasses = [
    {value: '05', display: '+/- 0.5'},
    {value: '1', display:  '+/- 1'},
    {value: '2', display:  '+/- 2'},
    {value: '3', display:  '+/- 3'},
    {value: '4', display:  '+/- 4'},
    {value: '6', display:  '+/- 6'},
    {value: '10', display: '+/- 10'}
  ];

  public applications = [
    {value: 'Exhaust', display:  'Exhaust'},
    {value: 'Supply', display:  'Supply'}
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

  public loadTypes = [
    { value: 'Longitudinal', display: 'Longitudinal Distributed Load' },
    { value: 'Vehicle', display: 'Vehicle Load and Contact Area'},
    { value: 'None', display: 'None'}
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

  public gauges2 = [
    { value: 26, display: '26 ga (0.0295 in.)'},
    { value: 24, display: '24 ga (0.0370 in.)'},
    { value: 22, display: '22 ga (0.0460 in.)'},
    { value: 20, display: '20 ga (0.0590 in.)'},
    { value: 18, display: '18 ga (0.0760 in.)'},
    { value: 16, display: '16 ga (0.0860 in.)'}
  ];

  public reinforcements = [
    { value: 0, display: 'None'},
    { value: 1, display: '10'},
    { value: 2, display: '8'},
    { value: 3, display: '6'},
    { value: 4, display: '5'},
    { value: 5, display: '4'},
    { value: 6, display: '3'},
    { value: 7, display: '2.5'},
    { value: 8, display: '2'}
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

  public winds = [
    { value: 0, display: '0'},
    { value: 15,display: '15'}
  ];

  public humidities = [
    { value: 10, display: '10'},
    { value: 30, display: '30'},
    { value: 50, display: '50'},
    { value: 70, display: '70'},
    { value: 90, display: '90'}
  ];

  // public savedResultsDDF = [
  //   { 
  //     DDCalcType : 'Calc',
  //     VelocityRange : 'Vel',
  //     Diameter : 'Dia.',
  //     ConstDiameter : 'Const',
  //     CFM : 'CFM',
  //     Length : 'Len',
  //     EnteringVelocity : 'EntVel',
  //     TotalPressureDrop : 'TotPress'
  //   }
  // ];

  public savedResultsFactair = [
    { Model: 'Model',
      Velocity: 'Vel',
      Position: 'Pos',
      Distance: 'Dist',
      MaxVelocity: 'MaxV',
      PressureDrop: 'Press',
      Octave1: '63',
      Octave2: '125',
      Octave3: '250',
      Octave4: '500',
      Octave5: '1K',
      Octave6: '2K',
      Octave7: '4K',
      Octave8: '8K',
    }
  ];

  public savedResultsOrificeTube = [
    { TestPressure: 'Press',
      CFM: 'CFM',
      Plate: 'Plate',
      TubeDiameter: 'TDia.',
      OrificeDiameter: 'ODia.',
      BetaRatio: 'Beta',
      OpenArea: 'Area',
      FlowRate: 'Flow',
      PressureDropOrifice: 'PDO',
      PressureDropPlate: 'PDP',
      FanPressure: 'Fan'
    }
  ];

  public savedResultsReinforcement = [
    { DuctType: 'Type',
      CalcType: 'Calc',
      PressureClass: 'PClass',
      Application: 'App',
      Minor: 'Min',
      Major: 'Maj',
      Gauge: 'Ga.',
      SelectedReinforcement: 'Space',
      MinorReinforcement: 'MinR',
      MajorReinforcement: 'MajR',
      CalculatedGauge: 'CalcGa.'
    }
  ];

  public savedResultsThermalData = [
    { Insulation: 'Ins.',
      Wind: 'Wind',
      Diameter: 'Dia',
      FlowRate: 'Flow',
      InsideDuctTemp: 'InTmp',
      AmbientTemp: 'OutTmp.',
      DuctLength: 'Len',
      Humidity: 'Hmdty',
      HeatTransfer: 'Heat',
      SkinTemp: 'Skin',
      ExitTemp: 'Exit',
      DewpointTemp: 'Dew',
      Condensation: 'Cndnst',
      Conductivity: 'Cndctv',
      Density: 'Dens'
    }
  ];

  public savedResultsUnderground = [
    { Spiral: 'Spiral',
      LoadType: 'Type',
      DistLoad: 'DLoad',
      Vehicle: 'Vehcl',
      Area: 'Area',
      Material: 'Mat.',
      Diameter: 'Dia',
      Gauge: 'Ga.',
      Density: 'Dnsty',
      Depth: 'Depth',
      Modulus: 'Mod',
      SoilLoad: 'SLoad',
      ExternalLoad: 'ELoad',
      TotalLoad: 'TLoad',
      Deflection: 'Def.',
      MaxDepth: 'Max Dep',
      PassFail: 'Pass?'
    }
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

  public underground : IUnderground = {
    spiral : this.constructions[0].value,
    loadType : this.loadTypes[0].value,
    distLoad : 0,
    vehicle : 0,
    area : 0,
    material : this.materials[0].value,
    diameter : 0,
    gauge : this.gauges[0].value,
    density : 0,
    depth: 0,
    modulus: 0,
    soilLoad: 0,
    externalLoad: 0,
    totalLoad: 0,
    deflection: 0,
    maxDepth: 0,
    passFail: 'Pass'
  };

  public thermalData : IThermalData = {
    insulation : this.insulations[0].value,
    wind : this.winds[0].value,
    diameter : 0,
    flowRate : 0,
    insideDuctTemp : 0,
    ambientTemp : 0,
    ductLength : 0,
    humidity : 0,
    heatTransfer : 0,
    skinTemp : 0,  
    exitTemp : 0,
    dewpointTemp : 0,
    condensation : '',
    conductivity : 0,
    density : 0
  };

  public reinforcement : IReinforcement = {
    ductType : this.ductTypes[0].value,
    calcType : this.calcTypes[0].value,
    pressureClass : this.pressureClasses[0].value,
    application : this.applications[0].value,
    minor : 0,
    major : 0,
    gauge : this.gauges2[0].value,
    selectedReinforcement : 0,
    minorReinforcement : '',
    majorReinforcement : '',
    calculatedGauge : 0
  };

  public orificetube : IOrificeTube = {
    testPressure : 0,
    cfm : 0,
    plate : this.yesno[0].value,
    tubeDiameter : 4,
    orificeDiameter : 1.5,
    betaRatio : 0,
    openArea : '',
    tubeList : ''
  };

  public ddf : IDuctDFuser = {
    calcType : this.ddCalcTypes[0].value,
    velocityRange : this.velocityRanges[0].value,
    diameter : 0,
    constDiameter : this.yesnoInt[0].value,
    cfm : 0,
    length : 0,
    ductList : '',
    orificeList : '',
    enteringVelocity : 0,
    totalPressureDrop : 0,
    error : ''
  };

  public factair : IFactair = {
    model : this.factairs[0].value,
    velocity : 0,
    position : this.openclose[0].value,
    distance : 2,
    maxVelocity : 0,
    pressureDrop : 0,
    octaves : ''
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

  public onCalcUnderground() {
    this.toolsService.calcUnderground(this.underground)
      .subscribe((data:IUnderground) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.underground = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcThermalData() {
    this.toolsService.calcThermalData(this.thermalData)
      .subscribe((data:IThermalData) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.thermalData = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcReinforcement() {
    this.toolsService.calcReinforcement(this.reinforcement)
      .subscribe((data:IReinforcement) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.reinforcement = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcOrificeTube() {
    this.toolsService.calcOrificeTube(this.orificetube)
      .subscribe((data:IOrificeTube) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.orificetube = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onCalcDDF() {
    this.toolsService.calcDDF(this.ddf)
      .subscribe((data:IDuctDFuser) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.ddf = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })    
  }

  public onCalcFactair() {
    this.toolsService.calcFactair(this.factair)
      .subscribe((data:IFactair) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.factair = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
      })
  }

  public onSaveResultsFactair(){
    var saveResult = {
      Model: String(this.factair.model),
      Velocity: String(this.factair.velocity),
      Position: String(this.factair.position),
      Distance: String(this.factair.distance),
      MaxVelocity: String(this.factair.maxVelocity),
      PressureDrop: String(this.factair.pressureDrop),
      Octave1: String(this.factair.octaves[0]),
      Octave2: String(this.factair.octaves[1]),
      Octave3: String(this.factair.octaves[2]),
      Octave4: String(this.factair.octaves[3]),
      Octave5: String(this.factair.octaves[4]),
      Octave6: String(this.factair.octaves[5]),
      Octave7: String(this.factair.octaves[6]),
      Octave8: String(this.factair.octaves[7])
    }
    
    this.savedResultsFactair.push(saveResult);    
  }

  public onSaveResultsOrificeTube(i) {
    var saveResult = {
      TestPressure: String(this.orificetube.testPressure),
      CFM: String(this.orificetube.cfm),
      Plate: String(this.orificetube.plate),
      TubeDiameter: String(this.orificetube.tubeDiameter),
      OrificeDiameter: String(this.orificetube.orificeDiameter),
      BetaRatio: String(this.orificetube.betaRatio),
      OpenArea: String(this.orificetube.openArea),
      FlowRate: String(this.orificetube.tubeList[i][0]),
      PressureDropOrifice: String(this.orificetube.tubeList[i][1]),
      PressureDropPlate: String(this.orificetube.tubeList[i][2]),
      FanPressure: String(this.orificetube.tubeList[i][3])
    }
    
    this.savedResultsOrificeTube.push(saveResult);
  }

  public upTheTube(){
    var td = this.orificetube.tubeDiameter + 1;
    var br = this.orificetube.orificeDiameter / td;
    if (td > 99) {
        td = 99;
    }

    if (br >= 0.8) {
        td += 2;
    }
    else if (br <= 0.09) {
        td -= 1;
    }

    if (td > 6 && td % 2 == 1) {
        td++;
    }

    if ( td != this.orificetube.tubeDiameter)
    {
      this.orificetube.tubeDiameter = +td.toFixed(1);
      this.onCalcOrificeTube();
    }
  }

  public downTheTube(){
    var td = this.orificetube.tubeDiameter - 1;
    var br = this.orificetube.orificeDiameter / td;

    if (td < 4) {
        td = 4;
    }

    if (br >= 0.8 && td >= 6) {
        td += 3;
    }
    else if (br >= 0.8 && td < 6) {
        td++;
    }

    if (br <= 0.09) {
        td += 2;
    }

    if (td > 6 && td % 2 == 1) {
        td--;
    }

    if ( td != this.orificetube.tubeDiameter) {
      this.orificetube.tubeDiameter = +td.toFixed(1);
      this.onCalcOrificeTube();
    }
  }

  public upTheOrifice(delta){
    var od = this.orificetube.orificeDiameter + delta;
    var br = od / this.orificetube.tubeDiameter;

    if (br >= 0.8) {
        od -= delta;
    }
    else if (br <= 0.09) {
        od += delta;
    }

    if (br <= 0.09 || br >= 0.8) {
        od -= delta;
    }

    if (od != this.orificetube.orificeDiameter) {
        this.orificetube.orificeDiameter = +od.toFixed(3);
        this.onCalcOrificeTube();
    }
  }

  public downTheOrifice(delta){
    var od = this.orificetube.orificeDiameter - delta;
    var br = od / this.orificetube.tubeDiameter;

    if (br >= 0.8) {
        od -= delta;
    }
    else if (br <= 0.09) {
        od += delta;
    }

    if (od != this.orificetube.orificeDiameter) {
        this.orificetube.orificeDiameter = +od.toFixed(3);
        this.onCalcOrificeTube();
    }
  }

  public onSaveResultsReinforcement() {
    var saveResult = {
      DuctType: String(this.reinforcement.ductType),
      CalcType: String(this.reinforcement.calcType),
      PressureClass: String(this.reinforcement.pressureClass),
      Application: String(this.reinforcement.application),
      Minor: String(this.reinforcement.minor),
      Major: String(this.reinforcement.major),
      Gauge: String(this.reinforcement.gauge),
      SelectedReinforcement: String(this.reinforcement.selectedReinforcement),
      MinorReinforcement: String(this.reinforcement.minorReinforcement),
      MajorReinforcement: String(this.reinforcement.majorReinforcement),
      CalculatedGauge: String(this.reinforcement.calculatedGauge),
    }
    
    this.savedResultsReinforcement.push(saveResult);
  }


  public onSaveResultsThermalData() {
    var saveResult = {
      Insulation: String(this.thermalData.insulation),
      Wind: String(this.thermalData.wind),
      Diameter: String(this.thermalData.diameter),
      FlowRate: String(this.thermalData.flowRate),
      InsideDuctTemp: String(this.thermalData.insideDuctTemp),
      AmbientTemp: String(this.thermalData.ambientTemp),
      DuctLength: String(this.thermalData.ductLength),
      Humidity: String(this.thermalData.humidity),
      HeatTransfer: String(this.thermalData.heatTransfer),
      SkinTemp: String(this.thermalData.skinTemp),
      ExitTemp: String(this.thermalData.exitTemp),
      DewpointTemp: String(this.thermalData.dewpointTemp),
      Condensation: String(this.thermalData.condensation),
      Conductivity: String(this.thermalData.conductivity),
      Density: String(this.thermalData.density)
    }
    
    this.savedResultsThermalData.push(saveResult);
  }

  public onSaveResultsUnderground() {
    var saveResult = {
      Spiral: String(this.underground.spiral),
      LoadType: String(this.underground.loadType),
      DistLoad: String(this.underground.distLoad),
      Vehicle: String(this.underground.vehicle),
      Area: String(this.underground.area),
      Material: String(this.underground.material),
      Diameter: String(this.underground.diameter),
      Gauge: String(this.underground.gauge),
      Density: String(this.underground.density),
      Depth: String(this.underground.depth),
      Modulus: String(this.underground.modulus),
      SoilLoad: String(this.underground.soilLoad),
      ExternalLoad: String(this.underground.externalLoad),
      TotalLoad: String(this.underground.totalLoad),
      Deflection: String(this.underground.deflection),
      MaxDepth: String(this.underground.maxDepth),
      PassFail: String(this.underground.passFail)
    }
    
    this.savedResultsUnderground.push(saveResult);
  }

  public onSaveResultsStackDesign(){
    var saveResult = {
      SafetyFactor: String(this.stackDesign.safetyFactor),
      Spiral: String(this.stackDesign.spiral),
      Material: String(this.stackDesign.material),
      Diameter: String(this.stackDesign.diameter),
      Wind: String(this.stackDesign.wind),
      Height: String(this.stackDesign.height),
      Gauge: String(this.stackDesign.gauge),
      Velocity: String(this.stackDesign.velocity),
      Stress: String(this.stackDesign.stress),
      Buckling: String(this.stackDesign.buckling),
      Yield: String(this.stackDesign.yield),
      Deflection: String(this.stackDesign.deflection),
      PassFail: String(this.stackDesign.passFail),
    }

    this.savedResultsStack.push(saveResult);
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

  public onRemoveStackSupport(i){
    this.savedResultsStack.splice(i,1);
  }

  public onRemoveUnderground(i){
    this.savedResultsUnderground.splice(i,1);
  }

  public onRemoveThermalData(i){
    this.savedResultsThermalData.splice(i,1);
  }

  public onRemoveReinforcement(i){
    this.savedResultsReinforcement.splice(i,1);
  }

  public onRemoveOrificeTube(i){
    this.savedResultsOrificeTube.splice(i,1);
  }

  public onRemoveFactair(i){
    this.savedResultsFactair.splice(i,1);
  }

}