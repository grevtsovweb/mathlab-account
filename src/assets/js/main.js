document.addEventListener('DOMContentLoaded', function(){

    let offer = document.querySelector('.page__offer');
    let calendar = document.querySelector('.page__calendar');
    let socialNav = document.querySelector('.page__social-nav');
    let progressBlock = document.querySelector('.page__progress-js');

    let replaceBlockToSidebar = function(elem){
        if(window.innerWidth > 760 && elem){
            let sidebar = document.querySelector('.page__sidebar');
            
            if(sidebar){
                sidebar.append(elem);
            }  
        }
    }

    let replaceCalendarDesktop = function(elem){
        if(window.innerWidth > 992 && elem){
            let container = document.querySelector('.page__content-row-js');
            

            container.append(elem);
        }
    }

    let replaceProgressBlock = function(elem){
        if(window.innerWidth > 767 && elem){
            let container = document.querySelector('.page__grid-js');
            

            container.prepend(elem);
        }
    }

    replaceBlockToSidebar(offer);
    replaceBlockToSidebar(calendar);
    replaceBlockToSidebar(socialNav);
    replaceCalendarDesktop(calendar);
    replaceProgressBlock(progressBlock);
});