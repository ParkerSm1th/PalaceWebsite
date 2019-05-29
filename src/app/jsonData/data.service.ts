import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from './models/player.model';

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

    /**
	 * Retrieve the most recent announcements from forums
	 *
	 * @returns
	 * @memberof DataService
	 */
	getUpdate() {

        let updateUrl = 'https://forums.palace.network/forum/3-announcements-news.xml';
        return this.http.get(updateUrl, {responseType: 'text'});
    }


}

