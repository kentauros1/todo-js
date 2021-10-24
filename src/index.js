import "./styles.css";

const onClickAdd = () => {
  //テキスト入力値の取得＆初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了リストの追加
  createInCompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); //取得した親要素の削除
};

//未完了リストに追加
const createInCompleteList = (text) => {
  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode; //親タグの取得
    const text = addTarget.firstElementChild.innerText; //その最初の子要素のテキストを取得
    //div以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget); //取得した親要素の削除
      //テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createInCompleteList(text);
    });

    //divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
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
