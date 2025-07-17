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

});

const changeLanguage = document.querySelector('.languages');

changeLanguage.addEventListener('click', () => {
    document.querySelector('.choose-lang').classList.toggle('choose-lang-show')
})

const languages = [
    {
        name : "Muboriz <br> Istamov"
    },

    {
        name : "Истамов <br> Мубориз"
    },

    {
        name : "Истамов <br> Мубориз"
    },

    {
        name : "Istamov <br> Muboriz <br> (动力)"
    }
]

const language = document.querySelectorAll('.language');
const languagePacks = [
    fetch('./Languages/English.json').then(res => res.json()), 
    fetch('./Languages/Russian.json').then(res => res.json()),
    fetch('./Languages/Tajik.json').then(res => res.json()),
    fetch('./Languages/Chinese.json').then(res => res.json())
]

language.forEach((element, i) => {
    element.addEventListener('click', () => {
        // language buttons content change

        document.querySelector('#lang-btn').textContent = element.textContent

        // ---------

        languagePacks[i].then(data => {
            document.querySelector("#to-main").textContent = data.main
            document.querySelector("#to-work").textContent = data.works
            document.querySelector("#to-services").textContent = data.services
            document.querySelector("#to-contacts").textContent = data.contacts


            // intro
            document.querySelector("#hi").textContent = data.hi
            document.querySelector("#name").innerHTML = data.name

            document.querySelector('#intro').textContent = data.introTitle
            document.querySelector('#role').textContent = data.introRole
            document.querySelector('#intro-desc').innerHTML = data.introDesc
            document.querySelector("#to-works").innerHTML = data.toWorks


            // works
            document.querySelector('#some-works').textContent = data.someWorks

            document.querySelector('#css-chat').textContent = data.projectOneTitle
            document.querySelector('#age-calc').textContent = data.projectTwoTitle
            document.querySelector('#responsive').textContent = data.projectThreeTitle
            document.querySelector('#calc-react').textContent = data.projectFourTitle
            document.querySelectorAll('.project-subtitle').forEach(element => {
                element.textContent = data.projectSubtitle
            });        
            document.querySelectorAll('.visit').forEach(element => {
                element.textContent = data.visit
            });


            // services
            document.querySelector('#my-services').textContent = data.myServices

            document.querySelector('#build-title').innerHTML = data.serviceOneTitle
            document.querySelector('#anim-title').innerHTML = data.serviceTwoTitle
            document.querySelector('#responsive-title').innerHTML = data.serviceThreeTitle
            document.querySelector('#publish-title').innerHTML = data.serviceFourTitle

            document.querySelector('#build-desc').textContent = data.serviceOneDesc
            document.querySelector('#anim-desc').textContent = data.serviceTwoDesc
            document.querySelector('#responsive-desc').textContent = data.serviceThreeDesc
            document.querySelector('#publish-desc').textContent = data.serviceFourDesc

            // contacts

            document.querySelector('#my-contacts').textContent = data.myContacts

            document.querySelectorAll('.redirect').forEach(element => {
                element.textContent = data.clickMe
            });
        })
    })
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

// document.querySelector('shorten-text').textContent = "Front-End <br> Developer"


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