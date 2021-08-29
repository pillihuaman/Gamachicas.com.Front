export interface User {
    name: string,
    lastName: string,
    code: number,
    password: string,
    estatus: boolean,
    documentoNumber: string;
    token?: string;
    personID?: number;
    email?: string;
    phoneNumber?: string;
    rolId?: number;

}
