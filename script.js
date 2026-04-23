// Countdown 15min
(function () {
  var TOTAL = 15 * 60;
  var KEY = "countdown_end_v1";
  var endTime;
  try {
    var stored = sessionStorage.getItem(KEY);
    if (stored) {
      endTime = parseInt(stored, 10);
    } else {
      endTime = Date.now() + TOTAL * 1000;
      sessionStorage.setItem(KEY, String(endTime));
    }
  } catch (e) {
    endTime = Date.now() + TOTAL * 1000;
  }

  var minEl = document.getElementById("timer-min");
  var secEl = document.getElementById("timer-sec");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    var remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    if (minEl) minEl.textContent = pad(m);
    if (secEl) secEl.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
})();
