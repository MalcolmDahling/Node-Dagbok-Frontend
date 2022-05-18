axios.get('http://localhost:3000/diary')
    .then(res => {

        for(let i = 0; i < res.data.length; i++){

            document.getElementById('diaryContainer').innerHTML += '<div><h2>' + res.data[i].title + '</h2><p>' + res.data[i].content + '</p></div>';
        }
    });


document.getElementById('submitButton').addEventListener('click', () => {

    axios.post('http://localhost:3000/diary', {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    },
    {
        headers:{
            'content-type':'application/json'
        }
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });


    location.reload();
});