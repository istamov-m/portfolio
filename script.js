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

const move = document.querySelectorAll('.move-off');

roll.forEach((element, i) => {
    element.addEventListener('mouseover', () => {
        img[i].classList.remove('disable')
        move[i].classList.add('move-on')
    })

    element.addEventListener('mouseout', () => {
        img[i].classList.add('disable')
        move[i].classList.remove('move-on')
    })
});

// for(let i = 0; i < roll.length; i++){
//     roll[i].addEventListener('mouseover', () => {
//         img[i].classList.remove('disable')
//     })

//     roll[i].addEventListener('mouseout', () => {
//         img[i].classList.add('disable')
//     })
// }


move.forEach(element => {
    
});

let emoji = document.querySelectorAll('.emoji');

emoji[3].addEventListener('mouseover', () => {
    emoji[3].classList.add('emoji-hide')
    emoji[2].classList.remove('emoji-hide')
})

emoji[3].addEventListener('mouseout', () => {
    emoji[3].classList.remove('emoji-hide')
    emoji[2].classList.add('emoji-hide')
})

document.querySelector(".show-hi").addEventListener('mouseover', () => {
    document.querySelector(".hi").classList.add('hide-hi')
    emoji[3].classList.add('emoji-hide')
    emoji[1].classList.remove('emoji-hide');
})

document.querySelector(".show-hi").addEventListener('mouseout', () => {
    document.querySelector(".hi").classList.remove('hide-hi')
    emoji[3].classList.remove('emoji-hide')
    emoji[1].classList.add('emoji-hide');
})



document.querySelector(".to-works").addEventListener('mouseover', () => {
    document.querySelector(".smile").textContent = 'D'
})

document.querySelector(".to-works").addEventListener('mouseout', () => {
    document.querySelector(".smile").textContent = ')'
})

document.querySelector(".love").addEventListener('mouseover', () => {
    emoji[3].classList.add('emoji-hide');
    emoji[0].classList.remove('emoji-hide');
})

document.querySelector(".love").addEventListener('mouseout', () => {
    emoji[3].classList.remove('emoji-hide');
    emoji[0].classList.add('emoji-hide');
})

const works = document.querySelectorAll('.bg-project');
const projects = document.querySelectorAll('.project');

for(let i = 0; i < works.length; i++){
    works[i].addEventListener('mouseover', () =>{
        projects[i].classList.add('show-work')
    })

    works[i].addEventListener('mouseout', () =>{
        projects[i].classList.remove('show-work')
    })
}

const contacts = document.querySelectorAll('.redirect');
const goTo = document.querySelectorAll('.go');

contacts.forEach((contact, i) => {
    contact.addEventListener('mouseover', () => {
        goTo[i].classList.add('go-to')
        goTo[i].textContent = ":D"
    })

    contact.addEventListener('mouseout', () => {
        goTo[i].classList.remove('go-to')
        goTo[i].textContent = ":)"
    })
});



// function hideOthers(activeIndex) {
//   services.forEach((el, i) => {
//     if (i !== activeIndex) el.classList.add('hide-service');
//   });
// }

// function showAll() {
//   services.forEach(el => el.classList.remove('hide-service'));
// }

// services.forEach((service, index) => {
//   service.addEventListener('mouseover', () => hideOthers(index));
//   service.addEventListener('mouseout', showAll);
// });

// function check(){
//     alert(2)
// }