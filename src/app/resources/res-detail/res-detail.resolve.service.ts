import { Injectable } from '@angular/core';
import { Router ,Resolve , ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Content } from './resShared/content.model';

@Injectable()
export class ResDetailResolve implements Resolve<Content>{
    constructor(private http : HttpClient,private router:Router){}
    resolve(route: ActivatedRouteSnapshot): Promise<Content> |Content{
      let id = +route.params['id'];
      if(!isNaN(id)){
        return this.http.get<Content>('http://ec2-52-66-253-220.ap-south-1.compute.amazonaws.com:8080/langone/'+id).toPromise().then(cont=>{
          if(cont){
            return cont;
          }
          else{
            this.router.navigate(['not-found']);
            return null;
          }
        });
      }
      else{
        this.router.navigate(['not-found']);
        return null;
      }

     }
}
