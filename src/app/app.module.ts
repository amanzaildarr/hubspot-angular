import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { socialAuthConfig } from './auth/authentication/service/social-auth-config';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { AuthInterceptor } from './theme/shared/intercepter/auth-interceptor';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, HttpClientModule, SocialLoginModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: socialAuthConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
