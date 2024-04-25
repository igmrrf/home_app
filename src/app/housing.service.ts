import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'

@Injectable({
    providedIn: 'root',
})
export class HousingService {
    url = 'http://localhost:3000/locations'

    constructor() {}

    async getAllHousingLocation(): Promise<HousingLocation[]> {
        const data = await fetch(this.url)
        return (await data.json()) ?? []
    }

    async getHousingLocation(id: Number): Promise<HousingLocation> {
        const data = await fetch(`${this.url}/${id}`)
        return (await data.json()) ?? {}
    }

    async submitApplication(payload: {
        email: string
        firstName: string
        lastName: string
    }) {
        console.log(payload)
    }
}
