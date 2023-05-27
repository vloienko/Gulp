window.addEventListener('DOMContentLoaded', function () {

   var videos = document.querySelectorAll('.video');

   videos.forEach(function (video) {
      video.addEventListener('click', function () {

         if (video.classList.contains('video--enabled')) {
            return;
         }
   
         video.classList.add('video--enabled');
   
         var src = video.dataset.src;
   
         video.insertAdjacentHTML('afterbegin', '<iframe class="video__iframe" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      });
   });
});