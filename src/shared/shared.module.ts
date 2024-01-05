import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NormalButtonComponent } from "./buttons/normal-button/normal-button.component";



@NgModule({
    declarations: [HeaderComponent, NormalButtonComponent, ],
    imports:[CommonModule],
    exports:[HeaderComponent,NormalButtonComponent],
})
export class sharedmodule {}
