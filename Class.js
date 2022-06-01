class Personnage{
    constructor(nom, vie, att){
        this.nom = nom;
        this.vie = vie;
        this.att = att;
    }
 
    status(){
        console.log(`${this.nom} à actuellement ${this.vie} point de vie`);
    }
}

/**
 * Heros
 */
class Hero extends Personnage{
    constructor(){
        super(nom, vie, att)
    }
    /**
     * 
     * @param {Obj} enemy 
     */
    heroUltim(enemy){
        enemy.vie = enemy.vie - (this.att * 3);
    }
}

/**
 * Ennemie
 */
class enemy extends Personnage {
    constructor(){
        super(nom, vie, att)
    }
    /**
     * 
     * @param {Obj} Hero 
     */
    attEnemy(Hero){
        Hero.vie = Hero.vie - (this.att * 2); 
    }
}
export {Personnage};