// Setup
/*const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all
let c = data.map((p) => p);
c.sort(function (a, b) {
  return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) || 0;
});

// or, using arrow function syntax...
c.sort((a, b) => {
  return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) || 0;
});
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
// assume the array "c" of people/person objects
// and we want to sort on credit score
c.sort((a, b) => a.creditScore - b.creditScore);
app.get('/api/items', (req, res) => {
  res.json({ message: 'fetch all items' });
});

// Get one
let o = data.find((p) => p.id == itemId);
// Extract the item identifier
let itemId = req.params.itemId;
// Make sure it's valid
if (itemId > colours.length) {
  res.status(404).send('Resource not found');
} else {
  res.json(colours[itemId]);
}
app.get('/api/items/:itemId', (req, res) => {
  res.json({ message: `get user with identifier: ${req.params.id}` });
});

// Add new
// Extract the incoming data from { "colourName": "Purple" }
let newItem = req.body.colourName;
// Add another item to the array
colours.push(newItem);
// Return the result; RFC 7231 tells us that it must return HTTP status 201
res.status(201).json({ message: `added ${newItem} as item identifier ${colours.length}` });
// This route expects a JSON object in the body, e.g. { "firstName": "Peter", "lastName": "McIntyre" }
app.post('/api/items', (req, res) => {
  // MUST return HTTP 201
  res.status(201).json({ message: `added a new item: ${req.body.firstName} ${req.body.lastName}` });
});

// Edit existing
// This route expects a JSON object in the body, e.g. { "id": 123, "firstName": "Peter", "lastName": "McIntyre" }
app.put('/api/items/:id', (req, res) => {
  res.json({
    message: `updated item with identifier: ${req.params.id} to ${req.body.firstName} ${req.body.lastName}`,
  });
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  res.status(200).json({ message: `deleted user with identifier: ${req.params.id}` });
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
//let colours = [{ "id": 1, "colours":'Red', "id": 2, "colours":'Green', "id": 3, "colours":'Blue', "id": 4, "colours":'Yellow', "id": 5, "colours":'Aqua', "id": 6, "colours":'Fuschia'}];
let numbers = [4, 2, 5, 1, 3];
// Assume you have a 'data' array defined somewhere for sorting
/*let data = [
  {
    lastName: 'Doe',
    firstName: 'John',
    creditScore: 750,
  },
  {
    lastName: 'Smith',
    firstName: 'Alice',
    creditScore: 800,
  },
  // ... other data objects
];*/

let data = [{"id":1,"first_name":"Nata","last_name":"Dahlen","email":"ndahlen0@addthis.com","gender":"Female","birthDate":"1/26/1995","web":"https://163.com","creditScore":705,"rating":14.18},
{"id":2,"first_name":"Amberly","last_name":"Kock","email":"akock1@newyorker.com","gender":"Female","birthDate":"2/18/1998","web":"https://nps.gov","creditScore":744,"rating":7.27},
{"id":3,"first_name":"Cortie","last_name":"Scaice","email":"cscaice2@myspace.com","gender":"Male","birthDate":"4/27/1999","web":"https://sina.com.cn","creditScore":543,"rating":11.83},
{"id":4,"first_name":"Selinda","last_name":"McIlveen","email":"smcilveen3@mapquest.com","gender":"Female","birthDate":"12/25/1992","web":"http://oaic.gov.au","creditScore":499,"rating":12.97},
{"id":5,"first_name":"Silvanus","last_name":"Spata","email":"sspata4@g.co","gender":"Male","birthDate":"7/10/1998","web":"https://deviantart.com","creditScore":407,"rating":9.64},
{"id":6,"first_name":"Jaquenetta","last_name":"Pendell","email":"jpendell5@instagram.com","gender":"Female","birthDate":"10/27/1999","web":"https://mtv.com","creditScore":520,"rating":9.39},
{"id":7,"first_name":"Homerus","last_name":"Tomkinson","email":"htomkinson6@gizmodo.com","gender":"Male","birthDate":"5/1/1994","web":"https://soundcloud.com","creditScore":466,"rating":10.95},
{"id":8,"first_name":"Hy","last_name":"Kuhn","email":"hkuhn7@psu.edu","gender":"Male","birthDate":"2/21/1995","web":"https://skyrock.com","creditScore":463,"rating":1.61},
{"id":9,"first_name":"Minni","last_name":"Yannoni","email":"myannoni8@google.de","gender":"Female","birthDate":"8/18/1999","web":"http://mysql.com","creditScore":702,"rating":5.18},
{"id":10,"first_name":"Immanuel","last_name":"Managh","email":"imanagh9@multiply.com","gender":"Male","birthDate":"12/20/1993","web":"http://nature.com","creditScore":361,"rating":3.31},
{"id":11,"first_name":"Milena","last_name":"Whardley","email":"mwhardleya@baidu.com","gender":"Female","birthDate":"1/9/1994","web":"https://dedecms.com","creditScore":393,"rating":15.36},
{"id":12,"first_name":"Minne","last_name":"Lothean","email":"mlotheanb@nasa.gov","gender":"Female","birthDate":"5/11/1999","web":"http://washingtonpost.com","creditScore":399,"rating":14.76},
{"id":13,"first_name":"Justen","last_name":"Rowntree","email":"jrowntreec@chicagotribune.com","gender":"Male","birthDate":"4/27/1992","web":"https://livejournal.com","creditScore":425,"rating":2.27},
{"id":14,"first_name":"Hank","last_name":"Cornely","email":"hcornelyd@hc360.com","gender":"Male","birthDate":"12/19/1996","web":"https://businessinsider.com","creditScore":432,"rating":19.93},
{"id":15,"first_name":"Karolina","last_name":"Lofting","email":"kloftinge@stumbleupon.com","gender":"Female","birthDate":"1/23/1997","web":"http://last.fm","creditScore":387,"rating":2.37},
{"id":16,"first_name":"Jocelyne","last_name":"Thurman","email":"jthurmanf@usnews.com","gender":"Female","birthDate":"4/27/1996","web":"https://smugmug.com","creditScore":649,"rating":12.24},
{"id":17,"first_name":"Delainey","last_name":"Hordle","email":"dhordleg@clickbank.net","gender":"Male","birthDate":"12/28/1993","web":"http://ftc.gov","creditScore":320,"rating":3.54},
{"id":18,"first_name":"Anabal","last_name":"Riggott","email":"ariggotth@merriam-webster.com","gender":"Female","birthDate":"9/2/1997","web":"https://boston.com","creditScore":230,"rating":3.53},
{"id":19,"first_name":"Paxton","last_name":"Trenaman","email":"ptrenamani@alibaba.com","gender":"Male","birthDate":"7/7/1997","web":"https://1688.com","creditScore":486,"rating":12.66},
{"id":20,"first_name":"Gonzales","last_name":"Maevela","email":"gmaevelaj@ustream.tv","gender":"Male","birthDate":"4/18/1995","web":"http://columbia.edu","creditScore":444,"rating":11.57},
{"id":21,"first_name":"Cherish","last_name":"Fanthome","email":"cfanthomek@instagram.com","gender":"Non-binary","birthDate":"1/17/1996","web":"https://blogger.com","creditScore":638,"rating":19.13},
{"id":22,"first_name":"Cody","last_name":"Hedan","email":"chedanl@histats.com","gender":"Male","birthDate":"2/12/1993","web":"https://histats.com","creditScore":800,"rating":4.18},
{"id":23,"first_name":"Celine","last_name":"Duinkerk","email":"cduinkerkm@ezinearticles.com","gender":"Female","birthDate":"4/12/1992","web":"https://skyrock.com","creditScore":632,"rating":5.58},
{"id":24,"first_name":"Eda","last_name":"Caesar","email":"ecaesarn@github.io","gender":"Non-binary","birthDate":"5/9/1994","web":"https://discovery.com","creditScore":270,"rating":1.75},
{"id":25,"first_name":"Astrix","last_name":"Grinyov","email":"agrinyovo@admin.ch","gender":"Female","birthDate":"1/28/1995","web":"https://nifty.com","creditScore":342,"rating":11.48},
{"id":26,"first_name":"Levey","last_name":"Courtin","email":"lcourtinp@hatena.ne.jp","gender":"Male","birthDate":"3/12/1999","web":"http://google.com.au","creditScore":727,"rating":14.61},
{"id":27,"first_name":"Mada","last_name":"Ballsdon","email":"mballsdonq@indiatimes.com","gender":"Female","birthDate":"9/29/1997","web":"http://meetup.com","creditScore":721,"rating":17.75},
{"id":28,"first_name":"Guenevere","last_name":"Jeannel","email":"gjeannelr@ucla.edu","gender":"Female","birthDate":"3/9/1995","web":"http://google.ru","creditScore":743,"rating":10.62},
{"id":29,"first_name":"Lanae","last_name":"Aysik","email":"laysiks@ycombinator.com","gender":"Female","birthDate":"6/6/1999","web":"https://nsw.gov.au","creditScore":345,"rating":5.39},
{"id":30,"first_name":"Gisela","last_name":"Pithie","email":"gpithiet@dell.com","gender":"Female","birthDate":"9/26/1993","web":"http://princeton.edu","creditScore":441,"rating":15.52},
{"id":31,"first_name":"Faye","last_name":"Goodricke","email":"fgoodrickeu@amazon.co.jp","gender":"Female","birthDate":"7/18/1999","web":"https://alexa.com","creditScore":639,"rating":8.19},
{"id":32,"first_name":"Bari","last_name":"Billyard","email":"bbillyardv@squidoo.com","gender":"Female","birthDate":"2/29/1992","web":"https://nih.gov","creditScore":757,"rating":9.4},
{"id":33,"first_name":"Valera","last_name":"Thurlow","email":"vthurloww@hatena.ne.jp","gender":"Female","birthDate":"6/5/1993","web":"http://topsy.com","creditScore":218,"rating":8.18},
{"id":34,"first_name":"Alysia","last_name":"Plevey","email":"apleveyx@jigsy.com","gender":"Genderqueer","birthDate":"8/28/1998","web":"http://technorati.com","creditScore":642,"rating":10.39},
{"id":35,"first_name":"Derek","last_name":"Duffyn","email":"dduffyny@upenn.edu","gender":"Male","birthDate":"1/2/1993","web":"https://google.pl","creditScore":595,"rating":2.84},
{"id":36,"first_name":"Dara","last_name":"Toulmin","email":"dtoulminz@fastcompany.com","gender":"Female","birthDate":"2/28/1994","web":"http://yahoo.com","creditScore":302,"rating":3.92},
{"id":37,"first_name":"Lolly","last_name":"Tourot","email":"ltourot10@latimes.com","gender":"Female","birthDate":"4/21/1997","web":"https://washington.edu","creditScore":513,"rating":3.54},
{"id":38,"first_name":"Belia","last_name":"Arsnell","email":"barsnell11@google.com.hk","gender":"Female","birthDate":"6/13/1995","web":"http://phpbb.com","creditScore":629,"rating":5.88},
{"id":39,"first_name":"Shepperd","last_name":"Curtois","email":"scurtois12@smugmug.com","gender":"Male","birthDate":"5/5/1997","web":"https://house.gov","creditScore":557,"rating":11.7},
{"id":40,"first_name":"Averyl","last_name":"Baddow","email":"abaddow13@virginia.edu","gender":"Genderqueer","birthDate":"8/9/1998","web":"http://godaddy.com","creditScore":742,"rating":2.23},
{"id":41,"first_name":"Kerrie","last_name":"Yitzhakov","email":"kyitzhakov14@google.fr","gender":"Female","birthDate":"5/29/1992","web":"http://list-manage.com","creditScore":434,"rating":4.68},
{"id":42,"first_name":"Curran","last_name":"Gowar","email":"cgowar15@webeden.co.uk","gender":"Male","birthDate":"3/5/1993","web":"https://oakley.com","creditScore":475,"rating":7.95},
{"id":43,"first_name":"Olav","last_name":"Costelloe","email":"ocostelloe16@cocolog-nifty.com","gender":"Male","birthDate":"8/25/1998","web":"http://usatoday.com","creditScore":495,"rating":10.59},
{"id":44,"first_name":"Dot","last_name":"Dufaire","email":"ddufaire17@foxnews.com","gender":"Female","birthDate":"2/7/1992","web":"http://macromedia.com","creditScore":359,"rating":18.62},
{"id":45,"first_name":"Anna","last_name":"Dybell","email":"adybell18@arizona.edu","gender":"Female","birthDate":"12/24/1993","web":"https://shop-pro.jp","creditScore":511,"rating":16.31},
{"id":46,"first_name":"Aeriela","last_name":"Afonso","email":"aafonso19@pbs.org","gender":"Female","birthDate":"9/12/1992","web":"http://cbslocal.com","creditScore":352,"rating":3.41},
{"id":47,"first_name":"Farra","last_name":"Hanley","email":"fhanley1a@plala.or.jp","gender":"Female","birthDate":"12/30/1996","web":"https://dell.com","creditScore":412,"rating":2.35},
{"id":48,"first_name":"Ives","last_name":"Cobello","email":"icobello1b@sourceforge.net","gender":"Male","birthDate":"5/29/1994","web":"https://japanpost.jp","creditScore":629,"rating":7.04},
{"id":49,"first_name":"Nolie","last_name":"Ovid","email":"novid1c@google.pl","gender":"Female","birthDate":"8/9/1996","web":"http://aol.com","creditScore":209,"rating":19.35},
{"id":50,"first_name":"Raychel","last_name":"Clayworth","email":"rclayworth1d@nymag.com","gender":"Female","birthDate":"1/5/1999","web":"https://shop-pro.jp","creditScore":393,"rating":2.37},
{"id":51,"first_name":"Timothee","last_name":"Biggs","email":"tbiggs1e@hugedomains.com","gender":"Male","birthDate":"10/14/1996","web":"http://dmoz.org","creditScore":244,"rating":17.62},
{"id":52,"first_name":"Adi","last_name":"Alsop","email":"aalsop1f@thetimes.co.uk","gender":"Female","birthDate":"3/14/1998","web":"https://elegantthemes.com","creditScore":495,"rating":4.28},
{"id":53,"first_name":"Pippa","last_name":"Sigge","email":"psigge1g@photobucket.com","gender":"Female","birthDate":"9/16/1992","web":"https://jigsy.com","creditScore":406,"rating":13.11},
{"id":54,"first_name":"Manya","last_name":"Shreeves","email":"mshreeves1h@macromedia.com","gender":"Female","birthDate":"11/5/1994","web":"https://cnbc.com","creditScore":344,"rating":18.19},
{"id":55,"first_name":"Harli","last_name":"Nuccii","email":"hnuccii1i@marketwatch.com","gender":"Female","birthDate":"11/17/1994","web":"http://ucsd.edu","creditScore":327,"rating":16.93},
{"id":56,"first_name":"Malena","last_name":"Junes","email":"mjunes1j@last.fm","gender":"Female","birthDate":"1/6/1998","web":"http://fema.gov","creditScore":671,"rating":11.69},
{"id":57,"first_name":"Brander","last_name":"Burburough","email":"bburburough1k@biglobe.ne.jp","gender":"Male","birthDate":"9/11/1998","web":"http://census.gov","creditScore":355,"rating":12.47},
{"id":58,"first_name":"Jed","last_name":"Jarvie","email":"jjarvie1l@theglobeandmail.com","gender":"Male","birthDate":"7/20/1997","web":"https://sbwire.com","creditScore":593,"rating":6.6},
{"id":59,"first_name":"Vevay","last_name":"Wetherby","email":"vwetherby1m@i2i.jp","gender":"Female","birthDate":"10/7/1998","web":"http://so-net.ne.jp","creditScore":247,"rating":10.83},
{"id":60,"first_name":"Ddene","last_name":"Feedham","email":"dfeedham1n@washingtonpost.com","gender":"Female","birthDate":"3/14/1992","web":"http://paypal.com","creditScore":258,"rating":6.68},
{"id":61,"first_name":"Nichols","last_name":"Ovendale","email":"novendale1o@google.it","gender":"Male","birthDate":"1/3/1995","web":"http://typepad.com","creditScore":693,"rating":1.77},
{"id":62,"first_name":"Bran","last_name":"Lemar","email":"blemar1p@technorati.com","gender":"Non-binary","birthDate":"5/12/1997","web":"http://com.com","creditScore":648,"rating":7.71},
{"id":63,"first_name":"Theodoric","last_name":"Woolham","email":"twoolham1q@yahoo.com","gender":"Male","birthDate":"5/8/1993","web":"http://google.it","creditScore":232,"rating":3.93},
{"id":64,"first_name":"Margo","last_name":"Philipart","email":"mphilipart1r@dagondesign.com","gender":"Polygender","birthDate":"2/10/1998","web":"https://hostgator.com","creditScore":361,"rating":2.37},
{"id":65,"first_name":"Jazmin","last_name":"Buard","email":"jbuard1s@php.net","gender":"Female","birthDate":"11/19/1994","web":"http://xing.com","creditScore":600,"rating":8.84},
{"id":66,"first_name":"Bellina","last_name":"Maciak","email":"bmaciak1t@arizona.edu","gender":"Female","birthDate":"7/21/1993","web":"http://pinterest.com","creditScore":448,"rating":1.48},
{"id":67,"first_name":"Yvette","last_name":"Dolphin","email":"ydolphin1u@java.com","gender":"Female","birthDate":"9/10/1993","web":"http://psu.edu","creditScore":382,"rating":15.82},
{"id":68,"first_name":"Sibelle","last_name":"Milnes","email":"smilnes1v@rambler.ru","gender":"Female","birthDate":"1/6/1993","web":"http://netlog.com","creditScore":720,"rating":1.93},
{"id":69,"first_name":"Odele","last_name":"Jehan","email":"ojehan1w@hp.com","gender":"Female","birthDate":"6/13/1998","web":"http://reference.com","creditScore":274,"rating":10.51},
{"id":70,"first_name":"Bessy","last_name":"Auchterlonie","email":"bauchterlonie1x@spiegel.de","gender":"Female","birthDate":"9/25/1998","web":"https://squidoo.com","creditScore":675,"rating":16.41},
{"id":71,"first_name":"Bertram","last_name":"Byrcher","email":"bbyrcher1y@ted.com","gender":"Male","birthDate":"5/13/1992","web":"https://seesaa.net","creditScore":628,"rating":9.14},
{"id":72,"first_name":"Shanie","last_name":"Nicely","email":"snicely1z@themeforest.net","gender":"Female","birthDate":"6/8/1993","web":"https://prlog.org","creditScore":714,"rating":2.01},
{"id":73,"first_name":"Dennis","last_name":"Scanlin","email":"dscanlin20@sfgate.com","gender":"Male","birthDate":"9/11/1995","web":"https://cpanel.net","creditScore":471,"rating":6.42},
{"id":74,"first_name":"Lydon","last_name":"O'Moylane","email":"lomoylane21@boston.com","gender":"Male","birthDate":"7/25/1999","web":"http://gizmodo.com","creditScore":515,"rating":15.33},
{"id":75,"first_name":"Tybi","last_name":"Boothroyd","email":"tboothroyd22@ft.com","gender":"Female","birthDate":"7/15/1998","web":"http://joomla.org","creditScore":227,"rating":5.82},
{"id":76,"first_name":"Cally","last_name":"Hedworth","email":"chedworth23@multiply.com","gender":"Female","birthDate":"8/23/1993","web":"https://dedecms.com","creditScore":256,"rating":4.31},
{"id":77,"first_name":"Hildagard","last_name":"Annies","email":"hannies24@imageshack.us","gender":"Female","birthDate":"4/25/1995","web":"https://marketwatch.com","creditScore":513,"rating":13.87},
{"id":78,"first_name":"Clayton","last_name":"Matthensen","email":"cmatthensen25@xinhuanet.com","gender":"Male","birthDate":"9/8/1992","web":"https://gnu.org","creditScore":341,"rating":12.58},
{"id":79,"first_name":"Ignace","last_name":"Dunphy","email":"idunphy26@free.fr","gender":"Male","birthDate":"8/19/1995","web":"https://timesonline.co.uk","creditScore":290,"rating":18.57},
{"id":80,"first_name":"Moyra","last_name":"Aldrin","email":"maldrin27@gmpg.org","gender":"Female","birthDate":"5/22/1997","web":"https://usnews.com","creditScore":262,"rating":4.58},
{"id":81,"first_name":"Celisse","last_name":"Broadnicke","email":"cbroadnicke28@zimbio.com","gender":"Female","birthDate":"12/22/1997","web":"https://xrea.com","creditScore":294,"rating":8.06},
{"id":82,"first_name":"Hartwell","last_name":"Bernier","email":"hbernier29@epa.gov","gender":"Male","birthDate":"3/21/1998","web":"https://lulu.com","creditScore":290,"rating":10.35},
{"id":83,"first_name":"Nariko","last_name":"Cawthron","email":"ncawthron2a@oakley.com","gender":"Female","birthDate":"12/19/1995","web":"http://sitemeter.com","creditScore":206,"rating":12.84},
{"id":84,"first_name":"Kordula","last_name":"Mousby","email":"kmousby2b@usnews.com","gender":"Female","birthDate":"3/14/1994","web":"http://yellowbook.com","creditScore":798,"rating":14.71},
{"id":85,"first_name":"Arlena","last_name":"McColley","email":"amccolley2c@github.io","gender":"Female","birthDate":"7/21/1996","web":"https://opera.com","creditScore":335,"rating":1.88},
{"id":86,"first_name":"Jerrylee","last_name":"Imesen","email":"jimesen2d@stumbleupon.com","gender":"Female","birthDate":"3/4/1999","web":"http://dion.ne.jp","creditScore":230,"rating":2.26},
{"id":87,"first_name":"Cyrus","last_name":"Euels","email":"ceuels2e@uiuc.edu","gender":"Male","birthDate":"3/13/1996","web":"https://reverbnation.com","creditScore":551,"rating":3.6},
{"id":88,"first_name":"Antonina","last_name":"Twell","email":"atwell2f@paginegialle.it","gender":"Female","birthDate":"7/29/1996","web":"http://phoca.cz","creditScore":681,"rating":3.45},
{"id":89,"first_name":"Brana","last_name":"Ingall","email":"bingall2g@amazon.co.jp","gender":"Female","birthDate":"10/27/1994","web":"http://xrea.com","creditScore":296,"rating":19.05},
{"id":90,"first_name":"Gareth","last_name":"Tourot","email":"gtourot2h@aol.com","gender":"Genderfluid","birthDate":"12/5/1999","web":"http://mtv.com","creditScore":464,"rating":9.5},
{"id":91,"first_name":"Reggy","last_name":"Whye","email":"rwhye2i@chronoengine.com","gender":"Bigender","birthDate":"10/4/1994","web":"https://unesco.org","creditScore":249,"rating":7.84},
{"id":92,"first_name":"Sergent","last_name":"Reedman","email":"sreedman2j@g.co","gender":"Male","birthDate":"2/19/1995","web":"http://go.com","creditScore":565,"rating":19.14},
{"id":93,"first_name":"Tammie","last_name":"Jeffry","email":"tjeffry2k@utexas.edu","gender":"Male","birthDate":"3/1/1995","web":"http://nhs.uk","creditScore":659,"rating":13.88},
{"id":94,"first_name":"Edithe","last_name":"MacCurlye","email":"emaccurlye2l@infoseek.co.jp","gender":"Female","birthDate":"10/27/1997","web":"https://lycos.com","creditScore":607,"rating":10.56},
{"id":95,"first_name":"Jennie","last_name":"Stonhard","email":"jstonhard2m@feedburner.com","gender":"Polygender","birthDate":"12/1/1996","web":"http://marriott.com","creditScore":476,"rating":8.95},
{"id":96,"first_name":"Rochell","last_name":"Avon","email":"ravon2n@hostgator.com","gender":"Female","birthDate":"1/2/1999","web":"https://wordpress.com","creditScore":442,"rating":1.03},
{"id":97,"first_name":"Randene","last_name":"Ladds","email":"rladds2o@unicef.org","gender":"Female","birthDate":"2/20/1998","web":"https://addthis.com","creditScore":488,"rating":10.52},
{"id":98,"first_name":"Astrix","last_name":"Garrigan","email":"agarrigan2p@blog.com","gender":"Female","birthDate":"11/29/1992","web":"https://berkeley.edu","creditScore":622,"rating":13.6},
{"id":99,"first_name":"Ester","last_name":"Habercham","email":"ehabercham2q@mlb.com","gender":"Genderfluid","birthDate":"2/4/1995","web":"http://berkeley.edu","creditScore":405,"rating":13.83},
{"id":100,"first_name":"Gradey","last_name":"Romer","email":"gromer2r@eventbrite.com","gender":"Male","birthDate":"9/30/1993","web":"http://tumblr.com","creditScore":672,"rating":14.96},
{"id":101,"first_name":"Erinn","last_name":"Van Arsdall","email":"evanarsdall2s@macromedia.com","gender":"Female","birthDate":"1/6/1999","web":"https://4shared.com","creditScore":566,"rating":19.89},
{"id":102,"first_name":"Annemarie","last_name":"Cutridge","email":"acutridge2t@state.gov","gender":"Female","birthDate":"7/3/1998","web":"https://seesaa.net","creditScore":300,"rating":16.45},
{"id":103,"first_name":"Isac","last_name":"Dickins","email":"idickins2u@github.com","gender":"Male","birthDate":"4/17/1992","web":"http://answers.com","creditScore":606,"rating":8.61},
{"id":104,"first_name":"Noelyn","last_name":"Lumsdale","email":"nlumsdale2v@posterous.com","gender":"Polygender","birthDate":"4/17/1997","web":"http://sphinn.com","creditScore":334,"rating":4.11},
{"id":105,"first_name":"Butch","last_name":"Jahns","email":"bjahns2w@bluehost.com","gender":"Male","birthDate":"10/25/1996","web":"http://dot.gov","creditScore":675,"rating":10.84},
{"id":106,"first_name":"Evvy","last_name":"Dutteridge","email":"edutteridge2x@mysql.com","gender":"Female","birthDate":"8/11/1993","web":"http://photobucket.com","creditScore":619,"rating":3.8},
{"id":107,"first_name":"Kimberley","last_name":"Casini","email":"kcasini2y@smh.com.au","gender":"Female","birthDate":"6/20/1997","web":"https://amazon.co.uk","creditScore":645,"rating":10.11},
{"id":108,"first_name":"Anthe","last_name":"Tran","email":"atran2z@oakley.com","gender":"Female","birthDate":"11/22/1994","web":"https://pbs.org","creditScore":342,"rating":13.08},
{"id":109,"first_name":"Barnabe","last_name":"Greves","email":"bgreves30@squarespace.com","gender":"Male","birthDate":"1/15/1998","web":"https://privacy.gov.au","creditScore":210,"rating":2.24},
{"id":110,"first_name":"Debor","last_name":"Castilljo","email":"dcastilljo31@fotki.com","gender":"Female","birthDate":"3/18/1997","web":"http://discuz.net","creditScore":327,"rating":10.03},
{"id":111,"first_name":"Hilton","last_name":"Weyland","email":"hweyland32@trellian.com","gender":"Male","birthDate":"4/11/1997","web":"https://nbcnews.com","creditScore":529,"rating":3.64},
{"id":112,"first_name":"Bette-ann","last_name":"Grayham","email":"bgrayham33@usgs.gov","gender":"Female","birthDate":"1/2/1997","web":"https://merriam-webster.com","creditScore":626,"rating":5.48},
{"id":113,"first_name":"Man","last_name":"Wilhelmy","email":"mwilhelmy34@soup.io","gender":"Genderfluid","birthDate":"3/18/1992","web":"http://sakura.ne.jp","creditScore":483,"rating":11.69},
{"id":114,"first_name":"Hermy","last_name":"Barnbrook","email":"hbarnbrook35@tinyurl.com","gender":"Male","birthDate":"7/18/1997","web":"https://qq.com","creditScore":355,"rating":17.93},
{"id":115,"first_name":"Billye","last_name":"MacGee","email":"bmacgee36@instagram.com","gender":"Female","birthDate":"12/11/1996","web":"https://amazon.de","creditScore":226,"rating":17.11},
{"id":116,"first_name":"Richart","last_name":"Feather","email":"rfeather37@vistaprint.com","gender":"Male","birthDate":"8/31/1995","web":"http://soundcloud.com","creditScore":664,"rating":17.15},
{"id":117,"first_name":"Cart","last_name":"Grass","email":"cgrass38@elegantthemes.com","gender":"Male","birthDate":"4/2/1996","web":"http://npr.org","creditScore":543,"rating":10.64},
{"id":118,"first_name":"Winnie","last_name":"Radoux","email":"wradoux39@nbcnews.com","gender":"Genderqueer","birthDate":"9/11/1999","web":"https://lulu.com","creditScore":682,"rating":12.46},
{"id":119,"first_name":"Elihu","last_name":"Fiddyment","email":"efiddyment3a@fotki.com","gender":"Male","birthDate":"2/1/1999","web":"https://geocities.jp","creditScore":567,"rating":18.05},
{"id":120,"first_name":"Dom","last_name":"Flello","email":"dflello3b@w3.org","gender":"Male","birthDate":"3/26/1994","web":"http://ocn.ne.jp","creditScore":308,"rating":6.06},
{"id":121,"first_name":"Dallon","last_name":"Blackham","email":"dblackham3c@toplist.cz","gender":"Male","birthDate":"9/7/1997","web":"http://paypal.com","creditScore":460,"rating":11.7},
{"id":122,"first_name":"Alyssa","last_name":"Sibbson","email":"asibbson3d@vkontakte.ru","gender":"Female","birthDate":"7/29/1996","web":"http://wired.com","creditScore":621,"rating":8.06},
{"id":123,"first_name":"Milt","last_name":"Casemore","email":"mcasemore3e@hhs.gov","gender":"Male","birthDate":"5/18/1999","web":"https://cbsnews.com","creditScore":371,"rating":17.75},
{"id":124,"first_name":"Carrissa","last_name":"Wren","email":"cwren3f@w3.org","gender":"Female","birthDate":"4/16/1995","web":"https://istockphoto.com","creditScore":423,"rating":8.36},
{"id":125,"first_name":"Gerri","last_name":"Noades","email":"gnoades3g@gizmodo.com","gender":"Genderqueer","birthDate":"6/19/1996","web":"http://mapy.cz","creditScore":346,"rating":8.66},
{"id":126,"first_name":"Dona","last_name":"Fynes","email":"dfynes3h@multiply.com","gender":"Female","birthDate":"3/27/1994","web":"http://istockphoto.com","creditScore":641,"rating":17.85},
{"id":127,"first_name":"Den","last_name":"Paulsson","email":"dpaulsson3i@ibm.com","gender":"Male","birthDate":"8/10/1997","web":"https://wordpress.org","creditScore":696,"rating":11.28},
{"id":128,"first_name":"Pru","last_name":"Peizer","email":"ppeizer3j@technorati.com","gender":"Female","birthDate":"10/9/1997","web":"http://prweb.com","creditScore":763,"rating":9.42},
{"id":129,"first_name":"Bentley","last_name":"Blagburn","email":"bblagburn3k@comsenz.com","gender":"Male","birthDate":"2/2/1997","web":"https://booking.com","creditScore":790,"rating":15.07},
{"id":130,"first_name":"Dionis","last_name":"Sjollema","email":"dsjollema3l@state.tx.us","gender":"Female","birthDate":"1/8/1994","web":"https://tripadvisor.com","creditScore":488,"rating":19.77},
{"id":131,"first_name":"Jilly","last_name":"Matthisson","email":"jmatthisson3m@stumbleupon.com","gender":"Female","birthDate":"4/12/1993","web":"https://go.com","creditScore":668,"rating":9.25},
{"id":132,"first_name":"Adolphe","last_name":"Creber","email":"acreber3n@linkedin.com","gender":"Male","birthDate":"11/27/1992","web":"http://fda.gov","creditScore":415,"rating":9.37},
{"id":133,"first_name":"Louisa","last_name":"Outerbridge","email":"louterbridge3o@booking.com","gender":"Female","birthDate":"12/2/1996","web":"https://sciencedirect.com","creditScore":576,"rating":10.02},
{"id":134,"first_name":"Waverley","last_name":"Prandoni","email":"wprandoni3p@army.mil","gender":"Male","birthDate":"2/9/1993","web":"http://unblog.fr","creditScore":526,"rating":12.02},
{"id":135,"first_name":"Mart","last_name":"Matches","email":"mmatches3q@yolasite.com","gender":"Bigender","birthDate":"5/1/1996","web":"http://elpais.com","creditScore":302,"rating":16.82},
{"id":136,"first_name":"Marris","last_name":"Warde","email":"mwarde3r@issuu.com","gender":"Female","birthDate":"11/29/1997","web":"http://tripadvisor.com","creditScore":299,"rating":10.23},
{"id":137,"first_name":"Karlan","last_name":"Roberti","email":"kroberti3s@php.net","gender":"Male","birthDate":"3/23/1992","web":"https://flickr.com","creditScore":441,"rating":1.36},
{"id":138,"first_name":"Ludwig","last_name":"Van","email":"lvan3t@exblog.jp","gender":"Male","birthDate":"12/30/1998","web":"https://360.cn","creditScore":627,"rating":5.54},
{"id":139,"first_name":"Felicity","last_name":"Pichmann","email":"fpichmann3u@google.com.au","gender":"Female","birthDate":"12/27/1993","web":"http://quantcast.com","creditScore":681,"rating":13.16},
{"id":140,"first_name":"Kordula","last_name":"Wyard","email":"kwyard3v@example.com","gender":"Female","birthDate":"12/19/1995","web":"http://mit.edu","creditScore":594,"rating":9.21},
{"id":141,"first_name":"August","last_name":"Jamison","email":"ajamison3w@usgs.gov","gender":"Male","birthDate":"4/10/1992","web":"https://pen.io","creditScore":252,"rating":8.43},
{"id":142,"first_name":"Mill","last_name":"L' Anglois","email":"mlanglois3x@princeton.edu","gender":"Male","birthDate":"1/10/1992","web":"http://businesswire.com","creditScore":303,"rating":8.19},
{"id":143,"first_name":"Gussy","last_name":"Grieveson","email":"ggrieveson3y@google.com.au","gender":"Female","birthDate":"10/28/1996","web":"http://sogou.com","creditScore":656,"rating":19.92},
{"id":144,"first_name":"Shirley","last_name":"Chimenti","email":"schimenti3z@ycombinator.com","gender":"Female","birthDate":"11/23/1992","web":"http://marketwatch.com","creditScore":796,"rating":12.96},
{"id":145,"first_name":"Chaddy","last_name":"Goodge","email":"cgoodge40@techcrunch.com","gender":"Male","birthDate":"12/4/1999","web":"https://is.gd","creditScore":750,"rating":13.92},
{"id":146,"first_name":"Dolores","last_name":"McInnes","email":"dmcinnes41@europa.eu","gender":"Female","birthDate":"8/7/1999","web":"https://123-reg.co.uk","creditScore":525,"rating":12.92},
{"id":147,"first_name":"Augustine","last_name":"Fliege","email":"afliege42@baidu.com","gender":"Non-binary","birthDate":"8/12/1992","web":"http://vk.com","creditScore":564,"rating":13.66},
{"id":148,"first_name":"Bendicty","last_name":"Jovovic","email":"bjovovic43@reuters.com","gender":"Male","birthDate":"12/25/1993","web":"http://prlog.org","creditScore":663,"rating":5.3},
{"id":149,"first_name":"Jenelle","last_name":"Mainston","email":"jmainston44@gmpg.org","gender":"Female","birthDate":"4/12/1997","web":"http://unc.edu","creditScore":480,"rating":19.52},
{"id":150,"first_name":"Boothe","last_name":"Charrington","email":"bcharrington45@dropbox.com","gender":"Male","birthDate":"8/1/1995","web":"https://salon.com","creditScore":789,"rating":9.25}]// your pasted JSON goes here




// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all - Sorting data by lastName, firstName, and creditScore
data.sort((a, b) =>
  a.last_name.localeCompare(b.last_name) ||
  a.first_name.localeCompare(b.first_name) ||
  a.creditScore - b.creditScore
);

// Get all colours
app.get('/api/items', (req, res) => {
  res.json(colours);
});

// Get one colour by ID
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < colours.length) {
    res.json({ colour: colours[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Add new colour
app.post('/api/items', (req, res) => {
  const newItem = req.body.colourName;
  colours.push(newItem);
  res.status(201).json({ message: `Added ${newItem} as item identifier ${colours.length - 1}` });
});

// Edit existing colour by ID
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const updatedItem = req.body.colourName;
    colours[itemId] = updatedItem;
    res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Delete colour by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const deletedItem = colours.splice(itemId, 1)[0];
    res.status(200).json({ message: `Deleted colour: ${deletedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});


