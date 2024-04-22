(() => {
  // クラスとインスタンス クラスは先頭大文字
  class Accordion {
    // 初期化 引数はなんでもいい
    constructor(obj) {
      const $elm = document.getElementById(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        // thisとはクラス（今回はAccordion）自体を参照。
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }


    //クリックされたら実行される処理
    clickHandler = (e) => {
      e.preventDefault();

      // 次の要素を取ってくる（今回ならトリガー[0]の次、div要素）
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    };
  }

  const faqAccordion = new Accordion({
    hookName: "js-faq",
    tagName: "p",
  });

  const dummyAccordion =new Accordion({
    hookName:"js-accordion",
    tagName:"a"
  });

  const miniAccordion =new Accordion({
    hookName:"js-accordion-mini",
    tagName:"dt"
  });

})();
