// Anonim sayaç servisi (hesap gerekmez).
const NS = "aekatipoglu-phishingquiz", API = "https://abacus.jasoncameron.dev";

// f: gönderen adı, a: adres, s: konu, b: metin, bt: buton yazısı, l: butonun gerçek adresi, p: 1=tuzak
const Q = [
{f:"OyunDünyası Hediye",a:"hediye@oyun-elmas-bedava.xyz",s:"🎁 1000 elmas bedava!",b:"Hemen kullanıcı adını ve şifreni yaz, elmasların hesabına gelsin!",bt:"Elmasları Al",l:"http://oyun-elmas-bedava.xyz/giris",p:1,w:"Şifreni asla kimseye verme! Oyun şirketleri şifreni e-postayla istemez.",c:"#f97316"},
{f:"Ayşe Öğretmen",a:"ayse.ogretmen@okulunuz.k12.tr",s:"Yarınki ödev hatırlatma",b:"Merhaba çocuklar, yarın fen kitabı sayfa 45'teki soruları getirmeyi unutmayın. Başarılar!",bt:"",l:"",p:0,w:"Tanıdığın öğretmen, normal bir hatırlatma, şifre ya da tıklama isteği yok.",c:"#16a34a"},
{f:"Süper Çekiliş",a:"kazandin@super-cekilis.top",s:"🎉 TEBRİKLER! Yeni telefon kazandın!",b:"Çekilişe katılmadın ama yine de kazandın! Hemen tıkla, yoksa hediyen yanacak!",bt:"Telefonumu İstiyorum",l:"http://super-cekilis.top/odul",p:1,w:"Katılmadığın bir yarışmayı kazanamazsın. 'Hemen!' diye acele ettirenlere dikkat!",c:"#db2777"},
{f:"Oyun Destek",a:"destek.ekibi@gmail.com",s:"Hesabın tehlikede!",b:"Hesabını kurtarmak için bize şifreni bu e-postaya yaz.",bt:"",l:"",p:1,w:"Gerçek destek ekipleri şifreni sormaz. Şifre sadece sana ait bir sırdır!",c:"#7c3aed"},
{f:"Şehir Kütüphanesi",a:"bilgi@sehirkutuphanesi.gov.tr",s:"Kitabın iade tarihi yaklaşıyor",b:"Ödünç aldığın kitabı cuma gününe kadar kütüphaneye getirmeni hatırlatırız.",bt:"",l:"",p:0,w:"Tanıdığın bir yerden, tıklanacak tuhaf bir şey yok, sadece hatırlatma.",c:"#0891b2"},
{f:"Yeni Arkadaş",a:"cool.kid2013@mail.ru",s:"Selam! Arkadaş olalım",b:"Seni oyunda gördüm! Fotoğrafını ve okulunun adını gönder, arkadaş olalım ama kimseye söyleme.",bt:"",l:"",p:1,w:"Tanımadığın kişilere fotoğraf veya okul bilgisi verme. Bir yetişkine göster!",c:"#e11d48"},
{f:"Sınıf Grubu",a:"sinif5a@okulunuz.k12.tr",s:"Geziye ait form",b:"Merhaba, gezi izin formu ekte. Velinize gösterip imzalatmayı unutmayın.",bt:"",l:"",p:0,w:"Okulun gerçek adresinden geldi ve bir yetişkine göstermeni söylüyor.",c:"#ca8a04"},
{f:"Hesap Güvenliği",a:"guvenlik@hesap-kontrol.click",s:"⚠️ 1 saat içinde hesabın silinecek!",b:"Silinmemesi için HEMEN aşağıdaki düğmeye tıkla!",bt:"Hesabımı Kurtar",l:"http://hesap-kontrol.click/kurtar",p:1,w:"Tehdit etmek ve acele ettirmek tuzak e-postaların en sevdiği oyun.",c:"#dc2626"},
{f:"Annem 💗",a:"anne@ailemiz.com",s:"Akşam yemeği",b:"Canım, akşam yemeği saat 7'de. Eve gelirken ekmek alır mısın?",bt:"",l:"",p:0,w:"Tanıdığın biri, normal bir mesaj.",c:"#0d9488"},
{f:"Oyun Hilesi",a:"hile@super-hile.ru",s:"Tüm oyunlar için hile programı!",b:"Ekteki dosyayı çalıştır, oyunda sınırsız can kazan!",bt:"📎 oyun_hilesi.exe",l:"ek dosya (.exe)",p:1,w:"Tanımadığın kişilerin dosyalarını asla açma. İçinde virüs olabilir!",c:"#4b5563"}
];

const $ = document.getElementById("app");
let i, ans, counted=false;

function intro(){
  $.innerHTML=`<div class="hero"><div class="big">🕵️</div><h1>Oltacı Dedektifi</h1>
  <p>İnternette bazı e-postalar seni kandırmaya çalışır. Sen de bir dedektifsin: hangisi <b>tuzak</b>, hangisi <b>güvenli</b>?</p>
  <button onclick="start()">Göreve Başla! 🚀</button>
  <div style="height:32px"></div><small>10 e-posta · Adın ve kişisel bilgilerin istenmez. Sadece anonim sonuç sayıları tutulur.<br>Sonuçlar, oyun bittiğinde abacus.jasoncameron.dev sayaç servisine gönderilir. Bu isteğin IP adresi o servis tarafından görülebilir, biz IP adresi kaydetmeyiz.</small></div>`;
}
function start(){
  try{const d=document.documentElement;(d.requestFullscreen||d.webkitRequestFullscreen||(()=>{})).call(d);}catch(e){}
  i=0;ans=[];show();
}
function stars(){return Array.from({length:10},(_,k)=>k<ans.length?(ans[k]?"⭐":"✖️"):k===i?"🔍":"▫️").join("");}
function mail(q){
  return `<div class="inbox"><div class="top"><span>📬 Gelen Kutusu</span><span>${i+1}/10</span></div><div class="mailbody">
  <h3>${q.s}</h3><div class="who"><div class="av" style="background:${q.c}">${q.f[0]}</div><div><b>${q.f}</b><small>&lt;${q.a}&gt;</small><small>Kime: sen</small></div></div>
  <p>${q.b}</p>${q.bt?`<span class="fakebtn">${q.bt}</span>`:""}</div></div>`;
}
function show(){
  window.scrollTo(0,0);
  $.innerHTML=`<div class="stars">${stars()}</div>${mail(Q[i])}
  <p style="text-align:center"><b>Sence bu e-posta nasıl?</b></p>
  <div class="row"><button class="bad" onclick="pick(1)">🎣 Tuzak!</button><button class="good" onclick="pick(0)">✅ Güvenli</button></div>`;
}
function pick(v){
  window.scrollTo(0,0);
  const q=Q[i],ok=v===q.p;ans.push(ok?1:0);
  $.innerHTML=`<div class="stars">${stars()}</div>${mail(q)}
  <div class="res ${ok?"y":"n"}"><h2>${ok?"🎉 Harika, doğru bildin!":"😮 Olsun, birlikte öğrenelim!"}</h2>
  <p>Bu e-posta <b>${q.p?"bir tuzak 🎣":"güvenli ✅"}</b>.</p>
  ${q.l?`<p class="real">Düğmenin gerçek adresi: <b>${q.l}</b></p>`:""}
  <p class="tip">💡 ${q.w}</p></div>
  <button onclick="next()">${i<9?"Sıradaki e-posta ➡️":"Sonucu gör 🏆"}</button>`;
  if(ok)confetti();
}
function next(){i++;i<10?show():finish();}
async function finish(){
  const sc=ans.reduce((a,b)=>a+b,0);
  const t=sc>=9?["🏆","Süper Dedektif!"]:sc>=7?["🥇","Usta Dedektif!"]:sc>=5?["🥈","Çırak Dedektif"]:["🌱","Yeni Dedektif"];
  $.innerHTML=`<div class="hero"><div class="big">${t[0]}</div><h1>${t[1]}</h1><h2>${sc} / 10 doğru</h2>
  <article><b>Altın kurallar:</b><br>🔒 Şifreni kimseye verme<br>🛑 Acele ettiren e-postaya inanma<br>👨‍👩‍👧 Şüphelenince bir yetişkine göster</article>
  <p id="st">Diğer dedektiflerin sonuçları yükleniyor...</p>
  <button onclick="start()">Tekrar oyna 🔄</button></div>`;
  const st=document.getElementById("st");
  if(counted){st.textContent="";return;}
  counted=true;
  try{
    const hit=k=>fetch(`${API}/hit/${NS}/${k}`).then(r=>r.json()).catch(()=>({}));
    const keys=["total","skor"+sc,...ans.map((v,k)=>v?"soru"+k+"dogru":null).filter(Boolean)];
    const [r0]=await Promise.all(keys.map(hit));
    st.innerHTML=r0.value?`👥 Şimdiye kadar <b>${r0.value}</b> dedektif oynadı.`:"";
  }catch(e){st.textContent="";}
}
function confetti(){
  for(let k=0;k<18;k++){const e=document.createElement("span");e.className="conf";e.textContent=["🎉","⭐","✨","🎈"][k%4];
  e.style.left=Math.random()*95+"vw";e.style.animationDelay=Math.random()*.5+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),2500);}
}
intro();
