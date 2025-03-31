class ApiError extends Error{
    constructor(statusCode,
        message="Something went wrong",
        error=[],
        statck=''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.error = error
        this.stack = stack

        if(statck){
            this.stack = statck
    }
    else{
        this.statck = (new Error()).statck
    }
}
}

export default ApiError;