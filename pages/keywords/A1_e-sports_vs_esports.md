--- 
layout: essay
title : E-Sports vs. Esports
permalink: /e-sports-vs-esports
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
    <iframe src="https://www.youtube.com/embed/pDg5T_AztDU?si=YhmX02fHRu2uoei_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="caption_div">
        <p class="caption">2024 YouTube video by Mastercard and G2 Esports advertising their “Gamer Academy.” The video opens with the spoken lines: “So, you wanna work in esports? Great! Step 1: Never spell it like that. [Gesturing to a screen displaying the word “e-sports” with a hyphen. The screen adjusts, now displaying “esports” without a hyphen.] Better!”</p>
    </div>
    <br>
    <p>The most commonly accepted spelling within the community today is <em>esports</em>. This is the spelling I will use in this project, though I will retain the original spelling used when quoting others.</p>
    <p>The hyphenated spelling <a class="popup" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Examples of "E-Sports"' data-bs-content="<em>Minnesota Star Tribune</em>, <a target='_blank' href='https://www.startribune.com/minnesota-companies-pull-back-e-sports-audience-revenue-video-games-vikings-call-duty-madden-xbox/600326322'>“Minnesota companies pull back on e-sports, which has an audience but little revenue”</a><br><br>T. L. Taylor, <a target='_blank' href='https://doi.org/10.7551/mitpress/8624.001.0001'><em>Raising the Stakes: E-Sports and the Professionalization of Computer Gaming<em></a>"><em>e-sports</em></a>, while not widely used within the community today, is still commonly found in news reports, academic scholarship, and other writing from outside the community. The hyphenated spelling used to be much more common than it is today and was used by fans and outside commentators alike. Today, however, fans encountering the hyphenated spelling are likely to roll their eyes and write its source off as an outsider; <em>e-sports</em> carries with it a connotation of “Wow, what a novelty! People getting paid to play video games!”, while <em>esports</em> communicates a deeper level of respect and familiarity.</p>
    <p><a class="popup" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Examples of "eSports"' data-bs-content="Ryan Dempsey, et al., <a target='_blank' href='https://www.harpercollins.com/products/optic-gaming-h3cz-nadeshot-scump-bigtymer-midnite-optic-j-fwiz'><em>OpTic Gaming: The Making of eSports Champions</em></a><br><br><em>Vice</em>, <a target='_blank' href='https://www.vice.com/en/article/ez7maa/steve-aoki-esports-investment'>“Steve Aoki’s Investing in an eSports Team”</a>"><em>eSports</em></a> - with no hyphen and a capital S - is another alternative that has almost entirely fallen out of use.</p>
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