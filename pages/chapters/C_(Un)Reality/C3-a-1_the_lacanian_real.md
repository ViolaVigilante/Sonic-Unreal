--- 
layout: essay
title : The Lacanian Real
permalink: /the-lacanian-real
hide: true
method-sidebar: false
tags: []
---

<style>
    /* From Uiverse.io by Li-Deheng */ 
	.return_button {
	    --main-size: 1.5em;
	    --color-text: #ffffff;
	    --color-background: #CF269C;
	    --color-background-hover: #AC2082;
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

	.return_button:active {
	    transform: scale(0.95);
	}

	.return_button:hover {
	    outline: 0.1em solid transparent;
	    outline-offset: 0.2em;
	    box-shadow: 0 0 1em 0 var(--color-background);
	    animation:
	        ripple 1s linear infinite,
	        colorize 1s infinite;
	    transition: 0.5s;
	}
	
	.return_button span {
	    margin-left: 0.3em;
	    transition: 0.5s;
	}
	
	.return_button:hover span {
	    text-shadow: 5px 5px 5px var(--color-shadow);
	}
	
	.return_button:active span {
	    text-shadow: none;
	}

	.return_button svg {
	    height: 0.8em;
	    fill: var(--color-text);
	    margin-left: -0.16em;
	    position: relative;
	    transition: 0.5s;
	}
	
	.return_button:hover svg {
	    margin-left: 0.66em;
	    transition: 0.5s;
	    filter: drop-shadow(5px 5px 2.5px var(--color-shadow));
	}
	
	.return_button:active svg {
	    filter: none;
	}
	
	.return_button svg polygon:nth-child(1) {
	    transition: 0.4s;
	    transform: translateX(60%);
	}
	
	.return_button svg polygon:nth-child(2) {
	    transition: 0.5s;
	    transform: translateX(30%);
	}
	
	.return_button:hover svg polygon:nth-child(1) {
	    transform: translateX(0%);
	    animation: opacity 1s infinite 0.6s;
	}
	
	.return_button:hover svg polygon:nth-child(2) {
	    transform: translateX(0%);
	    animation: opacity 1s infinite 0.4s;
	}

	.return_button:hover svg polygon:nth-child(3) {
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

	.button_container {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
</style>

<body>
    <p>The Lacanian Real - often stylized with a capital “R” - references an abstract exteriority that can never be truly known, only approached through fragmentary experiences. It is a <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Strong Theory' data-bs-content='"Strong theory,” derived from the work of Silvan Tompkins and popularized by Eve Sedgwick, describes modes of explaining how the world works which seek to cast a wide net, accounting for a wide variety of phenomena simultaneously. Where strong theory attempts to explain many things at a broad level of detail, weak theory attempts to explain only a few things in close detail.<br><br>For more on strong theory, see Chapters 3 and 4 in:<br><br><a target="_blank" href="https://www.dukeupress.edu/Touching-Feeling/">Sedgwick, Eve Kosofsky. 2003. <em>Touching Feeling: Affect, Pedagogy, Performativity</em>. Durham, NC: Duke University Press.</a>'>strong theory<sup><b>&#8224;</b></sup></a> in the truest sense: the Real contains all other understandings of reality within it, framing itself as prior to and more fundamental than all else. For Lacan, “reality” and the “Real” are not only different from one another, but in some senses structurally opposed. Reality, for Lacan, is grounded in the symbolic and is cognitively understandable; the Real, on the other hand, is is not only exterior to reality but purposefully excluded from it. It is through the abjection of the Real that reality becomes knowable <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='The Lacanian Real' data-bs-content='For more on the relationship between the Real and reality in Lacan’s work, see:<br><br><a target="_blank" href="https://sunypress.edu/Books/R/Reading-Seminars-I-and-II">Ragland, Ellie. 1996. “An Overview of the Real, with Examples from Seminar I.” In <em>Reading Seminars I and II: Lacan’s Return to Freud</em>, edited by Richard Feldstein, Bruce Fink, and Maire Jaanus, 192–211. Albany, NY: State University of New York Press.</a>'>in the first place<sup><b>&#8224;</b></sup></a>.</p>
    <p><a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.jstor.org/stable/3684791" target="_blank">In the words of Fred Botting&#9873;<span class="popuptext">Botting, Fred. 1994. “Relations of the Real in Lacan, Bataille and Blanchot.” <em>SubStance</em> 23(1):24.</span></a>:</p>
    <div class="indent-quote"><p>Quite simply, the real remains what <em>is</em>, an unspeakable <em>is</em>, an impossible, inexpressible, ineffable and undifferentiated space outside language. … It is defined as that which cannot be defined, that which is alien or resists signification, that which exceeds symbolization. Utterly Other, the real is Other to subjects of language but has immense effects in its unpresentable in/difference. … Every day the real exceeds systems of signification, generating an excess or a remainder in relation to which desire inscribes its object.</p></div>
    <p>While the Lacanian Real has been a central analytic for <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Lacan in Performance Studies' data-bs-content='See, for example:<br><br><a target="_blank" href="https://www.routledge.com/Unmarked-The-Politics-of-Performance/Phelan/p/book/9780415068222">Phelan, Peggy. 1993. <em>Unmarked: The Politics of Performance</em>. New York: Routledge.</a>'>many scholars of music and performance<sup><b>&#8224;</b></sup></a>, it is not of primary importance to this project; I include it here in this survey of modes of understanding reality in reference to its broad history of use, despite the fact of its limited applicability to this project. “The Sonic Unreal” is primarily concerned with how (un)reality is variously understood and performed - meaning that a core conceit of this project is that realities are <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/the-multiplicity-of-realities'>The Multiplicity of Realities</a>" style="text-decoration: underline; font-weight: bold;">multiple</a>, <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/reality-and-truth'>Reality & Truth</a>" style="text-decoration: underline; font-weight: bold;">malleable</a>, and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/social-reality'>Social Reality</a>" style="text-decoration: underline; font-weight: bold;">socially constructed</a> in addition to being <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/material-reality'>Material Reality</a>" style="text-decoration: underline; font-weight: bold;">material</a> and <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/affective-reality'>Affective Reality</a>" style="text-decoration: underline; font-weight: bold;">phenomenological</a>. As such, understandings of Real as exterior to language and culture render it operative at a scale of little use for this project.</p>
    <br>
    <div class="button_container">
        <button class="return_button" onclick="location.href='/Sonic-Unreal/what-is-reality'">
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
            <span>Return to "What is Reality?"</span>
        </button> 
    </div>
</body>