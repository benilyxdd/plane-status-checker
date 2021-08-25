import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { auth } from './response';

@Injectable({
	providedIn: 'root',
})
export class FetchFlightDataService {
	data: any = null;
	constructor(private http: HttpClient) {}

	async fetchFlightData(IATA: string): Promise<any> {
		// prepare data to fetch
		const carrierCodeArray = IATA.match(/[A-Z]+/g);
		const carrierCode = carrierCodeArray
			? carrierCodeArray[0]
			: 'IMPOSSIBLE';
		const flightNumberArray = IATA.match(/[0-9]+/g);
		const flightNumber = flightNumberArray
			? flightNumberArray[0]
			: 'IMPOSSIBLE';
		const currentDate = new Date().toISOString().slice(0, 10);
		const currentYear = currentDate.slice(0, 4);
		const currentMonth = currentDate.slice(5, 7);
		const currentDay = currentDate.slice(8, 10);
		console.log(currentYear, currentMonth, currentDay);
		const dataUrl = `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrierCode}/${flightNumber}/dep/${currentYear}/${currentMonth}/${currentDay}?appId=59740609&appKey=577eb50e53d9ce436a21087f9ff5a6f7&extendedOptions=useInlinedReferences`;

		const res = await this.http.get(dataUrl).toPromise();
		this.data = res;
	}
}
