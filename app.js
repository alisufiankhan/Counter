let value = document.getElementById('Count')
const buttons = document.querySelectorAll('.btn')
let count = 0
buttons.forEach(btns => {
    btns.addEventListener('click', function (e) {
        let select = e.currentTarget.classList;
        if (select.contains("increase")) {
            count++
            value.innerHTML = count
        } else if (select.contains('decrease')){
            count--
            value.innerHTML = count
        }
        else{
            value.innerHTML = 0
        }
    })
});