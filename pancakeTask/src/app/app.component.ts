import { Component , OnInit, Inject} from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/Product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,PopUpComponent {
  title = 'pancakeTask';
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'discountPercentage','rating','stock', 'brand','category','tumbnail','images', 'Action'];
  clickedRows = new Set<Product>();
   
  data: Product[] = [];

  constructor(public productservice:ProductService, public dialogRef: MatDialog ) {
    
  }
  session:any;
  data1: any;
  data2:any;
  openDialog(id:number,title:string){
    console.log(id)
    console.log(title)
    this.dialogRef.open(PopUpComponent,{
      data: {
        id:id,
        title:title
        
      }
    });

  }
  ngOnInit() {
    this.getData();
    this.saveData();
    this.loadData();
  }
  getData(){
    this.productservice.getProducts().subscribe(db=>{
      this.data=db.products;
      console.log("data:",db)
    })
  }

  saveData(){
  let data = {id:[] ,title:[]};
  localStorage.setItem('', JSON.stringify(data))
  }
  loadData(){ //toolip yerini kullanılabilir.
  let data = localStorage.getItem('session');
  
}
}
