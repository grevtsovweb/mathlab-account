document.addEventListener('DOMContentLoaded', function(){

    let offer = document.querySelector('.page__offer');
    let calendar = document.querySelector('.page__calendar');
    let socialNav = document.querySelector('.page__social-nav');

    let replaceBlockToSidebar = function(elem){
        if(window.innerWidth > 760 && elem){
            let sidebar = document.querySelector('.page__sidebar');
            

            sidebar.append(elem);
        }
    }

    let replaceCalendarDesktop = function(elem){
        if(window.innerWidth > 992 && elem){
            let container = document.querySelector('.page__grid');
            

            container.append(elem);
        }
    }

    replaceBlockToSidebar(offer);
    replaceBlockToSidebar(calendar);
    replaceBlockToSidebar(socialNav);
    replaceCalendarDesktop(calendar)
});