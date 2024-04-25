import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
    imports: [HomeComponent, RouterModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'homes'
}
