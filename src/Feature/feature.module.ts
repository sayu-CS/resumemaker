import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CommonModule } from "@angular/common";
import { sharedmodule } from "src/shared/shared.module";
import { signupPageComponent } from './signup-page/signup-page.component';
import { featureRoutingModule } from "./feature-routing.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations :[
        LandingPageComponent,
        signupPageComponent
    ],
    imports:[
        CommonModule,
        sharedmodule,
        featureRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        LandingPageComponent,
        sharedmodule,
       signupPageComponent,
        featureRoutingModule,
        ReactiveFormsModule
    ]
}
    )
export class featureModule {

}