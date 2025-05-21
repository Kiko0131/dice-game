
// 页面加载完成后执行
window.addEventListener("load", function() {
  // 检查是否是首次加载还是刷新后
  const isRefreshed = sessionStorage.getItem("diceGameRefreshed");
  
  if (!isRefreshed) {
    // 首次加载，只显示 "Refresh Me"
    document.querySelector("h1").innerHTML = "Refresh Me";
    
    // 标记已经加载
    sessionStorage.setItem("diceGameRefreshed", "true");
  } else {
    // 这是刷新后的加载，执行骰子逻辑
    
    function randomNumber1(){
      var randomNumber1 = Math.floor(Math.random()*6)+1;
      return randomNumber1;
    }

    function randomNumber2(){
      var randomNumber2 = Math.floor(Math.random()*6)+1;
      return randomNumber2;
    }

    // 保存随机值到变量
    var player1Score = randomNumber1();
    var player2Score = randomNumber2();

    // 更新图片
    document.querySelector(".img1").setAttribute("src", "./images/dice" + player1Score + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + player2Score + ".png");

    // 确定获胜者
    var winner;
    if (player1Score > player2Score){
      winner = "Player 1 Wins!";
    } else if (player1Score == player2Score){
      winner = "Draw!";
    } else {
      winner = "Player 2 Wins!";
    }

    // 更新标题
    document.querySelector("h1").innerHTML = winner;
  }
});