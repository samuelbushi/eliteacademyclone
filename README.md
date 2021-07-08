# Elite Academy
#### Web-Application i krijuar nga Samuel Bushi & Klevi Shera  

##### Teknologjite e perdorura:  
-HTML
-CSS
-Bootstrap
-SASS/SCSS
-JavaScript
-node.js  
-Express.js
-Rust
-Cookie Based  
-Memcached  
-MongoDB
-Google Sheets  
-Google App Scripts  
  
  
### Hosted:
**Frontend:** Cloudflare Pages
**Backend:** Heroku, Google App Scripts, Google Sheets  
**Website:** [eliteacademyclone.pages.dev](https://eliteacademyclone.pages.dev/)
___

### Hyrje-Projekti  
##### Pershkrimi i detyres

  


   - [x]  Projekti perfshin perdorimin e te treja gjuheve te kerkuara. (HTML, CSS, JavaScript)

 - [x]  Website te perbehet nga se paku 3 faqe html te vecuara qe ruajne te njejten pamje me te dhena te ndryshme. 
  ```    
/index.html  
../kontakto.html
../regjistrohu.html
../mobile.html  
../sukses.html 
```
  &nbsp;
 - [x]  Websiti te kete si teme nje akademi profesionale
   &nbsp;
 ##### Layout dhe stilimi
  
- [x] Home: Pershkrim: Aktiviteti, rreth kompanise, logo, slogani, background etj.
- [x] Courses: Nje listim me kurse to cfaredoshme, ku cdo kurs ka: imazh, titull, dhe buton
- [x] Sign Up: Nje forme kur to pranohen gjeneralitetet: Emer, Mbiemer, Email, Password, Birthday, Gender.  


  &nbsp;
   
  
- [x] Duke perdorur Javascript (ose1Query) te behet e mundur qe ne Submit te formes te dhenat futura nga perdoruesi te shfacien si alert, te ngarkohen ne Console te browserit (console.log) ose te behen append brenda faqes SignUp.html

*Pasi ploteson format dhe shtyp butonin, te dhenat e plotesuara shfaqen ne console.
```  
function sConsole() {
var data1 = document.getElementById("emer");
console.log(data1.value);
var mbiemer = document.getElementById("mbiemer");
console.log(mbiemer.value);
var mashkull = document.getElementById("mashkull");
console.log(mashkull.value);
var email = document.getElementById("email");
console.log(email.value);
var ditelindje = document.getElementById("ditelindje");
console.log(ditelindje.value);
var passwordi = document.getElementById("passwordi");
console.log(passwordi.value);
}
```

  &nbsp;
  
- [x] Te ruhen to dhenat e members qe bejne sign up ne nje tabele Members ne databaze. Databaze mund to perdorni cilendo.

*Per *database* projekti perdor [MongoDB](https://www.mongodb.com/) per regjistrimin, dhe e transferon ne [Google Sheets.](https://www.mongodb.com/)
  &nbsp;
    &nbsp;
- [x] Te implementohet websiti i mesiperm ne nje Web Application me arkitekture Client-Server duke perdorur cilindo framework qe njihni, ne cilendo gjuhe.

*Aplikacioni perdor node.js (me Ekspress.js) per lidhjen Client-Server. 
  &nbsp;
- [x] Duke perdorur avantazhet e framework-ut te shtohen te dhenat e derguara nga forma e SignUp ne nje liste objektesh ne aplikacion e pershtatshme per ruajtjen e tyre, dhe me pas te ridergohet e gjithe lista me members nga serveri ne client per t'u shfaqur ne nje tabele.
  &nbsp;
- [x] Te ndertohet nje version mobile per faqen. Kjo do lejohet to behet duke u siguruar qe faqet html qe e perbejne websiten to jene mobile-responsive (bootstrap...), ose duke perdorur nje tool per zhvillim to aplikacioneve ne mobile, si Android studio ose React Native per cross-platform (Andorid+iOS), Xamarin nese jeni familjare me C#.

*Faqa jep mundesine per tu instualuar si **[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)**  teknologji e cila perdor nje service-worker te thjeshte, dhe funksionon ne Android dhe IOS njekohesisht. Pas instalimit, faqa *punon dhe offline*, duke transferuar cache ne browserin e telefonit, ne filet e brendshme te telefonit.
  &nbsp; 

#### Suporti per 4K
Faqa ka suport per 4K, duke perdorur variablat ne SASS, dhe duke perdor si madhesi per konfigurimin e madhesive te te gjitha objekteve, **em**.
  &nbsp;
  &nbsp;
### Si ta instalosh kete projekt:
***Per ndihme te metejshme, mund te kontaktosh ne cdo kohe:*** 
**contact@samuelbushi.com
klevilshera@gmail.com**

#### 1. - Instalimi ne FrontEnd
Te gjitha filet me labelin **frontend** duhet te nxirren vecante, dhe te behen host ne cdo hosting-provider qe suporton *serverless-functions*. 

Disa hosting-providers te sugjeruar:

1. Vercel
2. Netlify
3. Cloudflare Pages

Pas uploadimit ne serverin e frontendit, duhet te bejme edit "ENVROIMENTAL-VARIABLES", variabla e cila lidh databasen me formen e plotesuar nga klienti. 
| Emri i Variables |E Dhena |  
| ----------- | ----------- |  
| Google_Scripts_API | *Shih me poshte |  
| MONGODBSTATUS | sheets-re-jump |

  &nbsp;
   
#### 2. - Instalimi ne Backend
Te gjitha filet me labelin **backend** duhet te nxirren vecante, dhe te behen host vetem ne *Heroku*. 

***Linku ku backendi eshte bere publish duhet te lidhet me Variablen e kerkuar me siper ne fronend.***
Google_Scripts_API
  &nbsp;
   
#### 3. - Lidhja me Database
Ketu duhet te kemi nje llogari ne MongoDB, dhe nje acc ne Google per te perdorur Google Sheets. 

File me labelin **scriptsheet** duhet te behet copy-paste ne Google Sheets / AppSheet

Per konfigurimin e MongoDB, mjafton te krijoni database 2 dimensionale ne planin falas, dhe te merni API key i cili korrespondon me API key e kerkuar ne frontend:
MONGODBSTATUS
