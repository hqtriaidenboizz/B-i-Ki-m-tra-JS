const new_url ="https://61c16f3d9dbcca0017c81ed3.mockapi.io/api/news";

// them news
function addNews(){
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var img = document.getElementById('img').value;
    var formData ={
        name: name,
        title: title,
        img:img
    };
    axios.get(new_url)
        .then((res)=>{
            var newArr =res.data;
            for(var news of newArr){
                if(name == news.Name){
                    alert('Bài viết đã tồn tại!');
                    return;
                }
            }
            axios.post(new_url,formData)
                .then(()=>{
                    alert('Đăng bài thành công!')
                })
        })
}