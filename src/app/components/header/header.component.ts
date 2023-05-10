import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  menu() {
    const checkbox: any = document.querySelector('#checkbox');
    const nav: any = document.querySelector('.navigation');

    if (checkbox.checked == false) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
      this.router.navigate(['']);
    }
  }
}
