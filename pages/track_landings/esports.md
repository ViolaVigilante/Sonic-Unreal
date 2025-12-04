--- 
layout: track_landing
title : Esports
permalink: /esports
esports-track: true
next-esports-page: true
next-esports-page-title: History & Landscape of Esports
next-esports-page-destination: history_landscape_esports
tags: [Esports, Keywords]
---

<head>
    <style>
        .popup {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background: beige;
            color: black;
        }
        /* The actual popup (appears on top) */
        .popup .popuptext {
            visibility: hidden;
            width: 400px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 8px 0;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translate(-50%)
        }
        /* Popup arrow */
        .popup .popuptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #555 transparent transparent transparent;
        }
        /* Toggle this class when clicking on the popup container (hide and show the popup) */
        .popup .show {
            visibility: visible;
            -webkit-animation: fadeIn 1s;
            animation: fadeIn 1s
        }
        /* Add animation (fade in the popup) */
        @-webkit-keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }
        @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity:1 ;}
        }
        iframe {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50vw;
            height: 28.125vw;
        }
        .button_container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* From Uiverse.io by Li-Deheng */ 
        .esports_button {
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
            padding: 0.33em 0.66em 0.33em 0.66em;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: var(--main-size);
            color: var(--color-text);
            background: var(--color-background);
            box-shadow: 0 0 0.2em 0 var(--color-background);
            transition: 1s;
            width: fit-content;
        }
        .esports_button:active {
            transform: scale(0.95);
        }
        .esports_button:hover {
            outline: 0.1em solid transparent;
            outline-offset: 0.2em;
            box-shadow: 0 0 1em 0 var(--color-background);
            animation:
                ripple 1s linear infinite,
                colorize 1s infinite;
            transition: 0.5s;
        }
        .esports_button span {
            margin-left: 0.3em;
            transition: 0.5s;
        }
        .esports_button:hover span {
            text-shadow: 5px 5px 5px var(--color-shadow);
        }
        .esports_button:active span {
            text-shadow: none;
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
    <script>
        // JS for standard popups
        function myFunction(event) {
            event.target.children[0].classList.toggle("show");
        }
    </script>
</head>

<body>
    <p><b>Esports are...</b></p>
    <ul>
        <li><a class="popup" onclick="myFunction(event)">"an abbreviation of 'electronic sports'"<span class="popuptext">Rea, S. C. 2016. “Crafting Stars: South Korean E-Sports and the Emergence of a Digital Gaming Culture.” <em>Education About Asia: Online Archives</em> 21(2):22.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“competitive electronic video gaming”<span class="popuptext">Papadakis, Zacharias, and Kendrick Morris. 2024. “Collegiate Esports: To Be or Not to Be a Collegiate Sport.” <em>Journal of Electronic Gaming and Esports</em> 2(1). doi:https://doi.org/10.1123/jege.2023-0045.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“professional organized video game competitions”<span class="popuptext">Hindin, Jacob, Matthew Hawzen, Hanhan Xue, Haozhou Pu, and Joshua Newman. 2020. “E-Sports.” In <em>Routledge Handbook of Global Sport</em>, edited by John Nauright and Sarah Zipp, 405. London: Routledge.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“the competitive and sometimes professional play of digital games to audiences for prizes”<span class="popuptext">Williams, J. Patrick, Mark R. Johnson, and Vinay Kumar. 2025. “‘A Little Bit Like Psychological Torture’: A Grounded Theory of the Sociocultural Challenges Surrounding Expertise Development in an Emerging Esports Ecosystem.” <em>Games and Culture</em>. doi:https://doi.org/10.1177/15554120251319176.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“the competitive play of video games, typically conducted via leagues and tournaments”<span class="popuptext">Macey, Joseph, Topias Mattinen, and Juho Hamari. 2025. “Paying, Playing, and Spectating: Relationships Between Digital Game Play and Spectating Esports.” <em>Games and Culture</em>. doi:https://doi.org/10.1177/15554120251376073.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“electronically mediated sport and the leagues in which players compete through networked games and related activities”<span class="popuptext">Jin, Dal Yong. 2021. “Introduction: Esports.” In <em>Global Esports: Transformation of Cultural Perceptions of Competitive Gaming</em>, edited by Dal Yong Jin. Bloomsbury Academic.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“productive game labor”<span class="popuptext">Fickle, Tara. 2021. “Made in China: Gold Farming as Alternative History of Esports.” <em>ROMchip: A Journal of Game Histories</em> 3(1). https://www.romchip.org/index.php/romchip-journal/article/view/132.</span></a></li>
        <li><a class="popup" onclick="myFunction(event)">“a catchall term for games that resemble conventional sports insofar as they have superstars, playoffs, fans, uniforms, comebacks and upsets”<span class="popuptext">CITATION</span></a></li>
    </ul>
    <br>
    <p>There are significant disagreements on what constitutes esports, who is understood to participate in esports, and what activities count as “doing” esports. However, several recurring themes tie the above definitions together - click on each to explore further:</p>
    <ul>
        <li><a href="/Sonic-Unreal/esports-and-as-video-games">Video Games</a></li>
        <li><a href="/Sonic-Unreal/(un)professional-esports">Competitive & Professional Play</a></li>
        <li><a href="/Sonic-Unreal/esports-infrastructures">Organized Leagues & Tournaments</a></li>
        <li>Audiences & Prizes</li>
        <li><a href="/Sonic-Unreal/are-esports-sports">Relationship to Traditional Sports</a></li>
    </ul>
    <div class="button_container">
        <button class="esports_button" onclick="location.href='/Sonic-Unreal/e-sports-vs-esports'">
            <span>E-Sports or Esports?</span>
        </button> 
    </div>
    <br>
    <div class="button_container">
        <button class="esports_button" onclick="location.href='/Sonic-Unreal/esports-and-gender'">
            <span>Esports & Gender</span>
        </button> 
    </div>
</body>