import Util from "../utils/Util";


/* HTML
<div class="carousel" data-target="carousel">
    <div class="carousel__wrapper" data-target="list-wrapper">
        <ul class="carousel__list" data-target="list">
            <li class="carousel__item" data-target="item">1</li>
            <li class="carousel__item" data-target="item">2</li>
            <li class="carousel__item" data-target="item">3</li>
            <li class="carousel__item" data-target="item">4</li>
            <li class="carousel__item" data-target="item">5</li>
            <li class="carousel__item" data-target="item">6</li>
            <li class="carousel__item" data-target="item">7</li>
            <li class="carousel__item" data-target="item">8</li>
            <li class="carousel__item" data-target="item">9</li>
        </ul>
    </div>
    <nav class="carousel__controls" data-target="controls">
        <ul>
            <li>
                <button class="reset carousel__control carousel__control--prev"  data-target="control-prev">
                <svg class="icon" viewBox="0 0 16 16"><title>Show previous items</title><g><polygon points="11,3 5,8 11,13 "></polygon></g></svg>
                </button>
            </li>

            <li>
                <button class="reset carousel__control carousel__control--next" data-target="control-next">
                <svg class="icon" viewBox="0 0 16 16"><title>Show next items</title><g><polygon points="5,13 11,8 5,3 "></polygon></g></svg>
                </button>
            </li>
        </ul>
    </nav>
</div>
*/


/*

	.carousel {
		height: 200px;
		width: 632px;
		position: relative;
		overflow: hidden;
		margin: 0 auto;
	}


	.carousel__wrapper {

	}

	.carousel__list {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		display: flex;
		position: absolute;
		left: 0;
		transition: all 1s ease;
	}

	.carousel__item {
		background: black;
		min-width: 200px;
		height: 200px;
		margin-right: 1rem;
		display: inline-block;
    }
    

    .carousel__controls {
        position: relative;
        margin: var(--space-xxs) 0;

        ul {
            display: flex;
            justify-content: flex-start;
        }

        li:first-child {
            display: inline-block; // flex fallback
            margin-right: 2px; // gap between controls
        }
    }
    
    .carousel__control {
        display: inline-block; // flex fallback
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background-color: var(--color-primary);
        z-index: 1;
        transition: transform .2s;
        cursor: pointer;

        &:active {
            transform: scale(.9);
        }

        &:hover {
            background-color: var(--color-contrast-high);
        }

        .icon {
            display: block;
            width: 16px;
            height: 16px;
            color: var(--color-bg);
        }
    }

*/

class SimpleCarousel {
    constructor(opts) {
        this.options = Util.extend(Carousel.defaults , opts);
        this.DOM = { 
            main: this.options.element, 
            listWrapper: this.options.element.querySelector('[data-target="list-wrapper"]'),
            list: this.options.element.querySelector('[data-target="list"]'),
            items: this.options.element.querySelectorAll('[data-target="item"]'),
            controls: this.options.element.querySelector('[data-target="controls"]'),
            controlNext: this.options.element.querySelector('[data-target="control-next"]'),
            controlPrev: this.options.element.querySelector('[data-target="control-prev"]'),
        };
            
        // Prepare to limit the direction in which the carousel can slide, 
        // and to control how much the carousel advances by each time.
        // In order to slide the carousel so that only three cards are perfectly visible each time,
        // you need to know the carousel width, and the margin placed on a given card in the carousel

        const carouselWidth = this.DOM.list.offsetWidth;
        const cardStyle = this.DOM.items[0].currentStyle || window.getComputedStyle(this.DOM.items[0])
        const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
        
        // Count the number of total cards you have
        const cardCount = this.DOM.items.length;
        
        // Define an offset property to dynamically update by clicking the button controls
        // as well as a maxX property so the carousel knows when to stop at the upper limit
        let offset = 0;
        const maxX = -((cardCount / 3) * carouselWidth + (cardMarginRight * (cardCount / 3)) - 
        carouselWidth - cardMarginRight);


        // Add the click events
        
        this.DOM.controlPrev.addEventListener('click', () => {
            if (offset !== 0) {
                offset += carouselWidth + cardMarginRight;
                this.DOM.list.style.transform = `translateX(${offset}px)`;
            }
        });

        this.DOM.controlNext.addEventListener('click', () => {
            if (offset !== maxX) {
                offset -= carouselWidth + cardMarginRight;
                this.DOM.list.style.transform = `translateX(${offset}px)`;
            } 
        });
    }     
}


export default SimpleCarousel;