import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
  @ViewChild("AppComponent") appComp: AppComponent | undefined;

  id;
  title;
  satisAdedi?:number;
  acikalama?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PopUpComponent>, private router: Router
  ) {
    this.id = data.id;
    this.title = data.title;
    this.acikalama=data.aciklama
    this.satisAdedi=data.satisAdedi;

  }

  ngOnInit(): void {

  }
// Popup 
  saveData(id: number) {
    const data={satisadedi:this.satisAdedi,aciklama:this.acikalama}
    localStorage.setItem(id.toString(), JSON.stringify(data));
    this.dialogRef.close()
  }

}

