<template>
    <main class="page load-intro">
        <!-- https://www.giacomomottin.com/ -->
        
        <!-- <div class="loader-intro__wrapper" data-load-target="intro">
            <div data-load-scene="1">
                <h2 class="text-lg">I am Toby Bui</h2>
            </div>
            <div data-load-scene="2">
                <h2 class="text-lg">Creative Developer</h2>
            </div>
        </div> -->
        
        <div data-slider-target="slider" class="slider">   
            <div data-slider-wrapper class="slider__wrapper">
                <ol data-slider-list class="slider__list">

                    <li data-slider-item class="slider__item">
                        <div data-slider-bgimg class="slider__bgImage" :style="{ backgroundImage: 'url(' + sliderImg + ')' }" data-slider-bgimage></div>
                        
                        <div class="slider__contentImage">
                            <a class="slider__linkImages" href="" data-slider-preview>
                                <div data-slider-imgwrap class="slider__placeholderImage">
                                    <div data-slider-img class="slider__image" :style="{ backgroundImage: 'url(' + sliderImg + ')' }"></div>
                                </div>
                                <div data-slider-imgwrap class="slider__placeholderImage">
                                    <div data-slider-img class="slider__image" :style="{ backgroundImage: 'url(' + sliderImg + ')' }"></div>
                                </div>
                            </a>
                        </div>
                        <div class="slider__contentText padding-bottom-xl">
                            <h1 data-slider-title class="text-xxxl font-weight-bold text-tight-2 color-white">Toby Bui</h1>
                            <h3 data-slider-description class="text-xl text-tight-2 color-white">Website design and development</h3>
                            <p data-slider-date class="text-sm font-weight-light text-tight-2 color-white">Aug 2019</p>
                        </div>
                    </li>

                    <li data-slider-item class="slider__item">
                        <div data-slider-bgimg class="slider__bgImage" :style="{ backgroundImage: 'url(' + sliderImg + ')' }" data-slider-bgimage></div>
                        
                        <div class="slider__contentImage">
                            <a class="slider__linkImages" href="" data-slider-preview>
                                <div data-slider-imgwrap class="slider__placeholderImage">
                                    <div data-slider-img class="slider__image" :style="{ backgroundImage: 'url(' + sliderImg + ')' }"></div>
                                </div>
                                <div data-slider-imgwrap class="slider__placeholderImage">
                                    <div data-slider-img class="slider__image" :style="{ backgroundImage: 'url(' + sliderImg + ')' }"></div>
                                </div>
                            </a>
                        </div>
                        <div class="slider__contentText padding-bottom-xl">
                            <h1 data-slider-title class="text-xxxl font-weight-bold text-tight-2 color-white">Toby Bui</h1>
                            <h3 data-slider-description class="text-xl text-tight-2 color-white">Website design and development</h3>
                            <p data-slider-date class="text-sm font-weight-light text-tight-2 color-white">Aug 2019</p>
                        </div>
                    </li>
                </ol>
            </div>   
            <nav class="slider__controls" >   
                <ol>
                    <li data-slider-bullet class="slider__bullet">
                        <button class="reset color-white">
                            01
                        </button>
                    </li> 
                    <li data-slider-bullet class="slider__bullet">
                        <button class="reset color-white">
                            02
                        </button>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="cursor" data-cursor-target="cursor">
			<div class="cursor__inner cursor__inner--circle"></div>
		</div>
    </main>
</template>

<!-- Check structure -->
<!-- Motion Reveal -->
<!-- https://tympanus.net/codrops/2018/07/26/motion-reveal-slideshow/ -->


<!-- WEEK 1 -->
<!-- Background change when Slide -->
<!-- https://tympanus.net/Development/DistortionHoverEffect/ -->
<!-- https://github.com/robin-dela/hover-effect -->


<!-- Custom Cursor -->
<!-- https://creativesfeed.com/custom-cursor-styling/ -->
<!-- https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/ -->


<!-- WEEk 2 -->
<!-- For detail page add Smoothscroll -->
<!-- https://github.com/idiotWu/smooth-scrollbar -->



<!-- 
    TODO: 
    [] Animate timeline splitterLetter with charming ==> look at this example
    https://github.com/codrops/AnimatedImageColumns/blob/master/js/demo.js 

--> 

<script>
    // Plugins
    import Util from '~/plugins/Util.js'
    import { TimelineMax } from 'gsap';
    import charming from 'charming';


    // Assets 
    import sliderImg from '~/assets/img/image1-2x.jpg'
    import sliderImg2 from '~/assets/img/image2-2x.jpg'
    
    export default {
        components: {
            
        },
        mounted() {
            // Init object slider
            const slideshow = document.querySelectorAll('[data-slider-target="slider"]');
            if( slideshow.length > 0) {
                for( var i = 0; i < slideshow.length; i++) {
                    this.initSlider(slideshow[i]); 
                }
            }

            const cursor = document.querySelector('[data-cursor-target="cursor"]');
            this.initCursor(cursor);             
            
        },
        data() {
            return {
                sliderImg,
                sliderImg2
            }
        },
        methods: {

            //  INIT SLIDER
            initSlider(element) {
                class Slider {
                    constructor(opts) {
                        this.DOM = {
                            target: opts.target, 
                            wrapper: opts.target.querySelector('[data-slider-wrapper]'),
                            list: opts.target.querySelector('[data-slider-list]'),
                            items: opts.target.querySelectorAll('[data-slider-item]'),
                            bullets: opts.target.querySelectorAll('[data-slider-bullet]'),
                            previewCtrl: opts.target.querySelector('[data-slider-preview]'),
                        };
                        // Create an new class for each slider item push this inside an array
                        this.items = [];
                        this.bullets = [];
                        // this.DOM.items is a NodeLists, are language is to access DOM elements (browse API), its for manipulation with javascript it can be updated from the DOM
                        // We have to store this into Array instance a javascript object to use contain collection of stuff, so that lists wont change when DOM change
                        Array.from(this.DOM.items).forEach(item => this.items.push(new Item({el: item})));
                        Array.from(this.DOM.bullets).forEach(bullet => this.bullets.push(new Bullet({el: bullet })));

                        // The total number of items
                        this.itemsTotal = this.items.length
                        // Current item position
                        this.selected = 0;
                        // Slide direction
                        this.direction = 'bottom'; // By default first slide starts from bottom
                        // Initialize the class
                        this.init();
                    }

		            // init: set the current slide, bullet and initialize some events
                    init(){
                        this.items[this.selected ].setCurrent();
                        this.bullets[this.selected ].setCurrent();
                        this.initEvents();
                    }

                    initEvents() {
                        // Navigate to the item
                        this.DOM.bullets.forEach((bullet, index) => {
                            bullet.addEventListener('click',(event) => this.navigate(event,index, true, 'bulletEvent')); 
                            bullet.addEventListener('keyup',(event) => this.navigate(event,index, (event.key.toLowerCase() == 'enter'), 'bulletEvent'));
                        });
                    }

                    navigate(event, index, keyNav, bool) {
                        // user has interacted with the bullet -> update visible slide
                     	if(index < 0) index = this.itemsTotal - 1;
                        else if(index >= this.itemsTotal) index = 0;
                    
                        // Set direction
                        // if(bool === 'bulletEvent') this.direction = ( this.selected > index  ) ? 'top' : 'bottom';
                        
                        // if bullet is already selected don't update slide
                	    var target = ( Util.hasClass(event.target, 'slider__bullet') ) ? event.target : event.target.closest('.slider__bullet');
                        if(keyNav && target && !Util.hasClass(target, 'is--selected')) {
                            this.updateSlide(index, this.selected)
    		                this.selected = index; // after slide is updated update the prev index to current
                        }
                    }

                    updateSlide(newIndex, oldIndex) {
                        // if(prevSlideIndex === this.current) return // if prevIndex not allow to be equal with the current

                        Promise.all([this.items[oldIndex].hide(this.direction), this.items[newIndex].show(this.direction)])
                            .then(() => {
                                // Update current.
                                this.items[oldIndex].setCurrent(false);
                                this.bullets[oldIndex].setCurrent(false);
                                
                                // this.isAnimating = false;
                                this.items[newIndex].setCurrent();
                                this.bullets[newIndex].setCurrent();
                            });
                    }                    
                }

                // Item Class
                class Item {
                    constructor(opts) {
                        this.DOM = {
                            element: opts.el,
                            // Background image opt
                            bgImg: opts.el.querySelector('[data-slider-bgimg]'),
                            // Image opts
                            imgWraps: opts.el.querySelectorAll('[data-slider-imgwrap]'),
                            images: opts.el.querySelectorAll('[data-slider-img]'),
                            // Content opts
                            title: opts.el.querySelector('[data-slider-title]'),
                            description: opts.el.querySelector('[data-slider-description]'),
                            date: opts.el.querySelector('[data-slider-date]'),
                        }                    

                        // Some config values.
                        this.config = {
                            animation: {
                                duration: 0.6,
                                ease: Expo.easeOut
                            }
                        };

                        this.init();
                    }

                    init(){
                        splitLetters(this.DOM.title)
                    }

                    // Sets the current class on 'this element' by default is true
                    setCurrent(isCurrent = true) {
                        Util[isCurrent ? 'addClass' : 'removeClass'](this.DOM.element, 'is--selected')
                    }

                    // Show the slide.
                    show(direction) {
                        return this.toggle('show', direction);
                    }
                    
                    // Hide the slide.
                    hide(direction) {
                        return this.toggle('hide', direction);
                    }

                    toggle(action, direction) {
                        console.log(this.DOM.element, action, direction)
                        this.showTitle(action, direction)
                    }

                    showTitle(action, direction) {
                        new TimelineMax()
                        // Set start timeline
                        .set(this.DOM.title, { scale: 0, x:'100px' })
                        // animate position
                        .to(this.DOM.title, 0.9, { ease: Expo.easeOut, scale:1, x:'0' }, 0)

                        // https://github.com/codrops/MotionRevealSlideshow/blob/master/js/demo.js
                        // https://github.com/codrops/ImageTrailEffects/blob/master/js/demo.js
                    }
                }
                
                // Bullet Class
                class Bullet {
                    constructor(opts) {
                        this.DOM = {element: opts.el}
                    }

                    // Sets the current class on 'this element' by default is true
                    setCurrent(isCurrent = true) {
                        Util[isCurrent ? 'addClass' : 'removeClass'](this.DOM.element, 'is--selected')
                    }
                }


                function splitLetters(element) {
                    return charming(element, {
                        setClassName: function (index, letter) {
                            return `index-${index} letter-${letter}`
                        }
                    })
                }

                new Slider({target: element });
            },

            //  INIT CURSOR 
            initCursor(element) {
                let winsize;
                const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
                calcWinsize();
                window.addEventListener('resize', calcWinsize);

                // Gets the mouse position. From http://www.quirksmode.org/js/events_properties.html#position
                const getMousePos = (ev) => {
                    let posx = 0;
                    let posy = 0;
                    if (!ev) e = window.event;
                    if (ev.pageX || ev.pageY)   {
                        posx = ev.pageX;
                        posy = ev.pageY;
                    }
                    else if (ev.clientX || ev.clientY)  {
                        posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
                        posy = ev.clientY + body.scrollTop + docEl.scrollTop;
                    }
                    return { x : posx, y : posy }
                };
                let mousepos = {x: winsize.width/2, y: winsize.height/2};
                window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

                class Cursor {
                    constructor(opts) {
                        this.DOM = {target: opts.target};
                        this.DOM.circle = this.DOM.target.querySelector('.cursor__inner--circle');
                        this.bounds = this.DOM.circle.getBoundingClientRect();
                        this.lastMousePos = {x:0, y:0};
                        this.scale = 1;
                        this.lastScale = 1;
                        this.lastY = 0;
                        requestAnimationFrame(() => this.render());
                    }
                    render() {
                        this.lastMousePos.x = Util.lerp(this.lastMousePos.x, mousepos.x - this.bounds.width/2, 0.15);
                        this.lastMousePos.y = Util.lerp(this.lastMousePos.y, mousepos.y - this.bounds.height/2, 0.15);
                        this.direction = this.lastY - mousepos.y > 0 ? 'up' : 'down';
                        this.lastScale = Util.lerp(this.lastScale, this.scale, 0.15);
                        this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.x)}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
                        this.lastY = mousepos.y;
                        requestAnimationFrame(() => this.render());
                    }
                    enter() {
                        this.scale = 1.5;
                    }
                    leave() {
                        this.scale = 1;
                    }
                    click() {
                        this.lastScale = .4;
                    }
                }

                const cursor = new Cursor({target: element });

                [...document.querySelectorAll('a')].forEach((link) => {
                    link.addEventListener('mouseenter', () => cursor.enter());
                    link.addEventListener('mouseleave', () => cursor.leave());
                });
                document.addEventListener('click', () => cursor.click());
            }
        }
    }
</script>

<style lang="scss">
    .slider {
        position: relative;
    }
    .slider__wrapper {
        padding: var(--space-md);
        overflow: hidden;
        background-color: var(--color-black);
    }
    
    .slider__list {
        position: relative;
        height: calc(100vh - (var(--space-md)*2)); /* Minus the padding of wrapper */
        width: 100%;
    }
    
    .slider__item,
    .slider__bgImage {
        position: absolute;
    }
    
    .slider__bgImage {
        top: var(--n-space-md); /* Minus the padding of wrapper */
        left: var(--n-space-md); /* Minus the padding of wrapper */
        right: var(--n-space-md); /* Minus the padding of wrapper */
        bottom: var(--n-space-md); /* Minus the padding of wrapper */
    }

    .slider__bgImage::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
    }
    
    .slider__item {
        width: 100%; 
        height: 100%;
        top: 0;
        left:0;
    }
    
    .slider__contentImage {
        width: 75%;
        max-width: 700px;
        margin: 0 auto;
        position: relative;
        height: 100%;
    }
    
    .slider__placeholderImage {
        will-change: transform;
        height: 70%;
        width: 50%;
        overflow: hidden;
        min-height: 500px;
    }
    
    
    .slider__placeholderImage,
    .slider__image {
        position: absolute;; 
        top: 5%;
        left: 0;
    }
    
    .slider__placeholderImage:last-of-type,
    .slider__placeholderImage:last-of-type .slider__image  {
        left: auto;
        right:0;
        
    }
    
    .slider__image,
    .slider__bgImage {
        background-position: center center;
        background-size: cover;
        transition: transform .4s;
    }
    
    .slider__image {
        width: 200%;  /* change the size of image must out the grid */
        height: 100%;
    }
    
    .slider__contentText {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    
    .slider__controls {
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: 5;
    }

    .slider__controls ol {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: auto;
        justify-content: center;
    }

    @include breakpoint(md) {
        /* Set top position */
        .slider__placeholderImage,
        .slider__image {
            top: 10%;
        }
        
        .slider__image {
            height: 75vh;
            min-height: 600px;
        }
        
        /* Set hoverstate */
        .slider__placeholderImage { transform: translateY(var(--n-space-sm)); }
        .slider__placeholderImage .slider__image { transform: translateY(-140px); }
        
        .slider__placeholderImage:last-of-type { transform: translateY(var(--space-sm)); }
        .slider__placeholderImage:last-of-type .slider__image { transform: translateY(-60px); }

        .slider__linkImages:hover .slider__placeholderImage:first-of-type  .slider__image {
            transform: translateY(-80px) !important;
        }
        
        .slider__linkImages:hover .slider__placeholderImage:last-of-type  .slider__image {
            transform: translateY(-118px) !important;
        }
    }


    // CURSOR
    .cursor {
        display: none;
    }

    @media (any-pointer: fine) {
        .cursor {
            display: block;
        }
        .cursor__inner {
            z-index: 9999;
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            mix-blend-mode: difference;
            border-radius: 50%;
        }
        .cursor__inner--circle {
            width: 25px;
            height: 25px;
            border: 1px solid #fff;
        }
    }


    // TEST

    .slider__item.is--selected  {
        z-index: 1;

        &:first-child {

            h1 { 
                color: red!important;
            }
        }

        &:nth-child(2) {

            h1 { 
                color: black!important;
            }
        }
    }

    .slider__bullet.is--selected button {
        color: red!important; 
    }
</style>
