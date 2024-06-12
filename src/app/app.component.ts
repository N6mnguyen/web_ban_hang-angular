import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: `<router-outlet/>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ASM';

  ngOnInit(): void {
    initFlowbite();
  }
}
