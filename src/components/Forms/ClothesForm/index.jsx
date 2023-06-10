import React from "react";
import './style.css';
import { useForm } from "react-hook-form";



// const repeatingQuestions = {
//     originalPrice: {
//         id: "price",
//         label: "Nebude ti vadit počásteční vyšší investice?",
//     },
//     sustainability: {
//         id: "sustainability",
//         label: "Musí se jednat o udržitelnou módu?",
//     },
//     dryCleaning: {
//         id: "dryCleaning",
//         label: "Nebudeš mít problém zanést oděv do čistírny?",

//     },
// }


// const configs = {
//     coat: {
//         id: "coat",
//         questions: [
//             repeatingQuestions.originalPrice,
//             repeatingQuestions.dryCleaning,
//             repeatingQuestions.sustainability,
//         ]
//     },
//     suit: {
//         id: "suit",
//         questions: [
//             repeatingQuestions.originalPrice,
//             repeatingQuestions.dryCleaning,
//             repeatingQuestions.sustainability,
//         ]

//     },
//     summerClothes: {
//         id: "summerClothes",
//         questions: [
//             repeatingQuestions.originalPrice,
//             {
//                 id: "ironing",
//                 label: "Najdeš si čas na žehlení oblečení?",
//             },
//             repeatingQuestions.sustainability,
//         ]

//     },
//     workClothes: {
//         id: "workClothes",
//         questions: [
//             {
//                 id: "manualLabor",
//                 label: "Pracuješ manuálně?",
//             },
//             {
//                 id: "hazard",
//                 label: "Pracuješ v nebezpečném prostředí (s ohněm, chmikáliemi,...)",
//             },
//             {
//                 id: "hardWork",
//                 label: "Je tvá práce fyzicky náročná?",
//             },
//         ]

//     },


// };

export const ClothesForm = ({ questions }) => {
    const {register, handleSubmit}=useForm();
    const onSubmit=data=>console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Co od oblečení očekáváš?</h2>
            {questions.map(({ id, label }) => {
                return (
                    <div key={id}>
                        <h3>{label}</h3>
                        {/* label: "Je tvá práce fyzicky náročná?" */}
                        <input type="radio" value={true} id="yes"
                             />
                        <label HTMLfor="yes">Ano</label>
                        <input type="radio" value={false} id="no"
                            {...register(id)} />
                        <label HTMLfor="no">Ne</label>
                    </div>

                );
            }
            )}
            <button>Vyhodnotit</button>
        </form>
    )
}
