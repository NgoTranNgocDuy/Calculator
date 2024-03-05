let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
// cái arrow function chỉ đơn giản là cái chỗ đằng sau cái arrow sẽ là 
// return ra 
arr.forEach(button => {
    // sẽ có 2 or 3 nma 2 thì phổ biến hơn và cái trước dấu , là hành
    // động sẽ thực hiện ( kiểu ấn vào cái nút đấy) cái cái sau sẽ là 
    // cái callback function sẽ được thực hiện mỗi khi làm cái hanfhd dộng trước xong
    // e là event object
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;  
        }
        
    })
})
