var textarea = document.querySelector('.code');

var button = document.createElement("button");
button.innerHTML = "Copy to Clipboard";

button.addEventListener("click", function() {
  textarea.select();
  try {
    var successful = document.execCommand('copy');
    if (successful) {
      var notification = document.getElementById('notification');
      notification.classList.add('show');
      setTimeout(function() {
        notification.classList.remove('show');
      }, 2000);
    } else {
      console.error('Failed to copy.');
    }
  } catch (err) {
    console.error('Error copying to clipboard:', err);
  }
});

document.querySelector('.container').appendChild(button);
