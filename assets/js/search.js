$(document).ready(() => {
  $('#search-city-form').submit(function (event) {
    event.preventDefault();
    searchCity();
  });

  function searchCity() {
    var input = document.getElementById('cityValue').value.toLowerCase();

    switch (input) {
      case 'malang':
        return (window.location.href = 'destination/malang.html');
      case 'surabaya':
        return (window.location.href = 'destination/surabaya.html');
      default:
        return (window.location.href = '404.html');
    }
  }
});
