import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private notifier: NotificationService) {  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      console.log(user);
      this.notifier.authError();
    }

    return isLoggedIn;
  }

}
