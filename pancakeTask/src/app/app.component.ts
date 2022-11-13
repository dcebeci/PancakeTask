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
export class AppComponent implements OnInit {
  title = 'pancakeTask';
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'discountPercentage','rating','stock', 'brand','category','thumbnail','images', 'Action', 'SatisAdedi'];
  clickedRows = new Set<Product>();
   
   data: Product[] = [];
 

  constructor(public productservice: ProductService, public dialogRef: MatDialog) {

  }

  session: any;

  openDialog(id: number, title: string) {
    let data2 = localStorage.getItem(id.toString());
    let data3 = data2 && JSON.parse(data2);
    this.dialogRef.open(PopUpComponent, {
      data: {
        id: id,
        title: title,
        satisAdedi: data3 ? data3.satisadedi:0,
        aciklama: data3 ? data3.aciklama:''
      }
    });
    //popup kapandıktan sonra tooltip'e güncel veri gelmesi için
    this.dialogRef.afterAllClosed.subscribe(result => {
      this.getData();
     });
 



  }

  ngOnInit() {
    this.getData();

  }
  //LS kayıt
  getData() {
    this.productservice.getProducts().subscribe(db => {
      this.data = db.products;
      this.data.forEach(value => {
        let d1 = localStorage.getItem(value.id.toString()) ?? '';
        let d2 = d1 && JSON.parse(d1);
        value.satisAdedi = d2.satisadedi;
        value.aciklama = d2.aciklama;
      })

    })
  }


}
