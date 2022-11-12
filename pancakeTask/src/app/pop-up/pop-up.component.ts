import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
  id;
  title;
  satisAdedi?:number;
  acikalama?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PopUpComponent>) {
    this.id = data.id;
    this.title = data.title;
    this.acikalama=data.aciklama
    this.satisAdedi=data.satisAdedi;

  }

  ngOnInit(): void {

  }

  saveData(id: number) {
    const data={satisadedi:this.satisAdedi,aciklama:this.acikalama}
    localStorage.setItem(id.toString(), JSON.stringify(data));
    this.dialogRef.close();
  }

}

