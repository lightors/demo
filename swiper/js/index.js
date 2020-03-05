const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const nextSlide = function () {
  //获取current
  const current = document.querySelector(".current");

  if (current.nextElementSibling) {
    //给兄弟元素添加current
    current.nextElementSibling.classList.add("current");

  } else {
    //给最开始的元素添加current
    slides[0].classList.add('current');
  }
  //清除current
  setTimeout( ()=> {
    current.classList.remove('current')
  })
}

const prevSlide = function () {
  //获取current
  const current = document.querySelector(".current");

  if (current.previousElementSibling) {
    //给兄弟元素添加current
    current.previousElementSibling.classList.add("current");

  } else {
    //给最后的元素添加current
    slides[slides.length-1].classList.add('current');
  }
  //清除current
  setTimeout( ()=> {
    current.classList.remove('current')
  })
}

//button event

next.addEventListener('click',function () {
  nextSlide()
})

prev.addEventListener('click',function () {
  prevSlide()
})

var timer = null;

timer = setInterval(()=> {
  nextSlide();
},5000)



next.addEventListener('mouseover',function () {
  clearTimeout(timer);

})

next.addEventListener('mouseout',function () {
  timer = setInterval(()=> {
    nextSlide();
  },5000)
})


prev.addEventListener('mouseover',function () {
  clearTimeout(timer);
})

prev.addEventListener('mouseout',function () {
  timer = setInterval(()=> {
    nextSlide();
  },5000)
})
