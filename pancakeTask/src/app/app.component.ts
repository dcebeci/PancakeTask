import { Component , OnInit, Inject} from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/Product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pancakeTask';
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'discountPercentage','rating','stock', 'brand','category','tumbnail','images'];
  clickedRows = new Set<Product>();
   
  data: Product[] = [];

  constructor(public productservice:ProductService, public dialogRef: MatDialog ) {
    
  }
  openDialog(){
    this.dialogRef.open(AppComponent);
  }
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.productservice.getProducts().subscribe(db=>{
      this.data=db.products;
      console.log("data:",db)
    })
 
   
    }

    
}
