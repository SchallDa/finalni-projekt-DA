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