import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { ToolsFormData } from '../models/tools-form-data';
import { IDuctConvert } from '../models/duct-convert';

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

  //public active : boolean;
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

}
