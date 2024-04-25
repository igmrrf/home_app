import { Routes } from '@angular/router'
import { DetailsComponent } from './details/details.component'
import { HomeComponent } from './home/home.component'

const routeConfig: Routes = [
    { title: 'Home Page', path: '', component: HomeComponent },
    { title: 'Details', path: 'details/:id', component: DetailsComponent },
]

export default routeConfig
