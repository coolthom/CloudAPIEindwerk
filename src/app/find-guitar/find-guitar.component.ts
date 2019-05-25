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
  visible: boolean;

  constructor(private guitarsvc: GuitarService) {
    this.visible = false;
   }

  ngOnInit() {
    
  }

  searchGuitar(page: number = 0){
    this.visible = true;
    this.guitarsvc.getAllGuitars(page).subscribe((result) => {
      this.result = result;
      //console.log(this.result)
    })
  }
  searchSpecificGuitar(){
    this.visible = true;
    this.guitarsvc.getSpecificGuitar(this.guitarBox.nativeElement.value.replace(" ", "%20")).subscribe((result) => {
      this.result = result;
      //console.log(this.result)
    })
  }
}
