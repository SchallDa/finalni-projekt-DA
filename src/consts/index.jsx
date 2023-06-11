


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
// dodělat
// const Detail=()=>{
//     const {clothId}=useParams()
//     const (title, pros. cons, icon)=clothesConfig[clothChild]
//     return (
//         <div>
//             <img src={icon}  />
//         </div>
//     )
// }
// dodělat icony a fiberlink
export const Clothes = {
    [CLOTHES_IDS.WOOLEN_COAT]:
    {
        id: CLOTHES_IDS.WOOLEN_COAT,
        // icon:"CLOTHES_ICON.woolenIcon",
        // fiberLink:"",
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
    [CLOTHES_IDS.WOOLEN_SUIT]: {
        id: CLOTHES_IDS.WOOLEN_SUIT,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_SUIT]: {
        id: CLOTHES_IDS.SYNTHETIC_SUIT,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco:"test",
    },
    [CLOTHES_IDS.COTTON_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.COTTON_SUMMER_CLOTHES ,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.LINNEN_SUMMER_CLOTHES]: {
        id: CLOTHES_IDS.LINNEN_SUMMER_CLOTHES,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.COTTON_WORK_CLOTHES]: {
        id:CLOTHES_IDS.COTTON_WORK_CLOTHES ,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
    [CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES]: {
        id: CLOTHES_IDS.SYNTHETIC_WORK_CLOTHES,
        pros: "test",
        cons: "test",
        maintanance: [],
        eco: "test",
    },
};


