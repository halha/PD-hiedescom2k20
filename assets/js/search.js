$(document).ready(() => {
  $('#search-city-form').submit(function (event) {
    event.preventDefault();
    searchCity();
  });

  function searchCity() {
    const input = document.getElementById('cityValue').value.toLowerCase();

    switch (input) {
      case 'kampung warna warni':
        return (window.location.href = 'destination/malang.html');
      case 'malang':
        return (window.location.href = 'destination/malang.html');
      case 'bali':
        return (window.location.href = 'destination/bali.html');
      case 'flores':
        return (window.location.href = 'destination/flores.html');
      case 'monas':
        return (window.location.href = 'destination/jakarta.html');
      case 'jakarta':
        return (window.location.href = 'destination/jakarta.html');
      case 'jogja':
        return (window.location.href = 'destination/yogyakarta.html');
      case 'yogyakarta':
        return (window.location.href = 'destination/yogyakarta.html');
      case 'malioboro':
        return (window.location.href = 'destination/yogyakarta.html');
      case 'surabaya':
        return (window.location.href = 'destination/surabaya.html');
      case 'monumen kapal selam':
        return (window.location.href = 'destination/surabaya.html');
      default:
        return (window.location.href = '404.html');
    }
  }
});
