import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  BASE_URL: 'https://tioanime.com/'
  BROWSE_URL: 'https://tioanime.com/directorio?year=1950%2C2021&status=1&sort=recent&type%5B%5D=0'
  DETAIL_URL: 'https://tioanime.com/anime/'
  IMAGE_URL: 'https://tioanime.com/uploads/thumbs/'
  WATCH_URL: 'https://tioanime.com/ver/'
  SEARCH_URL: 'https://tioanime.com/directorio?q='
  GENRE_URL: 'https://tioanime.com/directorio?genero%5B%5D='
  JIKAN_URL: 'https://api.jikan.moe/v3/anime/'

  totalAngularPackages; // <---
  error;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAnime();
  }

  getAnime(){

    this.http.get<any>(this.BASE_URL).subscribe(data => {
      console.log(data);
   },error => this.error = error);



    /* const cheerio = require('cheerio');
    const cloudscraper = require('cloudscraper');
    const res = await cloudscraper(this.BASE_URL , {method: 'GET'});
    const body = await res; */
    /* const $ = cheerio.load(body);
    const promises = [];
    $('#tioanime > div > section:nth-child(1) > ul > li').each((index , element) =>{
      const $element = $(element);
      const master = $element.find('article a').attr('href').split('/')[2].split('-');
      const masterT = $element.find('article a h3.title').text().split(' ');
      masterT.pop();
      const episode = master.pop();
      const id = master.join('-');
      const title = masterT.join(' ');
      const preview = this.BASE_URL + $element.find('article a div.thumb figure img').attr('src');
      
      promises.push({
        id: id || null,
        title: title || null,
        preview: preview || null,
        episode: episode || null,
      })
    })
    return await Promise.all(promises); */
  }


}
