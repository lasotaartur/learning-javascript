const doShopping = () => {return new Promise(((resolve) => resolve('Got ingredients')))};
const mixIngredients = () => {return new Promise(((resolve) => resolve('Made dough')))};
const bakeCake = () => {return new Promise(((resolve) => resolve('Baked cake')))};

doShopping()
    .then((response) => {console.log(response); return mixIngredients()})
    .then((response) => {console.log(response); return bakeCake()})
    .then((response) => {console.log(response); console.log('Bon appetit')});

//--------------- all

const promise1 = new Promise(((resolve) => {setTimeout(resolve, 2000, 'foo');}));
const promise2 = 42;
const promise3 = Promise.resolve(2*21);

Promise.all([promise1, promise2, promise3])
    .then((values) => {console.log(values);})
    .catch((err) => {console.log(err)});

//--------------- all with reject

const promise4 = new Promise((resolve, reject) => {setTimeout(reject, 1500, 'error1');setTimeout(resolve, 2000, 'foo');});
const promise5 = new Promise((resolve, reject) => {setTimeout(reject, 1000, 'error2');});
const promise6 = Promise.resolve(2*21);

Promise.all([promise4, promise5, promise6]).then((values) => {console.log(values);}).catch((err) => {console.log(err)});

//--------------- rafe - who first

const promise7 = new Promise(((resolve) => {setTimeout(resolve, 5000, 'first');}));
const promise8 = new Promise(((resolve) => {setTimeout(resolve, 1000, 'secode');}));

Promise.race([promise7, promise8]).then((value) => {console.log(value);});
