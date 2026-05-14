--- 
layout: essay
title : Esports & Gender
permalink: /esports-and-gender
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
    <p>In September 2025, one of the biggest stars of <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='"Western" Esports' data-bs-content='"Western” and “Eastern” are commonly used in the League of Legends esports scene to refer to the North American (LCS) and European (LEC) leagues as the former, and the Korean (LCK) and Chinese (LPL) leagues as the latter.'>western</a> <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'>League of Legends</a>"><i>League of Legends</i></a> was embroiled in controversy. Bwipo, top laner with the North American (NA) team FlyQuest and winner of numerous awards and domestic championships in both North America and Europe, said on his <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/livestreaming'>Livestreaming</a>">Twitch stream</a>:</p>
    <div class="alert alert-light" role="alert"> “Women’s anatomy and their monthly cycles are extremely different from males…. A lot of people, even men, that play this game just <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Tilting' data-bs-content="In esports, “tilting” refers to giving up when something goes wrong in game - with a particular connotation of anger and lashing out against your teammates, the game developers, etc. This comment draws on popular understandings of League as a particularly “tilting” game with a particularly “toxic” (rude, quick to anger, prone to personal attacks against others, etc.) playerbase.">tilt</a> out of their fucking minds when they play League of Legends, so when a woman is on the wrong part of the month to play competitively, you know what I mean? There is a time of the month where you should not fucking be playing competitive games as a woman, in my opinion.”</div>
    <p>The blowback was swift - and, in the typical mode of the LoL community, driven by memes.</p>
    <h2>INSERT IMAGES HERE</h2>
    <p>Bwipo’s career subsequently took a nose dive. <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Riot Games' data-bs-content="Riot Games is the publisher of <i>League of Legends</i>, <i>Valorant</i>, and several other games and esports. Unlike some other publishers, Riot also maintains near-total control over their properties’ esports.">Riot Games</a> postponed the release of the 2025 <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/worlds-anthems'>Worlds Anthems</a>">Worlds anthem</a> in order to edit the accompanying music video and remove Bwipo’s likeness - and, since Bwipo was originally meant to be the player representing the LCS, North America was <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.sheepesports.com/en/all/articles/lol-riot-games-delays-the-release-of-the-worlds-song-to-cut-bwipo-s-appearance/en" target="_blank">no longer represented in the video<span class="popuptext">Marchoude, Ilyas. 2025. “LoL: Riot Games Delays the Release of the Worlds Song to Cut Bwipo’s Appearance.” <i>Sheep Esports</i>. October 8.</span></a>. Then, despite having just won the award for best top laner in North America in 2025, Bwipo was not able to secure a spot on any professional Tier 1 team for the beginning of the 2026 season - leaving him to switch positions to Jungler and play with a semi-professional, Tier 2 ERL team (EMEA [Europe, Middle East, Africa] Regional Leagues). As LCS commentator and former coach Josh “Jatt” Leesman <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.tiktok.com/@esportsjatt/video/7578604981687749910" target="_blank">noted:<span class="popuptext">Leesman, Josh “Jatt.” 2025. “Bwipo not in LCS Or LEC to start 2026.” TikTok, November 30.</span></a></p>
    <div class="alert alert-light" role="alert">“This news, if you were to just look at the gameplay and what he brought to a team, would be completely shocking - because he was pretty much the best top laner in North America across the last two years. Based on titles, for sure; based on <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='All-Pros' data-bs-content='“All-Pros” are an official award given by Tier 1 LoL leagues to recognize the best player in each position in a given season.'>All-Pros</a>, also for sure… Bwipo brings experience, shot calling…. So for him not to have a team is shocking, <i>until</i> you factor in the massive PR risk that he is. I mean, he got North America removed from the Worlds hype video because of his comments that he made on stream about women.”</div>
    <br>
    <p style="display: flex; justify-content: center;">*****</p>
    <br>
    <p>While the fact that Bwipo’s comments were controversial at all reveals some changing norms in professional esports, the industry has long been characterized by gender-based exclusions. <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Women in Esports' data-bs-content="Charitat, Celine, and Beth A. Cianfrone. 2023. <a target='_blank' href='https://doi.org/10.1123/jege.2022-0036'>“An Examination of the Effects of Source Gender on Perceived Credibility of Esports Shoutcasters.”</a> <i>Journal of Electronic Gaming and Esports</i> 1 (1).<br><br>Crothers, Heather, Kenneth C. Scott-Brown, and Sheila J. Cunningham. 2024. <a target='_blank' href='https://doi.org/10.1177/15554120241273358'>“‘It’s Just Not Safe’: Gender-Based Harassment and Toxicity Experiences of Women in Esports.”</a> <i>Games and Culture</i>.<br><br>Mahoney, Tara Q., Lindsey Darvin, and Ryan Vooris. 2024. <a target='_blank' href='https://doi.org/10.1123/jege.2022-0034'>“Motivations to Participate in Gaming and Esports: An Exploratory Study on The Influence of Participant Gender.”</a> <i>Journal of Electronic Gaming and Esports</i> 2 (1).<br><br>Ruotsalainen, Maria, and Usva Friman. 2018. <a target='_blank' href='https://doi.org/10.26503/dl.v2018i3.1052'>“‘There Are No Women and They All Play Mercy’: Understanding and Explaining (the Lack of) Women’s Presence in Esports and Competitive Gaming.”</a> <i>Proceedings of Nordic DiGRA 2018 Conference</i>.">A significant amount of research continues to show that women are underrepresented and marginalized within professional esports, both as players and in other roles such as commentators and coaches.</a> Importantly, however, the gender dynamics of esports are not fully reflected through demographic statistics; as T. L. Taylor has argued, <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://direct.mit.edu/books/book/4420/Raising-the-StakesE-Sports-and-the" target="_blank">“it is crucial that a discussion of gender not simply be conflated with a discussion of women. The construction of masculinity is central to understanding the nature of gender and professional computer gaming.”<span class="popuptext">Taylor, T. L. 2012. <i>Raising the Stakes: E-Sports and the Professionalization of Computer Gaming</i>. MIT Press. 110.</span></a>. Gender disparities in esports have their roots in (but are not reducible to) <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Gender in Video Game Cultures' data-bs-content="For just a few examples from a very large body of literature on the topic, see:<br><br>Garvey, Kevin. 2024. <a target='_blank' href='https://doi.org/10.1123/jege.2023-0006'>“‘You’re Too Pretty to Be a Challenge Runner’: Changing ‘Gamers’ in an Age of Live Streaming.”</a> <i>Journal of Electronic Gaming and Esports</i> 2 (1).<br><br>Nooney, Laine. 2013. <a target='_blank' href='https://gamestudies.org/1302/articles/nooney'>“A Pedestal, A Table, A Love Letter: Archaeologies of Gender in Videogame History.”</a> <i>Game Studies</i> 13 (2).<br><br>Phillips, Amanda. 2020. <a target='_blank' href='https://nyupress.org/9781479834921/gamer-trouble/'><i>Gamer Trouble: Feminist Confrontations in Digital Culture</i></a>. New York University Press.<br><br>Shaw, Adrienne. 2014. <a target='_blank' href='https://www.jstor.org/stable/10.5749/j.ctt1287nqh'><i>Gaming at the Edge: Sexuality and Gender at the Margins of Gamer Culture</i></a>. University of Minnesota Press.">well-documented inequities in the world of video games more broadly</a>, and the persistent framing of esports as a “boys club” colors everything from the <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://romchip.org/index.php/romchip-journal/article/view/131" target="_blank">“kinaesthetic masculinity”<span class="popuptext">Taylor, Nicholas. 2021. “Kinaesthetic Masculinity and the Prehistory of Esports.” <i>ROMchip: A Journal of Game Histories</i> 3 (1).</span></a> of esports embodiment to <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://teamliquid.com/news/girls-only-play-healers" target="_blank">the classification of particular modes of play as feminine<span class="popuptext">Gogogadgetkat. 2024. “‘Girls Only Play Healers!’” Team Liquid, March 28.</span></a>.</p>
    <p>Despite barriers to access, women have always been present in esports. Some of the earliest esports pioneers were queer women, from arcade legends like <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.npr.org/2025/11/23/nx-s1-5615336/remembering-rebecca-heineman-video-game-pioneer-and-lgbtq-rights-advocate" target="_blank">Rebecca Heineman<span class="popuptext">Rascoe, Ayesha, dir. 2025. “Remembering Rebecca Heineman, Video Game Pioneer and LGBTQ Rights Advocate.” Weekend Edition. <i>NPR</i>, November 23.</span></a> to streamers with major esports organizations such as <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.harpercollins.com/products/optic-gaming-h3cz-nadeshot-scump-bigtymer-midnite-optic-j-fwiz?variant=40971392516130" target="_blank">MiDNiTE<span class="popuptext">Rodriguez, Hector “H3CZ,” Matt “NaDeSHoT” Haag, Seth “Scump” Abner, et al. 2016. <i>Optic Gaming: The Making of eSports Champions</i>. Dey St.</span></a>. Recent years have seen several women become high-profile and extraordinarily successful coaches for professional esports teams, such as <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/apex-legends'><i>Apex Legends</i></a>"><i>Apex Legends</i></a> coach <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://teamliquid.com/articles/winnie-apex-legends" target="_blank">Winnie<span class="popuptext">Richman, Olivia. 2026. “Winnie’s Journey to the Top of Apex Legends.” Team Liquid, January 9.</span></a> and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/valorant'><i>Valorant</i></a>"><i>Valorant</i></a> coach <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://nerdstreet.com/news/2023/3/valorant-potter-evil-geniuses-coach-blazing-trail-for-women" target="_blank">Potter<span class="popuptext">Bencomo, Brian. 2023. “Christine ‘Potter’ Chi Is Blazing a Trail for Women in the VALORANT Champions Tour.” <i>Nerd Street</i>, March 23.</span></a>. Women like the commentator <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.mastercard.com/news/perspectives/2023/sjokz-game-changer-meet-the-woman-at-the-center-of-esports-biggest-live-events/" target="_blank">Sjokz<span class="popuptext">Hares, Sophie. 2023. “Game Changer: Meet the Woman at the Center of Esports’ Biggest Live Events.” Mastercard, February 15.</span></a> number among today’s biggest esports personalities. And yet, even when women are present in professional esports, their labor is often written off as not truly part of esports and instead dismissed as <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://doi.org/10.1080/14626260903290323" target="_blank">unnecessary and even comical<span class="popuptext">Taylor, Nicholas, Jen Jenson, and Suzanne de Castell. 2009. “Cheerleaders/Booth Babes/Halo Hoes: Pro-Gaming, Gender and Jobs for the Boys.” <i>Digital Creativity</i> 20 (4): 239–52.</span></a>. Presence itself does not signal equity, either, as women in esports continue to face discrimination and sexism both within the industry and from fans. (As just one example: when I attended the 2022 <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'><i>League of Legends</i></a>"><i>League of Legends</i></a> world championships at Madison Square Garden in New York City, Sjokz’s appearance on stage was greeted with yells from men in the audience of “Sjokz, have my babies!”)</p>
    <p>Gender segregation has long been a part of many professional esports. While the major professional esports leagues are not restricted to men in theory, they are almost entirely populated by male players in practice. Alongside these marquee leagues are often leagues and events specifically for women - such as Riot Games’ Game Changers leagues for their <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'><i>League of Legends</i></a>"><i>League of Legends</i></a> and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/valorant'><i>Valorant</i></a>"><i>Valorant</i></a> esports and the ESL Impact League for competitive <i>Counter-Strike</i>. Recently, these leagues have broadened to encompass trans and gender nonconforming players as well (<i>Valorant</i> Game Changers, for example, is framed as being for <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://playvalorant.com/en-us/news/esports/vct-game-changers/" target="_blank">“women and other marginalized genders”<span class="popuptext">Rozelle, Whalen “Magus.” 2021. “VCT Game Changers.” Valorant, February 23.</span></a>), though <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.dust2.us/news/32518/semmler-on-esl-impact-allowing-trans-women-to-compete-defeats-the-purpose" target="_blank">controversy occasionally surrounds the presence of trans people in ways paralleling political discourse in the United States around the participation of trans women in traditional sports<span class="popuptext">RyanFriend. 2022. “Semmler on ESL Impact: Allowing [Trans Women] to Compete Defeats the Purpose.” <i>Dust2.Us</i>, November 28.</span></a>. Paralleling these leagues are infrastructures, often unaffiliated with any specific game or publisher, to support women and queer people in esports - such as <a href="https://www.queeresports.org/" target="_blank">Queer Women of Esports</a> and <a href="https://anykey.org/" target="_blank">AnyKey</a>.</p>
    <p>It is important as well to account for esports as a global phenomenon, both as a collection of community practices from around the world and as a product of large multinational corporations attempting to appeal to heterogeneous global audiences. Discourses around <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/lil-nas-x'>Lil Nas X</a>">Lil Nas X</a>’s <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/league-of-legends'><i>League of Legends</i></a>"><i>League of Legends</i></a> 2022 <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/worlds-anthems'>Worlds Anthems</a>">Worlds Anthem</a>, for example, point to <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/esports-and-geopolitics'>Esports & Geopolitics</a>">the complex social relations at play in global esports</a>, where gender, nationality, race, and sexuality mutually constitute one another. To fully understand the gendered complexities of global esports, we must view <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/identity-as-performance'>Identity as Performance</a>">gender as constructed through culturally-specific performative modes</a> and attend to how performances of gender within and through esports are <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='The Cultural Specificity of Gender in Esports' data-bs-content='For a discussion of women’s role in Chinese esports and how it contrasts with North American norms, see:<br><br> Szablewicz, Marcella. 2015. <a target="_blank" href="https://doi.org/10.1177/1555412015595298">“A Realm of Mere Representation? ‘Live’ e-Sports Spectacles and the Crafting of China’s Digital Gaming Image.”</a> <i>Games and Culture</i> 11 (3): 266-267.'>not reducible</a> to <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Eurocentrism in Research on Esports & Gender' data-bs-content='The majority of esports scholarship, and thus also scholarship on esports and gender, is produced in countries such as the United States, Canada, the UK, and Finland. See, for example:<br><br>Crothers, Heather, Kenneth C. Scott-Brown, and Sheila J. Cunningham. 2024. <a target="_blank" href="https://doi.org/10.1177/15554120241273358">“‘It’s Just Not Safe’: Gender-Based Harassment and Toxicity Experiences of Women in Esports.”</a> <i>Games and Culture</i>.<br><br>Ruotsalainen, Maria, Tom Legierse, Azul Romo Flores, Finja Walsdorff, Ida Martine Gard Rysjedal, and Egil Trasti Rogstad. 2024. <a target="_blank" href="https://coe-gamecult.org/2024/12/12/maria-ruotsalainen-tom-legierse-azul-romo-flores-finja-walsdorff-ida-martine-gard-rysjedal-egil-trasti-rogstad-reflections-on-workshop-feminist-approaches-to-esports-research/">“Reflections on Workshop ‘Feminist Approaches to Esports Research.’”</a> Centre of Excellence in Game Culture Studies, December 12.'>the North American and northern European frames through they are typically interpreted</a></p>
    <p>While women and queer people continue to face significant hurdles to full participation in professional esports, commentaries on the topic too often veer into hyperbolic declarations that only men take part in esports as players and as fans. Esports have never been limited to cisgender heterosexual men - and while gender parity is still a long ways off, women and queer folks are active participants in esports at all levels.</p>
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