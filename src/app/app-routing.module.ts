import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingPageComponent } from "src/Feature/landing-page/landing-page.component";



const routes: Routes = [{
path:'', component: LandingPageComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class appRoutingModule {

}