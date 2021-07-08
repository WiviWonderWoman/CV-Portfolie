'use strict';
const content = document.getElementById('content');
document.getElementById('Presentation').addEventListener('click', function(){
    content.innerHTML = `<h2>Välkommen!</h2><div id="profilPic"><img src="./Profilbild-200.jpg" alt="photo of me"></div>
    <p>Kul att du hittade hit. Mitt namn är Wivianne Grapenholt. Jag är född 1975, uppvuxen i Helsingborg, numera bosatt i Höganäs. Här nedanför försöker jag ge en bild av vem jag är och mot slutet ska jag summera och förklarar mitt smått kaxiga användarnamn WiviWonderWoman.</p>
    <p>Efter många år av att lägga all min energi och tid på att som ensamstående få min och mina fem barns neurodivergenta vardag att gå runt så är jag nu framme vid en milstolpe i mitt liv.</p>
    <p><em>Äntligen</em> vet jag vad jag vill bli när jag blir stor, eller i alla fall inom vilken bransch.</p>
    <p>Jag får ofta höra att jag är bra på att: tänka utanför boxen, se detaljer, tydliggörande layout, formulera mig i skrift och vara kreativ.</p>`
});
document.getElementById('cv').addEventListener('click', function(){
    content. innerHTML = `<h2>Utbildningar</h2>
    <table><tr><td>Webbutveckling inom .NET</td><td>Campus Värnamo</td><td>2020</td><td>2022</td></tr>
    <tr><td>Programmering 1</td><td rowspan="3">Hermods</td><td rowspan="3" colspan="2">2020</td>
    </tr><tr><td>Matematik 2a</td></tr><tr><td>Webbutveckling 1</td></tr> 
    <tr><td>Larmtekninker</td><td>Lernia</td><td>avbruten</td><td>2008</td></tr> 
    <tr><td>Koplettering, tredje året</td><td>Komvux</td><td colspan="2">2006</td></tr>  
    <tr><td>Vård & omsorg</td><td>Petri Vårdgymnasium</td><td>1992</td><td>1993</td></tr></table>
    <h2>Arbetslivserfarenhet</h2><table><tr><td rowspan="2">Lokalvårdare</td><td>Sans & Balans</td><td>2015</td><td>2016</td></tr> 
    <tr><td>Tydingesjöns Camping</td><td colspan="2">2011</td></tr> 
    <tr><td rowspan="2">Undersköterska</td><td>Markaryds kommun</td><td colspan="2">2007</td></tr> 
    <tr><td>Östra Göinge Kommun</td><td colspan="2">2005</td></tr>     
    <tr><td>Industriarbetare</td><td>Höganäs Keramik AB</td><td>1998</td><td>2004</td>
    </tr><td>Labratoriediskare</td><td>KM Labratorierna AB</td><td>1990</td><td>1991</td></tr></table>`
});
document.getElementById('ideellt').addEventListener('click', function(){
    content. innerHTML = `<h2>Ideella Uppdrag & Oavlönat arbete</h2><p>Som ensamstående förälder till fem barn (födda 1996, 1999, 2000, 2006 samt 2008), nästan alla har vi olika grad av funktionsvarianter så är jag van att ha många bollar i luften. Jag brukar lite skämtsamt säga att jag har många bisysslor: specialpedagog, samordnare, metodhandledare, debattör, sekreterare, dietist, arbetsterapeut, medlare, processhandledare, jurist, ekonomiassistent och städerska… Jag har genom åren gått alla patient- och anhörigutbildningar, alla ålders kategorier, som Region Skåne erbjuder för angående adhd och autism. Vilket har gett mig mycket kunskap i olika strategier för både kognitiva och exekutiva svårigheter och på köpet om hur hjärnan fungerar i allmänhet.</p>
    <p>Jag har varit aktiv inom <b>Hyresgästföreningen</b> sedan 2013 och genom åren har jag hunnit med: Kurser - Styrelseutbildning, både ordförande och sekreterare samt Valberednings- och Förhandlingsdelegat-utbildning. Förtroendeuppdrag - på Lokalnivå (kvarter): Ordförande 2013 – 2019 och numera Husombud. Och på kommunalnivå: Styrelseledamot sedan 2015, Sekreterare sedan 2017 och Förhandlingsdelegat för både allmännytta och privata hyresvärdar i 2 år.</p>
    <p>Jag sitter i <b>Attention</b> Helsingborg-Ängelholms styrelse sedan 2 år och nyligen tagit över sekreterarrollen även här.</p><p>Jag är mentor i en privat Facebook grupp på över 500 medlemmar som drivs av en entreprenör för: <span> "Zero Resistance Planeringsmetod ger dig ett kognitivt stöd i vardagen för att ta kontroll över din dag och nå dina mål, med kreativ frihet för individuell anpassning.” </span> Där jag får möjlighet att stötta och inspirera andra till personligutveckling. Det är genom just <b>Zero Resistence Planner</b>  jag har kommit till insikt med vad jag vill i livet. Jag har lärt mig att sätta upp och nå SMART mål genom att använda bland annat Prioriterings matrix, Kanban och timeboxing i min vardag.</p>`
});
document.getElementById('hobbies').addEventListener('click', function(){
    content. innerHTML = `<h2>Intressen</h2><p>Jag brinner för att sprida kunskap och motverka alla former av diskriminering och exkludering i samhället. Varmast om hjärtat ligger feminism och ableism (funkofobi) och i synnerhet neuropsykiatriska-funktionsvarianter. Jag älskar att lära mig nya saker och delar gärna med mig av min kunskap till min omgivning.</p>
    <p>Att skapa med garn/textil är en passion och på senare tid har det blivit mycket virkande. Inte efter färdiga mönster utan jag skapar på frihand. Här ser du några exempel. De två första bilderna är avbilder av min äldsta dotter och hennes man. Jag tillverkade dom till deras bröllop sommaren 2019. Den sista bilden föreställer min äldsta son när han tog studenten 2020, restaurang och livsmedel. Är du intresserad av att se mer så är du välkommen att kolla på Instagram.</p>    
    <div id="hobbyPic" class="flex-container"><ul>
    <li><img src="./EbbaSimon.jpg" alt="photo of my daughter and her husband, as crocheted dolls with national costume " ></li>
    <li><img src="./Brudparet.jpg" alt="photo of my daughter and her husband, as crocheted dolls with wedding outfits " ></li>
    <li><img src="./Kock.jpg" alt="photo of my son, as a crocheted doll with chef outfit" ></li></ul></div>`
});
document.getElementById('sum').addEventListener('click', function(){
    content. innerHTML = `<h2>Summering</h2><p>Jag har under många år haft en självkänsla långt under genomsnittet, både på grund av yttre och inre omständigheter. De senaste åren har jag jobbat hårt med min personliga utveckling, självbild och självförtroende. Jag har reflekterat, korrigerat och balanserat mig själv och mitt liv. Jag försöker strunta i jantelagen så numera kommer jag på mig själv att vara stolt över vem jag är och vad jag åstadkommer. Jag har fått höra av min omgivning att jag är en ”super-mamma” som fixar allt, att jag är bra på många olika saker och att jag överraskar med mina kunskaper inom vitt spridda områden.</p>
    <p> Som en positiv affirmation till mig själv började jag anta användarnamnet WiviWonderWoman i olika spelrelaterade sammanhang. När jag började luta åt att utbilda mig till webbutvecklare insåg jag att det faktiskt är en alternativ akronym till World Wide Web vilket jag tycker är lite småkul. Dessutom har jag en escape-väg de gånger det känns för kaxigt genom att referera till: ”wonder woman i wonder where i left my keys”. Som anspelar på min tankspriddhet, glömska och ad(h)d diagnos.</p>`
});
document.getElementById('portfolio').addEventListener('click', function(){
    fetch('https://api.github.com/users/WiviWonderWoman/repos')
    .then(resp => resp.json())
    .then(data => gitHub(data))
    let arrGit = [];
    function gitHub(data) {(data);
        arrGit = data;
        arrGit.forEach(element => { 
            document.getElementById('github').insertAdjacentHTML ("afterbegin", `<button id="knapp"></button>`);
            document.getElementById('knapp').insertAdjacentHTML("afterbegin",`<a href="`+element.html_url+`"target="_blank">`+element.name+`</a>`)
        })
    }   
    content. innerHTML = `<h2>Här är länkar till några av mina repos på GitHub</h2><div class="flex-container" id="github"></div>`
});
document.getElementById('contact').addEventListener('click', function() {
    content. innerHTML = `<h2>Här nedan ser du länkar olika plattformar där jag finns.</h2>`
});
