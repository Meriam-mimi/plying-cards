export enum MonsterType {
	PLANT = 'plant',
	ELECTRIC = 'electric',
	FIRE = 'fire',
	WATER = 'water',
}

export interface IMonsterProperties {
	imageUrl: string;
	color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
	[MonsterType.PLANT]: {
		imageUrl: 'assets/img/plant.png',
		color: 'rgba(135, 255, 124)'
	},
	[MonsterType.ELECTRIC]: {
		imageUrl: 'fa-solid fa-bolt energy icon',
		color: 'rgb(255, 255, 104)'
	},
	[MonsterType.FIRE]: {
		imageUrl: 'assets/img/fire.png',
		color: 'rgb(255, 104, 104)'
	},
	[MonsterType.WATER]: {
		imageUrl: 'fa-solid fa-droplet',
		color: 'rgba(118, 234, 255)'
	},
}