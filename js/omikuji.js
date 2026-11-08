$("#pull").on("click", function () {
  const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
  const random = Math.floor(Math.random() * omikuji.length);
  const result = omikuji[random];
  $("#echo").text(result);
});
