import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Const {
  public static USERNAME_SEGURIDAD: string;
  public static PASSWORD_SEGURIDAD: string;
  public static ACCEPT_COOKIE: string;
  public static API_SEGURIDAD: string;
  static API_PROCESS: any;
  static URL_TYPE_ACCESS: any;
  constructor(private http: HttpClient) {
    Const.ACCEPT_COOKIE = 'ACCEPT_COOKIE';
  }

  public loadCommonConfig() {
    return this.http
      .get('./assets/config/common.config.json')
      .toPromise()
      .then((config: any) => {
        Const.API_SEGURIDAD = config.public_base_url_seguridad;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  public loadEntidadConfig() {
    return this.http
      .get('./assets/config/pillihuaman-web.config.json')
      .toPromise()
      .then((config: any) => {
        Const.USERNAME_SEGURIDAD = config.client_id;
        Const.PASSWORD_SEGURIDAD = config.client_secret;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
