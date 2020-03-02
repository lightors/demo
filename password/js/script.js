//第三步 获取DOM节点
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

//第二部，创建随机函数对象
const randomFunc = {
  lower:getRandomLower,
  upper:getRandomUpper,
  number:getRandomNumber,
  symbol:getRandomSymbol,
};

//第六步复制到剪贴板事件监听
clipboardEL.addEventListener('click', ()=> {
  const textarea = document.createElement('textarea');
  const password = resultEL.innerText;

  if (!password) {
    return ;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('密码复制完成')
})

//第四步 生成密码事件监听

generateEL.addEventListener("click",() => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;
  resultEL.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});


//第五步，设置generatePassword函数

function generatePassword(lower,upper,number,symbol,length) {
  //1.初始化密码
  let generatedPassword = "";
  //2.过滤出没有选择的类型
  const typesCount = lower + upper + number + symbol;
  //console.log(typesCount);
  const typeArr = [{lower},{upper},{number},{symbol}]
      .filter(item => Object.values(item)[0]);
  //console.log(typeArr);

  if (typesCount === 0) {
    return "";
  }
  //3.循环获得每个密码并返回给存储密码的变量
  for (let i = 0;i<length;i += typesCount) {
    typeArr.forEach( type => {
      const funcName = Object.keys(type)[0];
      //console.log(funcName);
      generatedPassword += randomFunc[funcName]();

    })
  }
  //console.log(generatedPassword);
  //4.将处理后的随机密码结果进行保存在返回这个数
  const finalPassword = generatedPassword.slice(0,length);
  console.log(finalPassword);
  return finalPassword;

}







//生成随机数函数

//随机小写

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

//随机大写
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

//随机数字
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random()*10)+48)
}

//随机符号
function getRandomSymbol() {
  const symbols = '!@#$%^&*()_=<>{}[]/,.';
  return symbols[Math.floor(Math.random()*symbols.length)];
}

//console.log(String.fromCharCode(97));
/*
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
*/
