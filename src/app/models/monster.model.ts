import { MonsterType } from "../utils/monster.utils";

export class Monster {

    name: string = "My Monster";
    hp: number = 40;
    image: string = 'assets/img/P3.png';
    type: MonsterType = MonsterType.ELECTRIC ;
    figureCaption:string = "N°001 Monster";
    attackName: string = "Geo Impact";
    attackStrength: number = 60;
    attackDescription: string = "this is description this is description this is description this is description."
}