import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { configs, getClothesId } from "../../../consts";
import { trues } from "../../../helpers";

export const ClothesForm = () => {
  const { register, handleSubmit } = useForm();
  const { ClothesFormId } = useParams();
  const navigate = useNavigate();

  const onSubmit = (formDataResults) => {
    const trueCounts = trues(formDataResults);
    const uniqueID = getClothesId(ClothesFormId, trueCounts);
    navigate(`/detail-odevu/${uniqueID}`);

    // tady uložena hodnota například vlněného kabátu
  };

  // console.log(ClothesFormId);
  const { questions, icon } = configs[ClothesFormId];
  return (
    <>
      <img src={`/img/${icon}.svg`} alt="clothes_icon" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Co od oblečení očekáváš?</h2>
        {questions.map(({ id, label }) => {
          return (
            <div key={id}>
              <h3>{label}</h3>
              {/* label: "Je tvá práce fyzicky náročná?" */}
              <input
                type="radio"
                value={true}
                id={`yes${id}`}
                {...register(id)}
              />
              <label htmlFor={`yes${id}`}>Ano</label>
              <input
                type="radio"
                value={false}
                id={`no${id}`}
                {...register(id)}
              />
              <label htmlFor={`no${id}`}>Ne</label>
            </div>
          );
        })}
        <button>Vyhodnotit</button>
      </form>
    </>
  );
};

// tady uložena hodnota například vlněného kabátu

// console.log(ClothesFormId);
//   const { questions } = configs[ClothesFormId];
//   return (
//     <>
//       <img src="" alt="" />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2>Co od oblečení očekáváš?</h2>
//         {questions.map(({ id, label }) => {
//           return (
//             <div key={id}>
//               <h3>{label}</h3>
//               {/* label: "Je tvá práce fyzicky náročná?" */}
//               <input type="radio" value={true} id="yes" {...register(id)} />
//               <label htmlFor="yes">Ano</label>
//               <input type="radio" value={false} id="no" {...register(id)} />
//               <label htmlFor="no">Ne</label>
//             </div>
//           );
//         })}
//         <button>Vyhodnotit</button>
//       </form>
//     </>
//   );
// };
