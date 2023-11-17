/*
NOTA: AL FINAL DE CADA NIVEL, INICIA EL SIGUIENTE 
*/

const emojis = {
  '-': ' ',
  'O': '🧧',
  'X': '❄️',
  'I': '🎄',
  'PLAYER': '🎅',
  'BOMB_COLLISION': '🥶',
  'GAME_OVER': '😭',
  'WIN': '🥇',
  'HEART': '❤️',
};

const maps = [];
maps.push(`
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  O--------I
`);
maps.push(`
  O-----XXXX
  XXXX--XXXX
  XX----XXXX
  X--XXXXXXX
  X--XX--XXX
  X--XXX-XXX
  XX--XX--XX
  XXX--XX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  X-----XXXX
  XXXXXIXXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  OXXXXX----
  ---XXXX--X
  XX-XXXX--X
  XX-----XXX
  XXXXX--XXX
  ---XXX-XXX
  XXX----XXX
  XXX--XX-XX
  --XX---XXX
  --XXXX---I
  `);
