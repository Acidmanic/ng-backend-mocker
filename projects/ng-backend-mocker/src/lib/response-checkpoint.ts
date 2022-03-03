import { HttpHeaders } from "@angular/common/http";






export class ResponseCheckPoint{


    public method:string='GET';
    
    public path:string='';

    public responseBody:any;

    public responseCode:number=200;

    public responseHeaders:HttpHeaders=new HttpHeaders();



}