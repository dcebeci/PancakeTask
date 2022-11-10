import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent implements OnInit {
 
   constructor(/*@Inject(MAT_DIALOG_DATA) public data*/) {
    

   }

  ngOnInit(): void {
  }

}

// const textArea = document.querySelector('textarea');
// const storageKey = 'text';
// const init = () => {
  
//   textArea.value = localStorage.getItem(storageKey);
  
//   textArea.addEventListener('input', () => {
//     localStorage.setItem(storageKey, textArea.value);
//   });
// }

// init();