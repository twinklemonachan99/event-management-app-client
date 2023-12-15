import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface test{
    roleName:string
}
@Injectable({providedIn:"root"})

export class EventManagementService{
    constructor(private http : HttpClient){

    }

    getArtists()
    {
        this.http.get("http:localhost:50514/artist-details").subscribe(
            (res:any)=>{
                return res.user;
            }
        );
    }

    addRoles(roleData:any)
    {
        this.http.post<{message: string}>("http://localhost:50514/addroles",roleData).subscribe((res:any)=>
        {
                console.log("res",res);
                return res;
        })
    }

    getUsers()
    {   
        this.http.get<{message:any}>('http://localhost:50514/getusers').subscribe((res:any)=>{
            console.log("data",res.users);
        })
    }
}