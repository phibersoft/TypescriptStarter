export default class CERROR extends Error {
    statusCode: number;
    constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = "CERROR";
    }
}