import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl: string;

  constructor() {
  	this.baseUrl = 'http://zero19.mcxcarstorage.com.au/wp-json/zero/';
  }
}
