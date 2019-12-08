
// ********************--jquery start--********************* //
$(document).ready(function () {
  setTimeout(()=> {
      $('.loadingPageAn__innerBox__flashLine').css("transform","scaleX(0)")
    },7400);


// targetTop-control-start--------------

  $('.scrollTop').click(function(e){
    e.preventDefault()
    let target = $(this).attr('href')
    let targetPos = $(target).offset().top
    $('html,body').animate({
      scrollTop: targetPos,
    },1500)
  })

  let $backBtn = $('.back-btn')
  $backBtn.click(function(){
    $('html,body').animate({
      scrollTop: 0
    },1000)
  });
  // -------targetTop-control-end--------------

  // pageTop-control-start---------------


  $(window).scroll(function () {

    //header-control-start------------
    let scrollDistance = $(window).scrollTop();
    let windowHeight = $(window).height();
    console.log(scrollDistance)
    console.log(windowHeight)

    let $header = $('.js-header');
    if (scrollDistance > 700) {
      $header.addClass('header--colored');
    } else {
      $header.removeClass('header--colored');
    };
    // header-control-end----------------

    //skill control-start
    // $('.skill-card__content').each(function(){
    //   let thisPos = $(this).offset().top;
    //   if(scrollDistance + 500 >= thisPos) {
    //     $(this).addClass('key-100');
    //   }
    // })


    //skill control-end

    //image-control-start------------------
    $('.image').each(function () {
      let thisPos = $(this).offset().top;
      if (scrollDistance + 300 >= thisPos) {
        $(this).addClass('workImgAn');
      }
    });
    //work-image-control-end--------------------


    //work-image-txt-control-start-------------------
    $('.work-item__text').each(function () {
      let thisPos = $(this).offset().top;
      if (scrollDistance + 300 >= thisPos) {
        $(this).addClass('workTxtAn');
      }
    });
    //work-image-txt-control-end-------------------
  })
})

 // pageTop-control-end---------------


// ********************--jquery end--********************* //

//游標的建構式
class MouseCursor {
  constructor() {
    this.page = document.querySelector('#mousemoveScope');
    //範圍
    const cursor = document.querySelector('.mousemoveScope__cursor__pointer');
    //游標
    TweenLite.to(cursor, {
      autoAlpha: 0,
    });
  }

  //抓到游標位置
  moveMousePos(e) {
    const mousePosX = e.clientX;
    const mousePosY = e.clientY;
    const cursor = document.querySelector('.mousemoveScope__cursor__pointer');
    TweenLite.to(cursor, 0.5, {
      x: mousePosX,
      y: mousePosY,
      ease: Power4.easeOut,
    });
  }

  enterMouse() {
    const cursor = document.querySelector('.mousemoveScope__cursor__pointer');
    TweenLite.to(cursor, 1, {
      autoAlpha: 1,
      ease: Power4.easeIn,
    });
  }
//監聽範圍
  handleMousePos() {
    this.page.addEventListener('mouseenter', this.enterMouse);
    this.page.addEventListener('mousemove', this.moveMousePos, false);
  }

  updateOnHover(e) {
    const { tagName, classList } = e.target;
    //條件判斷，更新滑鼠行為，如果有包含以下目標或屬性，切換class
    if (tagName === 'A' ||
      tagName === 'BUTTON' ||
      e.target.parentElement.tagName === 'A' || e.target.tagName === 'IMG' || e.target.classList.contains('fa-long-arrow-alt-up')
    ) {
      document.querySelector('html').classList.toggle('is-hover');
      //接著再切換class底下更動互動元件的變化
    }
  }
//滑鼠特定hover樣式更新監聽
  handleLinkHover() {
    this.page.addEventListener('mouseover', this.updateOnHover.bind(this));
    this.page.addEventListener('mouseout', this.updateOnHover.bind(this));
  }
  render() {
    this.handleMousePos();
    this.handleLinkHover();
  }
}
const mouseCursor = new MouseCursor();
mouseCursor.render();



//charming scope

const hoverEffect = {
  button: document.querySelector('.btn-contact'),
  //觸發按鈕
  personal: document.querySelector('.person__heading')
  //文字
}

charming(hoverEffect.personal);
//把文字拆開並加上標籤span


hoverEffect.personalLetters = [...hoverEffect.personal.querySelectorAll('span')]
//選取所有span並推入陣列
hoverEffect.personalLetters.sort(() => Math.round(Math.random()) - 0.5);
//順序亂數抓取，0.5 ~ -0.5


var letters = hoverEffect.personalLetters.filter(()=> Math.random() < .5);
//篩選出小於0.5
var otherletters = hoverEffect.personalLetters.filter(el => letters.indexOf(el) < 0);
//其餘小於0，剩下的另一半


const onEnterHoverFn = () => {
  letters = hoverEffect.personalLetters.filter(()=> Math.random() < .5);
  otherletters = hoverEffect.personalLetters.filter(el => letters.indexOf(el) < 0);

  new TimelineMax({onComplete: () => {} })
  .staggerTo(letters,0.2,{
    ease: Quad.easeIn,
    y: '-100%',
    opacity: 0
  },0.04,0)
  .staggerTo(letters,0.6,{
    ease: Quint.easeOut,
    startAt: {y: '55%'},
    y: '0%',
    opacity: 1
  },0.04,0.4)
};

hoverEffect.button.addEventListener('mouseenter',onEnterHoverFn)
















//canvas test---------------------------------
// var canvas = document.getElementById('mycanvas')
// var ctx = canvas.getContext('2d')


// class Vec2 {
//   constructor(x,y) {
//     this.x = x || 0
//     this.y = y || 0
//   }
//   set(x,y){
//     this.x = x
//     this.y = y
//   }
// }
// var showMouse = true
// function initCanvas(){
//   ww = canvas.width = window.innerWidth
//   wh = canvas.height = window.innerHeight
// }
// initCanvas()
// function init(){}
// function loaded(){
//   initCanvas()
//   init()
//   requestAnimationFrame(draw)
// }
// function draw(){
//   ctx.fillStyle = 'white'
//   ctx.fillRect(0,0,ww,wh)
//   ctx.save()
//   ctx.fillStyle = '#fa8227'
//   ctx.beginPath()
//   ctx.arc(mousePos.x,mousePos.y,10,0,Math.PI*2)
//   ctx.fill()
//   requestAnimationFrame(draw)
// }
// var mousePos = new Vec2(0,0)

// function mousemove(evt){
//   mousePos.set(evt.x,evt.y)
//   console.log(mousePos.x,mousePos.y)
// }
// window.addEventListener('mousemove',mousemove)
// window.addEventListener("load",loaded)
// window.addEventListener("resize",initCanvas)



// e.preventDefault();
// let target = document.getElementsByClassName('scrollTop').getAttribute('href');
// let targetPos = target.offset().top;
// let html = document.getElementsByTagName('html')
