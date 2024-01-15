import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.css']
})
export class NormalButtonComponent {
@Input() routeValue!: string;

constructor(private router: Router){}

onClicked() {
this.router.navigate([this.routeValue]);
}
}
