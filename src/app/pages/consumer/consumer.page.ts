import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.page.html',
  styleUrls: ['./consumer.page.scss'],
})
export class ConsumerPage implements OnInit {
  records: any = [];

  constructor(private apiSvc: ApiService) { }

  async ngOnInit() {
    var formData = {};
    var response = await this.apiSvc.getRecords(formData);
    response.subscribe(result => {
      console.log(result);

      const resultLen = result.length;
      console.log(resultLen);

      this.records = [];
      for (let i=0; i < resultLen; i++) {
        var record = result[i];
        console.log(record);

        this.records.push(record);
      }
    })
  }

}
