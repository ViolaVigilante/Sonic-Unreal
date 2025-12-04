--- 
layout: essay
title : Esports and/as Video Games
permalink: /esports-and-as-video-games
hide: true
tags: [Esports]
---

<style>

    iframe {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 28.125vw;
    }

    .caption_div {
        display: flex;
        margin: auto;
        width: 40vw;
    }

    .caption {
        font-style: italic;
        text-align: center;
        font-size: 0.85rem;
    }

    .button_container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* From Uiverse.io by Li-Deheng */ 
    .esports_return_to_hub {
        --main-size: 1.5em;
        --color-text: #ffffff;
        --color-background: #da39ab;
        --color-background-hover: #c4339a;
        --color-outline: #ff145a40;
        --color-shadow: #00000040;
        cursor: pointer;
        text-decoration: none;
        border: none;
        /* border-radius is what sets the shape of the button */
        border-radius: calc(var(--main-size) * 100);
        padding: 0.33em 0.66em 0.33em 0;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: var(--main-size);
        color: var(--color-text);
        background: var(--color-background);
        box-shadow: 0 0 0.2em 0 var(--color-background);
        transition: 1s;
        width: fit-content;
    }

    .esports_return_to_hub:active {
        transform: scale(0.95);
    }

    .esports_return_to_hub:hover {
        outline: 0.1em solid transparent;
        outline-offset: 0.2em;
        box-shadow: 0 0 1em 0 var(--color-background);
        animation:
            ripple 1s linear infinite,
            colorize 1s infinite;
        transition: 0.5s;
    }

    .esports_return_to_hub span {
        margin-left: 0.3em;
        transition: 0.5s;
    }

    .esports_return_to_hub:hover span {
        text-shadow: 5px 5px 5px var(--color-shadow);
    }

    .esports_return_to_hub:active span {
        text-shadow: none;
    }

    .esports_return_to_hub svg {
        height: 0.8em;
        fill: var(--color-text);
        margin-left: -0.16em;
        position: relative;
        transition: 0.5s;
    }

    .esports_return_to_hub:hover svg {
        margin-left: 0.66em;
        transition: 0.5s;
        filter: drop-shadow(5px 5px 2.5px var(--color-shadow));
    }

    .esports_return_to_hub:active svg {
        filter: none;
    }

    .esports_return_to_hub svg polygon:nth-child(1) {
        transition: 0.4s;
        transform: translateX(60%);
    }

    .esports_return_to_hub svg polygon:nth-child(2) {
        transition: 0.5s;
        transform: translateX(30%);
    }

    .esports_return_to_hub:hover svg polygon:nth-child(1) {
        transform: translateX(0%);
        animation: opacity 1s infinite 0.6s;
    }

    .esports_return_to_hub:hover svg polygon:nth-child(2) {
        transform: translateX(0%);
        animation: opacity 1s infinite 0.4s;
    }

    .esports_return_to_hub:hover svg polygon:nth-child(3) {
        animation: opacity 1s infinite 0.2s;
    }

    @keyframes opacity {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes colorize {
        0% {
            background: var(--color-background);
        }
        50% {
            background: var(--color-background-hover);
        }
        100% {
            background: var(--color-background);
        }
    }

    @keyframes ripple {
        0% {
            outline: 0em solid transparent;
            outline-offset: -0.1em;
        }
        50% {
            outline: 0.2em solid var(--color-outline);
            outline-offset: 0.2em;
        }
        100% {
            outline: 0.4em solid transparent;
            outline-offset: 0.4em;
        }
    }

</style>

<body>

    <br>
    <div class="button_container">
        <button class="esports_return_to_hub" onclick="location.href='/Sonic-Unreal/esports'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
                <polygon 
                points="26.42,4.46 21.89,0 0,21.5 21.89,43 26.42,38.54 9.06,21.5"
                ></polygon>
                <polygon
                points="46.21,4.46 41.68,0 19.79,21.5 41.68,43 46.21,38.54 28.85,21.5"
                ></polygon>
                <polygon
                points="66,4.46 61.47,0 39.58,21.5 61.47,43 66,38.54 48.64,21.5"
                ></polygon>
            </svg>
            <span>Return to Esports Hub</span>
        </button> 
    </div>
</body>