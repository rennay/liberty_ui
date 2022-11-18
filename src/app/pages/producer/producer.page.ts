import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.page.html',
  styleUrls: ['./producer.page.scss'],
})
export class ProducerPage implements OnInit {
  idNumber = '';
  firstName = '';
  lastName = '';
  status = '...';

  constructor(private apiSvc: ApiService) { 
  }

  ngOnInit() {
  }

  async addLead() {
    console.log('addLead!');
    console.log(this.idNumber);
    console.log(this.firstName);
    console.log(this.lastName);

    var formData = {
      "IDNumber": this.idNumber,
      "Name": this.firstName,
      "LastName": this.lastName
    }

    var response = await this.apiSvc.postRecord(formData);
    response.subscribe(result => {
      console.log(result);
      this.status = 'Record inserted..';
    })
  }
}
