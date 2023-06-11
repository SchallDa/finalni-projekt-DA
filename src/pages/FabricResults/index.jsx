import React from "react";
import './style.css';
import { useParams } from "react-router-dom";
import { Clothes } from "../../consts";

export const FabricResults=()=>{
    const{uniqueID}=useParams();
    const {header, icon, fiberLink, pros, cons, maintanance, eco}=Clothes[uniqueID]
    

    
    return (
<>
<img src={`/img/${icon}.svg`} alt="clothes_icon" />
<span>{fiberLink}</span>
<h2>{header}</h2>
<h3>Proč zrovna tento materiál</h3>
<p>{pros}</p>
<h3>Nevýhody</h3>
<p>{cons}</p>
<h3>Údržba</h3>
{/* spodní řádek připraven pro pole ikon */}
<div>{maintanance.map((mIcons)=> <img src={`/img/${mIcons}.svg`} alt="care_icons" />)}
</div> 
<h3>Udržitelnost</h3>
<p>{eco}</p>
{/* Tyno, ty divy, p a celkově styly, jsou tam jen provizorne, abych ty propsy do něčeho obalila. Měň to a upravuje dle libosti */}
</>
    )
}
