$(function () {
  $("#modal").hide();

  $("#popup_open").click(function () {
    $("#modal").fadeIn(0);
  });

  $("#popup_close").click(function () {
    $("#modal").fadeOut(0);
  });
});
