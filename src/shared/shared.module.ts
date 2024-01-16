import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header-landing/header.component";
import { CommonModule } from "@angular/common";
import { NormalButtonComponent } from "./buttons/normal-button/normal-button.component";
import { BodyLandingComponent } from "./body-landing/body-landing.component";

import { RedBorderOnInvalidDirective } from "./Directives/redBorderOnInvalid.directive";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
                 HeaderComponent,
                 NormalButtonComponent,
                 BodyLandingComponent,
                RedBorderOnInvalidDirective
                  ],
    imports:[CommonModule, RouterModule],
    exports:[
        HeaderComponent,
        NormalButtonComponent,
        BodyLandingComponent,
        RedBorderOnInvalidDirective
    ],
})
export class sharedmodule {}
