export interface Server_Response_Success<T = any>{
    success: true,
    data: T
}

export interface Server_Response_Failure{
    success: false,
    message: string,
}

export type Server_Response<T = any> = Server_Response_Success<T> | Server_Response_Failure;