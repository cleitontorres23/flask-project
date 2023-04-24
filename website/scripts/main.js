/* Global document */

//var myheading = document.querySelector('h1')
//myheading.textContent = 'Be kind'   

var dogImage = document.querySelector('img');

dogImage.onclick = function () {
    var myImages = dogImage.getAttribute('src');
    if (myImages ==='images/funny-puppet-dog.jpg') {
        dogImage.setAttribute ('src', 'images/puppet-dog-brown.jpg');
}   else {
        dogImage.setAttribute ('src', 'images/puppet-dog.jpg');
    }
}