import React from "react";
import './style.css';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { configs } from "../../../consts";

export const ClothesForm = () => {
    const {register, handleSubmit}=useForm();
    const onSubmit=data=>console.log(data);
    const {ClothesFormId}=useParams();
    console.log(ClothesFormId);
    const {questions}=configs[ClothesFormId];
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Co od oblečení očekáváš?</h2>
            {questions.map(({ id, label }) => {
                return (
                    <div key={id}>
                        <h3>{label}</h3>
                        {/* label: "Je tvá práce fyzicky náročná?" */}
                        <input type="radio" value={true} id="yes"
                           {...register(id)}  />
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
};
