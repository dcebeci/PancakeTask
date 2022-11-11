import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
   data1;
   data2;
 
 
   constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
   this.data1 = data.id,
   this.data2 = data.title
 
   }

  ngOnInit(): void {
    
  }
  saveData(){
    let data = {};
    localStorage.setItem('', JSON.stringify(data))
    console.log(data)
    }

}

