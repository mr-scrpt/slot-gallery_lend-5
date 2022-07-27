import $ from "jquery";
import { makeId } from "./functions.js";
/**************/
/*Focuse State*/
/**************/
$(document).ready(() => {
  const $inputsControl = $(".input__control");
  $inputsControl.on("focus", ({ target }) => {
    const $item = $(target.closest(".input"));
    $item.addClass("input_focused");
  });

  $inputsControl.on("blur", ({ target }) => {
    const $item = $(target.closest(".input"));
    $item.removeClass("input_focused");
  });
});

/*******************/
/*Inputs with Label*/
/*******************/
$(document).ready(() => {
  const $labels = $(".label");

  $labels.each((_, item) => {
    const $labelCurrent = $(item);
    const $input = $labelCurrent.find(".input__control");
    if ($input.length) {
      const idCustom = makeId(5);

      $labelCurrent.attr("for", idCustom);
      $input.attr("id", idCustom);
    }
  });
});
