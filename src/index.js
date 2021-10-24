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

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });
  //divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//add-buttonIDにクリックイベントを付加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
