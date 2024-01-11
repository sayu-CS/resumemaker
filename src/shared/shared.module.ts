import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header-landing/header.component";
import { CommonModule } from "@angular/common";
import { NormalButtonComponent } from "./buttons/normal-button/normal-button.component";
import { BodyLandingComponent } from "./body-landing/body-landing.component";



@NgModule({
    declarations: [
                 HeaderComponent,
                 NormalButtonComponent,
                 BodyLandingComponent
                  ],
    imports:[CommonModule],
    exports:[
        HeaderComponent,
        NormalButtonComponent,
        BodyLandingComponent
    ],
})
export class sharedmodule {}
