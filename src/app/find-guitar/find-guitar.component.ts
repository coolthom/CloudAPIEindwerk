import { Component, OnInit } from '@angular/core';
import { GuitarService, Guitar } from '../guitar.service';

@Component({
  selector: 'app-find-guitar',
  templateUrl: './find-guitar.component.html',
  styleUrls: ['./find-guitar.component.css']
})
export class FindGuitarComponent implements OnInit {

  result: Array<Guitar>;

  constructor(private guitarsvc: GuitarService) { }

  ngOnInit() {
    this.searchGuitar(99)
  }

  searchGuitar(page: number = 0){
    this.guitarsvc.getAllGuitars(page).subscribe((result) => {
      this.result = result;
      console.log(this.result)
    })
  }

}
