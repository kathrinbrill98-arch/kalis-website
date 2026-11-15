// Baut Kacheln, Team und Galerie aus data.js auf. Hier normalerweise nichts ändern.
const e=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const tiles=document.getElementById("tiles"),dlg=document.getElementById("dlg"),dc=document.getElementById("dc"),lb=document.getElementById("lb");

const heute=new Date().toISOString().slice(0,10);
// Preiszeile, mit Aktionspreis solange "aktionBis" nicht vorbei ist
const zeile=r=>{const ak=r.aktion&&(!r.aktionBis||r.aktionBis>=heute);
  return "<li><span>"+e(r.name)+(ak?' <em class="ak">Aktion</em>':"")+"</span><b>"+
  (ak?'<s>'+e(r.preis)+'</s> '+e(r.aktion):e(r.preis))+"</b></li>"};
// Hinweis über den Preisen (z. B. „Preise gelten ab …“), verschwindet nach "preisHinweisBis"
const preisHinweis=l=>(l.preisHinweis&&(!l.preisHinweisBis||l.preisHinweisBis>=heute))?'<p class="preis-hinweis">'+e(l.preisHinweis)+'</p>':'';
// Reihenfolge der Preise und Gruppen = Reihenfolge in data.js (dort bewusst festgelegt:
// günstigste zuerst, Waxing von oben nach unten, Nachbehandlungen unter der passenden Leistung)
const sortiert=pr=>pr;
const gruppenSortiert=gr=>gr||[];
const liste=g=>(g.name?"<h4>"+e(g.name)+"</h4>":"")+(g.text?"<p>"+e(g.text)+"</p>":"")+"<ul>"+sortiert(g.preise).map(zeile).join("")+"</ul>";

const AGB_HINWEIS='<p class="agb-hinweis">Die Buchung öffnet Planity in einem neuen Fenster. Verbindlich ist der Preis bei Planity. Bitte sagen Sie Termine mindestens 24 Stunden vorher ab. Es gelten unsere <a href="agb.html" target="_blank">AGB</a>.</p>';
// Buchungslink zu Planity (Konto aus PLANITY in data.js)
const planityLink=(konto,text,klasse)=>'<a class="'+(klasse||"btn")+'" href="'+e(PLANITY[konto]||"#")+'" target="_blank" rel="noopener">'+text+'</a>';

LEISTUNGEN.forEach((l,i)=>{
  const b=document.createElement("button");b.className="tile";
  b.innerHTML=(l.bild?'<img loading="lazy" src="'+e(l.bild)+'" alt="'+e(l.titel)+' bei Kalis Cosmetics in Zierenberg bei Kassel">':'')+
    '<div class="tile-text"><h3>'+e(l.titel)+'</h3><span>bei '+e(l.wer)+'</span><em>'+((l.buchen||[]).length?"Preise & Termin":"Preise ansehen")+'</em></div>';
  b.onclick=()=>zeigen(i);tiles.appendChild(b);
});

// Fenster öffnen/schließen (eigene Lösung statt <dialog>, damit es auf dem iPhone zuverlässig läuft)
function auf(m){m.hidden=false;document.documentElement.classList.add("modal-offen")}
function zu(m){m.hidden=true;if(dlg.hidden&&lb.hidden)document.documentElement.classList.remove("modal-offen");if(m===dlg)dc.innerHTML=""}
function oeffnen(){auf(dlg);dc.scrollTop=0}

function zeigen(i){
  const l=LEISTUNGEN[i];
  let h='<div class="d"><h3>'+e(l.titel)+'</h3><p class="who">bei '+e(l.wer)+'</p><p>'+e(l.text)+'</p>'+preisHinweis(l);
  gruppenSortiert(l.gruppen).forEach(g=>h+=liste(g));
  if(l.hinweis)h+='<p class="note">'+e(l.hinweis)+'</p>';
  if((l.buchen||[]).length){
    h+='<div class="aktion">';
    l.buchen.forEach(b=>h+=planityLink(b.konto,e(b.label)+' ↗'));
    h+=AGB_HINWEIS+'</div>';
  } else h+='<div style="height:30px"></div>';
  dc.innerHTML=h+"</div>";
  oeffnen();
}
// Alle Buttons "Termin buchen" (Menü, oben, Kontakt): erst auswählen, bei wem gebucht wird
document.querySelectorAll(".termin").forEach(a=>a.onclick=ev=>{ev.preventDefault();menuZu();waehlen()});
function waehlen(){
  dc.innerHTML='<div class="d"><h3>Termin buchen</h3><p class="who">Bei wem möchten Sie buchen?</p><div class="wahl">'+
    planityLink("kathi",'<strong>Kathi ↗</strong><span>Permanent Make-up, Waxing</span>',"wahl-k")+
    planityLink("lisa",'<strong>Lisa, Anna & Laura ↗</strong><span>Brasilianische Lymphdrainage, Kryolipolyse, Kosmetik, Wimpern & Brauen, Massage, Nageldesign (Laura)</span>',"wahl-k")+
    '</div><p class="note">Lieber persönlich? Schreiben Sie uns per <a href="https://wa.me/4917624388782?text=Hallo%2C%20ich%20m%C3%B6chte%20gern%20einen%20Termin%20bei%20Kalis%20vereinbaren." target="_blank" rel="noopener">WhatsApp</a> oder rufen Sie an: <a href="tel:+4917624388782">0176 / 24388782</a>.</p>'+
    '<p class="note">Fußpflege bei Sonja: Termine nur für bestehende Kundinnen, bitte telefonisch unter <a href="tel:+491725686718">0172 / 5686718</a>.</p>'+
    AGB_HINWEIS+'<div style="height:30px"></div></div>';
  oeffnen();
}
document.getElementById("zu").onclick=()=>zu(dlg);
document.addEventListener("keydown",ev=>{if(ev.key==="Escape"){if(!lb.hidden)zu(lb);else if(!dlg.hidden)zu(dlg)}});

// Handy-Menü (☰)
const burger=document.getElementById("burger"),menu=document.getElementById("menu");
function menuZu(){menu.classList.remove("auf");burger.setAttribute("aria-expanded","false")}
burger.onclick=()=>{const auf=menu.classList.toggle("auf");burger.setAttribute("aria-expanded",auf)};
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",menuZu));
dlg.addEventListener("click",ev=>{if(ev.target===dlg)zu(dlg)});

// Gesamt-Preisliste: alle Leistungen mit allen Preisen auf einen Blick
// Am Handy sind die Bereiche zum Aufklappen, am PC immer offen.
const handy=matchMedia("(max-width:640px)");
const pl=document.getElementById("preisliste");
pl.innerHTML=LEISTUNGEN.map(l=>'<details class="pl" open><summary><div><h3>'+e(l.titel)+'</h3><p class="who">bei '+e(l.wer)+'</p></div><span class="auf-zu" aria-hidden="true">+</span></summary>'+preisHinweis(l)+
  gruppenSortiert(l.gruppen).map(g=>liste({name:g.name,preise:g.preise})).join("")+
  (l.hinweis?'<p class="note">'+e(l.hinweis)+'</p>':"")+'</details>').join("");
pl.querySelectorAll("summary").forEach(s=>s.addEventListener("click",ev=>{if(!handy.matches)ev.preventDefault()}));
function preislisteAnpassen(){pl.querySelectorAll(".pl").forEach(d=>d.open=!handy.matches)}
preislisteAnpassen();handy.addEventListener("change",preislisteAnpassen);

// Aktuelles: abgelaufene Einträge ("bis" in der Vergangenheit) werden automatisch ausgeblendet
const news=(typeof AKTUELLES!=="undefined"?AKTUELLES:[]).filter(a=>!a.bis||a.bis>=heute);
const newsEl=document.getElementById("news");
newsEl.innerHTML=news.map(a=>'<article class="card'+(a.gross?' gross':'')+'">'+
  (a.bild?'<img loading="lazy" src="'+e(a.bild)+'" alt="'+e((a.label?a.label+": ":"")+a.titel)+' – Kalis Cosmetics Zierenberg bei Kassel"'+(a.bildGanz?' class="ganz"':'')+'>':'')+
  '<div><span class="lbl">'+e(a.label||"")+'</span><h3>'+e(a.titel)+'</h3><p>'+e(a.text)+'</p>'+
  (a.preise?'<ul class="card-preise">'+a.preise.map(p=>'<li><span>'+e(p.name)+'</span><b>'+(p.statt?'<s>'+e(p.statt)+'</s> ':'')+e(p.preis)+'</b></li>').join("")+'</ul>':'')+
  (a.hinweis?'<p class="card-hinweis">'+e(a.hinweis)+'</p>':'')+
  (a.buchen?planityLink(a.buchen,'Termin buchen ↗'):'')+
  (a.link?'<a class="btn" href="'+e(a.link)+'">'+e(a.linkText||"Mehr erfahren")+'</a>':'')+'</div></article>').join("");
if(!news.length)document.getElementById("aktuelles").hidden=true;

document.getElementById("team-g").innerHTML=TEAM.map(m=>"<div>"+
  (m.foto?'<img loading="lazy" src="'+e(m.foto)+'" alt="'+e(m.name)+'">':'<div class="ph"></div>')+
  '<h3>'+e(m.name)+'</h3><p class="rolle">'+e(m.rolle)+'</p>'+(m.text?'<p>'+e(m.text)+'</p>':'')+'</div>').join("");
// Galerie: erst 9 Bilder, Rest per "Mehr anzeigen"; Klick auf ein Bild öffnet es groß
// am Handy 2 Bilder pro Reihe -> 10 zeigen, am PC 3 pro Reihe -> 9 zeigen (keine leeren Plätze)
const ANZAHL=handy.matches?10:9,gal=document.getElementById("gal"),mehr=document.getElementById("gal-mehr");
gal.innerHTML=GALERIE.map((u,i)=>'<button class="gi'+(i>=ANZAHL?' zu':'')+'" data-i="'+i+'" aria-label="Bild '+(i+1)+' vergrößern"><img loading="lazy" src="'+e(u)+'" alt="Einblick ins Kosmetikstudio Kalis Cosmetics in Zierenberg bei Kassel"></button>').join("");
if(GALERIE.length>ANZAHL){mehr.hidden=false;mehr.onclick=()=>{gal.querySelectorAll(".zu").forEach(b=>b.classList.remove("zu"));mehr.hidden=true}}
const lbImg=document.getElementById("lb-img");let lbI=0;
function zeigeBild(i){lbI=(i+GALERIE.length)%GALERIE.length;lbImg.src=GALERIE[lbI];lbImg.alt="Einblick "+(lbI+1)+" von "+GALERIE.length}
gal.querySelectorAll(".gi").forEach(b=>b.onclick=()=>{zeigeBild(+b.dataset.i);auf(lb)});
document.getElementById("lb-prev").onclick=()=>zeigeBild(lbI-1);
document.getElementById("lb-next").onclick=()=>zeigeBild(lbI+1);
document.getElementById("lb-zu").onclick=()=>zu(lb);
lb.addEventListener("click",ev=>{if(ev.target===lb)zu(lb)});
document.addEventListener("keydown",ev=>{if(lb.hidden)return;if(ev.key==="ArrowLeft")zeigeBild(lbI-1);if(ev.key==="ArrowRight")zeigeBild(lbI+1)});
// Wischen auf dem Handy
let tx=0;lb.addEventListener("touchstart",ev=>tx=ev.touches[0].clientX,{passive:true});
lb.addEventListener("touchend",ev=>{const d=ev.changedTouches[0].clientX-tx;if(Math.abs(d)>40)zeigeBild(lbI+(d<0?1:-1))});
