--- 
layout: essay
title : Are Esports Sports?
permalink: /are-esports-sports
hide: true
tags: []
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
    <br><br>
    Central to the naming of esports - and centered through orthographic conventions such as <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/e-sports-vs-esports'>E-Sports vs. Esports</a>">e-sports and eSports</a> - is an understanding of these practices as somehow related to what we might call “traditional” sports. Based on name alone, we might assume that this relationship takes one (or both) of the following forms:
    <br>
    <ul>
        <li><a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/electronic-versions-of-traditional-sports'>Electronic Versions of Traditional Sports</a>">Electronic versions of traditional sports</a></li>
        <li><a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/sports-which-happen-to-be-electronic'>Sports which Happen to be Electronic</a>">Sports which happen to be electronic in nature</a></li>
    </ul>
    Of course, these two possibilities oversimplify what is a complex and controversial question. The term “sports” itself is an umbrella category which encompasses a number of heterogeneous cultural practices; these practices are supported and sustained by a variety of technical, material, and financial instructures, some of which are shared closely with esports. Two of the most common ways in which “sports” are defined - physicality of play and fandoms - have complex interrelations with esports, which themselves are grounded in the physical actions of players and surrounded by deep ecosystems of fandom.
    <br><br>
    I do not offer an answer to the question of whether esports are sports. <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title="See, for example:" data-bs-content="<a target='_blank' href='https://doi.org/10.26503/dl.v2013i1.644'>Ferrari, Simon. 2013. “eSport and the Human Body: Foundations for a Popular Aesthetics.” In <i>Proceedings of DiGRA 2013: DeFragging Game Studies</i>.</a><br><br><a target='_blank' href='https://doi.org/10.1080/16138171.2018.1559019'>Thiel, Ansgar, and Jannika M. John. 2018. “Is eSport a ‘Real’ Sport? Reflections on the Spread of Virtual Competitions.” <i>European Journal for Sport and Society</i> 15(4):311–15.</a><br><br><a target='_blank' href='https://doi.org/10.1080/17511321.2018.1489419'>Parry, Jim. 2018. “E-Sports Are Not Sports.” <i>Sport, Ethics and Philosophy</i> 13(1):3-18.</a><br><br><a target='_blank' href='https://doi.org/10.18060/24812'>Naraine, Michael L. 2021. “Actually, Esports Is Sport: A Response to Parry’s (2019) Misguided View.” <i>Sports Innovation Journal</i> 2:33–44.</a>">Much ink has been spilled, often with significant vitriol, on both sides of the argument.</a> Understanding what is at stake when this question is asked, however, and how participants and commentators (and even <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://doi.org/10.1123/jege.2023-0018" target="_blank">courts<span class="popuptext">Fried, Gil. 2023. “Esports Minus Sport?” <i>Journal of Electronic Gaming and Esports</i> 1(1).</span></a>) have attempted to answer it, can help us better understand this complex, hazily-defined thing we call <em>esports</em>.


    <br><br><br>
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