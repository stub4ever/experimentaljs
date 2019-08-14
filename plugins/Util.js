/* 
Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

export default {
    /* 
    class manipulation functions
    */
    hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },
    
    addClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.add(classList[0]);
        else if (!this.hasClass(el, classList[0])) el.className += " " + classList[0];
        if (classList.length > 1) this.addClass(el, classList.slice(1).join(' '));
    },
    
    removeClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);
        else if (this.hasClass(el, classList[0])) {
            var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
        if (classList.length > 1) this.removeClass(el, classList.slice(1).join(' '));
    },
    
    toggleClass(el, className, bool) {
        if (bool) this.addClass(el, className);
        else this.removeClass(el, className);
    },
    
    setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    },
    
    addMultiListener(element, eventNames, listener) {
        var events = eventNames.split(' ');
        for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], listener, false);
        }
    },
    
    oneOf(value, validList) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    },
    
    /* 
    DOM manipulation
    */
    getChildrenByClassName(el, className) {
        var children = el.children,
        childrenByClass = [];
        for (var i = 0; i < el.children.length; i++) {
            if (this.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
        }
        return childrenByClass;
    },
    
    is(elem, selector) {
        if (selector.nodeType) {
            return elem === selector;
        }
        
        var qa = (typeof (selector) === 'string' ? document.querySelectorAll(selector) : selector),
        length = qa.length,
        returnArr = [];
        
        while (length--) {
            if (qa[length] === elem) {
                return true;
            }
        }
        
        return false;
    },
    
    /* 
    Animate height of an element
    */
    setHeight(start, to, element, duration, cb) {
        var change = to - start,
        currentTime = null;
        
        var animateHeight = function (timestamp) {
            if (!currentTime) currentTime = timestamp;
            var progress = timestamp - currentTime;
            var val = parseInt((progress / duration) * change + start);
            element.style.height = val + "px";
            if (progress < duration) {
                window.requestAnimationFrame(animateHeight);
            } else {
                cb();
            }
        };
        
        //set the height of the element before starting animation -> fix bug on Safari
        element.style.height = start + "px";
        window.requestAnimationFrame(animateHeight);
    },
    
    /* 
    Focus utility classes
    */
    
    //Move focus to an element
    moveFocus(element) {
        if (!element) element = document.getElementsByTagName("body")[0];
        element.focus();
        if (document.activeElement !== element) {
            element.setAttribute('tabindex', '-1');
            element.focus();
        }
    },
    
    /* 
    Misc
    */
    
    getIndexInArray(array, el) {
        return Array.prototype.indexOf.call(array, el);
    },
    
    cssSupports(property, value) {
        if ('CSS' in window) {
            return CSS.supports(property, value);
        } else {
            var jsProperty = property.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
            return jsProperty in document.body.style;
        }
    },
    
    // merge a set of user options into plugin defaults
    // https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
    extend() {
        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;
        
        // Check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }
        
        // Merge the object into the extended object
        var merge = function (obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        
        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }
        
        return extended;
    },
    
    /**   throttle a function.
    *     @param callback
    *     @param wait
    *     @param context
    *     @returns {Function}
    */
    throttle(callback, wait = 200, context = this) {
        let last;
        let deferTimer;
        
        return function () {
            let now = +new Date();
            let args = arguments;
            
            if (last && now < last + wait) {
                // preserve by debouncing the last call
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    callback.apply(context, args);
                }, wait);
            } else {
                last = now;
                callback.apply(context, args);
            }
        };
    },
    
    /**   throttle a function.
    *     @param callback
    *     @param wait
    *     @param context
    *     @returns {Function}
    */
    debounce(callback, wait = 200, context = this) {
        let timeout = null;
        let callbackArgs = null;
        
        const later = () => callback.apply(context, callbackArgs);
        
        return function () {
            callbackArgs = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}


// /* 
//   Polyfills
// */
// //Closest() method
// if (!Element.prototype.matches) {
//   Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
// }

// if (!Element.prototype.closest) {
//   Element.prototype.closest = function(s) {
//     var el = this;
//     if (!document.documentElement.contains(el)) return null;
//     do {
//       if (el.matches(s)) return el;
//       el = el.parentElement || el.parentNode;
//     } while (el !== null && el.nodeType === 1); 
//     return null;
//   };
// }

// //Custom Event() constructor
// if ( typeof window.CustomEvent !== "function" ) {

//   function CustomEvent ( event, params ) {
//     params = params || { bubbles: false, cancelable: false, detail: undefined };
//     var evt = document.createEvent( 'CustomEvent' );
//     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
//     return evt;
//   }

//   CustomEvent.prototype = window.Event.prototype;

//   window.CustomEvent = CustomEvent;
// }


// Util.lerp = function(a, b, n) {
//   return (1 - n) * a + n * b;
// }

// Util.map = function(value, in_min, in_max, out_min, out_max) {
//   return ( ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min );
// }