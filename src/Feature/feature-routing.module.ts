import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { signupPageComponent } from "./signup-page/signup-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { HomeComponent } from "./MAIN.home/home.component";


const routes: Routes = [
    {path:'signup', component: signupPageComponent},
    {path:'login', component: LoginPageComponent },
    {path:'home', component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class featureRoutingModule {

}