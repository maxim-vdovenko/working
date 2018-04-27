addScript('js/page.js');
addScript('js/menu.js');
addScript('js/range.js');
addScript('js/tale.js');
addScript('js/warning.js');
addScript('js/parallax.js');
//addScript('js/audio.js');

function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

window.onload = function() {
    page.init();
    home.init();
    menu.init();
    range.init();
    warning.init();
    product.init();
    parallax.init();
    contest.init();
    //audio.init();
};



/* home ------------------------------------------------ */
var home = {
    active: 'active',
    
    main: '.home__main',
    boxLogo: '.home__main-logo',
    boxChoice: '.home__main-choice',
     
    arrow: '.home__main-arrow span'
};

home.init = function() {
    this.events();
};

home.events = function() {
    
    $('body').on('click', this.arrow, function(event){
        $(home.main).addClass(home.active);
    });    
};

home.reset = function() {
     $(home.main).removeClass(home.active);
};



/* child ----------------------------------------------- */
var child = {
    sex: 0,
    name: null
};

child.reset = function() {
    this.sex = 0;
    this.name = null;
};



/* product --------------------------------------------- */
var product = {
    bl: '.product',
    block: '.product-block',
    button_arrow: '.product-arrow'
};

product.init = function() {
     
    $(this.block).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: page.x_sm,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    });
     
    this.arrow();
};

product.arrow = function() {

     $(this.bl).on('click', this.button_arrow, function(event) {

          var y = $(product.block).offset().top;
          $(product.bl).animate({scrollTop: y}, 500);
     }); 
};



/* contest --------------------------------------------- */
var contest = {
    active: 'active', 
    box: '.galleryContBox1',
    heart: '.contest-vote__icon'
};

contest.init = function() {
    this.popUp();
};

contest.popUp = function() {
     
    if(!$(this.box).length) return; 
    
    $(this.box).fancybox({
        fitToView: false,
        width: '100%',
        maxWidth: 550,
        height: 'auto',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0
    });    
};


