import { Stats } from './stats.model';

export interface Player {
	uuid: string;
	username: string;
	rank: string;
	address: string;
	balance: number;
	tokens: number;
    lastOnline: string;
    onlineTime: number;
    isStaff: boolean;
    statsModel: Stats;
}
