<template>
    <header class="header">
        <nav>
            <div class="logo">
                <a href="/"><span>Un</span>followersTracker</a>
            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul class="menu">
                <li><a href="/results">Who doesn't follow me back on Instagram</a></li>
                <li><a href="/#how-works">How it works</a></li>
                <li><a href="/#steps">Video Tutorial</a></li>
                <li><a href="/#faqs">FAQ</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>

export default {

    name: 'myHeader',

}
</script>
  
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}

.header {
    /*position: sticky;*/
    top: 0;
    width: 100%;
    background-color: #F5F5F5;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;
}

.logo a {
    font-size: 20px;
    font-weight: bold;
    color: #424242;
    cursor: pointer;
}

.logo a span {
    color: #E91E63;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu a {
    display: block;
    padding: 7px 15px;
    font-size: 17px;
    font-weight: 500;
    transition: 0.2s all ease-in-out;
    color: #424242;
    cursor: pointer;
}

.menu a:hover {
    color: #E91E63;
    text-decoration: underline;
}

.menu-icon {
    display: none;
}

#menu-toggle {
    display: none;
}

#menu-toggle:checked~.menu {
    transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {

    .header {
        position: static;
    }

    .menu {
        flex-direction: column;
        background-color: #F5F5F5;
        align-items: start;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        z-index: 1;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.3s ease-in-out;
    }

    .menu a {
        margin-left: 12px;
    }

    .menu li {
        margin-bottom: 10px;
    }

    .menu-icon {
        display: block;
        color: #E91E63;
        font-size: 28px;
        cursor: pointer;
    }


}
</style>