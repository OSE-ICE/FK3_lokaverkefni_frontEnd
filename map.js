// Get the screen width
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Set the zoom level based on the screen width
var zoomLevel = screenWidth < 600 ? 5 : 6;

var map = L.map('mapid').setView([64.963051, -19.020835], zoomLevel);

// Function to navigate to the routes page with a specific route ID
function navigateToRoute(routeId) {
    window.location.href = `routes.html?#route-${routeId}`;
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

var marker1 = L.marker([64.07326994463801, -21.766959987580776]).addTo(map);
marker1.bindTooltip('Heiðmörk', {permanent: false, direction: 'top'});
marker1.on('click', function() {
    navigateToRoute('1');
});

var marker2 = L.marker([64.03021537698805, -21.612034337595105]).addTo(map);
marker2.bindTooltip('Jaðarinn', {permanent: false, direction: 'top'});
marker2.on('click', function() {
    navigateToRoute('2');
});

var marker3 = L.marker([64.149568984285, -19.75352299399674]).addTo(map);
marker3.bindTooltip('Stöng - Háifoss', {permanent: false, direction: 'top'});
marker3.on('click', function() {
    navigateToRoute('3');
});

var marker4 = L.marker([63.9635834377259, -21.940164556726813]).addTo(map);
marker4.bindTooltip('Sveifluháls', {permanent: false, direction: 'top'});
marker4.on('click', function() {
    navigateToRoute('4');
});

var marker5 = L.marker([64.06902593560517, -21.95956690236926]).addTo(map);
marker5.bindTooltip('Álftanes Hringur', {permanent: false, direction: 'top'});
marker5.on('click', function() {
    navigateToRoute('5');
});

var marker6 = L.marker([64.02111489325762, -21.20996106415987]).addTo(map);
marker6.bindTooltip('Reykjadalur - Hellisheiði - Þúsundvatnaleið', {permanent: false, direction: 'top'});
marker6.on('click', function() {
    navigateToRoute('6');
});

var marker7 = L.marker([63.690491896122694, -19.54050824046135]).addTo(map);
marker7.bindTooltip('Þórsmörk - Strútslaug', {permanent: false, direction: 'top'});
marker7.on('click', function() {
    navigateToRoute('7');
});

var marker8 = L.marker([63.76588996499777, -19.373729825019836]).addTo(map);
marker8.bindTooltip('Emstrur - Skógar', {permanent: false, direction: 'top'});
marker8.on('click', function() {
    navigateToRoute('8');
});

var marker9 = L.marker([64.08871997147799, -21.823120918124914]).addTo(map);
marker9.bindTooltip('Heiðmörk - Hafnarfjörður - Garðabær', {permanent: false, direction: 'top'});
marker9.on('click', function() {
    navigateToRoute('9');
});

var marker10 = L.marker([64.20882032252848, -21.714391373097897]).addTo(map);
marker10.bindTooltip('Esjan hringur', {permanent: false, direction: 'top'});
marker10.on('click', function() {
    navigateToRoute('10');
});

var marker11 = L.marker([64.12736632861197, -21.633058581501245]).addTo(map);
marker11.bindTooltip('Reykjafell Mosfellsbær', {permanent: false, direction: 'top'});
marker11.on('click', function() {
    navigateToRoute('11');
});

var marker12 = L.marker([64.2086829431355, -21.441427990794182]).addTo(map);
marker12.bindTooltip('Skálafell', {permanent: false, direction: 'top'});
marker12.on('click', function() {
    navigateToRoute('12');
});

var marker13 = L.marker([63.903119238093495, -22.42117532528937]).addTo(map);
marker13.bindTooltip('Bláa lónið - Þorbjörn', {permanent: false, direction: 'top'});
marker13.on('click', function() {
    navigateToRoute('13');
});

var marker14 = L.marker([64.08874528482556, -21.823212699964643]).addTo(map);
marker14.bindTooltip('Búrfellsgjá - Helgafell', {permanent: false, direction: 'top'});
marker14.on('click', function() {
    navigateToRoute('14');
});

var marker15 = L.marker([63.84957446716726, -22.110376618802547]).addTo(map);
marker15.bindTooltip('Krísuvíkurberg', {permanent: false, direction: 'top'});
marker15.on('click', function() {
    navigateToRoute('15');
});

var marker16 = L.marker([63.854794884100556, -22.4462235532701]).addTo(map);
marker16.bindTooltip('Grindavík (Þorbjörninn - Bláa lónið)', {permanent: false, direction: 'top'});
marker16.on('click', function() {
    navigateToRoute('16');
});

var marker17 = L.marker([63.990403935313225, -19.059819085523486]).addTo(map);
marker17.bindTooltip('Landmannalaugar Suðurnámur', {permanent: false, direction: 'top'});
marker17.on('click', function() {
    navigateToRoute('17');
});

var marker18 = L.marker([63.97122094407678, -21.951816072687507]).addTo(map);
marker18.bindTooltip('Djúpavatnsleið - Seltún - Kleifarvatn', {permanent: false, direction: 'top'});
marker18.on('click', function() {
    navigateToRoute('18');
});

var marker19 = L.marker([63.96867929957807, -21.956949569284916]).addTo(map);
marker19.bindTooltip('Hellutindar - Djúpavatnsleið', {permanent: false, direction: 'top'});
marker19.on('click', function() {
    navigateToRoute('19');
});

var marker20 = L.marker([64.01968167163432, -21.282510794699192]).addTo(map);
marker20.bindTooltip('Hrómundartindur', {permanent: false, direction: 'top'});
marker20.on('click', function() {
    navigateToRoute('20');
});

var marker21 = L.marker([64.05694409273565, -21.531754229217768]).addTo(map);
marker21.bindTooltip('Bláfjallahringur', {permanent: false, direction: 'top'});
marker21.on('click', function() {
    navigateToRoute('21');
});

var marker22 = L.marker([64.26702694036067, -21.830111760646105]).addTo(map);
marker22.bindTooltip('Esjan (Kerhólakambur og Þverfellshorn)', {permanent: false, direction: 'top'});
marker22.on('click', function() {
    navigateToRoute('22');
});

var marker23 = L.marker([64.12262552417815, -21.315916869789362]).addTo(map);
marker23.bindTooltip('Nesjavallahringur', {permanent: false, direction: 'top'});
marker23.on('click', function() {
    navigateToRoute('23');
});

var marker24 = L.marker([63.98942895233631, -19.058357952162623]).addTo(map);
marker24.bindTooltip('Landmannalaugar Skalli', {permanent: false, direction: 'top'});
marker24.on('click', function() {
    navigateToRoute('24');
});

var marker25 = L.marker([63.99164428934455, -19.05849021859467]).addTo(map);
marker25.bindTooltip('Laugavegurinn', {permanent: false, direction: 'top'});
marker25.on('click', function() {
    navigateToRoute('25');
});

var marker26 = L.marker([64.0526659693569, -21.31926099769771]).addTo(map);
marker26.bindTooltip('Hellisheiðarvirkjun hringur', {permanent: false, direction: 'top'});
marker26.on('click', function() {
    navigateToRoute('26');
});

var marker27 = L.marker([63.947817999869585, -22.00008393265307]).addTo(map);
marker27.bindTooltip('Djúpavatnsleið hringur', {permanent: false, direction: 'top'});
marker27.on('click', function() {
    navigateToRoute('27');
});

var marker28 = L.marker([65.70792, -20.25917]).addTo(map);
marker28.bindTooltip('Refasveitar hringur', {permanent: false, direction: 'top'});
marker28.on('click', function() {
    navigateToRoute('28');
});

var marker29 = L.marker([65.82102201636383, -20.274211852077414]).addTo(map);
marker29.bindTooltip('Skagaströnd', {permanent: false, direction: 'top'});
marker29.on('click', function() {
    navigateToRoute('29');
});

var marker30 = L.marker([65.49988911997406, -20.08879750914292]).addTo(map);
marker30.bindTooltip('Svínavatnshringur', {permanent: false, direction: 'top'});
marker30.on('click', function() {
    navigateToRoute('30');
});

var marker31 = L.marker([65.33339001867634, -19.865229992174225]).addTo(map);
marker31.bindTooltip('Friðmundarvatns-leið', {permanent: false, direction: 'top'});
marker31.on('click', function() {
    navigateToRoute('31');
});

var marker32 = L.marker([65.27516, -19.76705]).addTo(map);
marker32.bindTooltip('Blöndulón um Svínadal', {permanent: false, direction: 'top'});
marker32.on('click', function() {
    navigateToRoute('32');
});

var marker33 = L.marker([66.05467, -20.027240000000003]).addTo(map);
marker33.bindTooltip('Skaginn rangsælis', {permanent: false, direction: 'top'});
marker33.on('click', function() {
    navigateToRoute('33');
});

var marker34 = L.marker([65.29568, -19.64113]).addTo(map);
marker34.bindTooltip('Blöndulón frá Svartárdal', {permanent: false, direction: 'top'});
marker34.on('click', function() {
    navigateToRoute('34');
});

var marker35 = L.marker([63.85670771822333, -22.24679544568062]).addTo(map);
marker35.bindTooltip('Fagradalsfjall hringur', {permanent: false, direction: 'top'});
marker35.on('click', function() {
    navigateToRoute('35');
});

var marker36 = L.marker([64.95990816503763, -14.17230217717588]).addTo(map);
marker36.bindTooltip('Skessa og Hádegisfjall', {permanent: false, direction: 'top'});
marker36.on('click', function() {
    navigateToRoute('36');
});

var marker37 = L.marker([65.5227, -13.8092]).addTo(map);
marker37.bindTooltip('Borgarfjörður Eystri - Brúnavík', {permanent: false, direction: 'top'});
marker37.on('click', function() {
    navigateToRoute('37');
});

var marker38 = L.marker([65.5278, -13.8179]).addTo(map);
marker38.bindTooltip('Borgarfjörður Eystri - Húsavík - Loðmundarfjörður', {permanent: false, direction: 'top'});
marker38.on('click', function() {
    navigateToRoute('38');
});

var marker39 = L.marker([65.3823, -13.7257]).addTo(map);
marker39.bindTooltip('Húsavíkurskáli - Borgarfjörður eystri', {permanent: false, direction: 'top'});
marker39.on('click', function() {
    navigateToRoute('39');
});

var marker40 = L.marker([65.5240, -13.8083]).addTo(map);
marker40.bindTooltip('Borgarfjörður eystri - Breiðavík', {permanent: false, direction: 'top'});
marker40.on('click', function() {
    navigateToRoute('40');
});

var marker41 = L.marker([64.4844, -15.0331]).addTo(map);
marker41.bindTooltip('Einstigið - Stafafell', {permanent: false, direction: 'top'});
marker41.on('click', function() {
    navigateToRoute('41');
});

var marker42 = L.marker([65.0337, -14.2203]).addTo(map);
marker42.bindTooltip('Háls - Stífla - Grásteinn - skógræktin', {permanent: false, direction: 'top'});
marker42.on('click', function() {
    navigateToRoute('42');
});

var marker43 = L.marker([65.0605, -13.9919]).addTo(map);
marker43.bindTooltip('Mjóeyri - Helgustaðahreppur - Mjóeyri', {permanent: false, direction: 'top'});
marker43.on('click', function() {
    navigateToRoute('43');
});

var marker44 = L.marker([64.0160, -16.9711]).addTo(map);
marker44.bindTooltip('Skaftafell - Bæjarstaðaskógur - Skaftafell', {permanent: false, direction: 'top'});
marker44.on('click', function() {
    navigateToRoute('44');
});

var marker45 = L.marker([65.1864, -14.0101]).addTo(map);
marker45.bindTooltip('Mjóafjarðarbotn - Asknes - Mjóafjarðarbotn', {permanent: false, direction: 'top'});
marker45.on('click', function() {
    navigateToRoute('45');
});

var marker46 = L.marker([64.1549, -19.6725]).addTo(map);
marker46.bindTooltip('Hólaskógur - Háifoss - Stöng - Þjórsárdalshraun', {permanent: false, direction: 'top'});
marker46.on('click', function() {
    navigateToRoute('46');
});

var marker47 = L.marker([63.7106, -19.7329]).addTo(map);
marker47.bindTooltip('Tindfjallasel og Miðdalur', {permanent: false, direction: 'top'});
marker47.on('click', function() {
    navigateToRoute('47');
});

var marker48 = L.marker([64.0808, -21.8760]).addTo(map);
marker48.bindTooltip('Vífilstaðavatn - Guðmundarlundur - Heiðmörk hringur', {permanent: false, direction: 'top'});
marker48.on('click', function() {
    navigateToRoute('48');
});

var marker49 = L.marker([64.2243, -15.6939]).addTo(map);
marker49.bindTooltip('Hestgerðishnúta hringur', {permanent: false, direction: 'top'});
marker49.on('click', function() {
    navigateToRoute('49');
});

var marker50 = L.marker([64.4224, -14.8790]).addTo(map);
marker50.bindTooltip('Stafafellsfjöll hjóluð baka til', {permanent: false, direction: 'top'});
marker50.on('click', function() {
    navigateToRoute('50');
});

var marker51 = L.marker([64.0515, -21.9453]).addTo(map);
marker51.bindTooltip('Ásfjall - Helgafell - Búrfellsgjá', {permanent: false, direction: 'top'});
marker51.on('click', function() {
    navigateToRoute('51');
});

var marker52 = L.marker([66.0733, -23.1185]).addTo(map);
marker52.bindTooltip('Ísafjörður samansafn af fjallahjólaleiðum', {permanent: false, direction: 'top'});
marker52.on('click', function(){
    window.open('https://www.mtbisafjordur.is', '_blank');
});

var marker53 = L.marker([63.9710, -21.9533]).addTo(map);
marker53.bindTooltip('Djúpavatnsleið - Seltún - Kleifarvatn', {permanent: false, direction: 'top'});
marker53.on('click', function() {
    navigateToRoute('53');
});

var marker54 = L.marker([65.6615, -18.2112]).addTo(map);
marker54.bindTooltip('Hlíðarfjall - Kjarnaskógur', {permanent: false, direction: 'top'});
marker54.on('click', function() {
    navigateToRoute('54');
});

var marker55 = L.marker([63.9849, -21.6505]).addTo(map);
marker55.bindTooltip('Heiðin há - Bláfjöll - Jaðarinn', {permanent: false, direction: 'top'});
marker55.on('click', function() {
    navigateToRoute('55');
});

var marker56 = L.marker([65.7992, -18.0579]).addTo(map);
marker56.bindTooltip('Víkurskarð - Grenivík', {permanent: false, direction: 'top'});
marker56.on('click', function() {
    navigateToRoute('56');
});

var marker57 = L.marker([65.7199, -17.3707]).addTo(map);
marker57.bindTooltip('Reykjadalur-Másvatn-Ljótsstaðir-Laxárdalur-Þverá-Laugar', {permanent: false, direction: 'top'});
marker57.on('click', function() {
    navigateToRoute('57');
});

var marker58 = L.marker([65.5582, -16.9509]).addTo(map);
marker58.bindTooltip('Garður - Lúdentaborgir - Búrfellshraun - Námaskarð.', {permanent: false, direction: 'top'});
marker58.on('click', function() {
    navigateToRoute('58');
});

var marker59 = L.marker([65.7167, -18.0414]).addTo(map);
marker59.bindTooltip('Vaðlaheiði á Rafmagnshjóli', {permanent: false, direction: 'top'});
marker59.on('click', function() {
    navigateToRoute('59');
});

var marker60 = L.marker([65.8879, -17.3188]).addTo(map);
marker60.bindTooltip('Mýrarkvísl niður í Aðaldal', {permanent: false, direction: 'top'});
marker60.on('click', function() {
    navigateToRoute('60');
});

var marker61 = L.marker([65.6486, -16.9148]).addTo(map);
marker61.bindTooltip('Hlíðarfjall Mývatnsveit', {permanent: false, direction: 'top'});
marker61.on('click', function() {
    navigateToRoute('61');
});

var marker62 = L.marker([65.8804, -16.969]).addTo(map);
marker62.bindTooltip('Þeistareykjasvæði', {permanent: false, direction: 'top'});
marker62.on('click', function() {
    navigateToRoute('62');
});

var marker63 = L.marker([65.6224, -17.8109]).addTo(map);
marker63.bindTooltip('Illugastaðir - Eyjadalsá', {permanent: false, direction: 'top'});
marker63.on('click', function() {
    navigateToRoute('63');
});

var marker64 = L.marker([65.7218, -17.3623]).addTo(map);
marker64.bindTooltip('Farið frá Laugum yfir í Laxárdal', {permanent: false, direction: 'top'});
marker64.on('click', function() {
    navigateToRoute('64');
});

var marker65 = L.marker([65.6428, -16.8929]).addTo(map);
marker65.bindTooltip('Hjólað um bakland Mývatnssveitar', {permanent: false, direction: 'top'});
marker65.on('click', function() {
    navigateToRoute('65');
});

var marker66 = L.marker([65.8964, -18.0693]).addTo(map);
marker66.bindTooltip('Laufás í gegnum Skuggabjargar og niður Víkur og til Laufás', {permanent: false, direction: 'top'});
marker66.on('click', function() {
    navigateToRoute('66');
});

var marker67 = L.marker([65.5783, -17.7719]).addTo(map);
marker67.bindTooltip('Reykir - Bleikur - Reykir', {permanent: false, direction: 'top'});
marker67.on('click', function() {
    navigateToRoute('67');
});

var marker68 = L.marker([65.6449, -16.9149]).addTo(map);
marker68.bindTooltip('Mývatnssveit að gefa', {permanent: false, direction: 'top'});
marker68.on('click', function() {
    navigateToRoute('68');
});

var marker69 = L.marker([65.1778, -14.0982]).addTo(map);
marker69.bindTooltip('Mjóifjörður - Brekkuþorp', {permanent: false, direction: 'top'});
marker69.on('click', function() {
    navigateToRoute('69');
});

var marker70 = L.marker([65.7757, -17.9127]).addTo(map);
marker70.bindTooltip('Fnjóskadalur hringur', {permanent: false, direction: 'top'});
marker70.on('click', function() {
    navigateToRoute('70');
});

var marker71 = L.marker([65.6491, -16.9172]).addTo(map);
marker71.bindTooltip('Hlíðarfjall - Leirhnjúkur - Víti', {permanent: false, direction: 'top'});
marker71.on('click', function() {
    navigateToRoute('71');
});

var marker72 = L.marker([65.7228, -17.9153]).addTo(map);
marker72.bindTooltip('Vaðlaheiði hringur', {permanent: false, direction: 'top'});
marker72.on('click', function() {
    navigateToRoute('72');
});

var marker73 = L.marker([65.6653, -18.4875]).addTo(map);
marker73.bindTooltip('Baugasel í Barkardal', {permanent: false, direction: 'top'});
marker73.on('click', function() {
    navigateToRoute('73');
});

var marker74 = L.marker([66.0253, -16.4959]).addTo(map);
marker74.bindTooltip('Ásbyrgi - Hljóðaklettar - Ásbyrgi', {permanent: false, direction: 'top'});
marker74.on('click', function() {
    navigateToRoute('74');
});

var marker75 = L.marker([65.7131, -17.7293]).addTo(map);
marker75.bindTooltip('Ljósavatn hringur', {permanent: false, direction: 'top'});
marker75.on('click', function() {
    navigateToRoute('75');
});

var marker76 = L.marker([65.6216, -17.8127]).addTo(map);
marker76.bindTooltip('Illugastaðir - Öxará', {permanent: false, direction: 'top'});
marker76.on('click', function() {
    navigateToRoute('76');
});

var marker77 = L.marker([65.5021, -17.4550]).addTo(map);
marker77.bindTooltip('Kiðagil - Aldeyjarfoss - Kiðagil', {permanent: false, direction: 'top'});
marker77.on('click', function() {
    navigateToRoute('77');
});

var marker78 = L.marker([65.6889, -18.1282]).addTo(map);
marker78.bindTooltip('Akureyri - Gáseyri - Akureyri', {permanent: false, direction: 'top'});
marker78.on('click', function() {
    navigateToRoute('78');
});

var marker79 = L.marker([64.9226, -23.2669]).addTo(map);
marker79.bindTooltip('Grundarfjörður - Langihryggur', {permanent: false, direction: 'top'});
marker79.on('click', function() {
    navigateToRoute('79');
});

var marker80 = L.marker([64.7020, -20.8688]).addTo(map);
marker80.bindTooltip('Húsafell', {permanent: false, direction: 'top'});
marker80.on('click', function() {
    navigateToRoute('80');
});

var marker81 = L.marker([64.0209, -21.2120]).addTo(map);
marker81.bindTooltip('Reykjadalur blá leið', {permanent: false, direction: 'top'});
marker81.on('click', function() {
    navigateToRoute('81');
});