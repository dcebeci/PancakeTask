import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
   
   aciklama?:string ;
   
 
   constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
   this.data = data.id,
   this.data = data.title
   
 
   }

  ngOnInit(): void {
    
  }
  saveData(id:number){
    let data = { };
    localStorage.setItem('', JSON.stringify(this.aciklama))
    console.log(this.aciklama)
    }

}

