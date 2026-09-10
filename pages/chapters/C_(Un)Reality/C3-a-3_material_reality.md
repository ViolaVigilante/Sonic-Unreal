--- 
layout: essay
title : Material Reality
permalink: /material-reality
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
    <p>Recent trends in humanities scholarship - from anthropology to <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/sound-studies'>Sound Studies</a>" style="text-decoration: underline; font-weight: bold;">sound studies</a> to philosophy to media studies - have <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='The Ontological Turn' data-bs-content='Canonical works in this area include:<br><br><a target="_blank" href="https://www.dukeupress.edu/vibrant-matter">Bennett, Jane. 2010. <em>Vibrant Matter: A Political Ontology of Things</em>. Durham, NC: Duke University Press.</a><br><br><a target="_blank" href="https://www.upress.umn.edu/9780816678983/alien-phenomenology-or-what-its-like-to-be-a-thing/">Bogost, Ian. 2012. <em>Alien Phenomenology, or What It’s Like to Be a Thing</em>. Minneapolis: University of Minnesota Press.</a><br><br><a target="_blank" href="https://www.upress.umn.edu/9780816689231/hyperobjects/">Morton, Timothy. 2013. <em>Hyperobjects: Philosophy and Ecology after the End of the World</em>. Minneapolis: University of Minnesota Press.</a>'>(re)centered the fundamental materiality of the world.<sup><b>&#8224;</b></sup></a> These trends, variously grouped under terms like “the ontological turn” or “object-oriented ontology” or “thing theory,” have pushed back against the long history of Enlightenment-derived philosophies which privileged the abstract, “pure” realm of ideas over the material, “dirty” realm of the physical world. Similarly, some scholars working within the ontological turn sought to re-concretize social theory in the wake of what they saw as the over-abstraction of late-20th-century <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='The Heterogeneity of the Ontological Turn' data-bs-content='It is important to recognize, however, that object-oriented ontology is not a monolith and that it is not necessarily fundamentally opposed to poststructuralism. While some trends in fact reinscribe the white masculinist underpinnings of Enlightment philosophy through a rejection of poststructuralist theories of, for example, gender performance, others harmonize with poststructuralist theories while expanding the range of nonhuman actors within those theories.'>poststructuralist theories<sup><b>&#8224;</b></sup></a>. Where it had once been fashionable to see the world as composed of <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.hachettebookgroup.com/titles/clifford-geertz/the-interpretation-of-cultures/9780465093557/" target="_blank">texts&#9873;<span class="popuptext">Geertz, Clifford. 1973. “Deep Play: Notes on the Balinese Cockfight.” In <em>The Interpretation of Cultures</em>, 412–53. New York: Basic Books.</span></a> and <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://www.press.jhu.edu/books/title/11199/grammatology" target="_blank">discourses&#9873;<span class="popuptext">Derrida, Jacques. 1974. <em>On Grammatology</em>. Baltimore: Johns Hopkins University Press.</span></a>, it became more common to hear scholars proclaim the fundamental “thing-ness” of the world <a class="popup-comment" data-bs-toggle="popover" data-bs-html="true" data-bs-title='Indigenous Ontologies' data-bs-content='Of course, these were not new ideas in philosophical traditions outside of Enlightenment-derived theory. The ontological turn was viewed with skepticism by Indigenous thinkers who saw this new trend as a refashioning of centuries of Indigenous philosophy and cosmology without any acknowledgment.<br><br>See, for example:<br><br><a target="_blank" href="https://doi.org/10.1111/johs.12124">Todd, Zoe. 2016. “An Indigenous Feminist’s Take On The Ontological Turn: ‘Ontology’ Is Just Another Word For Colonialism.” <em>Journal of Historical Sociology</em> 29(1):4–22.</a>'>outside of human perception or understanding.<sup><b>&#8224;</b></sup></a></p>
    <p>The ontological turn was (and is), in some ways, an attempt to relocate reality. It was not only a philosophical exploration of the idea that “This object is real because I can touch it,” but an assertion that the object exists in stable and agentic form outside of human perception entirely. It was a centering of what Will Schrimshaw has called the <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://doi.org/10.1080/20551940.2015.1079982" target="_blank">“non-phenomenologizable aspects of the real.”&#9873;<span class="popuptext">Schrimshaw, Will. 2015. “Exit Immersion.” <em>Sound Studies</em> 1(1):165.</span></a> Human bodies remain central, but in material form outside perception and theorization; <a class="popup-citation" onmouseover="myFunction(event)" onmouseout="myFunction(event)" href="https://global.oup.com/academic/product/the-body-in-pain-9780195049961" target="_blank">bodies as collections of physical matter marked by injury and sensation serve as a locus of reality unto themselves.&#9873;<span class="popuptext">Scarry, Elaine. 1985. <em>The Body in Pain</em>. New York: Oxford University Press.</span></a></p>
    <p>When we ask <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/what-is-reality'>What is “Reality”?</a>" style="text-decoration: underline; font-weight: bold;">“What is reality?”</a>, one answer is that reality is located in the materiality of the world: that a rock has characteristics and functions rooted in its fundamental materiality regardless of whether it is ever seen by a human, regardless of whether it is called a rock or a stone, whether it is perceived as a discarded Pet Rock or a piece of a famous gravestone. Of course, there are things that are <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/affective-reality'>Affective Reality</a>" style="text-decoration: underline; font-weight: bold;">real without being material</a>, and there are things that are <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/reality-and-truth'>Reality & Truth</a>" style="text-decoration: underline; font-weight: bold;">real to some people but not to others</a>, and there are things that are <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/mediatized-reality'>Mediatized Reality</a>" style="text-decoration: underline; font-weight: bold;">only partially real or only real some of the time</a> - but it is undeniable that materiality plays a key role in structuring the real and that, for many people in many contexts, <a class="popup-hyperlink" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Explore Further" data-bs-content="<a href='/Sonic-Unreal/analog-reality'>Analog Reality</a>" style="text-decoration: underline; font-weight: bold;">materiality confers a sense of reality</a>.</p>
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
		    <span>Return to "What is 'Reality'?"</span>
		</button> 
	</div>
</body>