module.exports = {
    HTML:function(time){
        var one = new Date(Number(time) + 5400000)
        var two = new Date(Number(time) + 10800000)
        var three = new Date(Number(time) + 16200000)
        var four = new Date(Number(time) + 21600000)
        var five = new Date(Number(time) + 27000000)
        var six = new Date(Number(time) + 32400000)
      return `
      <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usleep</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  body {
    margin: 0px;
    border: 0px;
    background-color: #24262e;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
  }
  #header-bar {
    top: 0;
    left: 0;
    right: 0;
    font-size: smaller;
    height: 55px;
    padding: 1rem;
    color: white;
    font-weight: bold;
    align-items: center;
  }
  #sleep-cal {
    margin: 20px;
    border: 1px solid #30363D;
    border-radius: 12px;
    padding-bottom: 40px;
    text-align: center;
  }
  .USleep {
    margin-left: 2rem;
  }
  #sleep-cal > .title {
    color: white;
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 500;
  }
  h3 {
    font-weight: 500;
    font-size: large;
  }
  
</style>
<body>
    <div id="header-bar">
        <h1 class="USleep">USleep</h1>
    </div>
    <div id="sleep-cal">
        <h3 class="title">결과</h3>
        <hr width="90%">
        <br>
        <h3 style="color: #BF4053;">${one.getHours() >= 12 ? '오후' : '오전'} ${one.getHours() >= 12 ? Number(one.getHours()) - 12 : Number(one.getHours())}시 ${one.getMinutes()}분 - 첫 주기</h3>
        <h3 style="color: #FF9DB0;">${two.getHours() >= 12 ? '오후' : '오전'} ${two.getHours() >= 12 ? Number(two.getHours()) - 12 : Number(two.getHours())}시 ${two.getMinutes()}분 - 둘째 주기</h3>
        <h3 style="color: #E6B3D2;">${three.getHours() >= 12 ? '오후' : '오전'} ${three.getHours() >= 12 ? Number(three.getHours()) - 12 : Number(three.getHours())}시 ${three.getMinutes()}분 - 셋째 주기</h3>
        <h3 style="color: #81D581;">${four.getHours() >= 12 ? '오후' : '오전'} ${four.getHours() >= 12 ? Number(four.getHours()) - 12 : Number(four.getHours())}시 ${four.getMinutes()}분 - 넷째 주기</h3>
        <h3 style="color: #83CC66;">${five.getHours() >= 12 ? '오후' : '오전'} ${five.getHours() >= 12 ? Number(five.getHours()) - 12 : Number(five.getHours())}시 ${five.getMinutes()}분 - 다섯째 주기</h3>
        <h3 style="color: #D788AF;">${six.getHours() >= 12 ? '오후' : '오전'} ${six.getHours() >= 12 ? Number(six.getHours()) - 12 : Number(six.getHours())}시 ${six.getMinutes()}분 - 여섯째 주기</h3>
        <p style="color: white; font-weight: 400; margin-top: 40px;">빨간색일수록 권장되지 않는 기상 시간이며</p>
        <p style="color: white; font-weight: 400;">초록색일수록 권장되는 시간입니다</p>
        <br>
    </div>
</body>
</html>
      `;
    }
  }
  