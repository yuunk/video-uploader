axios
    .get('/api/posts')             //リクエストを飛ばすpath
    .then(response => {
        setPosts(response.data);
    })                               //成功した場合、postsを更新する（then）
    .catch(() => {
        console.log('通信に失敗しました');
    });      