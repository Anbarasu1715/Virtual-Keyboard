const buttons=document.querySelectorAll('.btn')
const textarea=document.querySelector('.textfield')

const delete_btn=document.querySelector('.backspace')
const caps_btn=document.querySelector('.capslock')
const space_btn=document.querySelector('.space')
const shift_btn=document.querySelector('.shift')
const shift2=document.querySelector('.shift2')

const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const btn4=document.querySelector('.btn4')
const btn5=document.querySelector('.btn5')
const btn6=document.querySelector('.btn6')
const btn7=document.querySelector('.btn7')
const btn8=document.querySelector('.btn8')
const btn9=document.querySelector('.btn9')
const btn0=document.querySelector('.btn0')
const btnsp=document.querySelector('.btnsp')
const btn_mi=document.querySelector('.sub')
const btn_eq=document.querySelector('.equal')
const tab_btn=document.querySelector('.tab')

const obrack_btn=document.querySelector('.obrack')
const cbrack_btn=document.querySelector('.cbrack')
const back_btn=document.querySelector('.back')
const colon_btn=document.querySelector('.colon')
const ops_btn=document.querySelector('.ops')
const comma_btn=document.querySelector('.comma')
const fullstop_btn=document.querySelector('.pullstop')
const front_btn=document.querySelector('.front')
const enter_btn=document.querySelector('.enter')



let chars=[]

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        textfield.value += btn.innerText
        chars =textfield.value.split('')
        console.log(chars)
    })
})

enter_btn.addEventListener('click',()=>{
    textfield.value+="\n"
    chars=textfield.value.split('')
    console.log(chars)
})

btn1.addEventListener('click',()=>{
    textfield.value+=btn1.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn2.addEventListener('click',()=>{
    textfield.value+=btn2.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn3.addEventListener('click',()=>{
    textfield.value+=btn3.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn4.addEventListener('click',()=>{
    textfield.value+=btn4.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn5.addEventListener('click',()=>{
    textfield.value+=btn5.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn6.addEventListener('click',()=>{
    textfield.value+=btn6.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn7.addEventListener('click',()=>{
    textfield.value+=btn7.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn8.addEventListener('click',()=>{
    textfield.value+=btn8.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn9.addEventListener('click',()=>{
    textfield.value+=btn9.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn0.addEventListener('click',()=>{
    textfield.value+=btn0.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btnsp.addEventListener('click',()=>{
    textfield.value+=btnsp.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn_mi.addEventListener('click',()=>{
    textfield.value+=btn_mi.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

btn_eq.addEventListener('click',()=>{
    textfield.value+=btn_eq.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

obrack_btn.addEventListener('click',()=>{
    textfield.value+=obrack_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

cbrack_btn.addEventListener('click',()=>{
    textfield.value+=cbrack_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

back_btn.addEventListener('click',()=>{
    textfield.value+=back_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

colon_btn.addEventListener('click',()=>{
    textfield.value+=colon_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

comma_btn.addEventListener('click',()=>{
    textfield.value+=comma_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

ops_btn.addEventListener('click',()=>{
    textfield.value+=ops_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

fullstop_btn.addEventListener('click',()=>{
    textfield.value+=fullstop_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})

front_btn.addEventListener('click',()=>{
    textfield.value+=front_btn.innerText 
    chars=textfield.value.split('')
    console.log(chars)
})


tab_btn.addEventListener('click',()=>{
    chars.push('        ')
    textfield.value=chars.join('')
})


delete_btn.addEventListener('click',()=>{
    chars.pop()
    textfield.value=chars.join('')
})

space_btn.addEventListener('click',()=>{
    chars.push(' ')
    textfield.value=chars.join('')
})

caps_btn.addEventListener('click',()=>{
    buttons.forEach(btn=>{
        btn.classList.toggle('upper')
    })
})

shift_btn.addEventListener('click',()=>{
    btn1.innerText='!';
})

shift2.addEventListener('click',()=>{
    btn1.innerText='1';
})

shift_btn.addEventListener('click',()=>{
    btn2.innerText='@';
})

shift_btn.addEventListener('click',()=>{
    btn3.innerText='#';
})

shift_btn.addEventListener('click',()=>{
    btn4.innerText='$';
})

shift_btn.addEventListener('click',()=>{
    btn5.innerText='%';
})

shift_btn.addEventListener('click',()=>{
    btn6.innerText='^';
})

shift_btn.addEventListener('click',()=>{
    btn7.innerText='&';
})

shift_btn.addEventListener('click',()=>{
    btn8.innerText='*';
})

shift_btn.addEventListener('click',()=>{
    btn9.innerText='(';
})

shift_btn.addEventListener('click',()=>{
    btn0.innerText=')';
})

shift_btn.addEventListener('click',()=>{
    btnsp.innerText='~';
})

shift_btn.addEventListener('click',()=>{
    btn_mi.innerText='_';
})

shift_btn.addEventListener('click',()=>{
    btn_eq.innerText='+';
})

shift_btn.addEventListener('click',()=>{
    btn3.innerText='#';
})

shift_btn.addEventListener('click',()=>{
    btn4.innerText='$';
})

shift_btn.addEventListener('click',()=>{
    btn5.innerText='%';
})

shift_btn.addEventListener('click',()=>{
    btn6.innerText='^';
})

shift_btn.addEventListener('click',()=>{
    btn7.innerText='&';
})

shift_btn.addEventListener('click',()=>{
    btn8.innerText='*';
})

shift_btn.addEventListener('click',()=>{
    btn9.innerText='(';
})


shift2.addEventListener('click',()=>{
    btn2.innerText='2';
})

shift2.addEventListener('click',()=>{
    btn3.innerText='3';
})

shift2.addEventListener('click',()=>{
    btn4.innerText='4';
})

shift2.addEventListener('click',()=>{
    btn5.innerText='5';
})

shift2.addEventListener('click',()=>{
    btn6.innerText='6';
})

shift2.addEventListener('click',()=>{
    btn7.innerText='7';
})

shift2.addEventListener('click',()=>{
    btn8.innerText='8';
})

shift2.addEventListener('click',()=>{
    btn9.innerText='9';
})

shift2.addEventListener('click',()=>{
    btn0.innerText='0';
})

shift2.addEventListener('click',()=>{
    btnsp.innerText='`';
})

shift2.addEventListener('click',()=>{
    btn_mi.innerText='-';
})

shift2.addEventListener('click',()=>{
    btn_eq.innerText='=';
})

shift_btn.addEventListener('click',()=>{
    obrack_btn.innerText='{';
})

shift_btn.addEventListener('click',()=>{
    cbrack_btn.innerText='}';
})
shift_btn.addEventListener('click',()=>{
    back_btn.innerText='|';
})
shift_btn.addEventListener('click',()=>{
    colon_btn.innerText=':';
})
shift_btn.addEventListener('click',()=>{
    ops_btn.innerText='"';
})
shift_btn.addEventListener('click',()=>{
    comma_btn.innerText='<';
})
shift_btn.addEventListener('click',()=>{
    fullstop_btn.innerText='>';
})
shift_btn.addEventListener('click',()=>{
    front_btn.innerText='?';
})

shift2.addEventListener('click',()=>{
    obrack_btn.innerText='[';
})

shift2.addEventListener('click',()=>{
    cbrack_btn.innerText=']';
})
shift2.addEventListener('click',()=>{
    back_btn.innerText='\\';
})
shift2.addEventListener('click',()=>{
    colon_btn.innerText=';';
})
shift2.addEventListener('click',()=>{
    ops_btn.innerText='\'';
})
shift2.addEventListener('click',()=>{
    comma_btn.innerText=',';
})
shift2.addEventListener('click',()=>{
    fullstop_btn.innerText='.';
})
shift2.addEventListener('click',()=>{
    front_btn.innerText='/';
})







