import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
   id;
   title;
   satis?:number;
   aciklama?:string ;
   
 
   constructor(@Inject(MAT_DIALOG_DATA) public data:any,  private dialogRef: MatDialogRef<PopUpComponent>) {
   this.data = data.id,
   this.data = data.title
   this.acikalama=data.aciklama
   this.satisAdedi=data.satisAdedi;
   
 
   }

  ngOnInit(): void {
    
  }
  saveData(id:number){
    const data={satisadedi:this.satisAdedi,aciklama:this.acikalama}
    localStorage.setItem(id.toString(), JSON.stringify(data));
    this.dialogRef.close();
    }

}

