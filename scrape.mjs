import * as cheerio from 'cheerio';

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

let response = await fetch(`https://pizzacakecomic.com/`);
response = await response.text();
const $ = cheerio.load(response);

let i = 1;
$('div.body-text').each(function () { // iga div (postituse) alt otsib img elemendi kus class on post_media_photo, sest ühel postitusel saab olla mitu pilti/panelit
    if (i <= 10) {
        console.log(i);
        let imgs = $(this).find('img.post_media_photo'); //leiab div.body-text alt img.post_media_photo
        imgs.each(function () {
            console.log($(this).attr('src'));   //iga img kohta logib ainult src, sest leheküljel pole mingit captionit/titlet/alti, mida kirjelduseks tuua
        });
        i++;
    }
});

await delay(500);