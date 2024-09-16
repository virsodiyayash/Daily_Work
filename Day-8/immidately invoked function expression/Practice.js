(function chai(){
    console.log("DB Connected");
})();

( () => {
    console.log(`DB Connected Two`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('yash');