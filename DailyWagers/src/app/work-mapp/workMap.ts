import { ArrayType } from '@angular/compiler';

export class WorkMap{
    reqId:String;
    employee_id:ArrayType;
    created_dt:Date;
    isActive:String;
}
export class WorkPaginate{
    docs:WorkMap[];
    total:Number;
    limit:Number;
    page:Number;
    pages:Number;
 


}