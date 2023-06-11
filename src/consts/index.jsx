


export const repeatingQuestions = {
    originalPrice: {
        id: "price",
        label: "Nebude ti vadit počásteční vyšší investice?",
    },
    sustainability: {
        id: "sustainability",
        label: "Musí se jednat o udržitelnou módu?",
    },
    dryCleaning: {
        id: "dryCleaning",
        label: "Nebudeš mít problém zanést oděv do čistírny?",

    },
}


export const configs = {
    coat: {
        id: "coat",
        questions: [
            repeatingQuestions.originalPrice,
            repeatingQuestions.dryCleaning,
            repeatingQuestions.sustainability,
        ]
    },
    suit: {
        id: "suit",
        questions: [
            repeatingQuestions.originalPrice,
            repeatingQuestions.dryCleaning,
            repeatingQuestions.sustainability,
        ]
        // icon: 

    },
    summerClothes: {
        id: "summerClothes",
        questions: [
            repeatingQuestions.originalPrice,
            {
                id: "ironing",
                label: "Najdeš si čas na žehlení oblečení?",
            },
            repeatingQuestions.sustainability,
        ]

    },
    workClothes: {
        id: "workClothes",
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

export const getClothesId = (id, formResults) => {
    switch (id) {
        case CLOTHS_TYPE_IDS.COAT:
            return formResults.price && formResults.dryCleaning ? CLOTHES_IDS.WOOLEN_COAT : CLOTHES_IDS.SYNTHETIC_COAT
            default:
                return null
        // case
}
}

const CLOTHS_TYPE_IDS = {
    COAT: "coat",
    SUIT: "suit",
    SUMMER_CLOTHES: "summerClothes",
    WORK_CLOTHES: "workClothes",

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
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "Výhody vlněného kabátu",
        cons: "Nevýhody vlněného kabátu",
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.SYNTHETIC_COAT]:
    {
        id: CLOTHES_IDS.SYNTHETIC_COAT,
        header: "Syntetický kabát",
        icon:"coat",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "Výhody synteticky",
        cons: "Nevýhody syntetiky",
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.WOOLEN_SUIT]: {
        id: CLOTHES_IDS.WOOLEN_SUIT,
        header: "Vlněný oblek",
        icon:"suit",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_SUIT]: {
        id: CLOTHES_IDS.SYNTHETIC_SUIT,
        header: "Syntetický oblek",
        icon:"suit",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco:"test",
    },
    [CLOTHES_IDS.COTTON_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_SUMMER_CLOTHES ,
        header: "Bavlněné letní oblečení",
        icon:"summer",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.LINNEN_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.LINNEN_SUMMER_CLOTHES,
        header: "Lněné letní oblečení",
        icon:"summer",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_WORK_CLOTHES]: {
        id:CLOTHES_IDS.COTTON_WORK_CLOTHES ,
        header: "Bavlněné pracovní oblečení",
        icon:"work",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES]: {
        id: CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES,
        header: "Syntetické pracovní oblečení",
        icon:"work",
        fiberLink:"tady bude obrázkový proklik na materiály",
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
};


