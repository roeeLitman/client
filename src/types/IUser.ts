export interface IOrganizations {
    name: string;
    resources: [{ name: string; amount: number }];
    budget: number;
}

export interface IUser {
    _id: string;
    username: string;
    detailsOnOrganization: IOrganizations ;
    token: string 
}
