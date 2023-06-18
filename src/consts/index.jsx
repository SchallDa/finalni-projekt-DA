import React from "react";

export const repeatingQuestions = {
  originalPrice: {
    id: "price",
    label: "Může se jedna o dražší kousek?",
  },
  sustainability: {
    id: "sustainability",
    label: "Mělo by se jednat o udržitelnou módu?",
  },
  dryCleaning: {
    id: "dryCleaning",
    label: "Může se jednat o oděv, který je nutné zanést do čistírny?",
  },
};

export const CLOTHS_TYPE_IDS = {
  COAT: "kabat",
  SUIT: "oblek",
  SUMMER_CLOTHES: "letni-obleceni",
  WORK_CLOTHES: "pracovni-obleceni",
};

export const configs = {
  [CLOTHS_TYPE_IDS.COAT]: {
    id: CLOTHS_TYPE_IDS.COAT,
    questions: [
      repeatingQuestions.originalPrice,
      repeatingQuestions.dryCleaning,
      repeatingQuestions.sustainability,
    ],
    icon: "coat",
  },
  [CLOTHS_TYPE_IDS.SUIT]: {
    id: CLOTHS_TYPE_IDS.SUIT,
    questions: [
      repeatingQuestions.originalPrice,
      repeatingQuestions.dryCleaning,
      repeatingQuestions.sustainability,
    ],
    icon: "suit",
  },
  [CLOTHS_TYPE_IDS.SUMMER_CLOTHES]: {
    id: CLOTHS_TYPE_IDS.SUMMER_CLOTHES,
    questions: [
      repeatingQuestions.originalPrice,
      {
        id: "ironing",
        label: "Najdeš si čas na žehlení oblečení?",
      },
      repeatingQuestions.sustainability,
    ],
    icon: "summer",
  },
  [CLOTHS_TYPE_IDS.WORK_CLOTHES]: {
    id: CLOTHS_TYPE_IDS.WORK_CLOTHES,
    questions: [
      {
        id: "manualLabor",
        label: "Pracuješ manuálně?",
      },
      {
        id: "hazard",
        label: "Pracuješ v nebezpečném prostředí (s ohněm, chmikáliemi,...)?",
      },
      {
        id: "hardWork",
        label: "Je tvá práce fyzicky náročná?",
      },
    ],
    icon: "work",
  },
};

export const getClothesId = (id, trueCounts) => {
  switch (id) {
    case CLOTHS_TYPE_IDS.COAT:
      return trueCounts >= 2
        ? CLOTHES_IDS.WOOLEN_COAT
        : CLOTHES_IDS.SYNTHETIC_COAT;

    case CLOTHS_TYPE_IDS.SUIT:
      return trueCounts >= 2
        ? CLOTHES_IDS.WOOLEN_SUIT
        : CLOTHES_IDS.SYNTHETIC_SUIT;

    case CLOTHS_TYPE_IDS.SUMMER_CLOTHES:
      return trueCounts >= 2
        ? CLOTHES_IDS.LINNEN_SUMMER_CLOTHES
        : CLOTHES_IDS.COTTON_SUMMER_CLOTHES;

    case CLOTHS_TYPE_IDS.WORK_CLOTHES:
      return trueCounts >= 2
        ? CLOTHES_IDS.COTTON_WORK_CLOTHES
        : CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES;

  
    default:
      return null;
  }
};

const CLOTHES_IDS = {
  WOOLEN_COAT: "vlneny-kabat",
  SYNTHETIC_COAT: "synteticky-kabat",
  WOOLEN_SUIT: "vlneny-oblek",
  SYNTHETIC_SUIT: "synteticky-oblek",
  COTTON_SUMMER_CLOTHES: "bavlnene-letni",
  LINNEN_SUMMER_CLOTHES: "lnene-letni",
  COTTON_WORK_CLOTHES: "bavlnene-pracovni",
  SYNTHETIC_WORK_CLOTHES: "synteticke-pracovni",
};

const MATERIALS_IDS = {
  WOOL: "vlna",
  COTTON: "bavlna",
  LINEN: "len",
  SYNTHETIC: "syntetika",
};

export const Clothes = {
  [CLOTHES_IDS.WOOLEN_COAT]: {
    id: CLOTHES_IDS.WOOLEN_COAT,
    header: "Vlněný kabát",
    icon: "coat",
    fiberLink: "wool",
    link: "/materialy/vlna",
    pros: "Vlna je skvělým materiálem pro zimní oblečení. Má výborné termoizolační vlastnosti, odvádí vlhkost, nemačká se a navíc hřeje i za mokra.",
    cons: "Vlněné kabáty jsou relativně drahé na pořízení i údržbu. Je nutné je chránit před molem šatním a čistit je jen v čistírně. ",
    maintenance: [
      "do-not-bleach",
      "except-trichloroethylene",
      "do-not-wash",
      "do-not-tumble-dry",
    ],
    maintenanceLegend: [
      "nebělit",
      "čištění pouze tetrachlorethylenem",
      "neprat",
      "nesušit v sušičce",
    ],
    eco: "Produkce vlněných vláken je poměrně kontroverzní. Ovce jsou ideální pro spásání louk, jejich přílišná aktivita ale může vést k nevratnému poškození místa a erozi půdy. Kvalita života ovcí se rovněž může výrazně lišit. ",
  },

  [CLOTHES_IDS.SYNTHETIC_COAT]: {
    id: CLOTHES_IDS.SYNTHETIC_COAT,
    header: "Syntetický kabát",
    icon: "coat",
    fiberLink: "synthetics",
    link: "/materialy/syntetika",
    pros: "Syntetické materiály jsou relativně levnými a představují alternativu k dražším látkám. Umělá vlákna lze vyprodukovat v barevných odstínech, které nejsou pro přírodní materiály možné.",
    cons: "Oděvy s vysokým podílem syntetických vláken jsou velmi málo prodyšné, nositel se v nich brzy zapotí, což často doprovází i nelibý óder. ",
    maintenance: ["iron-medium-temperature"],
    maintenanceLegend: ["žehlit na teplotu do 150°C"],
    eco: "Výroba syntetických materiálů je energeticky velmi náročná. Při jejich praní navíc dochází k uvolňování nerozložitelných mikrovláken, které mají negativní dopady na lidské zdraví i ekosystém.",
  },
  [CLOTHES_IDS.WOOLEN_SUIT]: {
    id: CLOTHES_IDS.WOOLEN_SUIT,
    header: "Vlněný oblek",
    icon: "suit",
    fiberLink: "wool",
    link: "/materialy/vlna",
    pros: "Vlna je skvělým materiálem pro obleky. Má výborné termoizolační vlastnosti, odvádí vlhkost, nemačká se, dobře odolává otěrům na namáhaných místech  a navíc hřeje i za mokra.",
    cons: "Vlněné obleky jsou relativně drahé na pořízení i údržbu. Je nutné je chránit před molem šatním a čistit  jen v čistírně.",
    maintenance: [
      "do-not-bleach",
      "except-trichloroethylene",
      "do-not-wash",
      "do-not-tumble-dry",
    ],
    maintenanceLegend: [
      "nebělit",
      "čištění pouze tetrachlorethylenem",
      "neprat",
      "nesušit v sušičce",
    ],
    eco: "Produkce vlněných vláken je poměrně kontroverzní. Ovce jsou ideální pro spásání louk, jejich přílišná aktivita ale může vést k nevratnému poškození místa a erozi půdy. Kvalita života ovcí se rovněž může výrazně lišit.",
  },
  [CLOTHES_IDS.SYNTHETIC_SUIT]: {
    id: CLOTHES_IDS.SYNTHETIC_SUIT,
    header: "Syntetický oblek",
    icon: "suit",
    fiberLink: "synthetics",
    link: "/materialy/syntetika",
    pros: "Syntetické materiály jsou relativně levnými a představují alternativu k dražším látkám. Pokud se jedná o oblek, který bude využit jednou ročně, syntetický materiál není na škodu.",
    cons: "Oděvy s vysokým podílem syntetických vláken jsou velmi málo prodyšné, nositel se v nich brzy zapotí, což často doprovází i nelibý óder.",
    maintenance: [
      "wash-40-degrees",
      "tumble-dry-law-temperature",
      "iron-medium-temperature",
    ],
    maintenanceLegend: [
      "prát na 40°C",
      "při nízké teplotě možno sušit v sušičce ",
      "žehlit na teplotu do 150°C",
    ],
    eco: "Výroba syntetických materiálů je energeticky velmi náročná. Při jejich praní navíc dochází k uvolňování nerozložitelných mikrovláken, které mají negativní dopady na lidské zdraví i ekosystém.",
  },
  [CLOTHES_IDS.COTTON_SUMMER_CLOTHES]: {
    id: CLOTHES_IDS.COTTON_SUMMER_CLOTHES,
    header: "Bavlněné letní oblečení",
    icon: "summer",
    fiberLink: "cotton",
    link: "/materialy/bavlna",
    pros: "Bavlna je jedním z vhodných materiálů pro letní oblečení. Je prodyšná a dobře odvádí pot.",
    cons: "Samotné bavlněné vlákno nemá nikterak speciální termoregulační vlastnosti. Jaké teplo v oděvu bude, lze ovlivnit třeba výběrem barvy. Světlé odstíny sluneční paprsky odrážejí, tmavé naopak pohlcují.",
    maintenance: [
      "iron-steam",
      "machine-wash-normal",
      "tumble-dry-law-temperature",
    ],
    maintenanceLegend: [
      "při žehlení napařovat",
      "běžné praní",
      "při nízké teplotě možno sušit v sušičce",
    ],
    eco: "Produkce bavlny je velmi náročná na spotřebu vody, pesticidů, insekticidů i hnojiv. Palčivou otázkou jsou i životní podmínky pracovníků v bavlněném průmyslu. Vhodnější alternativou může být ekologická, či recyklovaná bavlna.",
  },
  [CLOTHES_IDS.LINNEN_SUMMER_CLOTHES]: {
    id: CLOTHES_IDS.LINNEN_SUMMER_CLOTHES,
    header: "Lněné letní oblečení",
    icon: "summer",
    fiberLink: "linen",
    link: "/materialy/len",
    pros: "Lněné oblečení je studené na omak, což znamená že v létě příjemně chladí. Navíc skvěle odvádí pot. ",
    cons: "V porovnání s bavlněným oblečením je jednou z nevýhod vyšší pořizovací cena. To je dáno především menší nabídkou lněných oděvů. Další nevýhodou je nepoddajnost vlákna a oblečení je tak zapotřebí žehlit.",
    maintenance: [
      "iron-steam",
      "machine-wash-normal",
      "tumble-dry-law-temperature",
    ],
    maintenanceLegend: [
      "při žehlení napařovat",
      "běžné praní",
      "při nízké teplotě možno sušit v sušičce",
    ],
    eco: "Len je jedním z nejekologičtějších materiálu, z kterých je možné oděv ušít. Roste i na nepříliš úrodných místech, nepotřebuje zavlažovat a jeho zpracování je environmentálně nenáročné.",
  },
  [CLOTHES_IDS.COTTON_WORK_CLOTHES]: {
    id: CLOTHES_IDS.COTTON_WORK_CLOTHES,
    header: "Bavlněné pracovní oblečení",
    icon: "work",
    fiberLink: "cotton",
    link: "/materialy/bavlna",
    pros: "Bavlněný oděv je ideální pro manuálně náročnou práci, neboť je prodyšný. Pokud práce obsahuje manipulaci s ohněm a například i chemikáliemi, tak  bavlna, narozdíl od syntetiky, “pouze” shoří a nedojde ke “seškvaření” materiálu. Bavlněný oděv je tak v případě nehody ta lepší varianta. ",
    cons: "Bavlnu většinou není možné nabarvit na tak výrazné odstíny, které jsou technologicky možné jen u syntetických vláken",
    maintenance: [
      "iron-steam",
      "machine-wash-normal",
      "tumble-dry-law-temperature",
    ],
    maintenanceLegend: [
      "při žehlení napařovat",
      "běžné praní",
      "při nízké teplotě možno sušit v sušičce",
    ],
    eco: "Produkce bavlny je velmi náročná na spotřebu vody, pesticidů, insekticidů i hnojiv. Palčivou otázkou jsou i životní podmínky pracovníků v bavlněném průmyslu. Vhodnější alternativou může být ekologická, či recyklovaná bavlna.",
  },
  [CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES]: {
    id: CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES,
    header: "Syntetické pracovní oblečení",
    icon: "work",
    fiberLink: "synthetics",
    link: "/materialy/syntetika",
    pros: "Syntetické materiály jsou relativně levné a představují alternativu k dražším materiálům. Umělá vlákna je možné vyrobit v odstínech, které nejsou technologicky proveditelné u přírodních materiálů.",
    cons: 'Oděvy s vysokým podílem syntetických vláken jsou velmi málo prodyšné, rychle se v nich zpotíme, což často doprovází nelibý óder. Při kontaktu s ohněm a chemikáliemi u nich dochází ke "seškvaření", což může negativně ovlivnit případnou popáleninu na kůži.',
    maintenance: [
      "tumble-dry-law-temperature",
      "wash-40-degrees",
      "iron-medium-temperature",
    ],
    maintenanceLegend: [
      "při nízké teplotě možno sušit v sušičce",
      "prát na 40°C",
      "žehlit na teplotu do 150°C",
    ],
    eco: "Výroba syntetických materiálů je energeticky velmi náročná. Při jejich praní navíc dochází k uvolňování nerozložitelných mikrovláken, které mají negativní dopady na lidské zdraví i ekosystém.",
  },
};

export const MaterialDetail = {
  [MATERIALS_IDS.WOOL]: {
    id: MATERIALS_IDS.WOOL,
    icon: "wool",
    header: "Vlna",
    intro:
      "Vlna je jedním z nejstarších materiálu, ze kterého se oblečení začalo vyrábět. Může být z ovce, kašmírské kozy nebo velblouda. V běžných obchodech narazíme především na vlnu ovčí.",
    prosHeader: "Výhody materiálu",
    pros: "Hlavní výhoda vychází ze samotné struktury vlákna, díky kterému vlna skvěle tepelně izoluje. Nejde pouze o samotný povrch.  Středem vlákna prochází dutinka, která mu dává extra izolaci. Vlna se hodí i do sychravého počasí, jako jeden z mála materiálů zahřeje i když je mokrá.",
    conHeader: "Nevýhody materiálu",
    con: "Vlna je materiálem náročným na údržbu. Strukturou je vlněné vlákno podobné lidskému vlasu a obdobná je i péče. Když se o vlasy dobře staráme, jsou krásné. Pokud ne, čeká nás matná hříva a roztřepené konečky. Stejně jako lidský vlas i vlnu pokrývají šupinky, které se o sebe např. během praní třou a zadrhávají, což vede ke žmolkování.",
    maintenanceHeader: "Údržba",
    maintenance:
      "Vlna je oblíbeným materiálem pro moly. Ti se ale rozhodně nevyskytují pouze v domácnostech, kde je špína. Přinést si ho můžeme i z metra nebo obchodu. Vyplatí se do skříně přidat lapače a odpuzovače molů.",
  },

  [MATERIALS_IDS.COTTON]: {
    id: MATERIALS_IDS.COTTON,
    icon: "cotton",
    header: "Bavlna",
    intro:
      " Bavlna je jedním z nejrozšířenějších materiálů. Vyrábí se z ní trička, tepláky, džíny, košile i spodní prádlo.",
    prosHeader: "Výhody materiálu",
    pros: "Jde o jeden z nejuniverzálnějších a nejpohodlnějích materiálů. Je prodyšná, velmi dobře saje vodu a lze ji jednoduše barvit.",
    conHeader: "Nevýhody materiálu",
    con: "V obchodech sice najdeme výrobky s nálepkou „udržitelná bavlna“. Náročnost pěstování je ale stále jejím velkým mínusem.Během produkce bavlny jsou často upřednostňovány zisky nad udržitelností. Bavlník je potřeba zavlažovat a dopady jsou často drastické. Jde o jeden z hlavních důvodů vysychání jezer a toků v Asii. Pěstování je náročné i na hnojiva a pesticidy, které v půdě zanechávají stopy.  V rozvojových zemích bavlnu místo strojů často sklízí lidé, kteří pracují v náročných podmínkách srovnatelných s otroctvím.",
    maintenanceHeader: "Údržba",
    maintenance:
      "Většina bavlněných oděvů je jednoduchá na údržbu. Během praní vydrží i vyšší teploty. Pro delší životnost je lepší sušit prádlo na věšáku, než v sušičce. Dojde k vyrovnání vláken, postupnému odpaření vody a tím i menšímu namáhání vláken. ",
  },

  [MATERIALS_IDS.LINEN]: {
    id: MATERIALS_IDS.LINEN,
    icon: "linen",
    header: "Len",
    intro:
      "Len je dnes přehlíženým materiálem. Ještě v minulém století byl u nás hojně pěstovaný a nebylo těžké sehnat z něho lokální výrobky. Nyní už se u nás  za účelem výroby vláken nepěstuje, můžeme si ale koupit výrobky z evropského lnu.",
    prosHeader: "Výhody materiálu",
    pros: "Lněné výrobky jsou studené na omak, což z nich dělá ideální letní oblečení. Na rozdíl od bavlny je len nenáročný na pěstování a způsob jeho zpracování je ekologičtější.",
    conHeader: "Nevýhody materiálu",
    con: "Lněné oděvy nebo ty s jeho přídavkem můžeme najít mezi konfekčním zbožím. Jedná se ale o hůře sehnatelný materiál . Lněné látky mají matný povrch. Pro docílení lesklého efektu je třeba přidat ještě jiný materiál. ",
    maintenanceHeader: "Údržba",
    maintenance:
      "Oblečení z lnu je oproti například bavlně o něco náročnější na údržbu. Lněná vlákna jsou lehce mačkatelná a tak potřebují žehlení. Čištění je jednoduché a oděvy lze prát v pračce i na vysoké teploty.",
  },

  [MATERIALS_IDS.SYNTHETIC]: {
    id: MATERIALS_IDS.SYNTHETIC,
    icon: "synthetics",
    header: "Umělá vlákna",
    intro:
      "Pod umělá vlákna patří spousta druhů materiálu jako například polyester(PES), polyamid(PA) a další.",
    prosHeader: "Výhody materiálu",
    pros: "Nesmírnou výhodou materiálu je jeho rozmanitost a to jak druhová, tak i samotných vláken. Oproti přírodním vláknům, které mají daný  tvar i vlastnosti, jsou vlastnosti syntetických vláken výsledkem výrobního procesu. Díky tomu je možné mít z jednoho druhu materiálů vlákno lesklé, matné nebo duté. Barevná stálost umělých vláken bývá dobrá.",
    conHeader: "Nevýhody materiálu",
    con: "Výrobci umělá vlákna neustále vyvíjí, aby se přizpůsobili požadavkům zákazníků. U jednotlivých druhů a generací vláken, se tak může zlepšit otěruvzdornost, elasticita a mnoho dalšího. Nevýhodou je ale špatná recyklovatelnost. Zatímco přírodní vlákna podléhají rychlému rozkladu, ta syntetická nikoli. Velkým problémem je také zamoření životního prostředí mikrovlákny, které se uvolňují například při praní.",
    maintenanceHeader: "Údržba",
    maintenance:
      "Rozmanitá je rovněž údržba oděvů ze syntetických materiálů. Některé mají vysokou otěruvzdornost a málo se žmolkují, jiné nízkou. Pokud má oděv dlouho vydržet, měl by se uživatel řídit cedulkou s doporučenou údržbou. ",
  },
};
