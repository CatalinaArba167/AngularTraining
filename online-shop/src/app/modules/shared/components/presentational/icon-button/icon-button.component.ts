import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() iconType:string | undefined;
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(private router: Router) {}

  handleClick(): void {
    // if(this.iconType=="Shop"){
    //   this.router.navigate(['shop']);
    // }
      this.clickEvent.emit();
  }

  getIconClass():string | undefined{
    if(this.iconType){
    return this.iconType;
    }
    else return undefined;
  }

}
