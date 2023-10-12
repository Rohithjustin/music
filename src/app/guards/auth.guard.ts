import { CanActivateFn } from '@angular/router';
import { RouteService } from '../services/route.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const routeService= inject(RouteService);
   let token = sessionStorage.getItem("token");
   if(token =='undefined' || token == null || token == ''){
      return false;
    }
    else{
      return true;
    }

   }
