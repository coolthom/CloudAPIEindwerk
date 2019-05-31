import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GuitarService, Guitar } from '../guitar.service';

@Component({
  selector: 'app-find-guitar',
  templateUrl: './find-guitar.component.html',
  styleUrls: ['./find-guitar.component.css']
})
export class FindGuitarComponent implements OnInit {
  @ViewChild('guitarBox') guitarBox: ElementRef;
  @ViewChild('guitars') guitars: ElementRef;

  result: Array<Guitar>;
  listVisible: boolean;
  formVisible: boolean;
  guitar: Guitar;

  constructor(private guitarsvc: GuitarService) {
    this.listVisible = false;
    this.guitar = new Guitar()
   }

  ngOnInit() { }

  searchGuitar(page: number = 0){
    this.formVisible = false;
    this.listVisible = true;
    this.guitarsvc.getAllGuitars(page).subscribe((result) => {
      this.result = result;
      //console.log(this.result)
    })
  }
  searchSpecificGuitar(){
    this.formVisible = false;
    this.listVisible = true;
    this.guitarsvc.getSpecificGuitar(this.guitarBox.nativeElement.value.replace(" ", "%20")).subscribe((result) => {
      this.result = result;
      //console.log(this.result)
    })
  }
  showForm(){
    this.listVisible = false;
    this.formVisible = true;
  }
  submitForm(){
    console.log(this.guitar)
    this.guitarsvc.postGuitar(this.guitar);
  }
}
