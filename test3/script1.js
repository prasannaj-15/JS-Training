
function abc() {
    let a = 10;
    console.log(a);

    function xyz(){
        console.log(10+a);
    }
    return xyz;
}
var ans = abc();
ans();
