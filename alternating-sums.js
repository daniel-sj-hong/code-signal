function solution(a) {
  const team1 = [];
  const team2 = [];
  let team1Total = 0;
  let team2Total = 0;
  const result = [];

  for (let i = 0; i < a.length; i = i + 2) {
    team1.push(a[i]);
  }
  for (let i = 1; i < a.length; i = i + 2) {
    team2.push(a[i]);
  }
  for (let i = 0; i < team1.length; i++) {
    team1Total += team1[i]
  }
  result.push(team1Total)
  for (let i = 0; i < team2.length; i++) {
    team2Total += team2[i]
  }
  result.push(team2Total)
  return result
}
