let board = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
];

let recommendedCell = null; // 이전 추천 위치를 추적

let clickCount = 0; // 클릭 횟수를 추적
// 모든 셀에 클릭 이벤트 추가
document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', () => {
        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);

        // 셀의 상태를 토글
        const isClicked = cell.classList.toggle('clicked'); 

        // 보드 배열 업데이트
        board[row][col] = isClicked; // 클릭되었으면 true, 아니면 false
        clickCount++; // 클릭 횟수 증가
        // console.log('클릭수',clickCount)
        // 클릭 횟수가 홀수일 때만 추천을 표시
        if (clickCount % 2 !== 1) {
            highlightRecommendedCell(); // 추천 위치 강조
        } else {
            // 짝수 클릭일 때는 기존 추천 위치 강조 해제
            if (recommendedCell) {
                recommendedCell.classList.remove('highlight');
            }
        }
    });
});

// 초기화 버튼 이벤트
document.getElementById('resetButton').addEventListener('click', () => {
    document.querySelectorAll('td').forEach(cell => {
        cell.classList.remove('clicked');
        cell.classList.remove('highlight'); // 모든 강조표시 제거
    });

    // `board` 배열 초기화
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            board[row][col] = false;
        }
    }
    // clickCount 초기화
    clickCount = 0;
});

// 5x5 보드, 각 셀의 상태를 추적
function highlightRecommendedCell() {
    if (recommendedCell) {
        // 이전 추천 위치에서 하이라이트 제거
        recommendedCell.classList.remove('highlight');
    }
    const bestMove = getBestMove(); // 추천 위치 계산
    // console.log('위치',bestMove)

    // 추천된 위치 강조 표시
    if (bestMove.row !== -1 && bestMove.col !== -1) { // 유효한 추천 위치가 있으면
        recommendedCell = document.getElementById(`cell-${bestMove.row}-${bestMove.col}`);
        if (recommendedCell) {
            recommendedCell.classList.add('highlight'); // 새로운 추천 위치 강조
        }
    }
}

// 추천된 위치 계산
function getBestMove() {
    const scoreArray = checkBingoPossibility(); // 점수 계산 후 결과 배열 반환

    const bestMove = scoreArray[0].cell.split('-').map(Number);
    console.log('추천된 위치:', bestMove); // 디버깅을 위한 출력

    return { row: bestMove[0], col: bestMove[1] }

}

let scoreBoard = {};
// 모든 칸에 대해 체크 실행
function checkBingoPossibility() {

    let scoreArray = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (!board[row][col]) { // 빈 셀만 점수 계산
                let rowScore = checkRow(row,col);
                let colScore = checkCol(row,col);
                let leftScore = (row === col) ? checkLeftDiagonal(row,col) : 0; // 왼쪽 대각선
                let rightScore = (row + col === 4) ? checkRightDiagonal(row,col) : 0; // 오른쪽 대각선
            
                // 각 셀의 점수 객체를 저장
                scoreBoard[`${row}-${col}`] = {
                    rowScore,
                    colScore,
                    leftScore,
                    rightScore,
                    maxScore: Math.max(rowScore, colScore, leftScore, rightScore), // 최대값
                };      

                // 점수 배열에 추가
                scoreArray.push({ 
                    cell: `${row}-${col}`, 
                    max: scoreBoard[`${row}-${col}`].maxScore,
                    rowScore,
                    colScore,
                    leftScore,
                    rightScore,
                    
                });

                // console.log(`셀 (${row}, ${col}) 점수:`, scoreBoard[`${row}-${col}`]);

          
            }
        }
    }

    // 내림차순 정렬
    scoreArray.sort((a, b) => {
        // 1순위: max 값 내림차순 정렬
        if (b.max !== a.max) {
            return b.max - a.max;
        }
        // 2순위: rowScore, colScore, leftScore, rightScore 내림차순 정렬
        const scoreA = [a.rowScore, a.colScore, a.leftScore, a.rightScore];
        const scoreB = [b.rowScore, b.colScore, b.leftScore, b.rightScore];
        
        for (let i = 0; i < scoreA.length; i++) {
            if (scoreB[i] !== scoreA[i]) {
                return scoreB[i] - scoreA[i]; // 내림차순 비교
            }
        }
        return 0; // 모든 값이 같다면 순서를 바꾸지 않음
    });


    console.log('정렬된 점수 배열:', scoreArray);

    return scoreArray;
}



// 가로 점수 계산
function checkRow(row, col) {
    let count = 0;
    // 클릭할 예정인 셀도 포함하여 계산
    for (let i = 0; i < 5; i++) {
        if (i === col || board[row][i]) {
            count++;
        }
    }
    return count;
}

// 세로 점수 계산
function checkCol(row, col) {
    let count = 0;
    // 클릭할 예정인 셀도 포함하여 계산
    for (let i = 0; i < 5; i++) {
        if (i === row || board[i][col]) {
            count++;
        }
    }
    return count;
}

// 왼쪽 대각선 점수 계산
function checkLeftDiagonal(row, col) {
    let count = 0;
    if (row === col) { // 대각선1에 속하는 셀
        for (let i = 0; i < 5; i++) {
            if (i === row || board[i][i]) {
                count++;
            }
        }
    }
    return count;
}

// 오른쪽 대각선 점수 계산
function checkRightDiagonal(row, col) {
    let count = 0;
    if (row + col === 4) { // 대각선2에 속하는 셀
        for (let i = 0; i < 5; i++) {
            if (i === row || board[i][4 - i]) {
                count++;
            }
        }
    }
    return count;
}