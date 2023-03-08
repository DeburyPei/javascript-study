const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
const searchMap = {
  'baidu': "https://www.baidu.com/s?wd=",
  'bing': "https://cn.bing.com/search?q=",

}
let searchTab = 'baidu'
let curModifyIdx = 0
let $curModify = null



function randomColor() {
  let str = "0123456789abcde"
  const randCh = () => str[Math.floor(Math.random() * str.length)]
  return `#${randCh()}${randCh()}${randCh()}${randCh()}${randCh()}${randCh()}`
}
$$('.search-tab').forEach($node => $node.addEventListener('click', function (e) {

  $$('.search-tab').forEach($node =>
    $node.classList.remove('active')
  )


  this.classList.add('active')
  //通过data-type来获取  在html 标签里面添加 data-type = 'baidu'
  // data-type  type自定义就是下面的.后面type
  // console.log(this.dataset.type); // bing baidu
  searchTab = this.dataset.type

}

))


$('input').onkeyup = function (e) {
  if (e.key === 'Enter') {
    const $link = document.createElement('a')
    let url = searchMap[searchTab] + $('input').value
    // console.log(url);
    $link.setAttribute('href', url)
    $link.setAttribute('target', '_blank')
    $link.click()

  }
}


let data = [{
  title: '常用网站',
  data: [
    {
      name: '饥人谷1',
      url: 'https://jirengu.com'
    },
    {
      name: '知乎',
      url: 'https://zhihu.com'
    }
  ]
}, {
  title: '精品博客',
  data: [
    {
      name: '阮一峰',
      url: 'https://javascript.ruanyifeng.com'
    },
    {
      name: '若愚',
      url: 'https://zhuanlan.zhihu.com/study-fe'
    }
  ]
}]

render(data)
/* 
<li class="item">
    <h2>常用网站</h2>
    <ul class="panel">
        <li class="tag">百度</li>      
    </ul>
</li>
 */
// map 是需要返回值的
function render(data) {
  let itemArray = data.map(obj => {
    const $item = document.createElement('li')
    $item.classList.add('item')
    const $h2 = document.createElement('h2')
    $h2.append(obj.title)
    const $iconSpan = document.createElement('span')

    $iconSpan.innerHTML = '<svg class="icon icon-delete" aria-hidden="true"><use xlink:href="#icon-shanchu"></use></svg> <svg class="icon icon-bianjishuru" aria-hidden="true"><use xlink:href="#icon-bianjishuru"></use></svg> '

    $h2.append($iconSpan)
    const $ul = document.createElement('ul')
    $ul.classList.add('panel')
    let liArray = obj.data.map(item => {
      const $li = document.createElement('li')
      $li.classList.add('tag')
      const $link = document.createElement('a')
      $link.setAttribute('href', item.url)
      $link.setAttribute('target', '_blank')
      $link.append(item.name)
      $li.append($link)
      return $li

    })
    console.log(liArray);
    console.log(...liArray); //解压

    $ul.append(...liArray)
    $item.append($h2, $ul)
    return $item

  })

  $('#website .category').innerHTML = ''
  $('#website .category').append(...itemArray)
  $$('.tag').forEach($tag => $tag.style.backgroundColor = randomColor())

}



$('.icon-setting').onclick = function () {
  let $body = $('body.preview')
  $body.classList.add('setting')
  $body.classList.remove('preview')
}
$('.icon-back').onclick = function () {
  let $body = $('body.setting')
  $body.classList.add('preview')
  $body.classList.remove('setting')
  $('.modal').classList.remove('show')

}

$('.plus').onclick = function () {
  $('.modal-1').classList.add('show')
}

$('#buttonCenter .cancel').onclick = function () {
  $('.modal-1').classList.remove('show')

}

$('#buttonCenter1 .cancel').onclick = function () {
  $('.modal-2').classList.remove('show')

}
$('#buttonCenter .confirm').onclick = function () {
  let value = $('.modal-1 input').value
  if (value === '') {
    alert('输入不能为空')
    return
  }
  let obj = {
    title: value,
    data: []
  }
  data.push(obj)
  render(data)
  $('.modal-1').classList.remove('show')

}
$('#buttonCenter1 .confirm').onclick = function () {
  let value = $('.modal-2 input').value
  if (value === '') {
    alert('输入不能为空')
    return
  }
  data[curModifyIdx].title = value
  render(data)
  $('.modal-2').classList.remove('show')

}
// $('.icon-bianjishuru').onclick = function(e){
//   $('.modal-2').classList.add('show')
// }
$('.category').onclick = function (e) {

  // ES6 find() 方法返回通过测试函数的第一个元素的值。如果没有值满足测试函数，则返回 undefined。
  //filter() 方法创建一个包含所有通过测试函数的元素的新数组。如果没有元素满足测试函数，则返回一个空数组。 
  // 空数组可以通过  if ($delete)

  let $delete = e.path.find($node => $node.classList && $node.classList.contains('icon-delete'))
  // console.log($delete);
  if ($delete) {
    console.log("执行");
    let $result = e.path.filter($node => $node.classList && $node.classList.contains('item'))

    if ($result.length > 0) {
      let $item = $result[0]
      // console.log($item);

      let index = [...$$('.item')].indexOf($item)
      // console.log(index);
      data.splice(index, 1)
      render(data)
    }
  }
  let $edit = e.path.find($node => $node.classList && $node.classList.contains('icon-bianjishuru'))
  // console.log("  asfasf    "+$edit);

  if ($edit) {
    
      let $result = e.path.filter($node => $node.classList && $node.classList.contains('item'))

      if ($result.length > 0) {
        let $item = $result[0]
        // console.log($item);

        let index = [...$$('.item')].indexOf($item)
        console.log(index);
        $('.modal-2').classList.add('show')
        $('.modal-2 .field input').value = data[index]['title']
        curModifyIdx = index
        $curModify = $item
        // data.splice(index,1)
        // render(data)
      }
    }

  }

function save(){
  localStorage.setItem('website',JSON.stringify(data))
}
function load(){
  let storagedData = localStorage.getItem('website')
  data = JSON.parse(storagedData) || []
}