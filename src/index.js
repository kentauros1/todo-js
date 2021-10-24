import "./styles.css";

const onClickAdd = () => {
  //テキスト入力値の取得＆初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  //divタグの子要素に各要素を追加
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//add-buttonIDにクリックイベントを付加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
