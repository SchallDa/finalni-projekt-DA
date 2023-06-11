


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
}

export const CLOTHS_TYPE_IDS = {
    COAT: "kabat",
    SUIT: "oblek",
    SUMMER_CLOTHES: "letni-obleceni",
    WORK_CLOTHES: "pracovni-obleceni",
}

export const configs = {
    [CLOTHS_TYPE_IDS.COAT]: {
        id: CLOTHS_TYPE_IDS.COAT,
        questions: [
            repeatingQuestions.originalPrice,
            repeatingQuestions.dryCleaning,
            repeatingQuestions.sustainability,
        ]
    },
    [CLOTHS_TYPE_IDS.SUIT]: {
        id: CLOTHS_TYPE_IDS.SUIT,
        questions: [
            repeatingQuestions.originalPrice,
            repeatingQuestions.dryCleaning,
            repeatingQuestions.sustainability,
        ]
        // icon: 

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
        ]

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
                label: "Pracuješ v nebezpečném prostředí (s ohněm, chmikáliemi,...)",
            },
            {
                id: "hardWork",
                label: "Je tvá práce fyzicky náročná?",
            },
        ]

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
    console.log(trueCounts);
    switch (id) {
        case CLOTHS_TYPE_IDS.COAT:
            return trueCounts >= 2 ? CLOTHES_IDS.WOOLEN_COAT : CLOTHES_IDS.SYNTHETIC_COAT

        case CLOTHS_TYPE_IDS.SUIT:
            return trueCounts >= 2 ? CLOTHES_IDS.WOOLEN_SUIT : CLOTHES_IDS.SYNTHETIC_SUIT

        case CLOTHS_TYPE_IDS.SUMMER_CLOTHES:
            return trueCounts >= 2 ? CLOTHES_IDS.LINNEN_SUMMER_CLOTHES : CLOTHES_IDS.COTTON_SUMMER_CLOTHES

        case CLOTHS_TYPE_IDS.WORK_CLOTHES:
            return trueCounts >= 2 ? CLOTHES_IDS.COTTON_WORK_CLOTHES : CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES

        // case CLOTHS_TYPE_IDS.WORK_CLOTHES:
        //     return formResults.manualLabor && formResults.hazard ? CLOTHES_IDS.COTTON_WORK_CLOTHES : CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES
        // takto by to ReadableByteStreamController, pokud by místo parametru trueCounts byl formResults
        default:
            return null

    }
}




const CLOTHES_IDS = {
    WOOLEN_COAT: "vlneny-kabat",
    SYNTHETIC_COAT: "synteticky-kabat",
    WOOLEN_SUIT: "vlneny-oblek",
    SYNTHETIC_SUIT: "synteticky-oblek",
    COTTON_SUMMER_CLOTHES: "bavlnene-letni",
    LINNEN_SUMMER_CLOTHES: "lnene-letni",
    COTTON_WORK_CLOTHES: "bavlnene-pracovni",
    SYNTHETIC_WORK_CLOTHES: "synteticke-pracovni",



}

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
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.SYNTHETIC_COAT]:
    {
        id: CLOTHES_IDS.SYNTHETIC_COAT,
        header: "Syntetický kabát",
        icon: "coat",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "Výhody synteticky",
        cons: "Nevýhody syntetiky",
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.WOOLEN_SUIT]: {
        id: CLOTHES_IDS.WOOLEN_SUIT,
        header: "Vlněný oblek",
        icon: "suit",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_SUIT]: {
        id: CLOTHES_IDS.SYNTHETIC_SUIT,
        header: "Syntetický oblek",
        icon: "suit",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_SUMMER_CLOTHES,
        header: "Bavlněné letní oblečení",
        icon: "summer",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.LINNEN_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.LINNEN_SUMMER_CLOTHES,
        header: "Lněné letní oblečení",
        icon: "summer",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_WORK_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_WORK_CLOTHES,
        header: "Bavlněné pracovní oblečení",
        icon: "work",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES]: {
        id: CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES,
        header: "Syntetické pracovní oblečení",
        icon: "work",
        fiberLink: "tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
};


