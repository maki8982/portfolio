const inHeight = window.innerHeight;
const inWidth = window.innerWidth;
const mvContainer = document.querySelector('#mv__container');
const svg = document.querySelector('#svg');
const mvTxt = document.querySelector('#mv__txt');
const mvCr = document.querySelector('#mv__cr');
const mvWrap = document.querySelector('#mv__leftWrap');
<<<<<<< HEAD
<<<<<<< HEAD
const removeClass = () => {
=======
function removeClass() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
function removeClass() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
    header.classList.remove('opacity-js');
    mvContainer.classList.remove('op-js');
    mvTxt.classList.remove('color-js');
    mvCr.classList.remove('opacity-js');
    mvWrap.classList.remove('opacity-js');
    body.classList.remove('over-h');
};
const tab = window.matchMedia('(min-width: 768px)');
const pc = window.matchMedia('(min-width: 1024px)');
<<<<<<< HEAD
<<<<<<< HEAD
const opArry = ['5', '21', '14.3'];//op文字 x軸移動数値
const op = () => {
=======
const opArry = ['5', '17', '13'];//op文字 x軸移動数値
function op() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
const opArry = ['5', '17', '13'];//op文字 x軸移動数値
function op() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
    window.scroll({ top: 0 });
    const opmoveX = () => pc.matches ? opArry[2] : (tab.matches ? opArry[1] : opArry[0]);
    const optl = gsap.timeline();
    optl.fromTo('.mv__svg01', {
        x: '2%',
        opacity: 0,
    }, {
        x: `${opmoveX()}%`,
        opacity: 1,
    })
        .fromTo('.mv__svg02', {
            x: '2%',
            opacity: 0,
        }, {
            x: `${opmoveX()}%`,
            opacity: 1,
        });
    body.classList.add('over-h');
    mvContainer.classList.add('op-js');
    sessionStorage.setItem('visited', 'true');
    setTimeout(() => { removeClass(); }, 3300);
};
window.addEventListener('DOMContentLoaded', () => {
    const visitedFlg = sessionStorage.getItem('visited');
    svg.classList.remove('opacity-js');
    visitedFlg ? removeClass() : op();
});
//mv-gsap
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
function mvToggle() {
    const scrollY = window.scrollY;
    if (scrollY > headerTop + 50) {
        mvContainer.classList.remove('bg-js');
        header.classList.remove('border-js');
    } else {
        mvContainer.classList.add('bg-js');
        header.classList.add('border-js');
    }
};
window.addEventListener('scroll', () => { mvToggle() });
<<<<<<< HEAD
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
const mvScale = divi => inWidth / divi;
// const transOrigin = () => inWidth * .405;
const mvtl = gsap.timeline({
    scrollTrigger: {
        trigger: '.mv',
        start: 'top top',
        end: inHeight,
        scrub: .8,
        pin: true,
        pinSpacing: false,
    }
});
mvtl.set('.mv__svg01, .mv__svg02', {
    transformOrigin: `41.7% 50%`,
});
mvtl.to('.mv__svg01, .mv__txt, .mv__left', {
    opacity: 0,
    ease: 'power4.inOut',
})
    .to('.mv__svg02', {
        scale: `${mvScale(5)}`,
        ease: 'power4.inOut',
        duration: 15,
    });
//about-gsap
const scroller = () => tab.matches ? inHeight * 1.48 : inHeight;
ScrollTrigger.create({
    trigger: '.about__scroller',
    start: 'top top',
    end: scroller(),
    scrub: .5,
    pin: true,
    pinSpacing: false,
});
//work-gsap
const workContainer = document.querySelector('#work__container');
const workHeight = workContainer.offsetHeight;
const workTxt = document.querySelector('#work__txt');
const txtX = multi => workTxt.clientWidth * multi;
const cardYX = multi => multi *= 5;
const worktl = gsap.timeline({
    scrollTrigger: {
        trigger: '#work__txt',
        start: 'center center',
        end: `+=${inHeight * 1.2}`,
        scrub: 0.2,
        pin: true,
        pinSpacing: false,
    }
});
worktl.to('.work__span-top', {
    x: `${txtX(-2)}`,
    y: `-110%`,
    ease: 'power2.inOut'
})
    .to('.work__span-bottom', {
        x: `${txtX(3)}`,
        y: '-110%',
        ease: 'power2.inOut'
    }, '<');
const cardtl = gsap.timeline({
    scrollTrigger: {
        trigger: '#work__container',
        start: 'center center',
        end: `+=${workHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
    }
});
if (pc.matches) {
    cardtl.to('#work__box01', {
        y: `${cardYX(6)}%`,
        x: `${cardYX(34)}%`,
    })
        .to('#work__box02', {
            y: `${cardYX(-8)}%`,
            x: `${cardYX(17)}%`,
        }, '<')
        .to('#work__box04', {
            y: `${cardYX(6)}%`,
            x: `${cardYX(-18)}%`,
        }, '<')
        .to('#work__box05', {
            x: `${cardYX(-34)}%`
        }, '<');
} else {
    cardtl.to('#work__box01', {
        y: `${cardYX(19)}%`,
        x: `${cardYX(14)}%`,
    })
        .to('#work__box02', {
            y: `${cardYX(23)}%`,
            x: `${cardYX(-14)}%`,
        }, '<')
        .to('#work__box03', {
            y: `${cardYX(-15)}%`,
            x: `${cardYX(24)}%`,
        }, '<')
        .to('#work__box04', {
            y: `${cardYX(-5)}%`,
        }, '<')
        .to('#work__box05', {
            y: `${cardYX(-10)}%`,
            x: `${cardYX(-24)}%`,
        }, '<');
}
// contact-gsap
const contact = document.querySelector('#contact-sec');
const contactHeight = contact.offsetHeight;
const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact__wrap',
        start: 'center center',
        end: `+=${contactHeight}`,
        scrub: .5,
        pin: true,
        pinSpacing: false,
    }
})
contactTl.to('.contact__ttl', {
    backgroundPosition: `-100% 0`,
}, '-=1')
ScrollTrigger.create({
    trigger: '.contact__container',
    start: 'center center',
    end: `+=${inHeight}`,
    scrub: true,
    pin: true,
<<<<<<< HEAD
<<<<<<< HEAD
})
=======
    delay: .8,
});
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
    delay: .8,
});
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
let resizeTimer;
const resizeTimeout = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (innerWidth !== inWidth) { location.reload(); }
    }, 500);
};
window.addEventListener('resize', () => { resizeTimeout(); });
<<<<<<< HEAD
<<<<<<< HEAD
const headerR = document.querySelector('#header__right');
const footer = document.querySelector('#footer');
const footerH = footer.offsetHeight;
const mvToggle = () => {
    const scrollY = window.scrollY;
    const headerTop = header.getBoundingClientRect().top;
    if (scrollY > headerTop + 50) {
        mvContainer.classList.remove('bg-js');
        header.classList.remove('border-js');
    } else {
        mvContainer.classList.add('bg-js');
        header.classList.add('border-js');
    }
};
const contactBtnToggle = () => {
    const scrollY = window.scrollY;
    const contactT = contact.getBoundingClientRect().top;
    const contactB = contact.getBoundingClientRect().bottom;
    scrollY > contactT + scrollY && scrollY < contactB + window.scrollY - footerH ? headerR.classList.add('passive') : headerR.classList.remove('passive');
}
const contactBox = document.querySelector('#contact__box--01');
const contactBg = document.querySelector('#contact__bg');
const contactTtl = document.querySelector('#contact__ttl');
const bgHeight = contactBg.offsetHeight;
const bg = () => {
    const boxTop = contactBox.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    scrollY >= (boxTop - (bgHeight / 2)) + scrollY ? contactBg.classList.add('passive') : contactBg.classList.remove('passive');
    scrollY >= (boxTop - (bgHeight / 3)) + scrollY ? contactTtl.classList.add('passive') : contactTtl.classList.remove('passive');
}
window.addEventListener('scroll', () => {
    mvToggle();
    contactBtnToggle();
    bg();
});
const mvLink = document.querySelector('#mv__link');
=======
const footer = document.querySelector('#footer');
const headerR = document.querySelector('#header__right');
const contactT = contact.getBoundingClientRect().top + window.scrollY;
const footerH = footer.offsetHeight;
const contactB = contact.getBoundingClientRect().bottom + window.scrollY - footerH;
function contactBtnToggle() {
    const scrollY = window.scrollY;
    scrollY > contactT && scrollY < contactB ? headerR.classList.add('passive') : headerR.classList.remove('passive');
}
window.addEventListener('scroll', () => { contactBtnToggle() });
const mvLink = document.querySelector('#mv__link');
function smoothScroll(base, menu = null) {
    const href = base.getAttribute('href');
    const target = document.querySelector(href);
    const targetTop = target.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    const targetPos = targetTop + scrollY;
    if (!menu) {
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    } else {
        menu.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    }
};
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
const footer = document.querySelector('#footer');
const headerR = document.querySelector('#header__right');
const contactT = contact.getBoundingClientRect().top + window.scrollY;
const footerH = footer.offsetHeight;
const contactB = contact.getBoundingClientRect().bottom + window.scrollY - footerH;
function contactBtnToggle() {
    const scrollY = window.scrollY;
    scrollY > contactT && scrollY < contactB ? headerR.classList.add('passive') : headerR.classList.remove('passive');
}
window.addEventListener('scroll', () => { contactBtnToggle() });
const mvLink = document.querySelector('#mv__link');
function smoothScroll(base, menu = null) {
    const href = base.getAttribute('href');
    const target = document.querySelector(href);
    const targetTop = target.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    const targetPos = targetTop + scrollY;
    if (!menu) {
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    } else {
        menu.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    }
};
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
mvLink.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(mvLink);
})