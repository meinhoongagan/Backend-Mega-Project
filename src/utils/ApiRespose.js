class ApiResponse {
    constructor(statuCode,message="success",data){
        this.statuCode=statuCode;
        this.message=message;
        this.data=data;
        this.success=statuCode<400;
    }
}