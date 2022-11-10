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
  }
  getData(){
    this.productservice.getProducts().subscribe(db=>{
      this.data=db.products;
      console.log("data:",db)
    })
 
   
    }

    
}
