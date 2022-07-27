import $ from "jquery";

$(() => {
  $(document).on("click", ".game-item", (e) => {
    const item = e.target.closest(".game-item ");
    e.preventDefault();
    const $overlay = $(item).find(".game-item__img-overlay");

    if (!$overlay.hasClass("game-item__img-overlay_show")) {
      $(".game-item__img-overlay").removeClass("game-item__img-overlay_show");
      $overlay.addClass("game-item__img-overlay_show");
    } else {
      $overlay.removeClass("game-item__img-overlay_show");
    }
  });
  $(document).on("click", ".game-item__img-button", (e) => {
    const item = e.target.closest(".game-item");
    const $overlay = $(item).find(".game-item__img-overlay");
    if ($overlay.hasClass("game-item__img-overlay_show")) {
      window.location.replace("/registration.html");
    }
  });
});
