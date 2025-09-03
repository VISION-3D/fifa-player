// src/players.js
import messi from './assets/Messi.jpg';
import ronaldo from './assets/Ronaldo.jpg';
import mbappe from './assets/Mbappe.jpg';
import neymar from './assets/Neymar.jpg';

const players = [
  {
    name: "Lionel Messi",
    team: "Paris Saint-Germain",
    nationality: "Argentine",
    jerseyNumber: 30,
    age: 36,
    imageUrl: messi,
    stats: { VIT: 85, TIR: 92, PAS: 91, DRI: 95, DEF: 38, PHY: 65 }
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al-Nassr",
    nationality: "Portugais",
    jerseyNumber: 7,
    age: 38,
    imageUrl: ronaldo,
    stats: { VIT: 87, TIR: 93, PAS: 82, DRI: 88, DEF: 35, PHY: 77 }
  },
  {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    nationality: "Français",
    jerseyNumber: 7,
    age: 25,
    imageUrl: mbappe,
    stats: { VIT: 97, TIR: 89, PAS: 80, DRI: 92, DEF: 36, PHY: 76 }
  },
  {
    name: "Neymar Jr",
    team: "Paris Saint-Germain",
    nationality: "Brésilien",
    jerseyNumber: 10,
    age: 31,
    imageUrl: neymar,
    stats: { VIT: 91, TIR: 85, PAS: 87, DRI: 94, DEF: 32, PHY: 62 }
  }
];

export default players;
