const characterStatsSection = document.querySelector('.character-stats');
const manualInput = characterStatsSection.querySelector('.manual-input');

const characters = [
  { name: 'Soda', img: './asset/icon/Face_Icon_Cookie1004.png',
    atk: 705, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0,
    description : 'ATK: 705 ATK_P: 30%'},
  { name: 'rye', img: './asset/icon/Face_Icon_Cookie0515.png', 
    atk: 717, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 717 ATK_P: 30%' },
  { name: 'dark choco', img: './asset/icon/Face_Icon_Cookie0103.png', 
    atk: 735, atk_p: 0, atk_e: 0, crit_p: 15, crit_d: 187.5, pene: 50, 
    description: 'A:735 C_d:37.5% p:50%' },
  { name: 'kohlrabi', img: './asset/icon/Face_Icon_Cookie1009.png', 
    atk: 724, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 724 ATK_P: 30%' },
  { name: 'cherry', img: './asset/icon/Face_Icon_Cookie0028.png', 
    atk: 542, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 542 ATK_P: 30%' },
  { name: 'plantin', img: './asset/icon/Face_Icon_Cookie1001.png', 
    atk: 624, atk_p: 22.5, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 624 ATK_P: 22.5%' },
  { name: 'candy drop', img: './asset/icon/Face_Icon_Cookie1011.png', 
    atk: 673, atk_p: 0, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 673' },
  { name: 'Jala', img: './asset/icon/Face_Icon_Cookie1010.png', 
    atk: 702, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 702 ATK%: 30%' },
  { name: 'chili', img: './asset/icon/Face_Icon_Cookie0121.png', 
    atk: 699, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 699 CRIT%: 22.5%' },
  { name: 'leze', img: './asset/icon/Face_Icon_Cookie1006.png', 
    atk: 692, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 692 CRIT%: 22.5%' },
  { name: 'bazil', img: './asset/icon/Face_Icon_Cookie1012.png', 
    atk: 652, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0,
    description: 'ATK: 652 CRIT%: 22.5%' },
  { name: 'sugar', img: './asset/icon/Face_Icon_Cookie1013.png', 
    atk: 663, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 663 CRIT%: 22.5%' },
  { name: 'peach', img: './asset/icon/Face_Icon_Cookie0056.png', 
    atk: 630, atk_p: 0, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 630' },
  { name: 'ice mint', img: './asset/icon/Face_Icon_Cookie1014.png', 
    atk: 658, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 658 ATK_P: 30%' },
  { name: 'frost rock', img: './asset/icon/Face_Icon_Cookie1015.png', 
    atk: 713, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 713 CRIT%: 22.5%' },
  { name: 'honey bear', img: './asset/icon/Face_Icon_Cookie1007.png', 
    atk: 516, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 516' },
  { name: 'marble berry', img: './asset/icon/Face_Icon_Cookie1016.png', 
    atk: 630, atk_p: 0, atk_e: 22.5, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 630 ATK_E:22.5%' },
  { name: 'green bell', img: './asset/icon/Icon_Emoji_L_Cookie1018.png', 
    atk: 567, atk_p: 0, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 567' },
  { name: 'strawberry mochi', img: './asset/icon/Face_Icon_Cookie1017.png', 
    atk: 1112, atk_p: 0, atk_e: 22.5, crit_p: 15, crit_d: 210, pene: 0, 
    description: 'ATK: 695(+60%) ATK_E:22.5% c_d:60%' },
  { name: 'sonic water', img: './asset/icon/T_Cookie1019_Sonicwater_Gacha_Board01.png', 
    atk: 673, atk_p: 0, atk_e: 22.5, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 673 ATK_E:22.5% '},
  { name: 'sundae', img: './asset/icon/Face_Icon_Cookie1020.png', 
    atk: 655, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 655 ATK_P: 30% '},    
  { name: 'banana roti', img: './asset/icon/Face_Icon_Cookie1021.png', 
    atk: 604, atk_p: 30, atk_e: 0, crit_p: 15, crit_d: 150, pene: 0, 
    description: 'ATK: 604 ATK_P: 30% '},
  { name: 'butter milk', img: './asset/icon/Face_Icon_Cookie1022.png', 
    atk: 656, atk_p: 0, atk_e: 0, crit_p: 37.5, crit_d: 150, pene: 0, 
    description: 'ATK: 656 crit_p: 22.5% '},
  { name: 'Iris', img: './asset/icon/Face_Icon_Cookie1023.png', 
    atk: 645, atk_p: 0, atk_e: 30, crit_p: 47.5, crit_d: 150, pene: 0, 
    description: 'ATK: 64? <br> crit_p: 32.5% atk_e: 30% '},
  { name: '이슬', img: './asset/icon/Face_Icon_Cookie1024.png', 
    atk: 577, atk_p: 0, atk_e: 0, crit_p: 75, crit_d: 150, pene: 0, 
    description: 'ATK: 577', c_p:60%},        
];

characters.forEach(c => {
  const card = document.createElement('div');
  card.className = 'character-card';

  // 데이터 속성 설정
  card.dataset.atk = c.atk;
  card.dataset.atk_p = c.atk_p;
  card.dataset.atk_e = c.atk_e;
  card.dataset.crit_p = c.crit_p;
  card.dataset.crit_d = c.crit_d;
  card.dataset.pene = c.pene;

  // 내부 container 생성
  const container = document.createElement('div');
  container.className = 'character-container';

  const img = document.createElement('img');
  img.src = c.img;

  const info = document.createElement('div');
  info.innerHTML = `<strong>${c.name}</strong> ${c.description}`;

  container.appendChild(img);
  container.appendChild(info);
  card.appendChild(container);

  // summaryBox보다 앞에 삽입
  if(manualInput) {
    characterStatsSection.insertBefore(card, manualInput);
  } else {
    characterStatsSection.appendChild(card);
  }
});
