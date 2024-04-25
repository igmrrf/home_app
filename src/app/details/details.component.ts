import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocation } from '../housing-location'
import { ActivatedRoute } from '@angular/router'
import { HousingService } from '../housing.service'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'
@Component({
    selector: 'app-details',
    standalone: true,
    providers: [HousingService],
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    housingLocationId = 0
    housingLocation: HousingLocation = {
        id: 0,
        name: '',
        city: '',
        state: '',
        photo: '',
        availableUnits: 0,
        wifi: false,
        laundry: false,
    }
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    })
    constructor(private readonly housingService: HousingService) {
        this.housingLocationId = Number(this.route.snapshot.params['id'])
        this.housingService
            .getHousingLocation(this.housingLocationId)
            .then((housingLocation: HousingLocation) => {
                this.housingLocation = housingLocation
            })
    }

    submitApplication() {
        this.housingService.submitApplication({
            email: this.applyForm.value.email!,
            firstName: this.applyForm.value.firstName!,
            lastName: this.applyForm.value.lastName!,
        })
    }
}
