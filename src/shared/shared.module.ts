import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header-landing/header.component";
import { CommonModule } from "@angular/common";
import { NormalButtonComponent } from "./buttons/normal-button/normal-button.component";
import { BodyLandingComponent } from "./body-landing/body-landing.component";

import { RedBorderOnInvalidDirective } from "./Directives/redBorderOnInvalid.directive";
import { RouterModule } from "@angular/router";
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSideComponent } from './main-side/main-side.component';
import { MainBodyComponent } from './main-body/main-body.component';



@NgModule({
    declarations: [
                 HeaderComponent,
                 NormalButtonComponent,
                 BodyLandingComponent,
                RedBorderOnInvalidDirective,
                MainHeaderComponent,
                MainSideComponent,
                MainBodyComponent
                  ],
    imports:[CommonModule, RouterModule],
    exports:[
        HeaderComponent,
        NormalButtonComponent,
        BodyLandingComponent,
        RedBorderOnInvalidDirective,
        MainHeaderComponent,
        MainSideComponent,
        MainBodyComponent
    ],
})
export class sharedmodule {}
