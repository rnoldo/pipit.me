document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.posts-list .post h1, .posts-list .post h2').forEach(function (title) {
    title.style.cursor = 'pointer';
    title.addEventListener('click', function (e) {
      if (e.target && e.target.closest('a')) return;
      var link = title.querySelector('a[href]');
      if (link) window.location.href = link.href;
    });
  });
});
