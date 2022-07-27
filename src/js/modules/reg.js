import $ from "jquery";

$(() => {
  $(".button_reg").on("click", (e) => {
    e.preventDefault();
    console.log("click -----");
    const isReg = localStorage.getItem("isReg");
    if (!isReg) {
      window.location.replace("/registration.html");
    } else {
      window.location.replace("/");
    }
  });

  $(document).on("click", ".button_action", (e) => {
    e.preventDefault();
    const isReg = localStorage.getItem("isReg");

    if (!isReg) {
      localStorage.setItem("isReg", true);
    }
    window.location.replace("/");
  });
});
