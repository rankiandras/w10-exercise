const showMessageLater = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === 'hello') {
                return reject('Something happened')
            }
            return resolve(msg)
        }, 2000)
    })
}

showMessageLater('hello2').then((result) => {
    console.log(result);
    showMessageLater("hello3").then((result) => {
        console.log(result);
        showMessageLater("hello4").then((result) => {
            console.log(result)
            showMessageLater("hello5").then( (result) =>{
                console.log(result);
                showMessageLater("hello6").then ( (result) =>{
                    console.log(result);
                })
            })
        })
    })
}).catch( (err) => {
    console.log(err);
})

