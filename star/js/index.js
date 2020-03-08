//第一步 初始评分
const ratings = {
  vue:4.7,
  node:3.4,
  jquery:2.3,
  djingo:3.6,
  flutter:4.1
};

//第二步，设置总分变量
const starsTotal = 5;
//第四步 获取form-group节点
const productSelect  = document.getElementById("produce-select");
const ratingControl  = document.getElementById("rating-control");

let product;

//第五步，下拉框的事件监听
productSelect.addEventListener("change",e=> {
  product = e.target.value;
  //console.log(product);

  //启动input输入框设置分数
  ratingControl.disabled = false;

  //product 和ratings 的键名相同，用键名索引
  ratingControl.value = ratings[product];

})


//第六步 更改分数
ratingControl.addEventListener('blur', e=> {
  const rating = e.target.value;
  //console.log(rating);

  //判断 设置分数界限
  if (rating>5 ) {
    alert("评分上下限为0-5分之间");
    return;
  }

  //修改分数
  ratings[product] = rating;
  getRatings();

})



document.addEventListener('DOMContentLoaded',getRatings);

//第三步 设置评分函数
function getRatings() {
  //console.log('运行');
  for (let rating in ratings) {
    //console.log(ratings[rating]);
    //获得分数百分比
    const starPercentage = (ratings[rating]/starsTotal)*100 ;

    console.log(typeof starPercentage);

    //获得四舍五入到十位带分数百分比
    /*const starPercentageRounded =
        `${Math.round(starPercentage/10)*10}%`;*/

    const starPercentageRounded =
        `${starPercentage}%`;
    console.log(starPercentageRounded);

    //点亮星标宽度等于分数百分比
    document.querySelector(`.${rating} .stars-inner`)
        .style.width = starPercentageRounded;

    //插入后面的分数
    document.querySelector(`.${rating}  .number-rating`)
        .innerHTML = ratings[rating];
  }


}
