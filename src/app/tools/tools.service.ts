import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../services/config.service";
import { Observable } from 'rxjs/Observable';
import { IDuctConvert } from '../models/duct-convert';
import { ICalcOperatingPressure } from '../models/operating-pressure'
import { ISupportDesign } from '../models/support-design'

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ToolsService{

    private config : any;

    constructor(private configService: ConfigService, private http: Http){
        this.config = configService.config;
    }

    public convertVolumeFlowRate(value : string, bToCfm : string) : Observable<string>{
        let parms = '/'+value+'/'+bToCfm;
        let url = this.config.apiUrl+"/convertvolumeflowrate"+parms;
        return this.http.get(url)
                   .map((res: Response) => {
                        let result = res.json();
                        //TODO you can do stuff with the values here if you want

                        return result;
                   })
                   .catch(this._handleError);
    }

    public convertDuctTypes(ductConvert : IDuctConvert) : Observable<IDuctConvert>{
       
        let bodyString = JSON.stringify(ductConvert); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/convertducttypes";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcPressure(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/pressure";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcStiffenerSpacing(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/stiffenerspacing";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcMinThickness(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/minthickness";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcBurstCollapse( calcType : String, operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/pressurecollapse";
        if ( calcType == 'burst')
        {
            url = this.config.apiUrl+"/pressureburst";
        }

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcSupport(calcSupport : ISupportDesign) : Observable<ISupportDesign>{
       
        let bodyString = JSON.stringify(calcSupport); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/support";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    private _handleError(error:any){
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    } 

}