import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CommonModule } from "@angular/common";
import { sharedmodule } from "src/shared/shared.module";
import { LoginPageComponent } from './login-page/login-page.component';
import { featureRoutingModule } from "./feature-routing.module";


@NgModule({
    declarations :[
        LandingPageComponent,
        LoginPageComponent
    ],
    imports:[
        CommonModule,
        sharedmodule,
        featureRoutingModule
    ],
    exports: [
        LandingPageComponent,
        sharedmodule,
        LoginPageComponent,
        featureRoutingModule
    ]
}
    )
export class featureModule {

}