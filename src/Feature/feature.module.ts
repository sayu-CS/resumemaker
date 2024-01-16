import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CommonModule } from "@angular/common";
import { sharedmodule } from "src/shared/shared.module";
import { signupPageComponent } from './signup-page/signup-page.component';
import { featureRoutingModule } from "./feature-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations :[
        LandingPageComponent,
        signupPageComponent,
        LoginPageComponent,
        HomeComponent
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
        ReactiveFormsModule,
        LoginPageComponent,
        HomeComponent
    ]
}
    )
export class featureModule {

}