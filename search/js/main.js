//获取节点
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//获取stat.json 并过滤
const searchStates = async searchText => {
  const res = await fetch('./data/states.json');
  const states = await res.json();
  //console.log(states);
  //匹配内容的过滤
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  })

  //console.log(matches);
  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }
  //console.log(matches);

  outputHtml(matches);

}
  //显示函数过滤
  const outputHtml = matches => {
    if (matches.length != 0) {
      const html = matches.map(match =>
          `<div class="card card-body md-1">
<h4>${match.name} (${match.abbr})
<span class="text-primary">${match.capital}</span>
</h4>
<small>Lat:${match.lat} /Long: ${match.long}</small>

</div>`
      ).join("");
      matchList.innerHTML = html;
    }
  }




//事件监听
search.addEventListener('input', () => searchStates(search.value))
