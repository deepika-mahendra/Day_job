export class Application{
    employee_id:String;
    req_id:String;
    created_dt:Date;
    isActive:String;

}
export class ApplicationPaginate{
    docs:Application[];
    total:Number;
    limit:Number;
    page:Number;
    pages:Number;

}