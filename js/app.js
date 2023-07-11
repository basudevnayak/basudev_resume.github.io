//wotter effect jquery effect codding
$(document).ready(function(){
    $("#profile__ripple").ripples({
        resolution:700,
        dropRadius:10,
    })
    const bars=document.querySelectorAll('.progress_bar');
   // console.log(bars);
    bars.forEach(function(bar){
        //data por ja likbo sita akhana likta hoba
        let percentage=bar.dataset.percent;
        let tooltip=bar.children[0];
        tooltip.innText=percentage + '%';
        bar.style.width=percentage + '%';
        //console.log(percentage);
    }) 
    //counter
    const counter=document.querySelectorAll('.counter');
    //console.log(counter);
    function runCounter(){
        counter.forEach(counter =>{
            counter.innerText=0;
            let target= + counter.dataset.count;
            //sem time sas hoba tar jana step
            let step=target/100;
            //console.log(target);
            let countIt=function(){
              let displayedCount= + counter.innerText;
              if(displayedCount < target){
                  //console.log(displayedCount)
                  counter.innerText= Math.ceil(displayedCount + step);
                  //reckarsing function countIt();
                  setTimeout(countIt, 1);
              } else{
                  counter.innerText=target;
              } 
            }
            countIt();
        })
    }
    //runCounter();
    //intersectionObserver
    let countersection=document.querySelector('.counter_section');
    let option={
        rootMargin:'0px 0px -200px 0px'
    }
    let done=0;
    const sectionObserver=new IntersectionObserver(function(enteries){
        //array enteries
        if(enteries[0].isIntersecting && done!==1){
            done=1;
            runCounter();
        }
    }, option)
    sectionObserver.observe(countersection);


    //gallery code javascript img filter
    var $wrapper=$('.portfolio_wrapper');
    //initialize isotop
    //ai puligina css grid not work
    $wrapper.isotope({
        filter:'*',
        layoutMode:'masonry',
        animationOptions:{
            duration:750,
            easing:'linear'
        }
    });
    let links=document.querySelectorAll('.tabs a');
    //console.log(links);
    links.forEach(link=>{
        let selecter=link.dataset.filter;
        //console.log(selecter);
        link.addEventListener('click',function(e){
           e.preventDefault();
           $wrapper.isotope({
            filter:selecter,
            layoutMode:'masonry',
            animationOptions:{
                duration:750,
                easing:'linear'
            }
        });
        links.forEach(link=>{
            link.classList.remove('active');
        })
        e.target.classList.add('active');
        });
    })
    //magnify popup
    $('.magnify').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        },
        zoom:{
            enabled:true,
        },
    });
    //slick slider
    $('.slider').slick({
        arrows:false,
        autoplay:true,
        fade:true,
 
  infinite: true,
  speed: 500,


    });
});