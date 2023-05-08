export class Student{
    private _studentCode: number;
    private _studentName: string;
    private _studentClass: string;
    private _address: string;
    private _score: number;
    private _hobby: string;
    public get hobby(): string {
        return this._hobby;
    }
    public set hobby(value: string) {
        this._hobby = value;
    }
    
    constructor(studentCode: number,studentName: string, studentClass:string, address:string, score:number, hobby:string){
        this.studentCode = studentCode;
        this.studentName = studentName;
        this.studentClass = studentClass;
        this.address = address;
        this.score = score;
        this.hobby = hobby;
    }
    
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    
    public get studentCode(): number {
        return this._studentCode;
    }
    public set studentCode(value: number) {
        this._studentCode = value;
    }
    public get studentName(): string {
        return this._studentName;
    }
    public set studentName(value: string) {
        this._studentName = value;
    }
    public get studentClass(): string {
        return this._studentClass;
    }
    public set studentClass(value: string) {
        this._studentClass = value;
    }

}