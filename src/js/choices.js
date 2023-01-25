import Choices from "choices.js";

export const newMultiChoices = (
  elm,
  labelName,
  outerClassName,
  maxItemCount = 5
) => {
  return new Choices(elm, {
    silent: false,
    delimiter: ",",
    maxItemCount, // 選択可能上限
    removeItemButton: true, // 選択したものを消せるか
    noChoicesText: "選択肢はありません", // 選択肢の残がない場合の表記
    itemSelectText: "クリックまたはエンターで選択する", // 選択時のテキスト
    shouldSort: true, // 並び替え
    classNames: {
      // それぞれのクラスの書き換え
      containerOuter: `choices choices_${outerClassName}`,
      inputCloned: "choices__input_custom--cloned",
    },
    // 選択上限に達したときのテキスト
    maxItemText: (maxItemCount) => {
      return `絞り込みできる${labelName}の上限は ${maxItemCount} つまでです。`;
    },
  });
};
