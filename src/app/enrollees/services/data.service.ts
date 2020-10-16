import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  private url = `${environment.protocol}://${environment.domain}`;

  constructor(
    private httpClient: HttpClient
  ) { }


  /**
   * Get all the enrollees details
   *
   * @returns {Observable<any>}
   * @memberof DataService
   */
  getEnrollees(): Observable<any> {
    return this.httpClient.get(`${this.url}/enrollees`);
  }

  /**
   * Get specific enrollee details
   *
   * @param {string} id
   * @returns {Observable<any>}
   * @memberof DataService
   */
  getEnrolleeById(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/enrollees/${id}`);
  }

  /**
   * Update Enrollee Details
   *
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof DataService
   */
  updateEnrollee(data: any): Observable<any> {
    const id = data.id;
    const payload = {
      name: data.name,
      active: data.status,
      dateOfBirth: data.dob
    };
    return this.httpClient.put(`${this.url}/enrollees/${id}`, payload);
  }

}
