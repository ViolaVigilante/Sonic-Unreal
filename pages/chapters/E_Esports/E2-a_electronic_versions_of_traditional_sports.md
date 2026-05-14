--- 
layout: essay
title : Electronic Versions of Traditional Sports
permalink: /electronic-versions-of-traditional-sports
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
        <p>Some of the most popular esports are best described as video game translations of extant traditional sports, with some closely paralleling their <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/irl-or-afk'>IRL or AFK?</a>">IRL</a> counterparts not only in content but also in <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/esports-infrastructures'>(E)Sports Infrastructures</a>">funding sources and organizing bodies</a>. For example, <em>FC</em> (an esports version of soccer) and <em>F1</em> (an esports version of Formula 1 racing), both developed by Electronic Arts, both closely parallel their IRL counterparts - and both include overlaps with IRL sporting organizations, such as <a href="https://www.ferrari.com/en-EN/esports" target="_blank">a Ferrari-sponsored F1 team</a> and <a href="https://www.mancity.com/esports" target="_blank">a Manchester City FC esports team</a>.</p>
        <p>Other esports build from the foundations of traditional sports while <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/virtual-concerts-virtual-sports'>Virtual Concerts <—> Virtual Sports</a>">altering them in fundamental ways that would not be possible IRL</a>. One of the most popular esports today, <em>Rocket League</em>, is in many ways simply a recreation of traditional soccer: players compete on teams of three, on a field closely resembling a traditional soccer field, to propel a ball into their opponents’ goal while protecting their own. The key difference, however, is that the players are driving virtual cars rather than controlling virtual human bodies. They can boost, jump, drive up walls, and even detonate each others’ cars in an attempt to control the playing field.</p>
        <p>Most esports, however - including the vast majority of the most popular esports - are not in any concrete way based on traditional sports (at least in terms of their gameplay). The most common categories of esports stem much more directly from video games than from sports, from multiplayer online battle arenas (MOBAs, such as <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'><em>League of Legends</em></a>"><em>League of Legends</em></a>, <em>Dota 2</em>, and <em>Honor of Kings</em>) to battle royales (such as <em>Fortnite</em>, <em>Call of Duty Warzone</em>, and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/apex-legends'><em>Apex Legends</em></a>"><em>Apex Legends</em></a>) to hero shooters (such as <em>Overwatch</em>, <em>Marvel Rivals</em>, and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/valorant'><em>Valorant</em></a>"><em>Valorant</em></a>).</p>
        <p>So: while some esports might be classified as “electronic versions of traditional sports,” this descriptor does not apply to most esports in any concrete way.</p>
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