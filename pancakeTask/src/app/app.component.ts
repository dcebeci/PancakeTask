import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pancakeTask';

  fdata:any= [
    {id:"",title:"",description:"",price:"",discountPercentage:"", rating:"",stock:"",brand:"",category:"",thumbnail:"",images:[0,1,2,3,4], }
 
  ];
  constructor(){
    console.log(this.fdata);
  }
}
