import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from './models/player.model';
import { Topics } from './models/topics.model';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    base: string;
    apiKey: string;

    constructor(private http: HttpClient) { 
        this.base = `https://api.palace.network`;
        this.apiKey = null;
    }

    private getQueryParams() {
		return `key=${this.apiKey}`;
    }
    
    /**
	 * Retrieve specified player's data
	 *
	 * @param {string} username
	 * @returns {Observable<Player>}
	 * @memberof PlayerService
	 */
	getPlayer(username: string): Observable<Player> {
		return this.http.get<Player>(`${this.base}/player/${username}?${this.getQueryParams()}`);
    }

    // /**
	//  * Retrieve the most recent announcements from forums
	//  *
	//  * @returns
	//  * @memberof DataService
	//  */
	getNews(): Observable<Topics> {
		// tslint:disable-next-line:max-line-length
		return this.http.get<Topics>('https://forums.palace.network/api/forums/topics/?sortDir=desc&forums=3&featured=1&key=bad926e6ed14fe04b81d3b5421363c20');
	}
	// getNews() {
    //     let url = 'https://forums.palace.network/api/'
    //     return this.http.get()
    // }

    /**
	 * Retrieve the current online players
	 *
	 * @returnsx
	 * @memberof DataService
	 */
	getPlayers() {
        let url = 'https://api.mcsrvstat.us/2/play.palace.network';
        return this.http.get(url);
    }


}
