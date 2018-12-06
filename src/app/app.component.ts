import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HttpParams, HttpHeaders} from '@angular/common/http';

interface data {
  count: string;
  // item: string;
  weight: string;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vensiwf';
  write = false;
  predict = false;
  graphs = false;
  cokeAPI = "https://pitpyeb6la.execute-api.us-east-1.amazonaws.com/Dev";
  payload: any = {count: 222, weight: 222};
  headers = new HttpHeaders().set("content-type", "application/json");
  postResult: any = {};
  http: HttpClient

  doPost() {
    this.http.post(this.cokeAPI, this.payload, {
      headers: new HttpHeaders().set("content-type", "application/json")
    } ).subscribe(
      res => this.postResult = res,
      err => {console.log("Error occured: " + err.message);
    }
    );
  }
onClickOpenWriteForm() {
  this.write=true;
  this.graphs=false;
  this.predict=false;
  return this.write;
}

onClickOpenPredictForm() {
  this.write=false;
  this.predict=true;
  this.graphs=false;
  return this.predict;
}

onClickOpenGraphs() {
  this.write=false;
  this.predict=false;
  this.graphs=true;
  return this.graphs;
}

}
