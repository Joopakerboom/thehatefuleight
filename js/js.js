// CURSOR
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
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
    console.log(bullets);
    
    if ( bullets === 1) {
        bullet1.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun1");
        gunShot.play();
        gunCock.play();
        headerBullet1.classList.add("usedbullet");
    }
    
    if ( bullets === 2) {
        bullet2.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun2");
        gunShot.play();
        gunCock.play();
        headerBullet2.classList.add("usedbullet");
    }
    
    if ( bullets === 3) {
        bullet3.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun3");
        gunShot.play();
        gunCock.play();
        headerBullet3.classList.add("usedbullet");
    }
    
    if ( bullets === 4) {
        bullet4.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun4");
        gunShot.play();
        gunCock.play();
        headerBullet4.classList.add("usedbullet");
    }
    
    if ( bullets === 5) {
        bullet5.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun5");
        gunShot.play();
        gunCock.play();
        headerBullet5.classList.add("usedbullet");
    }
    
    if ( bullets === 6) {
        bullet6.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun6");
        gunShot.play();
        gunCock.play();
        headerBullet6.classList.add("usedbullet");
    }
    
    if ( bullets === 7) {
        bullet7.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun7");
        gunShot.play();
        gunCock.play();
        headerBullet7.classList.add("usedbullet");
    }
    
    if ( bullets === 8) {
        bullet8.classList.add("usedbullet");
        gunBarrel.classList.add("usedbulletgun8");
        gunShot.play();
        gunCock.play();
        headerBullet8.classList.add("usedbullet");
        
        setTimeout(function () {
            outOfBullets.classList.add("outofbullets");
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
}

function hideNav() {
    headerNav.classList.remove("shownav");
    headerLogo.classList.remove("shownav");
}

headerTitle.addEventListener("mouseover", showNav);
headerNav.addEventListener("mouseout", hideNav);

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

var characterKnockOut = document.querySelector('main section:nth-of-type(2) h1');

var characterName = document.querySelector('main section:nth-of-type(2) div:nth-of-type(1) h2');

var characterChoice1 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(1)');
var characterChoice2 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(2)');
var characterChoice3 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(3)');
var characterChoice4 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(4)');
var characterChoice5 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(5)');
var characterChoice6 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(6)');
var characterChoice7 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(7)');
var characterChoice8 = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) > div h2:nth-of-type(8)');

function changeCharacterOne(){
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

function changeCharacterTwo(){
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

function changeCharacterThree(){
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

function changeCharacterFour(){
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

function changeCharacterFive(){
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

function changeCharacterSix(){
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

function changeCharacterSeven(){
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

function changeCharacterEight(){
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


// SETTINGS FUNCTION

var intro = document.querySelector('main section:nth-of-type(3)');
var docHeight = intro.offsetHeight;

var setting1 = document.querySelector('main section:nth-of-type(3) img');

window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        
//        var scrolled = window.scrollY / (docHeight - window.innerHeight) + 1;
//        var transformValue = 'translateX(-50%) scale(' + scrolled + ')';
//        
//               console.log(transformValue)
//        
//        setting1.style.transform = transformValue;
        
    }, false);

}, false);

//SNOW FUNCION

var c = document.getElementById('canv'), 
    $ = c.getContext("2d");
var w = c.width = window.innerWidth, 
    h = c.height = window.innerHeight;

Snowy();
function Snowy() {
  var snow, arr = [];
  var num = 600, tsc = 1, sp = 1;
  var sc = 1.3, t = 0, mv = 20, min = 1;
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
  function go(){
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
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      $.moveTo(this.x, this.y);
      $.fillStyle = this.g;
      $.beginPath();
      $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      $.fill();}
  }
}
/*________________________________________*/
window.addEventListener('resize', function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
