export default class Spell {
  name = "";
  level = 1;
  type = Type.Instant;
  duration = 0;
  damageType = DamageType.Physical;
  damageValue = [10, 20, 40];
  school = School.Arcane;
  icon = "";

  constructor(
    name,
    level,
    type,
    duration,
    damageType,
    damageValue = [],
    school = School.Arcane,
    icon = "https://github.com/EasySouls/Webpage/blob/94b5366ecd0fcffd0caa6311181f9583beed1dca/public/digital_art_3.png"
  ) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.duration = duration;
    this.damageType = damageType;
    this.damageValue = damageValue[level - 1];
    this.school = school;
    this.icon = icon;
  }

  useSpell(target, multiplier = 1) {
    if (target instanceof Character || target instanceof Enemy) {
      if (this.damageType === DamageType.Heal) {
        target.heal(this.damageValue * multiplier);
      } else {
        target.takeDamage(this.damageValue * multiplier);
      }
    } else {
      throw Error(`${target} is not a character or an enemy`);
    }
  }
}

export const Type = {
  Instant: "instant",
  Sustained: "sustained",
  Passive: "passive",
};

export const DamageType = {
  Physical: "physical",
  Heal: "heal",
  Fire: "fire",
  Ice: "ice",
  Wind: "wind",
  Earth: "earth",
  Chaos: "chaos",
  Magic: "magic",
};

export const School = {
  Elemental: "elemental",
  Primal: "primal",
  Arcane: "arcane",
  Spirit: "spirit",
  Creation: "creation",
  Entropy: "entropy",
};
