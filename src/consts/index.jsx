export const repeatingQuestions = {
  originalPrice: {
    id: 'price',
    label: 'Může se jedna o dražší kousek?',
  },
  sustainability: {
    id: 'sustainability',
    label: 'Mělo by se jednat o udržitelnou módu?',
  },
  dryCleaning: {
    id: 'dryCleaning',
    label: 'Může se jednat o oděv, který je nutné zanést do čistírny?',
  },
};

export const CLOTHS_TYPE_IDS = {
  COAT: 'kabat',
  SUIT: 'oblek',
  SUMMER_CLOTHES: 'letni-obleceni',
  WORK_CLOTHES: 'pracovni-obleceni',
};

export const configs = {
  [CLOTHS_TYPE_IDS.COAT]: {
    id: CLOTHS_TYPE_IDS.COAT,
    questions: [
      repeatingQuestions.originalPrice,
      repeatingQuestions.dryCleaning,
      repeatingQuestions.sustainability,
    ],
  },
  [CLOTHS_TYPE_IDS.SUIT]: {
    id: CLOTHS_TYPE_IDS.SUIT,
    questions: [
      repeatingQuestions.originalPrice,
      repeatingQuestions.dryCleaning,
      repeatingQuestions.sustainability,
    ],
    // icon:
  },
  [CLOTHS_TYPE_IDS.SUMMER_CLOTHES]: {
    id: CLOTHS_TYPE_IDS.SUMMER_CLOTHES,
    questions: [
      repeatingQuestions.originalPrice,
      {
        id: 'ironing',
        label: 'Najdeš si čas na žehlení oblečení?',
      },
      repeatingQuestions.sustainability,
    ],
  },
  [CLOTHS_TYPE_IDS.WORK_CLOTHES]: {
    id: CLOTHS_TYPE_IDS.WORK_CLOTHES,
    questions: [
      {
        id: 'manualLabor',
        label: 'Pracuješ manuálně?',
      },
      {
        id: 'hazard',
        label: 'Pracuješ v nebezpečném prostředí (s ohněm, chmikáliemi,...)',
      },
      {
        id: 'hardWork',
        label: 'Je tvá práce fyzicky náročná?',
      },
    ],
  },
};
// const truesCountFunction = ()=> {
// // const trues ={
// //     1: true,
// //     2: false,
// //     3: true
// // };
// console.log(Object.values(trues).filter(value=>value).length)
// };

// // vezme výsledky z formuláře a spočítá ano
// console.log(truesCountFunction ());

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

    // case CLOTHS_TYPE_IDS.WORK_CLOTHES:
    //     return formResults.manualLabor && formResults.hazard ? CLOTHES_IDS.COTTON_WORK_CLOTHES : CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES
    // takto by to ReadableByteStreamController, pokud by místo parametru trueCounts byl formResults
    default:
      return null;
  }
};

const CLOTHES_IDS = {
  WOOLEN_COAT: 'vlneny-kabat',
  SYNTHETIC_COAT: 'synteticky-kabat',
  WOOLEN_SUIT: 'vlneny-oblek',
  SYNTHETIC_SUIT: 'synteticky-oblek',
  COTTON_SUMMER_CLOTHES: 'bavlnene-letni',
  LINNEN_SUMMER_CLOTHES: 'lnene-letni',
  COTTON_WORK_CLOTHES: 'bavlnene-pracovni',
  SYNTHETIC_WORK_CLOTHES: 'synteticke-pracovni',
};

const MATERIALS_IDS = {
  WOOL: 'vlna',
  COTTON: 'bavlna',
  LINEN: 'len',
  SYNTHETIC: 'syntetika',
};

// dodělat icony a fiberlink
export const Clothes = {
    [CLOTHES_IDS.WOOLEN_COAT]:
    {
        id: CLOTHES_IDS.WOOLEN_COAT,
        header: "Vlněný kabát",
        icon: "coat",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "Výhody vlněného kabátu",
        cons: "Nevýhody vlněného kabátu",
        maintanance: ["do-not-bleach", "expect-trichloroethylene", "do-not-wash", "do-not-tumble-dry"],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.SYNTHETIC_COAT]:
    {
        id: CLOTHES_IDS.SYNTHETIC_COAT,
        header: "Syntetický kabát",
        icon: "coat",
        fiberLink: "synthetics",
        pros: "Výhody synteticky",
        cons: "Nevýhody syntetiky",
        maintanance: ["tumble-dry-law-temperature", , "iron-medium-temperature" ],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.WOOLEN_SUIT]: {
        id: CLOTHES_IDS.WOOLEN_SUIT,
        header: "Vlněný oblek",
        icon: "suit",
        fiberLink: "wool",
        pros: "test",
        cons: "test",
        maintanance: ["do-not-bleach", "expect-trichloroethylene", "do-not-wash", "do-not-tumble-dry"],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_SUIT]: {
        id: CLOTHES_IDS.SYNTHETIC_SUIT,
        header: "Syntetický oblek",
        icon: "suit",
        fiberLink: "synthetics",
        pros: "test",
        cons: "test",
        maintanance: ["tumble-dry-law-temperature", "", "iron-medium-temperature"],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_SUMMER_CLOTHES,
        header: "Bavlněné letní oblečení",
        icon: "summer",
        fiberLink: "cotton",
        pros: "test",
        cons: "test",
        maintanance: ["iron-steam", "machine-wash-normal", "tumble-dry-law-temperature"],
        eco: "test",
    },
    [CLOTHES_IDS.LINNEN_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.LINNEN_SUMMER_CLOTHES,
        header: "Lněné letní oblečení",
        icon: "linen",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: ["iron-steam", "machine-wash-normal", "tumble-dry-law-temperature"],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_WORK_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_WORK_CLOTHES,
        header: "Bavlněné pracovní oblečení",
        icon: "work",
        fiberLink: "cotton",
        pros: "test",
        cons: "test",
        maintanance: ["iron-steam", "machine-wash-normal", "tumble-dry-law-temperature"],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES]: {
        id: CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES,
        header: "Syntetické pracovní oblečení",
        icon: "synthetics",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: ["tumble-dry-law-temperature", "wash-40-degrees", "iron-medium-temperature"],
        eco: "test",
    },
};

export const MaterialDetail = {
  [MATERIALS_IDS.WOOL]: {
    id: MATERIALS_IDS.WOOL,
    icon: 'wool',
    header: 'Vlna',
    intro:
      'Vlna je jedním z nejstarších materiálu, ze kterého se oblečení začalo vyrábět. Může být z ovce, kašmírské kozy nebo velblouda. V běžných obchodech narazíme především na vlnu ovčí.',
    prosHeader: 'Výhody materiálu',
    pros: 'Hlavní výhoda vychází ze samotné struktury vlákna, díky kterému vlna skvěle tepelně izoluje. Nejde pouze o samotný povrch.  Středem vlákna prochází dutinka, která mu dává extra izolaci. Vlna se hodí i do sychravého počasí, jako jeden z mála materiálů zahřeje i když je mokrá.',
    conHeader: 'Nevýhody materiálu',
    con: 'Vlna je materiálem náročným na údržbu. Strukturou je vlněné vlákno podobné lidskému vlasu a obdobná je i péče. Když se o vlasy dobře staráme, jsou krásné. Pokud ne, čeká nás matná hříva a roztřepené konečky. Stejně jako lidský vlas i vlnu pokrývají šupinky, které se o sebe např. během praní třou a zadrhávají, což vede ke žmolkování.',
    maintenanceHeader: 'Údržba',
    maintenance:
      'Vlna je oblíbeným materiálem pro moly. Ti se ale rozhodně nevyskytují pouze v domácnostech, kde je špína. Přinést si ho můžeme i z metra nebo obchodu. Vyplatí se do skříně přidat lapače a odpuzovače molů.',
  },

  [MATERIALS_IDS.COTTON]: {
    id: MATERIALS_IDS.COTTON,
    icon: 'cotton',
    header: 'Bavlna',
    intro:
      'V obchodech sice najdeme výrobky s nálepkou „udržitelná bavlna“. Náročnost pěstování je ale stále jejím velkým mínusem. ',
    prosHeader: 'Výhody materiálu',
    pros: 'Jde o jeden z nejuniverzálnějších a nejpohodlnějích materiálů. Je prodyšná, velmi dobře saje vodu a lze ji jednoduše barvit.',
    conHeader: 'Nevýhody materiálu',
    con: 'V obchodech sice najdeme výrobky s nálepkou „udržitelná bavlna“. Náročnost pěstování je ale stále jejím velkým mínusem.Během produkce bavlny jsou často upřednostňovány zisky nad udržitelností. Bavlník je potřeba zavlažovat a dopady jsou často drastické. Jde o jeden z hlavních důvodů vysychání jezer a toků v Asii. Pěstování je náročné i na hnojiva a pesticidy, které v půdě zanechávají stopy.  V rozvojových zemích bavlnu místo strojů často sklízí lidé, kteří pracují v náročných podmínkách srovnatelných s otroctvím.',
    maintenanceHeader: 'Údržba',
    maintenance:
      'Většina bavlněných oděvů je jednoduchá na údržbu. Během praní vydrží i vyšší teploty. Pro delší životnost je lepší sušit prádlo na věšáku, než v sušičce. Dojde k vyrovnání vláken, postupnému odpaření vody a tím i menšímu namáhání vláken. ',
  },

  [MATERIALS_IDS.LINEN]: {
    id: MATERIALS_IDS.LINEN,
    icon: 'linen',
    header: 'Len',
    intro:
      'Len je dnes přehlíženým materiálem. Ještě v minulém století byl u nás hojně pěstovaný a nebylo těžké sehnat z něho lokální výrobky. Nyní už se u nás  za účelem výroby vláken nepěstuje, můžeme si ale koupit výrobky z evropského lnu.',
    prosHeader: 'Výhody materiálu',
    pros: 'Lněné výrobky jsou studené na omak, což z nich dělá ideální letní oblečení. Na rozdíl od bavlny je len nenáročný na pěstování a způsob jeho zpracování je ekologičtější.',
    conHeader: 'Nevýhody materiálu',
    con: 'Lněné oděvy nebo ty s jeho přídavkem můžeme najít mezi konfekčním zbožím. Jedná se ale o hůře sehnatelný materiál . Lněné látky mají matný povrch. Pro docílení lesklého efektu je třeba přidat ještě jiný materiál. ',
    maintenanceHeader: 'Údržba',
    maintenance:
      'Oblečení z lnu je oproti například bavlně o něco náročnější na údržbu. Lněná vlákna jsou lehce mačkatelná a tak potřebují žehlení. Čištění je jednoduché a oděvy lze prát v pračce i na vysoké teploty.',
  },

  [MATERIALS_IDS.SYNTHETIC]: {
    id: MATERIALS_IDS.SYNTHETIC,
    icon: 'synthetics',
    header: 'Umělá vlákna',
    intro:
      'Pod umělá vlákna patří spousta druhů materiálu jako například polyester(PES), polyamid(PA) a další.',
    prosHeader: 'Výhody materiálu',
    pros: 'Nesmírnou výhodou materiálu je jeho rozmanitost a to jak druhová, tak i samotných vláken. Oproti přírodním vláknům, které mají daný  tvar i vlastnosti, jsou vlastnosti syntetických vláken výsledkem výrobního procesu. Díky tomu je možné mít z jednoho druhu materiálů vlákno lesklé, matné nebo duté. Barevná stálost umělých vláken bývá dobrá.',
    conHeader: 'Nevýhody materiálu',
    con: 'Lněné oděvy nebo ty s jeho přídavkem můžeme najít mezi konfekčním zbožím. Jedná se ale o hůře sehnatelný materiál . Lněné látky mají matný povrch. Pro docílení lesklého efektu je třeba přidat ještě jiný materiál. ',
    maintenanceHeader: 'Údržba',
    maintenance:
      'Výrobci umělá vlákna neustále vyvíjí, aby se přizpůsobili požadavkům zákazníků. U jednotlivých druhů a generací vláken se tak může zlepšit otěruvzdornost, elasticita a mnoho dalšího. Nevýhodou je ale špatná recyklovatelnost. Zatímco přírodní vlákna podléhají rychlému rozkladu, ta syntetická nikoli. Velkým problémem je také zamoření životního prostředí mikrovlákny, které se uvolňují například při praní.',
  },
};
