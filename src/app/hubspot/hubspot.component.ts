import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './hubspot.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  contacts: any[] = [];

  clientId = 'CLIENT_ID';
  redirectUri = window.location.origin + '/hubspot';
  access_token: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the access token from localStorage
    this.access_token = localStorage.getItem('hubspot_access_token');

    // If access token exists, fetch contacts
    if (this.access_token) {
      this.fetchHubSpotContacts(this.access_token);
    }

    // If HubSpot redirected with a code in the URL, exchange it for an access token
    const code = this.getQueryParam('code');
    if (code && !this.access_token) {
      this.exchangeCodeForAccessToken(code);
    }
  }

  loginWithHubSpot(): void {
    const hubSpotAuthUrl = `https://app.hubspot.com/oauth/authorize?client_id=${this.clientId}&scope=oauth&redirect_uri=${this.redirectUri}`;
    window.location.href = hubSpotAuthUrl;
  }

  private exchangeCodeForAccessToken(code: string): void {
    const clientSecret = 'CLIENT_SECRET'; // Replace with your HubSpot Client Secret
    const tokenUrl = 'https://cors-anywhere.herokuapp.com/https://api.hubapi.com/oauth/v1/token';
    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', this.clientId);
    body.set('client_secret', clientSecret);
    body.set('redirect_uri', this.redirectUri);
    body.set('code', code);

    this.http
      .post(tokenUrl, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .subscribe({
        next: (response: any) => {
          console.log('Response tokens', response);
          const accessToken = response.access_token;
          // Store the access token in localStorage
          localStorage.setItem('hubspot_access_token', accessToken);
          this.access_token = accessToken;
          this.fetchHubSpotContacts(accessToken);
        },
        error: (error) => {
          console.error('Error fetching tokens:', error);
        }
      });
  }

  private fetchHubSpotContacts(accessToken: string): void {
    const contactsUrl = 'https://cors-anywhere.herokuapp.com/https://api.hubapi.com/crm/v3/objects/contacts';
    this.http
      .get(contactsUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .subscribe({
        next: (response: any) => {
          console.log('Response contacts:', response);
          this.contacts = response.results;
        },
        error: (error) => {
          console.error('Error fetching contacts:', error);
          // If the access token is invalid, remove it from localStorage and force re-login
          if (error.status === 401) {
            localStorage.removeItem('hubspot_access_token');
            this.access_token = null;
            alert('Session expired. Please log in again.');
            this.loginWithHubSpot();
          }
        }
      });
  }

  private getQueryParam(param: string): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
}
