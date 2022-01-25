const dataBase = ['ABOUT', 'ABOVE', 'ACTOR', 'ACUTE', 'ADEPT', 'ADMIT', 'ADOPT', 'ADORE', 'ADULT', 'AFTER', 'AGILE', 'AGREE', 'AISLE', 'ALBUM', 'ALERT', 'ALIEN', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONG', 'ALOUD', 'ALTER', 'AMBER', 'AMEND', 'AMPLE', 'AMPLY', 'AMUSE', 'ANGEL', 'ANGLE', 'ANKLE', 'APPLE', 'APPLY', 'APRON', 'ARROW', 'ASSET', 'AVERT', 'AVOID', 'BACON', 'BAKER', 'BASIC', 'BASIL', 'BASIN', 'BATHE', 'BEACH', 'BEARD', 'BEAST', 'BEATS', 'BEGIN', 'BEGUN', 'BEING', 'BELOW', 'BIRCH', 'BIRTH', 'BLACK', 'BLANK', 'BLINK', 'BLOWN', 'BLUSH', 'BOARD', 'BOAST', 'BONUS', 'BOOST', 'BOUND', 'BOWEL', 'BRAID', 'BRAIN', 'BRAKE', 'BRAND', 'BRAVE', 'BREAD', 'BREAK', 'BRIDE', 'BRIEF', 'BRING', 'BRISK', 'BROKE', 'BROOM', 'BROWN', 'BULKY', 'BUNCH', 'BUYER', 'CABIN', 'CABLE', 'CAMEL', 'CANDY', 'CATER', 'CHAIN', 'CHAIR', 'CHALK', 'CHARM', 'CHART', 'CHASM', 'CHEAP', 'CHIEF', 'CHINA', 'CHIPS', 'CHOKE', 'CHOPS', 'CIGAR', 'CLAIM', 'CLAMP', 'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLIMB', 'CLOAK', 'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOVE', 'CLOWN', 'COAST', 'CORAL', 'COUNT', 'CRAFT', 'CRANE', 'CRANK', 'CRAWL', 'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUSH', 'CRUST', 'CURVE', 'DAILY', 'DAIRY', 'DANCE', 'DATUM', 'DECAY', 'DECOR', 'DELAY', 'DEVIL', 'DIARY', 'DINER', 'DIRTY', 'DISCO', 'DIVER', 'DOUBT', 'DOUGH', 'DRAFT', 'DRAIN', 'DRAWN', 'DREAM', 'DRESS', 'DRINK', 'DRIVE', 'EARLY', 'EARTH', 'EIGHT', 'ELBOW', 'EMAIL', 'EMPTY', 'ENJOY', 'EQUAL', 'EQUIP', 'ETHIC', 'EXACT', 'EXIST', 'EXTRA', 'FACET', 'FAIRY', 'FAITH', 'FALSE', 'FANCY', 'FAULT', 'FAVOR', 'FEAST', 'FETCH', 'FIBER', 'FIELD', 'FINAL', 'FIRST', 'FLAIR', 'FLAKE', 'FLASK', 'FLICK', 'FLOAT', 'FLOCK', 'FLOWN', 'FLUSH', 'FLUTE', 'FOCAL', 'FOCUS', 'FORCE', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FROST', 'FROZE', 'FRUIT', 'FUNGI', 'FUNNY', 'GHOST', 'GIVEN', 'GLASS', 'GLAZE', 'GLOBE', 'GLORY', 'GLOVE', 'GRACE', 'GRADE', 'GRAIN', 'GRAND', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRAVY', 'GREAT', 'GREET', 'GRILL', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HABIT', 'HAIRY', 'HAPPY', 'HARDY', 'HASTE', 'HAUNT', 'HEART', 'HEAVY', 'HEFTY', 'HONEY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'HUMID', 'HUMOR', 'HUSKY', 'IDEAL', 'IMAGE', 'IMPLY', 'INCUR', 'INDEX', 'INFER', 'INFRA', 'INLET', 'INNER', 'INPUT', 'INSET', 'IVORY', 'JEANS', 'JOINT', 'JUICE', 'LABOR', 'LADEN', 'LAPSE', 'LARGE', 'LATEX', 'LAUGH', 'LAYER', 'LEAFY', 'LEANS', 'LEARN', 'LEMON', 'LIGHT', 'LINER', 'LIVER', 'LIVES', 'LODGE', 'LOFTY', 'LOGIC', 'LOVER', 'LOWER', 'LUCID', 'LUCKY', 'LUNCH', 'LYMPH', 'MACRO', 'MAGIC', 'MAIZE', 'MAJOR', 'MAKER', 'MANGO', 'MAPLE', 'MARCH', 'MATCH', 'MEDAL', 'MEDIA', 'MERCY', 'MERIT', 'METAL', 'MICRO', 'MIDST', 'MIGHT', 'MINOR', 'MINUS', 'MIXER', 'MODEL', 'MOIST', 'MONEY', 'MONTH', 'MORAL', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVER', 'MOVIE', 'MULTI', 'MUSIC', 'NAIVE', 'NEWLY', 'NEXUS', 'NICHE', 'NIGHT', 'NINJA', 'NOBLE', 'NODAL', 'NOISE', 'NOISY', 'NORTH', 'NOTCH', 'NOTED', 'NOVEL', 'NURSE', 'OCEAN', 'OFTEN', 'OLIVE', 'ONSET', 'OPERA', 'OPTIC', 'ORBIT', 'ORGAN', 'OTHER', 'OUGHT', 'OUNCE', 'OUTER', 'OVERT', 'OWING', 'OWNED', 'OWNER', 'OXIDE', 'PACED', 'PAINT', 'PANIC', 'PANTS', 'PARTY', 'PASTE', 'PATCH', 'PATIO', 'PAUSE', 'PAVED', 'PAYER', 'PEACH', 'PEARL', 'PEDAL', 'PHASE', 'PHONE', 'PIANO', 'PILOT', 'PINCH', 'PIVOT', 'PIZZA', 'PLACE', 'PLAIN', 'PLANE', 'PLANK', 'PLANT', 'PLATE', 'PLEAD', 'PLUCK', 'POINT', 'POKER', 'POLAR', 'PORCH', 'POUCH', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIZE', 'PRONE', 'PROUD', 'PROVE', 'PUNCH', 'PUPPY', 'PURGE', 'PURSE', 'QUAIL', 'QUEEN', 'QUERY', 'QUEST', 'QUICK', 'QUIET', 'QUILT', 'QUITE', 'QUOTA', 'QUOTE', 'RADIO', 'RAINY', 'RAISE', 'RANCH', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'REACT', 'READY', 'REALM', 'REGAL', 'REIGN', 'RELAX', 'RELAY', 'RELIC', 'REMIT', 'REPAY', 'REPLY', 'RESIN', 'RIDGE', 'RIGHT', 'RINSE', 'RISKY', 'RIVAL', 'ROAST', 'ROCKY', 'ROMAN', 'ROUGH', 'ROUND', 'ROYAL', 'RUSTY', 'SADLY', 'SAINT', 'SALON', 'SALTY', 'SANDY', 'SATIN', 'SAUCE', 'SCALE', 'SCARE', 'SCARF', 'SCARY', 'SCENT', 'SCORE', 'SCOUT', 'SCREW', 'SERUM', 'SETUP', 'SHADE', 'SHADY', 'SHAKE', 'SHAKY', 'SHAME', 'SHAPE', 'SHARE', 'SHARK', 'SHARP', 'SHAVE', 'SHEAR', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHORE', 'SHORT', 'SHOUT', 'SHOVE', 'SHOWN', 'SHRUB', 'SHRUG', 'SIGHT', 'SIGMA', 'SILKY', 'SINCE', 'SIXTY', 'SKATE', 'SKILL', 'SKIRT', 'SLACK', 'SLATE', 'SLEEP', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE', 'SLING', 'SLUMP', 'SMALL', 'SMART', 'SMILE', 'SMOKE', 'SMOKY', 'SNACK', 'SNAIL', 'SNAKE', 'SNEAK', 'SOBER', 'SOLAR', 'SOLVE', 'SOUND', 'SOUTH', 'SPACE', 'SPADE', 'SPARE', 'SPARK', 'SPEAK', 'SPEAR', 'SPELL', 'SPICE', 'SPICY', 'SPIKE', 'SPILL', 'SPINE', 'SPLIT', 'SPOIL', 'SPOKE', 'SPORT', 'SPRAY', 'SQUAD', 'SQUAT', 'SQUID', 'STACK', 'STAFF', 'STAGE', 'STAIN', 'STAIR', 'STAKE', 'STALE', 'STAMP', 'STAND', 'STARE', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEEL', 'STERN', 'STICK', 'STILL', 'STING', 'STOCK', 'STONE', 'STORE', 'STORM', 'STORY', 'STOVE', 'STRAP', 'STRAW', 'STRAY', 'STUCK', 'STUDY', 'STUFF', 'STUMP', 'STYLE', 'SUGAR', 'SUITE', 'SUNNY', 'SUPER', 'SWAMP', 'SWEAT', 'SWEPT', 'SWIFT', 'SWINE', 'SWING', 'SWIRL', 'SYRUP', 'TABLE', 'TAKEN', 'TEACH', 'TEMPO', 'THANK', 'THEIR', 'THICK', 'THING', 'THINK', 'THIRD', 'THORN', 'THOSE', 'THREE', 'THROW', 'THUMB', 'THYME', 'TIDAL', 'TIGER', 'TIMER', 'TODAY', 'TOKEN', 'TONIC', 'TOUCH', 'TOUGH', 'TOWEL', 'TOWER', 'TOXIC', 'TOXIN', 'TRACE', 'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TRASH', 'TREAD', 'TREND', 'TRIAD', 'TRIAL', 'TRIBE', 'TRICK', 'TWICE', 'TWINS', 'ULCER', 'ULTRA', 'UNCLE', 'UNDER', 'UNIFY', 'UNITE', 'UNITY', 'UPSET', 'URBAN', 'USAGE', 'VAGUE', 'VALID', 'VALUE', 'VIDEO', 'VIRAL', 'VITAL', 'VOCAL', 'VODKA', 'VOICE', 'VOWEL', 'WAFER', 'WAGED', 'WAGER', 'WAGON', 'WAIST', 'WAIVE', 'WASTE', 'WATCH', 'WATER', 'WEARY', 'WEIGH', 'WEIRD', 'WHALE', 'WHARF', 'WHEAT', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WIDEN', 'WIDTH', 'WINDY', 'WOMAN', 'WOMEN', 'WORLD', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WRECK', 'WRITE', 'WRONG', 'YEAST', 'YIELD', 'YOUNG', 'YOUTH']

const submit = document.querySelector('.submit')
const input = document.querySelector('.player_input')
const goal = dataBase[Math.floor(Math.random() * dataBase.length)];
const start = document.querySelector('.start')
const append = document.querySelector('.guesses')

let green = ['', '', '', '', ''];
let black2 = ['', '', '', '', ''];
let black1 = [];
let yellow = [];
let win = false;
let level;
let winPlus = 0;

// start btn
start.addEventListener('click', () => {
  start.style.display = 'none'
  submit.style.display = 'block'
  level = document.querySelector('input[name="level"]:checked').value;
  let firstGuess = dataBase[Math.floor(Math.random() * dataBase.length)];
  isGoal(goal, firstGuess, green, yellow, black2, black1)
  showGuess(firstGuess, green, black2)
  copy = filterFunc(copy, green, yellow, black2, black1)
})

// submit btn
submit.addEventListener('click', () => {
  restart(green, black2, black1, yellow)
  if (isValid(input.value)) {
    const sub = isValid(input.value)
    input.value = ''
    isGoal(goal, sub, green, yellow, black2, black1)
    showGuess(sub, green, black2)
    copy = filterFunc(copy, green, yellow, black2, black1)
    if (!winner(green, "player")) {
      restart(green, black2, black1, yellow)
      filterFunc(copy, green, yellow, black2, black1)
      const answer = robotAnswer(copy)
      isGoal(goal, answer, green, yellow, black2, black1)
      showGuess(answer, green, black2)
      winner(green, "robot")
    }
  } else input.value = ''
})

//restart
function restart(green, black2, black1, yellow) {
  green = ['', '', '', '', ''];
  black2 = ['', '', '', '', ''];
  black1 = [];
  yellow = [];
}

// show in DOM
function showGuess(guess, green, yellow) {
  const add = document.createElement('div')
  add.innerHTML = `<div>
  <p class="guesses__item " style='color: ${(green[0] ? 'green' : yellow[0] ? 'yellow' : 'black')}'>${guess.charAt(0)}</p>
  <p class="guesses__item " style='color: ${(green[1] ? 'green' : yellow[1] ? 'yellow' : 'black')}'>${guess.charAt(1)}</p>
  <p class="guesses__item " style='color: ${(green[2] ? 'green' : yellow[2] ? 'yellow' : 'black')}'>${guess.charAt(2)}</p>
  <p class="guesses__item " style='color: ${(green[3] ? 'green' : yellow[3] ? 'yellow' : 'black')}'>${guess.charAt(3)}</p>
  <p class="guesses__item " style='color: ${(green[4] ? 'green' : yellow[4] ? 'yellow' : 'black')}'>${guess.charAt(4)}</p></div>`
  append.appendChild(add)
}

// winner func
function winner(green, win) {
  let winBol = false;
  for (let i = 0; i < 5; i++) {
    if (green[i]) {
      winPlus++;
    }
  }
  if (winPlus == 5) {
    winBol = true
    const add = document.createElement('div')
    submit.style.display = 'none'
    add.innerHTML = `<div>
  <p class="guesses__item ">${win} is winner</p>
  </div>`
    append.appendChild(add)
  }
  winPlus = 0;
  return winBol
}

// validation
function isValid(valid) {
  let x1 = 0;
  for (let i = 0; i < dataBase.length; i++) {
    if (valid.toUpperCase() == dataBase[i]) {
      x1 = valid.toUpperCase();
    }
  }
  if (x1 != 0) {
    return x1
  } else {
    alert(`word not found:(
Try another word.`)
  }
}



//void array filler 
function isGoal(goal, guess, green, yellow, black2, black1) {
  let isGoalArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (guess.charAt(i) == goal.charAt(i)) {
        isGoalArray[i] = '2'
      } else if (guess.charAt(i) == goal.charAt(j)) {
        isGoalArray[i] = '1'
      }
    }

  }

  for (let i = 0; i < 5; i++) {
    if (isGoalArray[i] == 2) {
      green[i] = guess.charAt(i)
    } else if (isGoalArray[i] == 1) {
      yellow.push(guess.charAt(i))
      black2[i] = guess.charAt(i)
    }
    else if (isGoalArray[i] == 0) {
      black1.push(guess.charAt(i))
    }
  }
}

// filter guesses
let copy = [...dataBase]
function filterFunc(copy, green, yellow, black2, black1) {
  let pushedItems = [];
  word: for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (green[j] && level >= 1) {//easy,medium,hard,expert
        if (green[j] !== copy[i].charAt(j)) {
          continue word;
        }
      }

      if (black2[j] && level >= 3) {//hard ,expert
        if (black2[j] == copy[i].charAt(j)) {
          continue word;
        }
      }
    }
    for (let j = 0; j < yellow.length; j++) {
      if (!copy[i].includes(yellow[j]) && level >= 4) {//expert
        continue word;
      }
    }
    for (let j = 0; j < black1.length; j++) {
      if (copy[i].includes(black1[j]) && level >= 2) {//medium,hard,expert
        continue word;
      }
    }
    pushedItems.push(copy[i])

  }
  return pushedItems;

}

//robot answer
function robotAnswer(copy) {
  return copy[Math.floor(Math.random() * copy.length)];
}