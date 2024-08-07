window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    // var newHeight = 250 - scrollPosition ; // Adjust this formula as needed
    // console.log(newHeight)
    // Ensure the height doesn't go below a certain minimum
    var mainheader = document.getElementById('mainheader')
    var headertext = document.getElementById('headertext')
    if (scrollPosition < 200){
        headertext.style.fontSize='2.5rem'
        headertext.style.marginLeft = '';
        headertext.style.letterSpacing='10px'
        mainheader.style.minHeight= '10vh'
        mainheader.style.backdropFilter='blur(1px)'
        
    }else if (scrollPosition > 200){
        headertext.style.fontSize='1.5rem'
        headertext.style.marginLeft = '5vw';
        headertext.style.letterSpacing='2px'
        mainheader.style.minHeight= '8vh'
        mainheader.style.backdropFilter='blur(3px)'
    }

});