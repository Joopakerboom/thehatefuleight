// CURSOR
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;")
})

// BULLETS

var body = document.querySelector('body');
var bullets = 0;

var gunShot = document.querySelector("audio:nth-of-type(1)");
var gunCock = document.querySelector("audio:nth-of-type(2)");

var gunBarrel = document.querySelector('header svg:nth-of-type(2)');
var bullet1 = document.querySelector('#bullet1');
var bullet2 = document.querySelector('#bullet2');

var headerBullet1 = document.querySelector('header > nav div > svg:nth-of-type(8)');
var headerBullet2 = document.querySelector('header > nav div > svg:nth-of-type(7)');
var headerBullet3 = document.querySelector('header > nav div > svg:nth-of-type(6)');
var headerBullet4 = document.querySelector('header > nav div > svg:nth-of-type(5)');
var headerBullet5 = document.querySelector('header > nav div > svg:nth-of-type(4)');
var headerBullet6 = document.querySelector('header > nav div > svg:nth-of-type(3)');
var headerBullet7 = document.querySelector('header > nav div > svg:nth-of-type(2)');
var headerBullet8 = document.querySelector('header > nav div > svg:nth-of-type(1)');

var outOfBullets = document.querySelector('body > section:nth-of-type(2)');


function myBullets() {
    bullets++;
//    console.log(bullets);

    if (bullets === 1) {
        bullet1.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun1");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        
        headerBullet1.classList.add("usedbullet");
    }

    if (bullets === 2) {
        bullet2.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun2");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet2.classList.add("usedbullet");
    }

    if (bullets === 3) {
        bullet3.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun3");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet3.classList.add("usedbullet");
    }

    if (bullets === 4) {
        bullet4.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun4");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet4.classList.add("usedbullet");
    }

    if (bullets === 5) {
        bullet5.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun5");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet5.classList.add("usedbullet");
    }

    if (bullets === 6) {
        bullet6.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun6");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet6.classList.add("usedbullet");
    }

    if (bullets === 7) {
        bullet7.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun7");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet7.classList.add("usedbullet");
    }

    if (bullets === 8) {
        bullet8.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun8");
        gunShot.play();
        setTimeout(function () {
            gunCock.play();
    }, 700);
        headerBullet8.classList.add("usedbullet");

        setTimeout(function () {
            outOfBullets.classList.add("outofbullets");
            body.classList.add("no-scroll");
        }, 2000);
    }
}

body.addEventListener("click", myBullets);

// NAVIGATION

var headerLogo = document.querySelector('header svg:nth-of-type(1)');
var headerTitle = document.querySelector('header a');
var headerNav = document.querySelector('header nav');

function showNav() {
    headerNav.classList.add("shownav");
    headerLogo.classList.add("shownav");
    headerLogo.classList.remove("changecolorlogo");
}

//function hideNav() {
//    headerNav.classList.remove("shownav");
//    headerLogo.classList.remove("shownav");
//}

headerTitle.addEventListener("mouseover", showNav);
//headerNav.addEventListener("mouseout", hideNav);

function hideNav(elem) {
    var list = traverseChildren(elem);
    return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
            return;
        }
        headerNav.classList.remove("shownav");
        headerLogo.classList.remove("shownav");
    };
}
headerNav.addEventListener('mouseout', hideNav(headerNav), true);

//quick and dirty BFS children traversal, Im sure you could find a better one                                        
function traverseChildren(elem) {
    var children = [];
    var q = [];
    q.push(elem);
    while (q.length > 0) {
        var elem = q.pop();
        children.push(elem);
        pushAll(elem.children);
    }

    function pushAll(elemArray) {
        for (var i = 0; i < elemArray.length; i++) {
            q.push(elemArray[i]);
        }

    }
    return children;
}


// COLOR CHANGE FUNCTION

window.addEventListener("scroll", function () {
    var hoogte = window.pageYOffset + window.innerHeight;
//    console.log(hoogte);
    if (hoogte >= 1000) {
        headerLogo.classList.add("changecolorlogo");
        headerTitle.classList.add("changecolor1");
        gunBarrel.classList.add("changecolorgun");
    } else {
        headerLogo.classList.remove("changecolorlogo");
        headerTitle.classList.remove("changecolor1");
        gunBarrel.classList.remove("changecolorgun");
    }

    if (hoogte >= 2000) {
        headerTitle.classList.remove("changecolor1");
        gunBarrel.classList.remove("changecolorgun");
    }
});

// STORY SELECT

var eightCharacters = document.querySelector('.parallax__layertext article:nth-of-type(1)');
var twoSettings = document.querySelector('.parallax__layertext article:nth-of-type(2)');
var oneDirector = document.querySelector('.parallax__layertext article:nth-of-type(3)');

var storyBullet1 = document.querySelector('.parallax__layertext div svg:nth-of-type(1)');
var storyBullet2 = document.querySelector('.parallax__layertext div svg:nth-of-type(2)');
var storyBullet3 = document.querySelector('.parallax__layertext div svg:nth-of-type(3)');

function eightCharactersShow() {
    eightCharacters.classList.add("story-eightcharacters");
    twoSettings.classList.remove("story-twosettings");
    oneDirector.classList.remove("story-onedirector");

    storyBullet1.classList.remove("usedbullet");
    storyBullet2.classList.add("usedbullet");
    storyBullet3.classList.add("usedbullet");
}

function twoSettingsShow() {
    twoSettings.classList.add("story-twosettings");
    eightCharacters.classList.remove("story-eightcharacters");
    oneDirector.classList.remove("story-onedirector");

    storyBullet1.classList.add("usedbullet");
    storyBullet2.classList.remove("usedbullet");
    storyBullet3.classList.add("usedbullet");
}

function oneDirectorShow() {
    oneDirector.classList.add("story-onedirector");
    twoSettings.classList.remove("story-twosettings");
    eightCharacters.classList.remove("story-eightcharacters");

    storyBullet1.classList.add("usedbullet");
    storyBullet2.classList.add("usedbullet");
    storyBullet3.classList.remove("usedbullet");
}

eightCharactersShow();

storyBullet1.addEventListener("click", eightCharactersShow);
storyBullet2.addEventListener("click", twoSettingsShow);
storyBullet3.addEventListener("click", oneDirectorShow);

// CHARACTER SELECT

var characterKnockOut = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) h1');

var characterName = document.querySelector('main section:nth-of-type(2) div:nth-of-type(1) h2');

var characterChoice1 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(1)');
var characterChoice2 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(2)');
var characterChoice3 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(3)');
var characterChoice4 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(4)');
var characterChoice5 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(5)');
var characterChoice6 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(6)');
var characterChoice7 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(7)');
var characterChoice8 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(8)');

function changeCharacterOne() {
    characterKnockOut.classList.add("hatefulone");
    characterName.innerHTML = "Bounty Hunter";

    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterTwo() {
    characterKnockOut.classList.add("hatefultwo");
    characterName.innerHTML = "Hangman";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterThree() {
    characterKnockOut.classList.add("hatefulthree");
    characterName.innerHTML = "Prisoner";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterFour() {
    characterKnockOut.classList.add("hatefulfour");
    characterName.innerHTML = "Sheriff";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterFive() {
    characterKnockOut.classList.add("hatefulfive");
    characterName.innerHTML = "Mexican";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterSix() {
    characterKnockOut.classList.add("hatefulsix");
    characterName.innerHTML = "Cow Puncher";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulseven");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterSeven() {
    characterKnockOut.classList.add("hatefulseven");
    characterName.innerHTML = "Little Man";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefuleight");
}

function changeCharacterEight() {
    characterKnockOut.classList.add("hatefuleight");
    characterName.innerHTML = "Confederate";

    characterKnockOut.classList.remove("hatefulone");
    characterKnockOut.classList.remove("hatefultwo");
    characterKnockOut.classList.remove("hatefulthree");
    characterKnockOut.classList.remove("hatefulfour");
    characterKnockOut.classList.remove("hatefulfive");
    characterKnockOut.classList.remove("hatefulsix");
    characterKnockOut.classList.remove("hatefulseven")
}

characterChoice1.addEventListener("mouseover", changeCharacterOne);

characterChoice2.addEventListener("mouseover", changeCharacterTwo);

characterChoice3.addEventListener("mouseover", changeCharacterThree);

characterChoice4.addEventListener("mouseover", changeCharacterFour);

characterChoice5.addEventListener("mouseover", changeCharacterFive);

characterChoice6.addEventListener("mouseover", changeCharacterSix);

characterChoice7.addEventListener("mouseover", changeCharacterSeven);

characterChoice8.addEventListener("mouseover", changeCharacterEight);

// CHARACTER SELECT DETAIL

var characterChoice1Detail = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1)');
var characterChoice1Detail2 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(1)');
var characterChoice1Detail3 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > div:nth-of-type(1)');
var characterChoice1Detail4 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > img:nth-of-type(1)');
var characterChoice1Detail5 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > h3');
var characterChoice1Detail6 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > p');
var characterChoice1Detail7 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > div:nth-of-type(2)');
var characterChoice1Detail8 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(1) > article:nth-of-type(2) > img:nth-of-type(2)');

var characterChoice2Detail = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2)');
var characterChoice2Detail2 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(1)');
var characterChoice2Detail3 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > div:nth-of-type(1)');
var characterChoice2Detail4 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > img:nth-of-type(1)');
var characterChoice2Detail5 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > h3');
var characterChoice2Detail6 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > p');
var characterChoice2Detail7 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > div:nth-of-type(2)');
var characterChoice2Detail8 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(2) > article:nth-of-type(2) > img:nth-of-type(2)');

var characterChoice3Detail = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3)');
var characterChoice3Detail2 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(1)');
var characterChoice3Detail3 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > div:nth-of-type(1)');
var characterChoice3Detail4 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > img:nth-of-type(1)');
var characterChoice3Detail5 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > h3');
var characterChoice3Detail6 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > p');
var characterChoice3Detail7 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > div:nth-of-type(2)');
var characterChoice3Detail8 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(3) > article:nth-of-type(2) > img:nth-of-type(2)');

var characterChoice4Detail = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4)');
var characterChoice4Detail2 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(1)');
var characterChoice4Detail3 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > div:nth-of-type(1)');
var characterChoice4Detail4 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > img:nth-of-type(1)');
var characterChoice4Detail5 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > h3');
var characterChoice4Detail6 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > p');
var characterChoice4Detail7 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > div:nth-of-type(2)');
var characterChoice4Detail8 = document.querySelector('main section:nth-of-type(2) > section:nth-of-type(4) > article:nth-of-type(2) > img:nth-of-type(2)');

function changeCharacterOneDetail() {
    characterChoice1Detail.classList.add("opendetail");
    characterChoice1Detail2.classList.add("characterdetailintro1");
    characterChoice1Detail3.classList.add("characterdetailintro2");
    characterChoice1Detail4.classList.add("characterdetailintro2");
    characterChoice1Detail5.classList.add("characterdetailintro2");
    characterChoice1Detail6.classList.add("characterdetailintro2");
    characterChoice1Detail7.classList.add("characterdetailintro2");
    characterChoice1Detail8.classList.add("characterdetailintro3");
    
    body.classList.add("no-scroll");

    headerLogo.classList.add("changecolorlogo");
    headerTitle.classList.remove("changecolor1");
    gunBarrel.classList.remove("changecolorgun");
}

function changeCharacterTwoDetail() {
    characterChoice2Detail.classList.add("opendetail");
    characterChoice2Detail2.classList.add("characterdetailintro1");
    characterChoice2Detail3.classList.add("characterdetailintro2");
    characterChoice2Detail4.classList.add("characterdetailintro2");
    characterChoice2Detail5.classList.add("characterdetailintro2");
    characterChoice2Detail6.classList.add("characterdetailintro2");
    characterChoice2Detail7.classList.add("characterdetailintro2");
    characterChoice2Detail8.classList.add("characterdetailintro3");

    body.classList.add("no-scroll");

    headerLogo.classList.add("changecolorlogo");
    headerTitle.classList.remove("changecolor1");
    gunBarrel.classList.remove("changecolorgun");
}

function changeCharacterThreeDetail() {
    characterChoice3Detail.classList.add("opendetail");
    characterChoice3Detail2.classList.add("characterdetailintro1");
    characterChoice3Detail3.classList.add("characterdetailintro2");
    characterChoice3Detail4.classList.add("characterdetailintro2");
    characterChoice3Detail5.classList.add("characterdetailintro2");
    characterChoice3Detail6.classList.add("characterdetailintro2");
    characterChoice3Detail7.classList.add("characterdetailintro2");
    characterChoice3Detail8.classList.add("characterdetailintro3");
    body.classList.add("no-scroll");

    headerLogo.classList.add("changecolorlogo");
    headerTitle.classList.remove("changecolor1");
    gunBarrel.classList.remove("changecolorgun");
}

function changeCharacterFourDetail() {
    characterChoice4Detail.classList.add("opendetail");
    characterChoice4Detail2.classList.add("characterdetailintro1");
    characterChoice4Detail3.classList.add("characterdetailintro2");
    characterChoice4Detail4.classList.add("characterdetailintro2");
    characterChoice4Detail5.classList.add("characterdetailintro2");
    characterChoice4Detail6.classList.add("characterdetailintro2");
    characterChoice4Detail7.classList.add("characterdetailintro2");
    characterChoice4Detail8.classList.add("characterdetailintro3");
    body.classList.add("no-scroll");

    headerLogo.classList.add("changecolorlogo");
    headerTitle.classList.remove("changecolor1");
    gunBarrel.classList.remove("changecolorgun");
}

function changeCharacterDetailExit() {
    characterChoice4Detail.style.display = "none";
    body.classList.remove("no-scroll");

    headerLogo.classList.remove("changecolorlogo");
    headerTitle.classList.add("changecolor1");
    gunBarrel.classList.add("changecolorgun");
}

characterChoice1.addEventListener("click", changeCharacterOneDetail);

characterChoice2.addEventListener("click", changeCharacterTwoDetail);

characterChoice3.addEventListener("click", changeCharacterThreeDetail);

characterChoice4.addEventListener("click", changeCharacterFourDetail);

const characterChoiceExit = document.querySelectorAll("main section:nth-of-type(2) > section > article:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(2)");

for (let i = 0; i < characterChoiceExit.length; i++) {
    characterChoiceExit[i].addEventListener("click", function () {
//        characterChoice1Detail.style.display = "none";
//        characterChoice2Detail.style.display = "none";
//        characterChoice3Detail.style.display = "none";
//        characterChoice4Detail.style.display = "none";
        
        characterChoice1Detail.classList.add("exitdetail");
        characterChoice2Detail.classList.add("exitdetail");
        characterChoice3Detail.classList.add("exitdetail");
        characterChoice4Detail.classList.add("exitdetail");
        
        setTimeout(function () {
            characterChoice1Detail.classList.remove("opendetail");
            characterChoice1Detail.classList.remove("exitdetail");
            
            characterChoice2Detail.classList.remove("opendetail");
            characterChoice2Detail.classList.remove("exitdetail");
            
            characterChoice3Detail.classList.remove("opendetail");
            characterChoice3Detail.classList.remove("exitdetail");
            
            characterChoice4Detail.classList.remove("opendetail");
            characterChoice4Detail.classList.remove("exitdetail");
    }, 1500);

        
        body.classList.remove("no-scroll");

        headerLogo.classList.remove("changecolorlogo");
        headerTitle.classList.add("changecolor1");
        gunBarrel.classList.add("changecolorgun");
    });
}

// SETTINGS FUNCTION

var section = document.querySelector('.settingsection--sticky');
var sectionSetting1 = document.querySelector('.sticky article:nth-of-type(1)');
var sectionSetting2 = document.querySelector('.sticky article:nth-of-type(2)');
var img = document.querySelector('.sticky--figure > img');

window.addEventListener('scroll', function () {
    var top = section.getBoundingClientRect().top;
//    console.log(top);
    if (top <= 0) {
        img.style = 'transform: scale(' + ((top / 1000) + 2.5) + ');';
    } else {
        img.style = '';
    }

    if (top <= -950) {
        sectionSetting1.classList.add("hidesettingstitle");
    } else {
        sectionSetting1.classList.remove("hidesettingstitle");
    }

    if (top <= -1350) {
        sectionSetting2.classList.add("showsettinginfo");
    } else {
        sectionSetting2.classList.remove("showsettinginfo");
    }

    if (top <= -1370) {
        img.style = 'transform: scale(1.13)';
    }
});

var section2 = document.querySelector('.settingtwo');
var sectionSettingTwo1 = document.querySelector('.settingtwo-sticky article:nth-of-type(1)');
var sectionSettingTwo2 = document.querySelector('.settingtwo-sticky article:nth-of-type(2)');
var img2 = document.querySelector('.settingtwo-figure > img');

window.addEventListener('scroll', function () {
    var top2 = section2.getBoundingClientRect().top;
    //  console.log(top2);
    if (top2 <= 0) {
        img2.style = 'transform: scale(' + ((top2 / 1000) + 2.5) + ');';
    } else {
        img2.style = '';
    }

    if (top2 <= -950) {
        sectionSettingTwo1.classList.add("hidesettingstitle");
    } else {
        sectionSettingTwo1.classList.remove("hidesettingstitle");
    }

    if (top2 <= -1350) {
        sectionSettingTwo2.classList.add("showsettinginfo");
    } else {
        sectionSettingTwo2.classList.remove("showsettinginfo");
    }
    
    if (top2 <= -1370) {
        img2.style = 'transform: scale(1.13)';
    }
});

// FOOTER SCROLL

var footer = document.querySelector('footer');
var gunLeft = document.querySelector('footer > div img:nth-of-type(1)');
var gunRight = document.querySelector('footer > div img:nth-of-type(2)');
var footerText1 = document.querySelector('footer > div p:nth-of-type(1)');
var footerText2 = document.querySelector('footer > div p:nth-of-type(2)');

window.addEventListener('scroll', function () {
    var footerBottom = footer.getBoundingClientRect().bottom;
      console.log(footerBottom);
    if (footerBottom <= 689) {
        gunLeft.classList.add("gunlefttransition");
        gunRight.classList.add("gunrighttransition");
        
        setTimeout(function () {
             footerText1.classList.add("footeropacity");
        footerText2.classList.add("footeropacity");
    }, 1000);
        
    } else {
        gunLeft.classList.remove("gunlefttransition");
        gunRight.classList.remove("gunrighttransition");
        
        footerText1.classList.remove("footeropacity");
        footerText2.classList.remove("footeropacity");
    }
});

//SNOW FUNCION

var c = document.getElementById('canv'),
    $ = c.getContext("2d");
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight;

Snowy();

function Snowy() {
    var snow, arr = [];
    var num = 600,
        tsc = 1,
        sp = 1;
    var sc = 1.3,
        t = 0,
        mv = 20,
        min = 1;
    for (var i = 0; i < num; ++i) {
        snow = new Flake();
        snow.y = Math.random() * (h + 50);
        snow.x = Math.random() * w;
        snow.t = Math.random() * (Math.PI * 2);
        snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
        snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
        snow.sp = snow.sp < min ? min : snow.sp;
        arr.push(snow);
    }
    go();

    function go() {
        window.requestAnimationFrame(go);
        $.clearRect(0, 0, w, h);
        //      $.fillStyle = 'hsla(242, 95%, 3%, 1)';
        $.fillRect(0, 0, w, h);
        $.fill();
        for (var i = 0; i < arr.length; ++i) {
            f = arr[i];
            f.t += .05;
            f.t = f.t >= Math.PI * 2 ? 0 : f.t;
            f.y += f.sp;
            f.x += Math.sin(f.t * tsc) * (f.sz * .3);
            if (f.y > h + 50) f.y = -10 - Math.random() * mv;
            if (f.x > w + mv) f.x = -mv;
            if (f.x < -mv) f.x = w + mv;
            f.draw();
        }
    }

    function Flake() {
        this.draw = function () {
            this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
            this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
            this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
            $.moveTo(this.x, this.y);
            $.fillStyle = this.g;
            $.beginPath();
            $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
            $.fill();
        }
    }
}
/*________________________________________*/
window.addEventListener('resize', function () {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
}, false);
