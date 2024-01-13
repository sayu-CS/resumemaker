import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { signupPageComponent } from "./signup-page/signup-page.component";


const routes: Routes = [{
path:'signup', component: signupPageComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class featureRoutingModule {

}