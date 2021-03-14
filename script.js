$(document).ready(function(){
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $(".slider-container");
    const track = $(".slider-track");
    const card = $(".slider-item");
    const next = $(".next");
    const prev = $(".prev");
    const itemWidth = track.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    const sumCard = card.length;
    console.log(sumCard);

    card.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

    next.click(function(){
        position -= movePosition;
        setPosition();
    });
    
    prev.click(function(){
        position += movePosition;
        setPosition();
        btnCheck();
    });
    
    const setPosition = () =>{
        track.css({
            transform: `translate(${position}px)`
        })
    }
    
    const btnCheck = ()=>{
        prev.prop("disabled", position === 0);
    };


    btnCheck();
    
    
});
