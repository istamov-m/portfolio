let roll = document.querySelectorAll('.roll');
let img = document.querySelectorAll('.disable')
let point = document.querySelectorAll('.point')

let check = ''

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-main');
        } 
        else{
            entry.target.classList.remove('show-main');
        }
        
    });

    // if(check == '1'){
    //     point[0].classList.add('on-point')
    //     point[1].classList.remove('on-point')
    //     point[2].classList.remove('on-point')
    // } 
    // else if(check == '2'){
    //     point[0].classList.remove('on-point')
    //     point[1].classList.add('on-point')
    //     point[2].classList.remove('on-point')
    // }
    // else if(check == '3'){
    //     point[0].classList.remove('on-point')
    //     point[1].classList.remove('on-point')
    //     point[2].classList.add('on-point')
    // }

    // if(check == '2') point[1].classList.add('on-point')
    //     else point[1].classList.remove('on-point')

    // if(check == '3') point[2].classList.add('on-point')
    //     else point[2].classList.remove('on-point')
    
    // for(let i = 0; i < entries.length; i++){
    //         if(entries[i].isIntersecting){
    //             point[i].classList.add('on-point');
    //             entries[i].target.classList.add('show-main');
    //         } 
    //         else{
    //             point[i].classList.remove('on-point');
    //             entries[i].target.classList.remove('show-main');
    //         }
                
    // }
            //     alert(check)
            // if(check == '1') point[0].classList.add('on-point')
});




const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

for(let i = 0; i < roll.length; i++){
    roll[i].addEventListener('mouseover', () => {
        img[i].classList.remove('disable')
    })

    roll[i].addEventListener('mouseout', () => {
        img[i].classList.add('disable')
    })
}