const characterStatsSection = document.querySelector('.artifact-stats');
const manualInput = characterStatsSection.querySelector('.manual-input');

const characters = [
  { data: { atk: 0, atk_p: 0, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3002.png",
    description: "없음(none)"  },
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3002.png",
    description: "atk_p 35%"  },
  { data: { atk: 0, atk_p: 0, atk_e: 0, crit_p: 25, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3002.png",
    description: "crit_p 25%"  },
  { data: { atk: 0, atk_p: 35, atk_e: 41.6, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3401.png",
    description: "homil: a_p 35% <br> <s>a_p 41.6%</s> a_e 41.6%"  },
  { data: { atk: 0, atk_p: 101, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3401.png",
    description: "leze: a_p 35% <br> a_p 66% "  },
  { data: { atk: 0, atk_p: 35, atk_e: 130, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3403.png",
    description: "doorian: a_p 35% <br> a_e 130% "  },
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 70, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3202.png",
    description: "dark choco <br> a_p 35% c_d 70% "  },
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 140, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3201.png",
    description: "chili <br> a_p 35% c_d 140%"  },
  { data: { atk: 0, atk_p: 35, atk_e: 51.6, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3302.png",
    description: "colab: a_p 35% <br> <s>a_p 32%</s> a_e 51.6%"  },
  { data: { atk: 0, atk_p: 0, atk_e: 50, crit_p: 25, crit_d: 70, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3404.png",
    description: "hala: c_p25%  <br> a_e 50% c_d70%"  },
  { data: { atk: 0, atk_p: 0, atk_e: 45, crit_p: 40, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3103.png",
    description: "bazil: c_p 25%  <br> a_e45% c_p15%"  },
  { data: { atk: 0, atk_p: 0, atk_e: 0, crit_p: 25, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3304.png",
    description: "sugar: c_p 25%  <br> <s>a_p 50%</s>"  },
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 45, crit_d: 75, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3104.png",
    description: "ice mint: a_p 35% <br> c_p45% c_d75%"  },
  { data: { atk: 0, atk_p: 35, atk_e: 60, crit_p: 0, crit_d: 75, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3204.png",
    description: "frost rock: a_p 35% <br> a_e60% c_d75%"  },
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Icon_Buff_Artifact3105.png",
    description: "marble berry<br> a_p:35%  "},
  { data: { atk: 0, atk_p: 0, atk_e: 40, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Icon_Buff_Artifact3507_2.png",
    description: "green bell<br> a_e:40%  "},
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Icon_Buff_Artifact3305.png",
    description: "strawberry mochi <br> a_p:35% "},
  { data: { atk: 0, atk_p: 35, atk_e: 0, crit_p: 0, crit_d: 0, pene: 0 },
    img: "./asset/arti/Thumbnail_Artifact_3205.png",
    description: "sonic water <br> a_p:35% <s>a_p 36%</s>"},

];

characters.forEach(c => {
  const card = document.createElement('div');
  card.className = 'artifact-card';

  // 데이터 속성 설정
  card.dataset.atk = c.atk;
  card.dataset.atk_p = c.atk_p;
  card.dataset.atk_e = c.atk_e;
  card.dataset.crit_p = c.crit_p;
  card.dataset.crit_d = c.crit_d;
  card.dataset.pene = c.pene;

  // 내부 container 생성
  const container = document.createElement('div');
  container.className = 'artifact-container';

  const img = document.createElement('img');
  img.src = c.img;

  const info = document.createElement('div');
  info.innerHTML = `<strong>${c.description}<br></strong> `;

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
