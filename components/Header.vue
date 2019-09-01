<template>
<header class="main-header js-main-header">
    <div class="container max-width-lg">
        <div class="main-header__layout">
            <div class="main-header__logo">
                <router-link tag="a" to="/" exact>Toby Bui</router-link>
            </div>

            <button class="btn btn--subtle main-header__nav-trigger js-main-header__nav-trigger" aria-label="Toggle menu" aria-expanded="false" aria-controls="main-header-nav">
                <i class="main-header__nav-trigger-icon" aria-hidden="true"></i>
                <span>Menu</span>
            </button>

            <nav class="main-header__nav js-main-header__nav" id="main-header-nav" aria-labelledby="main-header-nav-label" role="navigation">
                <div id="main-header-nav-label" class="main-header__nav-label">Main menu</div>
                <ul class="main-header__nav-list">
                    <li class="main-header__nav-item"><a href="#0" class="main-header__nav-link">About</a></li>
                    <li class="main-header__nav-item"><a href="#0" class="main-header__nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>
