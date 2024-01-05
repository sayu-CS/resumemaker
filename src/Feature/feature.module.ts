import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CommonModule } from "@angular/common";
import { sharedmodule } from "src/shared/shared.module";

@NgModule({
    declarations :[
        LandingPageComponent
    ],
    imports:[
        CommonModule,
        sharedmodule
    ],
    exports: [
        LandingPageComponent,
        sharedmodule
    ]
}
    )
export class featureModule {

}