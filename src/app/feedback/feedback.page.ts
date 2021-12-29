import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FEEDBACKPage implements OnInit {


  name: any;
  alertController: any;
  constructor(public alert: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(event){
    console.log('submitted');
    const alert1 = await this.alert.create({
    cssClass: 'my-custom-class',
    subHeader: '',
    message: 'Thank you for your feedback!!',
    buttons: ['OK', 'Cancel']
  });
  await alert1.present();
  this.name = '';
  }

  // async presentAlertRadio() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Select Color',
  //     inputs: [
  //       {
  //         name: 'radio1',
  //         type: 'radio',
  //         lable: 'Red',
  //         value: 'value1',
  //         handler: () => {
  //           console.log('Radio button 1 selected');
  //         },
  //         checked: true
  //       },
  //       {
  //         name: 'radio2',
  //         type: 'radio',
  //         lable: 'Blue',
  //         value: 'value2',
  //         handler: () => {
  //           console.log('Radio button 2 selected');
  //         }
  //        // checked: false
  //       }
  //     ],
  //     buttons: [
  //      { 
  //       text: 'Cancel',
  //       role: 'cancel',
  //       cssClass: 'secondary',
  //       handler: () => {
  //         console.log('Confirm cancel button');
  //       }
  //      }, {
  //        text: 'Ok',
  //        handler: () => {
  //         console.log('Confirm ok');
  //        }
  //      }
  //     ]
  //   });
  
  //     await alert.present();
  // }
}