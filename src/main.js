import "./style.css";

import { newMultiChoices } from "./js/choices";

newMultiChoices(
  "#multiple-school-category",
  "multiple-school-category",
  "カテゴリ"
);

const schoolSelectElm = document.querySelector("#multiple-schools");
const school = newMultiChoices(schoolSelectElm, "学校", "multiple-schools", 50);
school.showDropdown();

// 初期値を投入することが出来る
// school.setChoices(
//   [
//     {
//       value: "1",
//       label: "宮崎学校",
//       selected: true,
//     },
//   ],
//   "value",
//   "label",
//   false // true: 選択肢を上書き、false: 選択肢を残す
// );
