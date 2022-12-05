export const textNodes = [
  {
    id: 1,
    text: "As you open your eyes, you find yourself in a cell. You don't remember how you got here. As you look around, you see several dead bodies around you.",
    options: [
      {
        text: "Look around",
        setState: { coins: 10 },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Searching the bodies you find 10 silver coins, and a golden amulet that resembles the sun hanging around one of the dead men's neck.",
    options: [
      {
        text: "Take the amulet",
        setState: { amulet: true },
        nextText: 3,
      },
      {
        text: "Leave it",
        nextText: 4,
      },
      {
        text: "Don your armor",
        requiredState: (currentState) => currentState.armor,
        setState: { armor: false },
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: 'You carefully take the amulet from his neck and observe it. It is made from an alloy of iron and gold. Whoever made it, they must be really skillful - you think, looking at the beautiful shape of the object. Suddenly, you hear a warm, eerie voice in your head. "Hang me around your neck, and we can devour the gods together".',
    options: [
      {
        text: "Hang the amulet around your neck",
        setState: { amuletEquipped: true },
        nextText: 5,
      },
      {
        text: "Shove it in your pocket",
        setState: { amuletEquipped: false },
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: "I wouldn't wanna steal from a dead man - you think to yourself, and stand up from the bodies.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 5,
    text: "Mesmerized by the voice, you hang the amulet around your neck, and look through every part of your cell. After you inspected every nook and cranny and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "Frightened by the voice, you quickly put the amulet away, and continue searching the cell. After you inspected every nook and cranny and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "After you inspected every nook and cranny of your cell and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",
    options: [
      {
        text: "Continue",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: "",
    options: [{}, {}],
  },
  {
    id: 7,
    text: "",
    options: [{}, {}],
  },
  {
    id: 8,
    text: "",
    options: [{}, {}],
  },
  {
    id: 9,
    text: "",
    options: [{}, {}],
  },
  {
    id: 10,
    text: "",
    options: [{}, {}],
  },
  {
    id: 11,
    text: "",
    options: [{}, {}],
  },
  {
    id: 12,
    text: "",
    options: [{}, {}],
  },
  {
    id: 13,
    text: "",
    options: [{}, {}],
  },
  {
    id: 14,
    text: "",
    options: [{}, {}],
  },
  {
    id: 15,
    text: "",
    options: [{}, {}],
  },
];
