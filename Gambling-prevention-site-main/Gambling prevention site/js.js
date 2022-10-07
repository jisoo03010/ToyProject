window.addEventListener('scroll',function(){
    var bodyEl = document.querySelector('body');
    var bodyHeight = bodyEl.offsetHeight;
    var scrollable = bodyHeight - window.innerHeight;
    var progressEl = document.querySelector('.progress');
    var per = Math.floor(window.scrollY / scrollable * 100) + '%';
    progressEl.style.width = per;
});