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
    <p><a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/esports'>Esports</a>">Definitions of esports</a> almost always revolve around the concept of “video games.” What is meant by “video games,” however, and how this concept relates to esports, often remains unclear. Not all video games are esports, and not all esports are video games.</p>
    <p>At their most basic, esports are practices and communities of competitive video gaming - whether <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/(un)professional-esports'>(Un)Professional Esports</a>">amateur or professional</a>, in-person or virtual, <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/grassroots-esports'>Grassroots Esports</a>">hyper-local</a> or <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/esports-and-geopolitics'>Esports & Geopolitics</a>">globally distributed</a>. There is nothing that categorically separates “esports” from “video games”; more than a static object, the term “esports” describes a way of interfacing with video games.</p>
    <p>While most multiplayer video games include at least some component of PVP (player-versus-player) play, frameworks for competition which are shipped with a game itself are typically not considered to be esports. For example, <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'><i>League of Legends</i></a>"><i>League of Legends</i></a> is almost entirely a multiplayer PVP game - all play is competitive. Despite this, one is generally not considered to be engaging in esports just by booting up <i>League</i> and playing against others online. A core component of esports play is <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/(e)sports-infrastructures'>E(Sports) Infrastructures</a>">the infrastructure which supports it</a>, an infrastructure which is almost always external to the game itself.</p>
    <p>These infrastructures sometimes (particularly in the early days of organized esports) grow up organically around a game. There are many games which became esports at some point after launch, despite this not being originally intended by the developers (such as <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/fortnite'><i>Fortnite</i></a>"><i>Fortnite</i></a>). Other games are developed with the express intention of supporting esports play (such as <i>Supervive</i>, a game combining <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/apex-legends'><i>Apex Legends</i></a>">battle royale</a> and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'></i>League of Legends</i></a>">MOBA</a> mechanics). In these cases, esports is “baked in” to the design of the game itself.</p>
    <p>Recent developments in the esports scene have complicated the core assumption that all esports are video games, however. Chess, for example, is rapidly becoming a popular global esport and enjoys <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/attending-a-lan'>Attending a LAN</a>">considerable popularity among esports fan communities</a> - superstars like Magnus Carlson and Hikaru Nakamura are signed to esports organizations and play in competitions like the <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/esports-and-geopolitics'>Esports & Geopolitics</a>">Esports World Cup</a> for a prize pool of <a href="https://www.esportsworldcup.com/en/competitions/2026/chess" target="_blank">$1.5 million</a>. Somewhat like esports like <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/electronic-versions-of-traditional-sports'>Electronic Versions of Traditional Sports</a>">esports such as <i>FC</i> and <i>F1</i></a>, we can view the incorporate of chess into the world of esports as its bifurcation into analog and digital forms; in this instance, what makes chess an esport is not some ontologically fundamental property of the game itself but rather its occasional mediation through a computer.</p>
    <p>Similarly, sometimes it is esports play itself that turns something into a video game. Fringe esports such as Microsoft Excel esports and Wikipedia Esports take digital tools meant for private, non-performative use and adapt them to public competition. While such esports are, at their core, somewhat ironic, they attract broad viewerships and inspire intense training by their players - and, it should be noted, <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/the-affect-of-esports'>The Affect of Esports</a>">a layer of irony is present in all esports</a>. Excel and Wikipedia are not intrinsically video games, but rather become something resembling them when <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/(e)sports-infrastructures'>(E)Sports Infrastructures</a>">the organizational and metagaming infrastructures of esports</a> are layered on top of them.</p>
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