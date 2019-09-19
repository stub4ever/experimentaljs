<template>
<!-- Add ref to our modal -->
<div ref="modal" class="modal  js-modal" id="modal1" data-animation="on">
    <div class="modal__content max-width-xs" role="alertdialog" tabindex="-1" aria-labelledby="modalTitle1" aria-describedby="modalDescription1">
        <header class="modal__header">
            <h4 class="text-truncate" id="modalTitle1">Modal title</h4>
        </header>

        <div class="modal__body">
            <div class="text-component">
                <p id="modalDescription1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa, inventore alias ab atque similique quod ea reprehenderit.</p>
            </div>
        </div>

        <footer class="modal__footer">
            <div class="flex justify-end flex-gap-xs">
                <button class="btn btn--subtle js-modal__close">Cancel</button>
                <button class="btn btn--primary">Install</button>
            </div>
        </footer>
    </div>

    <button class="reset modal__close-btn js-modal__close">
        <svg class="icon" viewBox="0 0 16 16">
            <title>Close modal window</title>
            <g stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
            </g>
        </svg>
    </button>
</div>
</template>

<script>
export default {
    props: ['show'],
    
    watch: {
        // watcher for show if value is true displayed modal
        show(value) {
        // let el = $(this.$refs.modal);
            console.log(value)
            if (value) {
                // show
                // el.modal(options);
            }
            else {
                // el.modal('hide');
            }
        }
    },
    mounted() {
        // $(this.$refs.modal).on('hide.bs.modal', () => {
        //     this.$emit('hide');
        // });
    }
}
</script>

<style lang="scss" scoped>

:root {
    // close button
    --modal-close-btn-size: 1.25em;
    --modal-close-btn-padding: var(--space-sm);
}

.modal {
    position: fixed;
    z-index: var(--zindex-overlay);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    // hide element
    opacity: 0;
    visibility: hidden;
}

.modal--is-visible {
    opacity: 1;
    visibility: visible;
}

.modal__content {
    border-radius: var(--radius-md);
    overflow: auto;
    // width: calc(100% - 2*var(--component-padding));
    max-height: 100vh;
    background-color: var(--color-bg);
}

.modal__header {
    padding: var(--space-sm) var(--component-padding);
    background-color: var(--color-contrast-lower);
    // align title and icon (if icon is placed inside header)
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal__body {
    height: 100%;
    padding: var(--space-sm) var(--component-padding);
}

.modal__footer {
    padding: var(--component-padding);
}

.modal__close-btn {
    position: fixed;
    top: var(--space-sm);
    right: var(--space-sm);
    z-index: var(--zindex-fixed-element);
    padding: var(--modal-close-btn-padding);
    border-radius: 50%;
    background-color: rgba(0,0,0,.7);

    &:hover {
        background-color: var(--color-contrast-higher);
    }

    .icon {
        display: block;
        color: var(--color-bg);
        width: var(--modal-close-btn-size);
        height: var(--modal-close-btn-size);
    }
}

// if close btn is inside content (e.g, inside header)
.modal__content {
    .modal__close-btn {
        // alt close btn style (if inside modal content)
        --modal-close-btn-size: 1em;
        --modal-close-btn-padding: 0.5em;
        position: static;
        flex-shrink: 0;
        background-color: var(--color-bg);
        box-shadow: var(--shadow-sm);
        transition: .2s;

        .icon {
            color: inherit;
        }

        &:hover {
            box-shadow: var(--shadow-md);

            .icon {
                color: var(--color-contrast-higher);
            }
        }
    }
}

// close btn sticky within content
.modal__content {
    .modal__close-btn--sticky {
        position: sticky;
        float: right;
        top: 0;
        right: 0;
    }
}

// --header-is-fixed
.modal--header-is-fixed {
    .modal__header {
        position: sticky;
        top: 0;
    }
}

// --footer-is-fixed
.modal--footer-is-fixed {
    .modal__footer {
        position: sticky;
        bottom: 0;
        background: var(--color-bg);
        box-shadow: var(--shadow-sm);
    }
}

// if animation = enabled
.modal[data-animation="on"] {
    transition: opacity .3s, visibility .3s;

    .modal__content {
        will-change: transform;
        transition: transform .3s var(--ease-out);
        transform: translateY(10%);
    }

    &.modal--is-visible .modal__content {
        transform: translateY(0);
    }
}
</style>
