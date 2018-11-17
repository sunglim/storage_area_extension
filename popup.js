function click(e) {
  console.log("clicked");
  if (e.target.id == 'check') {
    check(e);
    return;
  }
  document.getElementById('text_area').innerText = "Change To " + e.target.id;
  chrome.storage.local.set({'key': e.target.id});
}

function check(e) {
  console.log(e);
  chrome.storage.local.get(['key'], function(result) {
    document.getElementById('text_area').innerText = "loaded value : " + result['key'];
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
