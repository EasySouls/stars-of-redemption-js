import Spell, { Type, DamageType, School } from "../classes/Spell";
export default class Character {
  name = "";
  level = 0;
  maxHp = 0;
  currentHp = 0;
  encumbrence = 0;
  encumbrenceMax = 0;
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;
  exp = 0;
  expNext = 0;
  damage = 0;

  availableSkillPoints = 0;
  availableAttributePoints = 0;

  spells = allSpells;
  knownSpells = [];

  isAlive = true;

  constructor(
    name = "",
    level = 0,
    currentHp = 0,
    encumbrence = 0,
    strength = 0,
    dexterity = 0,
    constitution = 0,
    intelligence = 0,
    wisdom = 0,
    charisma = 0,
    exp = 0,
    knownSpells = [],
    isFirstTimeInitiated = false
  ) {
    this.name = name;
    this.level = level;
    this.maxHp = 6 + constitution * 2;
    this.encumbrenceMax = 20 + strength * 3;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.exp = exp;
    this.expNext = 100 + level * 150;
    this.knownSpells = knownSpells;

    if (isFirstTimeInitiated) {
      this.currentHp = 6 + constitution * 2;
      this.encumbrence = 0;
    } else {
      this.currentHp = currentHp;
      this.encumbrence = encumbrence;
    }
  }

  // Getters
  get damage() {
    return this.calcDamage();
  }

  get knownSpells() {
    return this.knownSpells();
  }

  get allSpells() {
    return this.allSpells();
  }

  // Methods
  levelUp() {
    this.level++;
    this.availableSkillPoints += 2;
    this.availableAttributePoints += 2;
    this.expNext = 100 + level * 150;
  }

  updateStats() {
    this.maxHp = 6 + constitution * 2;
    this.encumbrenceMax = 20 + strength * 3;
    this.expNext = 100 + level * 150;
  }

  levelUpSkill(index) {
    switch (index) {
      case 0:
        this.strength++;
        this.availableAttributePoints--;
        break;

      case 1:
        this.dexterity++;
        this.availableAttributePoints--;
        break;

      case 2:
        this.constitution++;
        this.availableAttributePoints--;
        break;

      case 3:
        this.intelligence++;
        this.availableAttributePoints--;
        break;

      case 4:
        this.wisdom++;
        this.availableAttributePoints--;
        break;

      case 5:
        this.charisma++;
        this.availableAttributePoints--;
        break;
    }

    this.updateStats();
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

  heal(amount) {
    this.currentHp += amount;
    if (this.currentHp > this.maxHp) {
      this.currentHp = this.maxHp;
    }
  }
}

export const allSpells = [
  new Spell(
    "firebolt",
    1,
    Type.Instant,
    0,
    DamageType.Fire,
    [5, 10, 20],
    School.Elemental
  ),
  new Spell(
    "fireball",
    1,
    Type.Instant,
    0,
    DamageType.Fire,
    [10, 20, 40],
    School.Elemental
  ),
  new Spell(
    "mindblast",
    1,
    Type.Instant,
    0,
    DamageType.Chaos,
    [10, 15, 20],
    School.Arcane
  ),
  new Spell(
    "heal",
    1,
    Type.Instant,
    0,
    DamageType.Heal,
    [10, 15, 30],
    School.Arcane
  ),
];
