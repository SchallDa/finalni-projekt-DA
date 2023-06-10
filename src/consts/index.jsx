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

}
const CLOTHES_IDS = {
    WOOLEN_COAT: "vlneny-kabat",
    SYNTHETIC_COAT: "synteticky-kabat"
}

const Clothes = {
    [CLOTHES_IDS.WOOLEN_COAT]:
    {
        id: CLOTHES_IDS.WOOLEN_COAT,
        pros: "Výhody vlněného kabátu",
        cons: "Nevýhody vlněného kabátu",
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    [CLOTHES_IDS.SYNTHETIC_COAT]:
    {
        id: CLOTHES_IDS.SYNTHETIC_COAT,
        pros: "Výhody synteticky",
        cons: "Nevýhody syntetiky",
        maintanance: [],
        eco: "Text k udržitelnosti",
    },
    syntheticSuit: {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
    woolenSuit: {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
    "cottonSummerClothes": {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
    "linnenSummerClothes": {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
    "cottonWorkClothes": {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
    "syntheticWorkClothes": {
        pros: "",
        cons: "",
        maintanance: [],
        eco: "",
    },
};


