function calculateResults() {
    // 기존 결과 초기화
    const resultList = document.getElementById("result-list");
    resultList.innerHTML = ''; // 결과 목록을 비웁니다.

    // 각 입력 값 가져오기
    const attributeValues = [
        'attribute1', 'attribute2', 'attribute3', 'attribute4', 'attribute5', 'attribute6', 'attribute7', 'attribute8', 'attribute9'
    ];
    const attackValues = [
        'attack1', 'attack2', 'attack3', 'attack4', 'attack5', 'attack6', 'attack7', 'attack8', 'attack9'
    ];
    const damageValues = [
        'damage1', 'damage2', 'damage3', 'damage4', 'damage5', 'damage6', 'damage7', 'damage8', 'damage9'
    ];
    const critValues = [
        'crit1', 'crit2', 'crit3', 'crit4', 'crit5', 'crit6', 'crit7', 'crit8', 'crit9'
    ];
    const critDamageValues = [
        'crit-damage1', 'crit-damage2', 'crit-damage3', 'crit-damage4', 'crit-damage5', 'crit-damage6', 'crit-damage7', 'crit-damage8', 'crit-damage9'
    ];
    const penetrationValues = [
        'penetration1', 'penetration2', 'penetration3', 'penetration4', 'penetration5', 'penetration6', 'penetration7', 'penetration8', 'penetration9'
    ];

    // 합산할 변수 초기화
    let attackElemSum = 0;
    let attackPlusSum = 0;
    let elemPlusSum = 0;
    let critRateSum = 0;
    let critDamageSum = 0;
    let penetrationSum = 0;

    // 각 속성의 값을 더함
    attributeValues.forEach(id => {
        attackElemSum += parseFloat(document.getElementById(id).value) || 0;
    });

    attackValues.forEach(id => {
        attackPlusSum += parseFloat(document.getElementById(id).value) || 0;
    });

    damageValues.forEach(id => {
        elemPlusSum += parseFloat(document.getElementById(id).value) || 0;
    });

    critValues.forEach(id => {
        critRateSum += parseFloat(document.getElementById(id).value) || 0;
    });

    critDamageValues.forEach(id => {
        critDamageSum += parseFloat(document.getElementById(id).value) || 0;
    });

    penetrationValues.forEach(id => {
        penetrationSum += parseFloat(document.getElementById(id).value) || 0;
    });

    // 결과를 `calculation-table`에 표시
    document.getElementById("attack-elem").value = attackElemSum;
    document.getElementById("attack-plus").value = attackPlusSum;
    document.getElementById("elem-plus").value = elemPlusSum;
    document.getElementById("crit-rate").value = critRateSum;
    document.getElementById("crit-damage").value = critDamageSum;
    document.getElementById("penetration").value = penetrationSum;

    // HTML에서 입력받는 보스 방어력 및 내성
    const bossDefense = parseFloat(document.getElementById("boss-defense").value); // 보스 방어력
    const bossResistance = parseFloat(document.getElementById("boss-resistance").value); // 보스 내성
    
    // 방어 및 내성 계산
    const boss_1 = 500 / (500 + bossDefense); // 보스 방어력 계산
    const boss_2 = 100 / (100 + bossResistance); // 보스 내성 계산
    
    const A_1 = attackElemSum; // 속공
    const B_1 = attackPlusSum/100; // 공증
    const C_1 = elemPlusSum/100; // 속피
    const D_1 = critRateSum/100; // 치확
    const E_1 = critDamageSum/100; // 치피
    const F_1 = penetrationSum/100; // 방관
    

    
    // 최대값과 각 순서쌍을 저장할 배열
    let results = [];
    
    // A, C는 0~2, B, D, E, F는 0~8의 범위에서 가능한 조합 생성
    for (let A = 0; A <= 2; A++) {
        for (let C = 0; C <= 2; C++) {
            for (let B = 0; B <= 8; B++) {
                for (let D = 0; D <= 8; D++) {
                    for (let E = 0; E <= 8; E++) {
                        for (let F = 0; F <= 8; F++) {
                            if (A + B + C + D + E + F === 8) {
                                // 0.30 + 0.15D가 1 이상인 경우 1로 제한
                                const crit_on = Math.min(D_1 + 0.15 * D, 1);
                                const crit_off = Math.max(1 - (D_1 + 0.15 * D), 0);
                                const max_f = Math.min(0.8, 0.08 * F + F_1);
    
                                // 식을 계산
                                const value = (
                                    (A_1 + 80 * A) * (1 + B_1 + 0.2 * B) * (1 + C_1 + 0.15 * C) *
                                    (crit_on * (E_1 + 0.25 * E) + crit_off * 1) *
                                    (500 / (500 + 1000 * (1 - max_f))) * boss_2
                                );
    
                                // 결과와 해당 순서쌍을 저장 (속공, 공증, 속피, 치확, 치피, 방관)
                                results.push({ value, combination: [A, B, C, D, E, F] });
                            }
                        }
                    }
                }
            }
        }
    }
    
    // 값 기준으로 내림차순 정렬하고 상위 6개 추출
    results.sort((a, b) => b.value - a.value);
    const top_6_results = results.slice(0, 6);
    
    top_6_results.forEach((result, idx) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-item");
    
        resultDiv.innerHTML = `
        <strong>Top ${idx + 1}</strong> | <strong>값:</strong> ${Math.floor(result.value)} | <strong>잠재:</strong> 속공(${result.combination[0]}), 공증(${result.combination[1]}), 속피(${result.combination[2]}), 치확(${result.combination[3]}), 치피(${result.combination[4]}), 방관(${result.combination[5]})`;
    
        resultList.appendChild(resultDiv);
    });
}

