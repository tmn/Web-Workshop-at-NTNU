<h1>Web Workshop: HTML5, CSS3 and web applications (draft)</h1>
<p><strong>by</strong> <a href="mailto:trimn@myopera.com">Tri M. Nguyen</a> - 4. April 2011<br>
<strong>Event at <a href="https://online.ntnu.no/event/159/">https://online.ntnu.no/event/159/</a></strong></p>

<h3>"Oppgaven"</h3>
<p><strong>Summary</strong>: vi lager en enkel "handleliste"-applikasjon.</p>
<p>Krav</p>
<p>- legge til poster i en liste (trenger ikke å kunne slette)<br>
	- postene skal lagres lokalt<br>
	- lista skal kunne oppdateres og leses selv uten internettforbindelse<br>
	- tilpasses skalering av viewport (<a href="http://cl.ly/1f2j0N0d181r0q431b1F">se illustrasjon</a>)
<br>

<strong>Vi tar for oss blant annet</strong>
<ul>
	<li>HTML Forms</li>
	<li>Web fonts</li>
	<li>Video- og audio-elementene</li>
	<li>Media queries</li>
	<li>CSS3 transitions</li>
	<li>Local storage</li>
</ul>

<ul>
	<li>Remote debugging på device. Aktuelt for de med Android-telefoner.<br>
		- du trenger <a href="https://market.android.com/details?id=com.opera.browser&amp;feature=search_result">Opera Mobile</a> og <a href="http://www.opera.com/browser/">Opera for desktop</a></li>
	<li>Remote debugging med Opera Mobile emulator for desktop<br>
		- <a href="http://www.opera.com/developer/tools/">Opera Developer tools</a></li>
</ul>


<h2>Code description</h2>
<ul>
	<li>
		JavaScript
		<ul>
			<li>
				<strong>html5.js</strong> - for å aktivere styling av nye HTML5-elementer i IE (Remy Sharp)
			</li>
			<li>
				<strong>jQuery-1.5.1.min.js</strong> - jQuery
			</li>
		</ul>
	</li>
	<li>
		CSS
		<ul>
			<li><strong>reset.css</strong> - for å "nullstille" alle browser-styling (Eric Meyer)</li>
			<li><strong>main.css</strong> - standard working CSS</li>
		</ul>
	</li>
	<li>
		HTML
		<ul>
			<li><strong>index.html</strong> - standard working HTML</li>
		</ul>
	</li>
	
</ul>

<h3>Snippets</h3>

<p>Få applikasjonen til å oppføre seg som en "native"-applikasjon på en device<br>
&lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot;&gt;</p>

<p>Setter viewport til device-standard (kan spesifiseres)<br>
&lt;meta name=&quot;viewport&quot; content=&quot;width = device-width, user-scalable = no&quot; /&gt;</p>

<p>Splash-screen ved oppstart av applikasjonen<br>
&lt;link rel=&quot;apple-touch-startup-image&quot; href=&quot;startup.png&quot;&gt;</p>

<p>Eget ikon på "homescreen"<br>
&lt;link rel=&quot;apple-touch-icon&quot; href=&quot;fav.png&quot;&gt;</p>

<h3>Nyttige lenker</h3>
<ul>
	<li><a href="http://jquery.com/">jQuery</a></li>
	<li><a href="https://docs.google.com/present/view?id=dkx3qtm_22dxsrgcf4">Viewport and Media Queries - the complete idiot's guide</a></li>
</ul>
