import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles=[
        
        
        
       
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Peter Kafka",
            "title": "Epic Games' CEO says fighting Apple cost his company more than $1 billion. He says it was worth it.",
            "description": "Epic Games CEO Tim Sweeney — the guy behind Fortnite — has been fighting Apple and Tim Cook over its App Store rules for five years. I asked him why.",
            "url": "https://www.businessinsider.com/tim-sweeeney-epic-games-apple-app-store-interview-peter-kafka-2025-05",
            "urlToImage": "https://i.insider.com/681944baa466d2b74ab519a2?width=1200&format=jpeg",
            "publishedAt": "2025-05-06T10:01:01Z",
            "content": "Philip Pacheco/Getty, Mega/Getty, Tyler Le/BI\r\n<ul><li>Epic Games CEO Tim Sweeney — the guy behind Fortnite — has been fighting Apple over its App Store rules for five years.</li><li>Last week, Sween… [+10771 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "WhatsApp deja de funcionar de por vida en estos iPhone muy populares",
            "description": "Este mes de mayo, WhatsApp dejará de funcionar en una serie de modelos de iPhone. La aplicación de mensajería propiedad de Meta ha decidido poner fin al soporte en estos dispositivos al ser demasiado antiguos y al no poder actualizar a versiones más recientes…",
            "url": "http://hipertextual.com/2025/05/whatsapp-deja-de-funcionar-de-por-vida-en-estos-iphone-muy-populares",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/whatsapp-logo-2.jpg",
            "publishedAt": "2025-05-06T10:24:40Z",
            "content": "Este mes de mayo, WhatsApp dejará de funcionar en una serie de modelos de iPhone. La aplicación de mensajería propiedad de Meta ha decidido poner fin al soporte en estos dispositivos al ser demasiado… [+2000 chars]"
        },
       
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Carlos Prego",
            "title": "Llevamos años acostumbrados a la propaganda de Estados Unidos: ahora ha comenzado la era de la propaganda china",
            "description": "La guerra comercial se libra sobre el parqué de las bolsas, en los campos de cultivo, las fábricas y puertos, pero también en las redes. De hecho en ellas se juega una de las batallas clave en la pugna entre Washington y Pekín: la del relato. Lo vimos hace no…",
            "url": "https://www.xataka.com/magnet/llevamos-anos-acostumbrados-a-propaganda-estados-unidos-ahora-ha-comenzado-era-propaganda-china",
            "urlToImage": "https://i.blogs.es/010f39/chinaportadabuena/840_560.jpeg",
            "publishedAt": "2025-05-06T11:01:35Z",
            "content": "La guerra comercial se libra sobre el parqué de las bolsas, en los campos de cultivo, las fábricas y puertos, pero también en las redes. De hecho en ellas se juega una de las batallas clave en la pug… [+5187 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "5 high-tech Mother's Day gifts that show you really care",
            "description": "This Mother's Day, gift Mom tech gadgets that simplify life, connect and show love. Tech expert Kurt “CyberGuy\" Knutsson offers some ideas.",
            "url": "https://www.foxnews.com/tech/5-high-tech-mothers-day-gifts-show-you-really-care",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/05/1-5-high-tech-mothers-day-gifts-that-show-you-really-care.jpg",
            "publishedAt": "2025-05-06T11:00:10Z",
            "content": "Stuck on what to get Mom this Mother's Day? Flowers are nice, but if you really want to wow her, how about something that blends thoughtfulness with a little tech? We're not talking about complicated… [+6438 chars]"
        },
        
        {
            "source": {
                "id": null,
                "name": "Artiss.blog"
            },
            "author": null,
            "title": "I so hate the phrase \"vibe coding\"",
            "description": "“Vibe coding” is one of the latest “in-words” in code development right now. It’s defined as such… Vibe coding (also written as vibecoding) is a recently-coined …",
            "url": "https://artiss.blog/2025/03/i-so-hate-the-phrase-vibe-coding/",
            "urlToImage": "https://i0.wp.com/artiss.blog/wp-content/uploads/2025/03/9socnyqmkzi.jpg?fit=1200%2C800&ssl=1",
            "publishedAt": "2025-05-06T12:32:48Z",
            "content": "“Vibe coding” is one of the latest “in-words” in code development right now. It’s defined as such…\r\nVibe coding (also written as vibecoding) is a recently-coined term for the practice of writing code… [+5324 chars]"
        },
      
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Ulrich Rozier",
            "title": "Le MacBook Air de Microsoft, le Surface Laptop 13″, cible directement Apple",
            "description": "Le plus fin et le plus léger des Surface Laptop débarque avec une promesse : jusqu'à 23 heures d'autonomie. Le nouveau Surface Laptop 13 pouces de Microsoft mise sur l'intelligence artificielle et un format compact.",
            "url": "https://www.frandroid.com/marques/microsoft/2606467_le-macbook-air-de-microsoft-le-surface-laptop-13-cible-directement-apple",
            "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/05/surface-laptop-13-inch-family-under-embargo-until-may-6-6-am-pt-9-am-et-1200x675-1.jpeg?resize=1600,900&key=bcf182cc&watermark",
            "publishedAt": "2025-05-06T13:13:14Z",
            "content": "Le plus fin et le plus léger des Surface Laptop débarque avec une promesse : jusqu’à 23 heures d’autonomie. Le nouveau Surface Laptop 13 pouces de Microsoft mise sur l’intelligence artificielle et un… [+3526 chars]"
        },
        
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Axel Savoye",
            "title": "French Days Cdiscount : plus que quelques heures pour profiter des meilleures offres ! Voici les 13 bons plans à saisir avant minuit",
            "description": "Cdiscount joue le jeu des promotions durant les French Days 2025, et ce, jusqu’à la fin. En effet, l’e-commerçant lance des codes promo qui font baisser encore plus le prix de certaines références high-tech. Découvrez celles qui ont retenu notre attention dan…",
            "url": "https://www.frandroid.com/bons-plans/2600973_french-days-cdiscount-plus-que-quelques-heures-pour-profiter-des-meilleures-offres-voici-les-13-bons-plans-a-saisir-avant-minuit",
            "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/05/fd-guide-cdiscount-2.jpg?resize=1600,900&key=29e8d04e&watermark",
            "publishedAt": "2025-05-06T08:42:23Z",
            "content": "Cdiscount joue le jeu des promotions durant les French Days 2025, et ce, jusquà la fin. En effet, le-commerçant lance des codes promo qui font baisser encore plus le prix de certaines références high… [+12226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.ru"
            },
            "author": "Евгений Лазовский",
            "title": "Вышел первый тизер «Рая и ада» — ремейка триллера Акиры Куросавы с Дензелом Вашингтоном и A$AP Rocky",
            "description": "Режиссёром выступил Спайк Ли, автор американского ремейка «Олдбоя».",
            "url": "https://lifehacker.ru/rai-i-ad-remeik/",
            "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2025/05/denzel_washington_highest_2_lowe_1746513396.jpg",
            "publishedAt": "2025-05-06T06:40:47Z",
            "content": "A24 « » , 1963 . , « ».\r\n , «». (« », «2») . , « », 20 , 2006 .\r\n « » , , , . , .\r\n , (« »), («»), , A$AP Rocky, , Ice Spice.\r\n « » 2025 . 22 , 5 Apple TV+."
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "Eragorn",
            "title": "The Expanse: The Complete Series (Digital HD TV Series) $25",
            "description": "Apple iTunes [apple.com] has *The Expanse: The Complete Series* (Digital HD TV Series) on sale for *$24.99*. \n \nNote: Must purchase on iOS device using Apple TV app or on PC using iTunes for Windows...",
            "url": "https://slickdeals.net/f/18296299-the-expanse-the-complete-series-digital-hd-tv-series-25?utm_source=rss&utm_content=fp&utm_medium=RSS2",
            "urlToImage": "https://slickdeals.net/attachment/1/4/8/5/3/3/0/450x450/17526643.thumb",
            "publishedAt": "2025-05-06T07:03:03Z",
            "content": "This is one of the best TV shows to ever be created. The realism (if you set aside that it's largely in space) and physics are repeatedly said to be as realistic as possible. I read the first 2 books… [+546 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "Discombobulated",
            "title": "Teenage Mutant Ninja Turtles: The Complete Classic Series (1987) (Digital SD) $30",
            "description": "AppleTV\n \n For those interested\n \n Note, TV show/series are not Movies Anywhere (MA) compatible\n\nClassic Nickelodeon show\n  Teenage Mutant Ninja Turtles: The Complete Classic Series Collection [apple.",
            "url": "https://slickdeals.net/f/18294694-teenage-mutant-ninja-turtles-the-complete-classic-series-collection-1987-digital-sd-tv-show-29-99-via-appletv?utm_source=rss&utm_content=fp&utm_medium=RSS2",
            "urlToImage": "https://slickdeals.net/attachment/8/6/6/3/0/450x450/17522386.thumb",
            "publishedAt": "2025-05-06T07:09:08Z",
            "content": "AppleTV has Teenage Mutant Ninja Turtles: The Complete Classic Series Collection (1987) (Digital SD TV Show) on sale for $29.99.Thanks to Deal Editor Discombobulated for finding this deal\r\nNote, TV s… [+422 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "ywsd001",
            "title": "Apple Magic Keyboard for 11\" iPad Pro (1-4th Gen) & iPad Air (4 / 5th Gen) $180 + Free Shipping",
            "description": "Walmart has black 11' magic keyboard on sale for $180 \n \nhttps://www.walmart.com/ip/984505...02b599c1f6",
            "url": "https://slickdeals.net/f/18291946-apple-magic-keyboard-for-ipad-pro-11-inch-1st-4th-gen-ipad-air-4th-5th-gen-m2-us-english-black-walmart-com-180?utm_source=rss&utm_content=fp&utm_medium=RSS2",
            "urlToImage": "https://slickdeals.net/attachment/4/3/4/7/1/450x450/17515762.thumb",
            "publishedAt": "2025-05-06T11:28:30Z",
            "content": "This collaborative space allows users to contribute additional information, tips, and insights to enhance the original deal post. Feel free to share your knowledge and help fellow shoppers make infor… [+26 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "Discombobulated",
            "title": "Darkwing Duck: The Complete Series (1991) (Digital SD TV Show) $13",
            "description": "AppleTV\n\nFor those interested\n\nNote, TV show/series are not Movies Anywhere (MA) compatible\nDarkwing Duck: The Complete Series [apple.com] (1991) (Digital SD TV Show)$12.99Note, includes all 2 seasons",
            "url": "https://slickdeals.net/f/18294595-darkwing-duck-the-complete-series-1991-digital-sd-tv-show-12-99-via-appletv?utm_source=rss&utm_content=fp&utm_medium=RSS2",
            "urlToImage": "https://slickdeals.net/attachment/8/6/6/3/0/450x450/17522080.thumb",
            "publishedAt": "2025-05-06T08:44:05Z",
            "content": "I searched for the Hot Spells episode and it's on YouTube and in the National Archives Library. Uploaded byDuckman1979 (A wide range of uploads from this user. Heads-up, some NSFW .)on May 17, 2022\r\n… [+361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Yordan",
            "title": "Apple Pride Collection for 2025 is here",
            "description": "For another year, Apple rides the LGBTQ+ wave and announced this year's themed products right in time for Pride Month (which is June). The 2025 Pride Collection includes a Pride Edition Sports Band and wallpapers for wearables, iPhones, and iPads.\n\n\n\nThe stra…",
            "url": "https://www.gsmarena.com/apple_pride_collection_for_2025_is_here-news-67658.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/25/05/apple-pride-collection-2025/-952x498w6/gsmarena_001.jpg",
            "publishedAt": "2025-05-06T09:45:02Z",
            "content": "For another year, Apple rides the LGBTQ+ wave and announced this year's themed products right in time for Pride Month (which is June). The 2025 Pride Collection includes a Pride Edition Sports Band a… [+916 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Vlad",
            "title": "Here's what will make the first foldable iPhone stand out",
            "description": "Apple's first foldable iPhone is apparently slated to be introduced during its big fall 2026 launch event, presumably taking place in September of next year. The foldable iPhone will be presented by Apple as the highest-end iPhone, and not as part of a parall…",
            "url": "https://www.gsmarena.com/heres_what_will_make_the_first_foldable_iphone_stand_out-news-67656.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/25/05/foldable-iphone-two-key-features/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2025-05-06T06:41:02Z",
            "content": "Apple's first foldable iPhone is apparently slated to be introduced during its big fall 2026 launch event, presumably taking place in September of next year. The foldable iPhone will be presented by … [+1182 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lightstalking.com"
            },
            "author": "Federico Alegria",
            "title": "Low-Light Portrait, Storytelling Frames and Good Vibes!",
            "description": "Welcome to the Light Stalking weekly community wrap-up! If you've been following these words for the last couple of weeks, you might have noticed the strong duality between light and time when attempting to capture the essence of movement. Curiously enough, t…",
            "url": "https://www.lightstalking.com/low-light-portrait-storytelling-frames-and-good-vibes/",
            "urlToImage": "https://www.lightstalking.com/wp-content/uploads/13-96-scaled.jpg",
            "publishedAt": "2025-05-06T01:15:44Z",
            "content": "Welcome to the Light Stalking weekly community wrap-up!\r\nIf you've been following these words for the last couple of weeks, you might have noticed the strong duality between light and time when attem… [+4705 chars]"
        },
        
        {
            "source": {
                "id": null,
                "name": "Creative Bloq"
            },
            "author": "Guy Ailion",
            "title": "5 experiences every designer should have on their bucket list – and I've done them all",
            "description": "Every designer should strive to do these things.",
            "url": "https://www.creativebloq.com/design/5-experiences-every-designer-should-have-on-their-bucket-list-and-ive-done-them-all",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/KwfrbhtKsdZyBrndhjyh9C.jpg",
            "publishedAt": "2025-05-06T12:35:21Z",
            "content": "Despite traveling the world as an architect for 20 years, some of the best places I've ever visited were in my head – destinations that can't be found on a map, but still require an artist’s journey … [+9514 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketingdirecto.com"
            },
            "author": "Esther Lastra",
            "title": "Septiembre viene siempre con cuatro iPhones bajo el brazo, pero todo cambiará en 2026",
            "description": "La intención de Apple sería presentar los dos nuevos modelos Pro del iPhone en la fecha a la que normalmente nos tiene acostumbrados, en septiembre de 2026, y retrasar el lanzamiento de los otros dos teléfonos inteligentes (los estándar) a la primavera de 202…",
            "url": "https://www.marketingdirecto.com/digital-general/digital/septiembre-viene-cuatro-iphone-apple-brazo-todo-cambiara",
            "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2025/05/iphone-septiembre.jpg",
            "publishedAt": "2025-05-06T08:00:00Z",
            "content": "La intención de Apple sería presentar los dos nuevos modelos Pro del iPhone en la fecha a la que normalmente nos tiene acostumbrados, en septiembre de 2026, y retrasar el lanzamiento de los otros dos… [+2955 chars]"
        }
      
        
    ]
    constructor () {
        super();
        console.log("hello i am a constructor from news components");

          this.state ={
        articles:this.articles,
        loading:false
          }
    }

  /*  async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b6a907430d8d43d483c212431fc02468";
       let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles})

    }*/

  render() {
    return (
      <div className='container my-3'>
        <h2>News Top HeadLines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
    return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,90)}imageUrl={element.urlToImage}
            newsUrl={element.url}/> 
        </div>
            })}
        </div>
       
      </div>
    )
  }
}

export default News;
