const new_url ="https://61c16f3d9dbcca0017c81ed3.mockapi.io/api/news";

// show du lieu ra
showData();
function showData(){
    axios.get(new_url)
    .then((res) => {
        var newArr = res.data;
        for(var news of newArr ){
            document.getElementById('main').innerHTML+=`
            <div class="news">
					<h1>${news.Name}</h1>
					<img src="${news.img}" class="thumbs" />
					<p>${news.title}</p>
					<a href="" class="readmore">Đọc thêm</a>
					<div class="clearfix"></div>
				</div>`
        }
    }) 
} 

// trang quan ly