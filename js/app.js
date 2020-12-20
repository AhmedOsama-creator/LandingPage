/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
*/

/*Define Global Variables*/
let sections = document.querySelectorAll('section'),
    ul = document.getElementById('navbar__list'),
    docFrag = document.createDocumentFragment();
/*
End Global Variables

Start creator Functions 
*/
sections.forEach((sectionList,listIndex) => {
    linkText = sections[listIndex].getAttribute('data-nav');
    li = document.createElement('li');
    links = document.createElement('a');
    text = document.createTextNode(linkText);
    docFrag.appendChild(li);
    li.appendChild(links);
    links.appendChild(text);
}); 
ul.appendChild(docFrag);

/*
End creator Functions
Begin Main Functions 
*/

// build the nav

// Add class 'active' to section when near top of viewport & Set sections as active

let sectionLink = document.querySelectorAll('a');

    window.addEventListener('scroll',function(){
        sections.forEach((sectionList,listIndex) => {
            view = sections[listIndex].getBoundingClientRect();
            if (sections[listIndex].offsetHeight > view.top && sections[listIndex].offsetHeight < view.bottom) {
                sections[listIndex].classList.add('your-active-class');
                sectionLink.forEach(() => {
                    sectionLink[listIndex].classList.add('your-active-link');
                })
            } else {
                sections[listIndex].classList.remove('your-active-class');
                sectionLink.forEach(() => {
                    sectionLink[listIndex].classList.remove('your-active-link');
                })
            }
        })
    })

// Scroll to anchor ID using scrollTO event

    sectionLink.forEach((link,linkIndex) => {
        sectionLink[linkIndex].addEventListener("click", () => {
            sections[linkIndex].scrollIntoView({behavior: "smooth"});
            });
        });








