//Russian
var ruSyllables = [["то",1.72],["ст",1.55],["но",1.46],["на",1.42],["ко",1.25],["ни",1.25],["не",1.23],["ен",1.22],["по",1.16],["ра",1.13],["ли",1.12],["он",1.06],["ер",1.00],["ро",1.00],["ол",0.99],["го",0.99],["ал",0.97],["от",0.93],["ов",0.93],["ть",0.89],["ре",0.89],["во",0.89],["пр",0.87],["та",0.87],["ка",0.87],["бы",0.85],["ел",0.84],["ет",0.82],["ос",0.82],["ан",0.80],["ла",0.80],["ор",0.79],["ве",0.77],["де",0.77],["ль",0.76],["ло",0.76],["те",0.75]];

var ruPrefixes = ["авиа","авто","алко","анархо","англо","анти","архи","аудио","афро","аэро","без","бес","благо","в","вз","взаимо","взо","видео","вице","вне","внутри","во","воз","вос","вс","все","вы","без","бес","благо","вз","взаимо","взо","видео","вице","вне","внутри","во","воз","вос","вс","все","вы","гекто","гео","германо","гига","гидро","гипер","дву","двух","дека","деци","ди","до","евро","едино","еже","за","зепто","зоо","из","изо","интер","инфра","ис","йокто","квази","кибер","кило","кино","ко","кое","контр","макро","мега","меж","между","микро","милли","мини","много","мото","мульти","на","над","надо","наи","нано","не","недо","нео","низ","низо","нис","об","обо","одно","от","ото","па","пере","по","под","подо","пол","полу","пона","после","пост","пра","пре","пред","при","про","противо","прото","псевдо","радио","раз","разо","рас","роз","рос","русско","само","сверх","себе","со","сов","су","суб","супер","теле","тетра","техно","тре","трёх","три","турбо","ультра","уни","фото","франко","цис","через","черес","четверо","четырёх","чрез","экс","экстра","электро"];
var ruPrefixesProb = [0.00048466832530937997,0.0014432345686990426,7.539285060368132e-05,1.0770407229097332e-05,5.385203614548666e-05,0.0014755457903863345,0.0003446530313311146,9.693366506187599e-05,6.462244337458399e-05,0.000290800995185628,0.003371137462707465,0.0030695660602927397,0.0012601376458043878,0.05740627053108878,0.002552586513296068,0.00032311221687292,6.462244337458399e-05,0.0005277499542257692,0.00016155610843646,0.000581601990371256,0.00028003058795653064,0.010985815373679278,0.0022617855181104396,0.002078688595215785,0.0033495966482492705,0.0011739743879716092,0.011696662250799702,0.003371137462707465,0.0030695660602927397,0.0012601376458043878,0.002552586513296068,0.00032311221687292,6.462244337458399e-05,0.0005277499542257692,0.00016155610843646,0.000581601990371256,0.00028003058795653064,0.010985815373679278,0.0022617855181104396,0.002078688595215785,0.0033495966482492705,0.0011739743879716092,0.011696662250799702,1.0770407229097332e-05,0.0004954387325384773,2.1540814458194664e-05,0.00010770407229097332,0.0003015714024147253,0.0003661938457893093,0.0008724029855568839,0.0004738979180802826,0.00020463773735284932,4.308162891638933e-05,0.005062091397675746,0.009499499176063847,0.00031234180964382263,0.0003015714024147253,0.00031234180964382263,0.025978222236582766,0.0,0.00011847447952007066,0.005363662800090471,0.0007323876915786186,0.0009477958361605652,5.385203614548666e-05,0.005040550583217551,0.0,3.2311221687291994e-05,0.00010770407229097332,0.00015078570120736264,0.0006677652482040345,0.02284403373291544,0.00022617855181104396,0.0007000764698913266,0.00010770407229097332,0.00018309692289465466,0.0006785356554331319,0.00010770407229097332,0.0006246836192876453,0.00019386733012375198,0.00032311221687292,0.0013247600891789718,0.00032311221687292,0.00020463773735284932,0.019849860523226383,0.0017663467855719625,0.00021540814458194664,0.00033388262410201727,0.00015078570120736264,0.02655982422695402,0.0016371018988227946,0.0025095048843796785,0.0004954387325384773,5.385203614548666e-05,0.00020463773735284932,0.013032192747207771,0.0018632804506338385,0.0009154846144732732,0.012784473380938534,0.0006677652482040345,0.010005708315831422,0.009661055284500307,0.043598608463386,0.01013495320258059,0.0008077805421823,0.006839208590476806,0.0018094284144883517,0.00016155610843646,0.00042004588193479594,0.001389382532553556,0.0019817549301539093,0.007366958544702575,0.0031557293181255185,0.013915366139993753,0.01731881482438851,0.0006785356554331319,0.00024771936626923866,6.462244337458399e-05,0.0007862397277241053,0.009057912479670856,0.0008077805421823,0.008045494200135707,0.0006139132120585479,0.001163203980742512,5.385203614548666e-05,0.0028003058795653063,0.0005062091397675747,2.1540814458194664e-05,0.011567417364050534,0.001066270315680636,0.005105173026592136,0.0006354540265167426,0.0003769642530184066,0.0013247600891789718,6.462244337458399e-05,0.00019386733012375198,0.0021756222602776613,1.0770407229097332e-05,0.0010878111301388306,3.2311221687291994e-05,0.00011847447952007066,0.0006785356554331319,0.0007646989132659106,2.1540814458194664e-05,6.462244337458399e-05,3.2311221687291994e-05,2.1540814458194664e-05,3.2311221687291994e-05,1.0770407229097332e-05,8.616325783277865e-05,0.0015509386409900158,0.00019386733012375198,0.0007646989132659106];
var ruPrefixesSum = 0.05740627053108878;

var ruSuffixes = ["а","аемый","аж","ак","аль","альный","ание","анка","анный","аной","ануть","аный","анье","арь","астый","атор","атый","ать","ация","ач","ающий","ающийся","ба","бина","бище","вать","вич","го","е","ебный","ев","еватый","евать","евик","евина","евич","евня","евой","евский","евый","ее","ей","ель","енец","ение","енный","еный","енье","енька","енький","еский","ество","ествовать","еть","ец","ечка","ечко","ёв","ёвый","ёж","ёнка","ёнок","ёный","ёр","жды","ивать","ивый","ие","изм","изна","ий","ийски","ийский","ик","ика","илище","ильный","имый","ин","ина","инский","инство","иный","ировать","ист","истый","ить","ифицировать","иха","ица","ич","ический","ичка","ичный","ишка","ище","ия","ка","кать","кий","ко","кун","либо","ливый","лище","лка","ло","логия","лый","ль","льник","льня","льщик","лявый","нибудь","ний","ник","ница","ной","ность","нуть","ный","ня","няк","о","ов","оватый","овать","овик","овина","ович","овка","овна","овня","овой","овский","овской","овый","ой","ок","онка","онный","онок","онька","онький","ость","ота","отня","очка","с","сан","ск","ски","ский","ской","ство","ствовать","сь","ся","таки","тель","тельный","тельский","тельство","ти","тие","ть","у","ун","уть","учий","ушка","ушки","це","ция","цкий","цо","чатый","ческий","чивый","чик","чь","ша","шество","шний","шок","щик","ывать","ый","ын","ыня","ыч","ышка","ышко","ьба","ье"];
var ruSuffixesProb = [0.11121522504765906,0.0016694131205100865,0.0008293213566404945,0.0027033722145034305,0.0011416631662843173,0.0043835557422426145,0.012547524421898392,0.001066270315680636,0.006289917821792842,2.1540814458194664e-05,0.00035542343856021197,0.0004738979180802826,0.0009801070578478572,0.0010016478723060519,0.00024771936626923866,0.002014066151841201,0.0021863926675067583,0.061466714056458475,0.005159025062737622,0.0006677652482040345,0.0015186274193027239,0.00019386733012375198,0.0016694131205100865,0.0003015714024147253,6.462244337458399e-05,0.03093260956196754,0.00351115275668573,0.004706667959115534,0.05294732193824248,0.00028003058795653064,0.006871519812164098,9.693366506187599e-05,0.0015617090482191133,0.00018309692289465466,5.385203614548666e-05,0.0012493672385752905,8.616325783277865e-05,0.0010124182795351493,0.0014109233470117506,0.0012278264241170958,0.0011524335735134145,0.0028756987301689877,0.0072700248796407,0.0005062091397675747,0.013656876366495417,0.012213641797796375,0.0010339590939933438,0.0010878111301388306,0.000581601990371256,0.0009908774650769546,0.008928667592921689,0.0014540049759281398,0.0002369489590401413,0.007517744245909938,0.007097698363975142,0.0008724029855568839,0.00021540814458194664,0.00018309692289465466,2.1540814458194664e-05,0.0,5.385203614548666e-05,5.385203614548666e-05,3.2311221687291994e-05,0.00015078570120736264,8.616325783277865e-05,0.008487080896528698,0.002358719183172316,0.03279589001260138,0.0035757752000603145,0.00015078570120736264,0.05664157161782287,5.385203614548666e-05,0.0010447295012224413,0.020312988034077568,0.0033603670554783675,0.00018309692289465466,0.0007216172843495213,0.002498734477150581,0.01715725871595205,0.006386851486854718,0.002595668142212457,0.00016155610843646,0.0005708315831421586,0.007291565694098894,0.0036080864217476064,0.00129244886749168,0.0359300785162687,0.00025848977349833595,0.0003769642530184066,0.005180565877195817,0.004534341443449977,0.007959330942302929,0.0005169795469966719,0.002369489590401413,0.00031234180964382263,0.0007970101349532026,0.020366840070223054,0.041724557605523065,0.0032311221687292,0.041153726022380904,0.007625448318200911,0.00014001529397826532,0.0003446530313311146,0.0012601376458043878,0.00025848977349833595,0.002132540631361272,0.002552586513296068,0.0012170560168879986,0.002240244703652245,0.012493672385752906,0.0007539285060368132,0.00018309692289465466,0.0003661938457893093,5.385203614548666e-05,0.00035542343856021197,0.0025095048843796785,0.00835783600977953,0.003177270132583713,0.004975928139842967,0.014163085506262992,0.007883938091699247,0.0775361616422717,0.0025095048843796785,0.0004308162891638933,0.061412862020312986,0.018352773918381853,0.0009370254289314679,0.013667646773724515,0.00044158669639299063,0.00024771936626923866,0.0020571477807575906,0.0024018008120887053,0.0008508621710986892,7.539285060368132e-05,0.0028972395446271826,0.004512800628991782,0.00011847447952007066,0.007140779992891531,0.013893825325535559,0.008228591123030362,0.0007539285060368132,0.003403448684394757,0.00021540814458194664,0.00010770407229097332,9.693366506187599e-05,0.018912835094294915,0.0013463009036371665,0.00010770407229097332,0.0026172089566706518,0.019925253373830065,0.00016155610843646,0.0025741273277542624,0.0029080099518562796,0.03645782847049447,0.0015617090482191133,0.006020657641065409,0.0015293978265318211,0.0018201988217174492,0.048305276422501535,0.00010770407229097332,0.004545111850679074,0.004792831216948313,0.0004954387325384773,0.0008185509494113973,0.005105173026592136,0.0017232651566555731,0.1449158292675046,0.005869871939858046,0.0015293978265318211,0.008573244154361476,0.00038773466024750395,0.0013786121253244585,6.462244337458399e-05,0.00048466832530937997,0.008303983973634042,0.0015832498626773077,0.0002692601807274333,0.00048466832530937997,0.00872402985556884,0.000581601990371256,0.002692601807274333,0.002014066151841201,0.0022294742964231477,0.00012924488674916798,0.000290800995185628,0.0003446530313311146,0.0019063620795502277,0.005751397460337975,0.10486068478249162,0.00032311221687292,0.00019386733012375198,0.0005600611759130613,0.00028003058795653064,0.00014001529397826532,0.00021540814458194664,0.005072861804904844];
var ruSuffixesSum = 0.1702693678847997;


//Portuguese
var ptSyllables = [["ra",2.10],["en",1.97],["de",1.97],["ar",1.92],["es",1.91],["er",1.91],["te",1.82],["do",1.57],["os",1.55],["as",1.51],["co",1.46],["qua",0.35],["que",0.35],["qui",0.35],["quo",0.35],["se",1.40],["re",1.31],["ta",1.27],["ma",1.26],["to",1.25],["me",1.22],["el",1.20],["pa",1.20],["or",1.16],["em",1.10],["ue",1.10],["da",1.01],["ad",1.01],["an",1.01],["in",0.94],["po",0.89],["um",0.87],["al",0.86],["ve",0.85],["am",0.83],["ri",0.83],["om",0.82],["sa",0.79],["le",0.78],["ca",0.77],["ti",0.75],["ent",1.54],["que",1.41],["par",1.13],["ara",0.90],["men",0.89],["com",0.87],["est",0.73],["ado",0.71],["ele",0.68],["uma",0.47],["era",0.47],["voc",0.45],["ant",0.45],["con",0.42],["ver",0.40],["ria",0.39],["seu",0.38],["nha",0.38],["ame",0.37],["inh",0.36],["por",0.36],["per",0.35],["mas",0.35],["ela",0.34],["tos",0.34],["ada",0.33],["dos",0.32],["res",0.32],["eri",0.32],["and",0.32],["qua",0.31],["ito",0.31],["ida",0.30]];

var ptPrefixes = ["a","abdomino","acro","actino","ad","adeno","adipo","adreno","aero","afro","agri","agro","aleuro","alo","alumin","ambi","amelo","amilo","amino","ana","anarco","andro","anemo","anfi","angio","anglo","ano","ansio","ante","ântero","anti","anto","antropo","aorto","apico","apo","aqua","aqui","aquo","arco","argento","argiro","arqueo","arqui","arseno","arterio","artro","astro","atmo","audio","auto","bi","biblio","bio","braqui","braquio","cardio","centi","ciano","ciber","ciclo","circum","circun","co","contra","cripto","cromo","crono","deci","des","di","dis","duo","e","eco","eletro","eluro","em","en","endo","eno","entre","epi","euro","exa","fono","fosfo","foto","franco","gastro","geo","geronto","giga","glico","halo","hecto","hetero","hidro","hiper","hipo","holo","homeo","homo","horti","ictio","im","in","indo","infra","inter","ir","iso","luso","mal","mega","meso","mico","micro","mili","mini","mono","moto","multi","nano","necro","neo","neuro","nict","oligo","omni","onfalo","oni","ornito","osteo","pan","peta","pneumo","poli","pós","pre","pré","pró","proto","pseudo","psico","quilo","quimio","re","recém","retro","russo","sacari","sapro","semi","sino","so","sobre","sub","super","tanato","tele","teo","tera","termo","tetra","trans","tras","tri","uni","viti","zoo"];
var ptPrefixesProb = [0.10273884531310273,0.0,0.0,0.0,0.006172045776006172,0.0,0.00012858428700012858,0.0,0.0,0.00012858428700012858,0.0,0.00012858428700012858,0.0,0.0005143371480005143,0.0,0.00012858428700012858,0.0,0.0,0.0,0.00025716857400025716,0.0,0.0,0.0,0.0,0.0,0.00012858428700012858,0.0005143371480005143,0.00012858428700012858,0.0009000900090009,0.0,0.00025716857400025716,0.0,0.0,0.0,0.0,0.0010286742960010286,0.00025716857400025716,0.00025716857400025716,0.00012858428700012858,0.00012858428700012858,0.0,0.0,0.0,0.00012858428700012858,0.0,0.0,0.0,0.00012858428700012858,0.0,0.0,0.0005143371480005143,0.004500450045004501,0.0,0.00012858428700012858,0.0,0.0,0.0,0.0,0.0,0.0,0.00025716857400025716,0.0,0.0,0.0288028802880288,0.00012858428700012858,0.0,0.00012858428700012858,0.0,0.0005143371480005143,0.0050147871930050145,0.009000900090009001,0.0018001800180018,0.00025716857400025716,0.05966310916805966,0.00025716857400025716,0.0,0.0,0.005143371480005143,0.011315417256011316,0.00012858428700012858,0.00025716857400025716,0.00038575286100038574,0.0,0.00038575286100038574,0.0009000900090009,0.0,0.0,0.00012858428700012858,0.00012858428700012858,0.0,0.0,0.0,0.00012858428700012858,0.00012858428700012858,0.00012858428700012858,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.00012858428700012858,0.0,0.0,0.003471775749003472,0.013501350135013501,0.0,0.0,0.00025716857400025716,0.001543011444001543,0.00025716857400025716,0.00012858428700012858,0.003086022888003086,0.0,0.0,0.0,0.00012858428700012858,0.00012858428700012858,0.00012858428700012858,0.00012858428700012858,0.00025716857400025716,0.0,0.0,0.0,0.0,0.00012858428700012858,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0007715057220007715,0.00012858428700012858,0.0,0.00038575286100038574,0.00025716857400025716,0.004757618619004758,0.0005143371480005143,0.0009000900090009,0.0,0.0,0.00012858428700012858,0.00012858428700012858,0.0,0.030474476019030475,0.00012858428700012858,0.0,0.00012858428700012858,0.0,0.0,0.00025716857400025716,0.00025716857400025716,0.010543911534010544,0.00012858428700012858,0.0006429214350006429,0.00038575286100038574,0.0,0.00025716857400025716,0.00038575286100038574,0.00012858428700012858,0.00012858428700012858,0.0,0.00038575286100038574,0.00012858428700012858,0.003086022888003086,0.0006429214350006429,0.0,0.00012858428700012858];
var ptPrefixesSum = 0.10273884531310273;

var ptSuffixes = ["a","ação","áceo","acho","ada","ado","ae","ai","agem","ágio","agogo","al","algia","alha","ama","ame","amento","amo","ança","ância","andria","onímia","andro","ângulo","ano","ante","antropia","aõ","zão","ão","ar","arca","ardo","aria","ario","ário","arquia","ase","astro","ático","ation","ato","áveis","abilidade","ibilidade","ável","avo","aço","ção","cele","cêntrico","cida","cídio","cracia","crata","dade","dor","dora","dromo","dura","duto","ear","ectomia","edo","eira","eiro","ejar","ejo","ela","ella","emia","ença","ência","endo","engo","enho","eno","ense","ento","enu","er","ergia","es","ês","esse","eta","ete","ex","ez","eza","fagia","fago","filia","filo","fita","fobia","fóbico","fobo","gamia","geno","gono","grafia","gráfico","grama","i","ia","íaco","iano","ice","icho","ícia","ície","ico","idade","idão","ificar","il","ilho","im","imento","imo","in","indo","inho","ino","io","ismo","íssimo","ista","istão","ita","ite","ito","itude","ível","ivo","ização","izar","lândia","latria","logia","lógico","logista","logo","megalia","mente","mento","metria","metro","nauta","o","oco","ões","oico","oide","ola","oma","ómano","ômano","ona","ónimo","ônimo","ose","oso","oto","pata","patia","pático","pexia","pólio","s","scópico","scópio","teca","triz","udo","ura","x","zinha","zinho","zona","ão","não","ocê"];
var ptSuffixesProb = [0.2272084351292272,0.005914877202005915,0.00012858428700012858,0.0011572585830011573,0.011315417256011316,0.041146971840041145,0.00012858428700012858,0.0006429214350006429,0.002828854314002829,0.0005143371480005143,0.0,0.026616947409026617,0.0,0.001543011444001543,0.0019287643050019288,0.0012858428700012858,0.00012858428700012858,0.0007715057220007715,0.0019287643050019288,0.00012858428700012858,0.0,0.0,0.00012858428700012858,0.0,0.006172045776006172,0.0041146971840041145,0.0,0.0,0.0005143371480005143,0.04641892760704642,0.1384852770991385,0.0009000900090009,0.0009000900090009,0.0011572585830011573,0.00012858428700012858,0.002828854314002829,0.0,0.0007715057220007715,0.0005143371480005143,0.00025716857400025716,0.0,0.004886202906004886,0.0,0.0,0.0,0.0012858428700012858,0.0011572585830011573,0.002828854314002829,0.01362993442201363,0.0,0.0,0.00025716857400025716,0.0,0.0,0.0,0.0016715957310016716,0.006557798637006558,0.00012858428700012858,0.0,0.0007715057220007715,0.00038575286100038574,0.006814967211006815,0.0,0.0019287643050019288,0.004500450045004501,0.004757618619004758,0.0016715957310016716,0.0018001800180018,0.0054005400540054005,0.0,0.0,0.0006429214350006429,0.00038575286100038574,0.00012858428700012858,0.0,0.0006429214350006429,0.0019287643050019288,0.00025716857400025716,0.0032146071750032146,0.00012858428700012858,0.022116497364022117,0.00025716857400025716,0.0023145171660023146,0.002185932879002186,0.00025716857400025716,0.0063006300630063005,0.0029574386010029576,0.00025716857400025716,0.002828854314002829,0.003728944323003729,0.0,0.00025716857400025716,0.0,0.0,0.00012858428700012858,0.00012858428700012858,0.0,0.0,0.0,0.00012858428700012858,0.0,0.00012858428700012858,0.00012858428700012858,0.00012858428700012858,0.007072135785007072,0.025073935965025072,0.00038575286100038574,0.0012858428700012858,0.0018001800180018,0.00025716857400025716,0.0012858428700012858,0.0,0.012472675839012473,0.0009000900090009,0.00025716857400025716,0.0,0.005786292915005787,0.0009000900090009,0.0036003600360036,0.00012858428700012858,0.0020573485920020573,0.00012858428700012858,0.00025716857400025716,0.002828854314002829,0.004500450045004501,0.024816767391024817,0.0010286742960010286,0.0,0.0027002700270027003,0.00025716857400025716,0.0027002700270027003,0.0020573485920020573,0.009386652951009386,0.00012858428700012858,0.0011572585830011573,0.003728944323003729,0.0,0.0005143371480005143,0.0,0.0,0.0,0.00025716857400025716,0.0,0.0011572585830011573,0.0,0.0005143371480005143,0.0009000900090009,0.0,0.00012858428700012858,0.0,0.36145043075736144,0.0010286742960010286,0.0,0.0,0.0,0.0032146071750032146,0.001543011444001543,0.0,0.0,0.0012858428700012858,0.0,0.00012858428700012858,0.0012858428700012858,0.011186832969011186,0.0020573485920020573,0.00012858428700012858,0.00025716857400025716,0.00012858428700012858,0.0,0.00012858428700012858,0.016201620162016202,0.0,0.0,0.00025716857400025716,0.00025716857400025716,0.0027002700270027003,0.0075864729330075865,0.0011572585830011573,0.00025716857400025716,0.0005143371480005143,0.00025716857400025716,0.0101,0.0052,0.0044];
var ptSuffixesSum = 0.36145043075736144;

var ptImpossibleSyllables = ["aa","aâ","bb","bc","cc","cd","dd","dn","dt","êe","ee","ff","gg","hh","ii","jj","ll","mm","mn","mt","mc","mç","md","mg","mj","ml","mq","mr","ms","mv","mx","mz","nm","nn","nb","np","oo","pp","qq","sn","tt","tc","td","tm","tp","tq","ts","uu","vv","xx","zz"];
var ptEndingLetters = ["a","e","i","o","l","m","r","s","z"];


//English
var enSyllables = [["th",3.99],["he",3.65],["an",2.17],["er",2.11],["in",2.10],["re",1.64],["nd",1.62],["ou",1.41],["en",1.37],["on",1.36],["ed",1.29],["to",1.24],["it",1.24],["at",1.17],["ha",1.17],["ve",1.11],["as",1.09],["or",1.09],["hi",1.07],["ar",1.06],["te",1.00],["es",1.00],["ng",0.99],["is",0.99],["st",0.96],["le",0.95],["al",0.93],["ti",0.92],["se",0.85],["ea",0.84],["wa",0.84],["me",0.83],["nt",0.77],["ne",0.75],["the",3.67],["and",1.70],["ing",1.06],["her",0.73],["you",0.72],["ver",0.69],["was",0.66],["hat",0.58],["for",0.56],["not",0.56],["thi",0.55],["tha",0.54],["his",0.49],["ent",0.48],["ion",0.47],["ith",0.47],["ere",0.47],["wit",0.46],["all",0.45],["eve",0.43],["oul",0.41],["uld",0.40],["tio",0.37],["ter",0.36],["had",0.35],["hen",0.35],["era",0.33],["are",0.33],["hin",0.33],["our",0.33],["sho",0.33],["ted",0.32],["ome",0.31],["but",0.30]];

var enPrefixes = ["anti","auto","de","dis","down","extra","hyper","il","im","in","ir","inter","mega","mid","mis","non","over","out","post","pre","pro","re","semi","sub","super","tele","trans","ultra","under","up"]
var enPrefixesProb = [0.004733817342739724,0.0017319502949179012,0.017478918030926525,0.008140976971275565,0.00045392769039969956,0.0007862676065851939,0.0021750701831652268,0.000967298292637455,0.00471490368897307,0.021858779853176007,0.0017805854046035834,0.004987800693320508,0.0006403622775281476,0.0005457940086948768,0.004920251929868172,0.02020788807440091,0.010310643253364603,0.0050688592094633115,0.0018454322175178262,0.013247663488272183,0.008929946528398852,0.027827388591824438,0.003925934131849783,0.007389834721685585,0.004498747645925593,0.0009105573313374926,0.002061588260565302,0.0006700837334471755,0.0036314215231975965,0.0021318389745557317]
var enPrefixesSum = 0.127827388591824438

var enSuffixes = ["ful","ment","ion","age","al","ance","ence","dom","ee","er","or","hood","ism","ist","ity","ty","ment","ness","ry","ship","sion","tion","xion","able","ible","al","en","ese","ful","i","ic","ish","ive","ian","less","ly","ous","y","ate","en","ify","ise","ly","wards","wise"]
var enSuffixesProb = [0.0027722012520838796,0.0050229260503157225,0.023158418061998958,0.0030450982564313176,0.03366360175410629,0.0021642623810128533,0.002453371088588852,0.001153732879765903,0.002769499301545786,0.040677865350996885,0.006136129672010224,0.0008781339248803711,0.01067540657600722,0.010248498390988455,0.010907774322283256,0.013555685849614836,0.0050229260503157225,0.025841454946325754,0.013136883516210352,0.002988357295131355,0.0018481341680559196,0.01957563164848704,0.00011618387313801833,0.012453290030072709,0.0019372985358130034,0.03366360175410629,0.007462787386214108,0.0005593037613853441,0.0027722012520838796,0.009110977214451112,0.03527936817588617,0.004766240749196845,0.008003177493832798,0.007705962934642518,0.004985098742782415,0.04509285253024158,0.019489169231268054,0.0993696349394628,0.014606744608933188,0.007462787386214108,0.0012996382088229493,0.0033936498758453727,0.04509285253024158,0.0003755711247949895,0.0011077997206183144]
var enSuffixesSum = 0.1993696349394628;