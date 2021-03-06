import React from 'react';
import Button from '../costume-button/Button';
import PROJECT_DATA from '../project-data/project_data';
import "./projects.scss";
console.log(PROJECT_DATA)
export default function Project() {
    return (
        <div className="project">
            {PROJECT_DATA.map(p=>(
           <div key={p.id} className="project-item" id="projects">
               <div className="project-item-card project-item-card-front">
                   <img src={p.imgUrl} alt={p.title} />
                       <h3 className="project_heading">{p.title}</h3>
                   <span className={p.altr?"new":""}>
                       <strong>{p.altr}</strong>
                   </span>
               </div>
               <div className="project-item-card project-item-card-back">
                   <h2 className="tail  tail-sm-white">tools</h2>
                   <ul className="list list-tools">
                       {p.tools.map((item,index)=>(
                           <li key={index} className="list-item list-item-tools">{item}</li>
                       ))}
                   </ul>
                   <a target="_blank" rel="noreferrer" href={p.projectUrl}>

                   <Button type="button"  btn="view website" btn_style="btn btn--white"/>
                   </a>
               </div>
           </div>
         ))}
           
        </div>
    )
}
