let thing = new Promise(function (resolve, reject) {
    console.log('Start')

    setTimeout(function () {
        console.log('After')
        resolve();
    }, 3000);
});

thing.then(function () {console.log('Then')}).catch(function () {console.log('Catch')});