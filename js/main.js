// Карусель
$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

// Выпадающий список
var city = $(".form__city");
var cityList = $('.city__list');
var cityBtn = $('.city-btn');
var cityCurrent = $('.city-current__elem');

cityBtn.click(function(e){
    cityList.fadeToggle();
    $(this).toggleClass('isactive')
});

cityList.on('click', '.city__elem', function(){
    var th = $(this);
    var thText = th.text();
    cityCurrent
    .text(thText)
    .attr('href', 'sizes__list--mobile:'+thText+'');
    cityList.fadeOut();
    cityBtn.removeClass('isactive');
});

$(document).mouseup(function (e){
    if (!city.is(e.target)
    && city.has(e.target).length === 0) {
        cityList.fadeOut();
        cityBtn.removeClass('isactive');
    }
});