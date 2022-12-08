export default class Enemy {
  name = "";
  level = 0;
  race = "";
  currentHp = 0;
  maxHp = 0;
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;

  isAlive = true;

  constructor(name = "base name", level = 1, race = "human", attrArr) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.currentHp = 6 + level * 6;
    this.maxHp = 6 + level * 6;
    this.strength = attrArr[0];
    this.dexterity = attrArr[1];
    this.constitution = attrArr[2];
    this.intelligence = attrArr[3];
    this.wisdom = attrArr[4];
    this.charisma = attrArr[5];
    this.isAlive = true;
  }

  // Getters
  get damage() {
    return this.calcDamage();
  }

  get exp() {
    return this.calcExp();
  }

  // Methods
  calcExp() {
    return this.level * 10;
  }

  calcDamage() {
    return 2 + this.strength * 2;
  }

  takeDamage(damage) {
    this.currentHp -= damage;
    if (this.currentHp <= 0) {
      this.isAlive = false;
    }
  }
}
