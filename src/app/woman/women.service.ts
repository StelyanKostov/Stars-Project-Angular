import { retryWhen } from "rxjs/operators";

export class WomenService {

  dataLeidyAmelia:string[]=[
    "../assets/leidy amelia/leidy ameliajfif.jfif",
  ];

  dataViectoriaJ:string[] =[
    "https://c8.alamy.com/comp/PPH0NT/new-york-ny-usa-sept-25-2018-victoria-justice-attends-strong-by-zumba-to-celebrate-the-high-intensity-workoutss-2-year-anniversary-alamy-live-news-sppider-PPH0NT.jpg",
    "https://celebmagazine.com/wp-content/uploads/2020/12/victoria-justice-new-song-treat-myself.jpg",
    "https://www.xtrafondos.com/wallpapers/vertical/victoria-justice-para-fabletics-5102.jpg",
    "https://thumbs.dreamstime.com/z/victoria-justice-los-angeles-ca-june-victoria-justice-mtv-movie-awards-universal-studios-hollywood-picture-paul-smith-176094990.jpg",
    "https://celebmafia.com/wp-content/uploads/2016/10/victoria-justice-arriving-at-the-harry-show-in-new-york-city-10-18-2016-10.jpg",
    "https://i.pinimg.com/originals/da/07/40/da07406b424c49ce1d3b3f38303aabaf.jpg",
    "http://i.imgur.com/SPVyg.jpg",
    "https://c8.alamy.com/comp/DB2RGF/victoria-justice-nickelodeons-2011-kids-choice-awards-held-at-uscs-DB2RGF.jpg",
    "https://www.stylevore.com/wp-content/uploads/2020/03/31ff46fcb7fccc39655fc1be95980ee1.jpg",
    "https://i.pinimg.com/originals/a8/04/44/a804442bd910bdecde0b2fefdd8c1407.jpg",
    "https://i.pinimg.com/originals/93/8a/95/938a953f922c3220d4e245bd2d7cb86f.jpg",
    "https://i.pinimg.com/originals/84/ef/0f/84ef0fed13245fa6ed0e2aca0d59eb8f.jpg",
    "https://i.pinimg.com/736x/fa/34/a8/fa34a8bb2c4c1a0fd8110141823d9fb9.jpg",
    "https://nudbay.com/wp-content/uploads/2021/02/Victoria-Justice-nude.jpg",
    "https://www2.pictures.stylebistro.com/fp/Victoria+Justice+Smiles+While+Out+NYC+hN03UUQf3cBl.jpg"
  
  
  ];
  dataNinaDobrev:string[] =[
    "https://i.pinimg.com/originals/30/30/2d/30302d55ca86374edddd92b35bd818e8.jpg",
    "http://i.imgur.com/A47x1rT.jpg",
    "http://strangeworlds.at.ua/kartinki2/MileySirus/nina-dobrev-upskirt-1.jpg",
    "http://i.imgur.com/EaOp9EV.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/SSBiLZlcruqTSaYFI2eiyr-Xa-s/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2011/07/28/2/192/1922398/49184aee517bd503_dobrev5x571211/i/Nina-Dobrev-Playing-Soccer-Puma-Project-Pink-Pictures.jpg",
    "https://i.pinimg.com/originals/09/77/82/097782a0105fda0af5a351c9bb128faf.jpg",
    "https://www.beautyriot.com/assets/uploads/gallery/nina-dobrev/beauty-riot-nina-dobrev_01.jpg",
    "../../assets/img/nina-dobrev-hot-feet - Copy.jpg",
    "https://c.tenor.com/LcxPvrbn-f4AAAAC/nina-dobrev.gif",
    "https://c.tenor.com/8j_wvsxIRxsAAAAd/nina-dobrev-hair-orgasm.gif"
    

  ];
  dataKendallJ:string[] =[
    "https://i.pinimg.com/originals/a6/11/97/a61197ab29048659224444f258d1b541.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/11Tqxpc3XPhbKJEWmbGp_VP1g_o/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/15/905/n/1922398/b69523d4d818454d_GettyImages-1132036684/i/Sexy-Kendall-Jenner-Pictures.jpg",
    "https://i.redd.it/vp71omqnwtc61.jpg",
    "https://www.lifeandstylemag.com/wp-content/uploads/2021/01/149501899_2859461864292522_8802385104382528986_n.jpg?fit=1080%2C1349",
    "https://i.pinimg.com/564x/2a/3c/86/2a3c86d125eb48278df966b4792062e6.jpg",
    "https://pbs.twimg.com/media/Drnc0_XXcAAKFv3.jpg",
    "https://ae01.alicdn.com/kf/HTB1ungyOVXXXXcnXpXXq6xXFXXXt/2017-Summer-Kendall-Jenner-Sexy-Backless-Bodysuit-Sleeveless-Bodycon-Slim-One-Piece-Jumpsuit-Rompers-Women-Casual.jpg_Q90.jpg_.webp",
    "https://smartcdn.prod.postmedia.digital/torontosun/wp-content/uploads/2019/04/kendall-jenner-gettyimages-1059529174.jpg?quality=100&strip=all",
    "https://wallsdesk.com/wp-content/uploads/2016/08/Kendall-Jenner-Sexy-images.jpg",
    "https://cellularnews.com/wp-content/uploads/2020/06/03-kendall-jenner-under-the-covers-325x485.jpg",
    "https://lh3.googleusercontent.com/proxy/T94NMvUTG5Mi6MotPjmjrH1iuGoNi4ilCjAr82tahZfgwHRcqlDdWtzIFim3Z0t7i_nKVAgMhCdLGaXjOAH1Cifb3aDViGrjJvj1aZklyPUMucKvFOf8yisJIwxzM7dUEmBIgU0qnt8",
    "https://i.pinimg.com/736x/88/19/69/881969707851cc30b9f1527a413d5333.jpg",
    "https://www.fotorgia.com/wp-content/uploads/2020/10/kendall-jenner-naked.jpg",
    "https://78.media.tumblr.com/7ef053702da6fb79ab863f464654050b/tumblr_inline_pewm7kkb2G1twrksx_540.jpg",
    "https://thumbs.gfycat.com/PoliticalMediumBufflehead-size_restricted.gif"
  ];
  dataOther:string[] =[
    "https://celeb.nude.com/wp-content/uploads/2021/06/1623515342_Gizele-Oliveira-Topless-5-Photos.jpg",
    "https://i.pinimg.com/originals/5c/76/77/5c7677c324903a86a3abeacefa9cd54a.jpg",
    "https://iv1.lisimg.com/image/16559254/740full-gizele-oliveira.jpg",
    "https://www.imperiodefamosas.com/Fotos/Gizele_Oliveira/Gizele_Oliveira_051.jpg",
    "https://thefappening.pro/wp-content/uploads/2020/09/Gizele-Oliveira-Nude-Photos-That-No-One-Knew-About-TheFappening.Pro-25.jpg",
    "https://i.pinimg.com/originals/41/36/aa/4136aab2d501a264e72dec75922c9774.jpg",
    "http://cdn29.us1.fansshare.com/pictures/meganfox/megan-fox-sexy-1392651680.jpg",
    "https://www.fimlydivas.com/wp-content/uploads/2020/04/Young-Megan-Fox.jpg",
    "https://www.theplace2.ru/cache/archive/megan_fox/img/455116544-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    "https://pbs.twimg.com/media/EYKZPLTWoAIhcq2.jpg",
    "http://kinowar.com/wp-content/uploads/2020/04/%D0%93%D0%B0%D0%BB%D1%8C-%D0%93%D0%B0%D0%B4%D0%BE%D1%82-%D1%84%D0%BE%D1%82%D0%BE-gal-gadot-photo-65.jpg",
    "https://i.pinimg.com/originals/18/8a/4d/188a4dfb37e0aaa5dde2eba8b9742202.gif",
    "https://i.pinimg.com/originals/57/63/c5/5763c51beeb522f72252381b1252e8b9.gif",
    "https://i.pinimg.com/originals/1f/a0/19/1fa0199899fae30329132a341cb4c454.gif",
    "../assets/img/gal gadot.gif",
    "../assets/img/gal gadot2.gif",
    "../assets/img/gal gadot3.gif",
    "https://www.bravo.de/assets/field/image/pretty_little_liars_shay_mitchell_pluendert_das_set.jpg",
    "https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d3f3c2ac95a_-_esq-02-shay-mitchell-esquire-2014-xln.jpg",
    "http://images6.fanpop.com/image/photos/37800000/Ariana-Grande-Victoria-s-Secret-Fashion-ariana-grande-37857736-634-1008.jpg",
    "http://picture-cdn.wheretoget.it/ocxkfy-l-610x610-choker-ariana+grande-silver.jpg",
    "http://picture-cdn.wheretoget.it/vpq5ar-l-610x610-jewels-necklace-arianagrande-scream+queens-choker+necklace.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-cowgirl-boots-1623319870.jpeg",
    "https://images.hellogiggles.com/uploads/2018/06/13065715/ariana-grande-ring2.jpg",
    "../assets/img/ariana grande.jpg",
    "../assets/img/ariana grande2.jpg",
    "../assets/img/ariana grande3.jpg",
    "https://www.ritzystar.com/wp-content/uploads/2020/08/Madison-Beer-Sizzles-at-MTV-Video-Music-Awards-2020.jpg",
    "https://p.favim.com/orig/2018/09/16/makeup-madison-beer-studio-Favim.com-6336353.jpg",
    "https://www.lizdress.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/m/a/madison-beer-black-velvet-dress-abyss-by-abby-launch-1.jpg",
    "https://www.hawtcelebs.com/wp-content/uploads/2019/06/madison-beer-out-for-lunch-in-los-angeles-06-29-2019-12_thumbnail.jpg",
    "https://i2-prod.mirror.co.uk/incoming/article22107127.ece/ALTERNATES/s615b/0_Model-Madison-Beer-apologises-for-complaining-about-being-too-pretty-amid-George-Floyd-death.jpg",
    "https://p.favim.com/orig/2019/02/23/madison-beer-cute-dress-Favim.com-6932122.jpg",
    "../assets/img/madison beer.jpg",
    "../assets/img/madison beer1.jpg",
    "https://c.tenor.com/ONqgHQVtTEMAAAAC/madison-beer-happy.gif",
    "https://c.tenor.com/txIxZ6gjnmEAAAAC/madison-beer-cute.gif",
    "https://celebjihad.com/wp-content/uploads/2019/06/t_salma_hayek_nude_sex_dusk_till_dawn2-310x310.jpg",
    "http://img.paparaco.me/2015/10/Salma-Hayek-Fully-Nude-and-Oiled-Lying.jpg",
    "https://i.pinimg.com/564x/08/ac/60/08ac600015403394f5929733446e4cf7--selma-hayek-beautiful-celebrities.jpg",
    "https://c8.alamy.com/comp/CCY394/actor-maggie-q-attends-the-cw-upfront-held-at-madison-square-garden-CCY394.jpg",
    "https://c.tenor.com/SNpGQ2bG_PkAAAAd/salma-hayek.gif",
    "https://www.thecelebritydresses.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/b/_/b_selena_gomez_sexy_black_dress_2015_victoria_s_secret_fashion_show_1.jpg",
    "https://www3.pictures.stylebistro.com/bg/Selena+Gomez+Dresses+Skirts+Evening+Dress+oLjPLlm2C40x.jpg",
    "https://c8.alamy.com/comp/D79A90/nicole-scherzinger-nicole-scherzinger-walks-the-red-carpet-at-chateau-D79A90.jpg",
    "https://i2-prod.mirror.co.uk/incoming/article22621658.ece/ALTERNATES/s615b/0_Nicole-Scherzinger.jpg",
    "https://cdn.images.express.co.uk/img/dynamic/79/590x/secondary/Nicole-Scherzinger-Instagram-pictures-swimsuit-sexy-snaps-1962811.webp",
    "https://i2-prod.mirror.co.uk/incoming/article6224724.ece/ALTERNATES/s1227b/PAY-Nicole-Scherzinger-on-a-photoshoot.jpg",
    "https://i2-prod.mirror.co.uk/incoming/article6224736.ece/ALTERNATES/s615b/PAY-Nicole-Scherzinger-on-a-photoshoot.jpg",
    "https://www.hawtcelebs.com/wp-content/uploads/2015/08/nicole-scherzinger-on-the-set-of-a-photoshoot_10.jpg",
    "https://celebmafia.com/wp-content/uploads/2018/08/nicole-scherzinger-summer-2018-tca-press-tour-in-beverly-hills-1.jpg",
    "../assets/img/salma hayek.gif",
    "../assets/img/salma hayek2.gif",
    "../assets/img/nicole scherzinger.jpg",
    "../assets/img/Salma Hayek3.jpg",
    "../assets/img/Salma Hayek4.jpg",
    "http://www.thewordofmatus.com/wp-content/uploads/2011/11/first-look-maggie-q.jpg",
    "https://i.dailymail.co.uk/i/pix/2014/10/03/1412363650634_wps_3_Maggie_Q_leaves_this_even.jpg",
    "https://www1.pictures.stylebistro.com/bg/Maggie+Q+Pants+Shorts+Capri+Pants+mNcbp3Z44qyx.jpg",
    "https://www.gotceleb.com/wp-content/uploads/celebrities/maggie-q/leaving-the-bowery-hotel-in-nyc/Maggie-Q-in-Tight-Pants--01.jpg",
    "https://ca-times.brightspotcdn.com/dims4/default/520de31/2147483647/strip/true/crop/333x500+0+0/resize/840x1261!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-50300a53%2Fturbine%2Fsns-tv-cw-maggie-q-nikita-style-001",
    "https://4.bp.blogspot.com/-j4vBI0RgRZ4/Ww0R7pU-T0I/AAAAAAAAJ90/NIZ5hAqYpyAvwlYHyMV9VCSDB0E-K1DpwCEwYBhgL/s1600/3607-maggie-.jpg",
    "https://i1.wp.com/indiancelebblog.com/wp-content/uploads/2021/07/Maggie-q-hollywood-movie-celeb-cm1-31-hot-lingerie-hd-screenshots.jpg?ssl=1",
    "https://cdn.justjared.com/wp-content/uploads/2009/10/maggieq-love/maggie-q-new-york-i-love-you-premiere-04.jpg",
    "https://www.usmagazine.com/wp-content/uploads/1395232266_maggie-q-zoom.jpg?quality=86&strip=all",
    "http://img.paparaco.me/2015/11/Maggie-Q-Completelly-Nude-just-with-Pearls-Around-Her-Bare-Neck.jpg",
    "https://i.pinimg.com/474x/1b/c6/32/1bc6329b36094078d2e65b95d57a8200--shane-west-maggie-q.jpg",
    "http://www.snakkle.com/wp-content/uploads/2011/09/maggie-q-GC.jpg",
    "https://cdn2.shopify.com/s/files/1/0929/1494/files/rsz_tianaparker2_1024x1024.jpg?v=1563210327",
    "https://iv1.lisimg.com/image/21875304/640full-morgan-avery.jpg",
    "https://www.babepedia.com/user-uploads/Morgan%20Avery11.jpg",
    "https://iv1.lisimg.com/image/16292910/740full-kiele-montgomery.jpg",
    "https://ilarge.lisimg.com/image/16292906/759full-kiele-montgomery.jpg",
    "https://ilarge.lisimg.com/image/16292922/740full-kiele-montgomery.jpg",
    "https://infofashion.ru/wp-content/uploads/2020/11/KieleMontgomery.jpg",
    "https://infofashion.ru/wp-content/uploads/2020/10/TiffanyKeller17.jpg",
    "https://infofashion.ru/wp-content/gallery/tiffany-keller/TiffanyKeller20.jpg",
    "https://infofashion.ru/wp-content/gallery/tiffany-keller/TiffanyKeller19.jpg",
    "https://infofashion.ru/wp-content/gallery/tiffany-keller/TiffanyKeller13.jpg",
    "https://the007world.com/wp-content/uploads/2020/10/Tiffany-Keller-15.jpg",
    "https://smartbiography.com/wp-content/uploads/2020/07/Cindy-Prado-hot-photos-17.jpg",
    "https://iv1.lisimg.com/image/22579699/740full-cindy-prado.jpg",
    "https://celeb.gate.cc/media/cache/image/upload/c/i/cindy-prado-feet-70002.jpeg",
    "https://yesbitch.net/wp-content/uploads/2018/12/Lorena-Haliti.jpg",
    "https://thefappeningblog.com/wp-content/uploads/2021/06/Demi-Rose-Mawby-Naked-1-thefappeningblog.com_-1024x1333.jpg",
    "https://iv1.lisimg.com/image/22992225/740full-kaylin-baer.jpg",
    "https://iv1.lisimg.com/image/22992224/740full-kaylin-baer.jpg",
    "https://image2.tienphong.vn/w665/Uploaded/2020/bzivobpc/2020_03_23/kaylin9_mbug.jpg",
    "https://image3.tienphong.vn/w665/Uploaded/2020/bzivobpc/2020_07_01/kaylin20_keif.jpg",
    "https://i.imgur.com/ZAG99SO.jpg",
    "https://goat.keyformat.it/static/cfvb/uploads/2019/10/Kiele-Montgomery-3.jpg",
    "https://ilarge.lisimg.com/image/16292919/1080full-kiele-montgomery.jpg",
    "../assets/desi/desi1.jpg",
    "../assets/desi/desi2.jpg",
    "../assets/desi/desi3.jpg",
    "../assets/desi/desi.jpg",
    "https://www.gotceleb.com/wp-content/uploads/celebrities/jessica-alba/gq-magazine-russian-december-2010/jessica-alba-gq-magazine-russian-december-2010-05.jpg",
    "https://www.gotceleb.com/wp-content/uploads/celebrities/jessica-alba/gq-magazine-russian-december-2010/jessica-alba-gq-magazine-russian-december-2010-01.jpg",
    "https://iv1.lisimg.com/image/218227/740full-jessica-alba.jpg",
    "https://www.santabanta.com/images/wallpapers/celebrities/amazing-hollywood-actress-natalie-portman_1024-768.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/Kf73y7Zo03oxnXpTwk34brRKEcU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/03/841/n/44701584/94484281f6466078_GettyImages-462687104/i/Sexy-Mila-Kunis-Pictures.jpg",
    "https://www3.pictures.stylebistro.com/pc/Mila+Kunis+attending+Walt+Disney+Studios+Motion+j3RI3zQ9c54x.jpg",
    "https://www.theplace2.ru/archive/mila_kunis/img/www_bruce_juice_com_-405.jpg",
    "https://hips.hearstapps.com/elleuk.cdnds.net/15/37/2048x2730/2048x2730-f598f852-29f8-11e6-920c-195e8e6e08eb-assets-elleuk-com-gallery-16608-1341502886-mila-kunis-jpg.jpg",
    "https://horrornews.net/wp-content/uploads/2020/01/Mila-Kunis-hottest-sexiest-sexy-photos-4.jpg",
    "https://media.gq.com/photos/55828aa71177d66d68d525a7/3:4/w_387,h_516,c_limit/blogs-the-feed-mila-kunis-08.jpg",
    "http://scandalplanet.com/wp-content/uploads/2019/11/Adriana-Lima-Nude-Naked-Porn-45-978x550.jpg",
    "https://nahefoto.cz/photos/br/adriana-lima/adriana-lima121.jpg",
    "https://images.news18.com/ibnlive/uploads/2021/02/1612418554_rihanna-6.jpg",
    "https://www.blackcelebsleaked.com/wp-content/uploads/2016/03/Rihanna-nude-fappening-photos-1-e1509756098296.jpg",
    "../assets/img/jessica Alba.jpg",
    "../assets/img/jessica Alba1.jpg",
    "../assets/img/jessica Alba2.jpg",
    "../assets/img/jessica Alba3.jpg",
    "../assets/img/jessica Alba4.jpg",
    "../assets/img/jessica Alba5.jpg",
    "../assets/img/jessica Alba6.jpg",
    "../assets/img/adriana lima.jpg",
    "../assets/img/adriana lima1.jpg",
    "http://img.paparaco.me/2016/11/Jennifer-Lopez-Nude-Hot-Booty-5.jpg",
    "https://thefappening.pro/wp-content/uploads/2020/07/Jennifer-Lopezs-Tight-Ass-In-Spandex-TheFappening-Pro-10-624x780.jpg",
    "https://celeb.gate.cc/media/cache/image/upload/j/e/jennifer-lopez-playboy-52521.jpg",
    "https://images.news18.com/ibnlive/uploads/2021/03/1614684998_jennifer-lopez-1.jpg?im=FitAndFill,width=1200,height=900",
    "http://images6.fanpop.com/image/photos/33800000/angelina-angelina-jolie-33834864-979-1287.jpg",
    "https://www.gotceleb.com/wp-content/uploads/photos/angelina-jolie/esquire-magazine-october-2015/Angelina-Jolie:-Esquire-2015--05.jpg",
    "https://p.favim.com/orig/2019/01/26/angelina-jolie-90s-Favim.com-6842243.jpg",
    "https://jolieasie.files.wordpress.com/2012/02/angelinajoliecover.jpg",
    "https://www.filmibeat.com/img/2015/04/03-1428054153-angelina-jolie-07.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/GOgZZ4OnefktZko0F9Bmu0OdJXM/1x131:1849x1979/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/04/778/n/2589278/237fc1165ed93213ef9d70.17446152_/i/Sexy-Angelina-Jolie-Pictures.jpg",
    "https://nda.ams3.digitaloceanspaces.com/2018/01/Naked-Angelina-Jolie-in-Foxfire-_03.jpg",
    "https://tb.sb-cd.com/t/1354152/1/3/w:1280/t7-enh/angelina-jolie-naked-loop.jpg",
    "https://img.paparaco.me/2015/09/Angelina-Jolie-Nude-Nipples-500x510.jpeg",
    "https://geeksoncoffee.com/wp-content/uploads/2019/10/Margot-Robbie-hot-cleavage.jpg",
    "https://i0.wp.com/indiancelebblog.com/wp-content/uploads/2020/11/Margot-robbie-hot-pics-SSMC-14-sexy-butt-hd-screencaps.jpg",
    "http://celeblives.net/wp-content/uploads/2020/03/Margot-Robbie-Hot-Pics.jpg",
    "https://akns-images.eonline.com/eol_images/Entire_Site/2018109/rs_634x1024-181109050234-634-Bella-Hadid-Victorias-Secret-After-Party-J1R-110918.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/_D5QhllZIgm2dg8kVF0D-CrBuK8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/11/08/186/n/1922564/7f4012df0e600248_GettyImages-1059371354/i/Bella-Hadid-Victoria-Secret-Show-2018.jpg",
    "https://nudbay.com/wp-content/uploads/2021/02/Bella-Hadid-nude.jpg",
    "https://ae01.alicdn.com/kf/HTB1wVfqJXXXXXXtXVXXq6xXFXXXC/Scarlett-Johansson-Lucy-Hot-Movie-Printed-Art-Wall-Stick-Custom-Amazing-30-x-20-Inch-Wall.jpg_Q90.jpg",
    "https://meghanmaven.com/wp-content/uploads/2017/12/meghan-markle-reitmans-fall-winter-2015-4.jpg",
    "https://the-hollywood-gossip-res.cloudinary.com/iu/s--6H-19S9P--/c_scale,f_auto,h_1043,q_auto,w_696/v1513031423/meghan-markle-on-deal-or-no-deal",
    "https://files-cdn.sharenator.com/2020/05/Meghan-Markle-Hot-in-Black-Bikini-768x1024.jpg",
    "http://www.flavourmag.co.uk/files/2014/11/nathalie-emmanuel-1.jpg",
    "https://cutewallpaper.org/21/nathalie-emmanuel-wallpapers/Nathalie-Emmanuel-HD-Wallpaper-From-Gallsource.com-.jpg",
    "https://findhername.net/wp-content/uploads/2021/06/Nathalie-Emmanuel-nude-naked.jpg",
    "https://img6.hotnessrater.com/3199549/nathalie-emmanuel-nude.jpg?w=4000&h=6000",
    "https://images2.sassydaily.com/Alessandra-Ambrosio/Alessandra+Ambrosio-strapless+dress-hot+pink+dress-maxi-deep+sweetheart+neckline-draped-flaunt-bow-satin+dress-black+dress-plunging-flowing-sensational+cleavage-embellished_2_20222_167646.jpg",
    "https://lacenlingerie.com/wp-content/uploads/2017/12/Alessandra-Ambrosio-and-Adriana-Lima-2.jpg",
    "https://movienudes.files.wordpress.com/2016/05/alessandra-ambrosio3.jpg?w=663",
    "https://ilarge.lisimg.com/image/17070088/1118full-yael-shelbia.jpg",
    "https://cutewallpaper.org/22/yael-shelbia-wallpapers/255023908.jpg",
    "https://iv1.lisimg.com/image/22291345/740full-yael-shelbia.jpg",
    "https://www.fashiongonerogue.com/wp-content/uploads/2014/10/emily-ratajkowski-candid-digitals02.jpg",
    "https://www.hawtcelebs.com/wp-content/uploads/2019/02/emily-ratajkowski-inamorata-swimwear-march-2019-30.jpg",
    "https://www.theplace2.ru/archive/emily_ratajkowski/img/emily-ratajkowski-in.jpg",
    "https://www.theplace2.ru/archive/emily_ratajkowski/img/emily_ratajkowski_amore_and_sorvete_catalog_2016_01.jpg",
    "https://1.bp.blogspot.com/-Luwz2g0toDI/WU2IRdDDe2I/AAAAAAAAEwE/NXfv7eK17kwSaHyBojFg-mfWlL5okaPAACLcBGAs/s1600/emily%2Bratajkowski.jpg",
    "https://findhernudes.com/wp-content/uploads/2021/08/Emily-Ratajkowski-TheFappeningBlog.com-9-1024x1280.jpg",
    "https://boom-celebs.com/wp-content/uploads/2018/06/Emily-Ratajkowski-booty-640x800.jpg",
    "../assets/emily/Emily Ratajkowski7.png",
    "../assets/emily/Emily Ratajkowski5.png",
    "../assets/emily/Emily Ratajkowski.jpg",
    "../assets/emily/Emily Ratajkowski1.jfif",
    "../assets/emily/Emily Ratajkowski2.jpg",
    "../assets/emily/Emily Ratajkowski3.jpg",
    "../assets/emily/Emily Ratajkowski4.jpg",
   
    "../assets/emily/Emily Ratajkowski6.jpg",
    
    "../assets/emily/Emily Ratajkowski8.jpg",
    "../assets/emily/Emily Ratajkowski9.jpg",
    "../assets/emily/Emily Ratajkowski10.jpg",
    "../assets/emily/Emily Ratajkowski11.jpg",
    "../assets/emily/Emily Ratajkowski12.jpg",
    "../assets/emily/Emily Ratajkowski13.jpg",
    "../assets/emily/Emily Ratajkowski14.jpg",
    "../assets/emily/Emily Ratajkowski15.jpg",
    "../assets/emily/Emily Ratajkowski16.jpg",
    "../assets/emily/Emily Ratajkowski17.jpg",
    "../assets/emily/Emily Ratajkowski18.jpg",
    "../assets/emily/Emily Ratajkowski19.jpg",
    "../assets/emily/Emily Ratajkowski20.jpg",
    "../assets/emily/Emily Ratajkowski21.jpg",
    "../assets/emily/Emily Ratajkowski22.jpg",
    "../assets/emily/Emily Ratajkowski23.jpg",
    "../assets/emily/Emily Ratajkowski24.jpg",
    "../assets/emily/Emily Ratajkowski25.jpg",
    "../assets/emily/Emily Ratajkowski26.jpg",
    "../assets/emily/Emily Ratajkowski27.jpg",
    "../assets/emily/Emily Ratajkowski28.jpg",
    "../assets/emily/Emily Ratajkowski29.jpg",
    "../assets/emily/Emily Ratajkowski30.jpg",
    "../assets/emily/Emily Ratajkowski31.jpg",
    "../assets/emily/Emily Ratajkowski32.jpg",
    "../assets/emily/Emily Ratajkowski33.jpg",
    "../assets/emily/Emily Ratajkowski34.jpg",
    "../assets/emily/Emily Ratajkowski35.jpg",
    "../assets/emily/Emily Ratajkowski36.jpg",
    "../assets/emily/Emily Ratajkowski37.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/MMPE81rKsRRLNUyL72q5HeS_wig/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/20/655/n/1922564/c95a411043586791_GettyImages-876613206_master/i/Jasmine-Tookes.jpg",
    "https://fappeningbook.com/photos/j/a/jasmine-tookes/1000/232.jpg",
    "https://fapreon.com/content/j/a/jasmine-tookes/e510f/0015.jpg",
    "https://static-ca-cdn.eporner.com/gallery/hu/6Y/NifnI3R6Yhu/411382-jasmine-tookes-nude.jpg",
    "http://thefappeningnew.com/wp-content/uploads/2017/05/Jasmine-Tookes_thefappeningnew_com-69.jpg",
    "../assets/emily/Emily Ratajkowski38.jpg",
    "../assets/emily/Emily Ratajkowski39.jpg",
    "../assets/emily/Emily Ratajkowski40.gif",
    "../assets/emily/Emily Ratajkowski42.gif",
    "../assets/emily/Emily Ratajkowski43.gif",
    "../assets/emily/Emily Ratajkowski44.gif",
    "../assets/emily/Emily Ratajkowski45.gif",
    "../assets/emily/Emily Ratajkowski46.gif",
    "../assets/emily/Emily Ratajkowski47.gif",
    "../assets/emily/Emily Ratajkowski48.gif",
    "../assets/emily/Emily Ratajkowski49.webp",
    "../assets/emily/Emily Ratajkowski51.gif",
    "../assets/emily/Emily Ratajkowski52.gif",
    "../assets/emily/Emily Ratajkowski53.gif",
    "../assets/emily/Emily Ratajkowski54.gif",
    "../assets/emily/Emily Ratajkowski55.gif",
    "../assets/emily/Emily Ratajkowski56.jpg",
    "../assets/emily/Emily Ratajkowski57.jpg",
    "../assets/emily/Emily Ratajkowski58.jpg",
    "../assets/emily/Emily Ratajkowski59.jpg",


    "https://saucemonsters.com/wp-content/uploads/2017/06/Cara-Delevingne-03.jpg",
    "https://i2.wp.com/bestofcomicbooks.com/wp-content/uploads/2018/06/cara-delevingne-cleavage.jpg",
    "https://saucemonsters.com/wp-content/uploads/2017/06/Cara-Delevingne-02.jpg",
    "https://www3.pictures.stylebistro.com/gi/Cara+Delevingne+Dresses+Skirts+Mini+Dress+nUNzPezWZBtl.jpg",
    "https://akns-images.eonline.com/eol_images/Entire_Site/201507/rs_634x862-150107102042-634-dkny-cara-delevingne.ls.1715.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/23CtyliMFoG3amUhXuIPDkeXVHw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/786/n/1922398/ce4ffe65cf8f0e0b_GettyImages-1165912586/i/Sexy-Cara-Delevingne-Pictures.jpg",
    "../assets/img/Cara Delevingne.jpg",
    "../assets/img/Cara Delevingne1.jpg",
    "../assets/img/Cara Delevingne2.jpg",
    "../assets/img/Cara Delevingne3.jpg",
    "../assets/img/Cara Delevingne4.jpg",
    "../assets/img/Cara Delevingne5.jpg",
    "../assets/img/Cara delevingne6.jpg",
    
  ];
  
    constructor() { }
  
  
    getImagesViectoriaJ(){
      return this.dataViectoriaJ;
    }
    getImagesNinaDobrev(){
      return this.dataNinaDobrev;
    }
    getImagesKendallJ(){
      return this.dataKendallJ;
    }
    getImagesEmily(){
      return this.dataOther.filter(x=> x.toLowerCase().includes('emily'))
    }
    getImagesLeidy(){

     if (this.dataLeidyAmelia.length === 1) {
       
      for (let index = 1; index < 62; index++) {
       
        this.dataLeidyAmelia[index] = `../assets/leidy amelia/leidy amelia${index}.jpg`; 
      }
      

      this.dataLeidyAmelia.push("../assets/leidy amelia/leidy ameliapng.png");
      this.dataLeidyAmelia.push("../assets/leidy amelia/leidy ameliapng1.png");
      this.dataLeidyAmelia.push("../assets/leidy amelia/leidy amelia.gif");
      this.dataLeidyAmelia.push("../assets/leidy amelia/leidy amelia1.gif");
     }

      



      console.log(this.dataLeidyAmelia)
      return  this.dataLeidyAmelia;
    }

    getAllImgWithString(str:string){
      this.getImagesLeidy();
      var data = this.dataViectoriaJ.concat(this.dataKendallJ  , this.dataLeidyAmelia ,this.dataNinaDobrev, this.dataOther).filter(x=> x.toUpperCase().includes(str.toUpperCase()));
      return data;
    }
    getAllImg(){
      this.getImagesLeidy();
      var data = this.dataViectoriaJ.concat(this.dataNinaDobrev,  this.dataKendallJ,  this.dataLeidyAmelia,this.dataOther);
      return data;
    }
}