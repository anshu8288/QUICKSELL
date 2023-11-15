import React,{createElement, useEffect,useState} from "react";
import Card from "../components/card/card";
import './group.css'
import { computeHeadingLevel } from "@testing-library/react";



function GroupbyUsers({ticketData=[],orderby,userData=[]}){

    function ticketsbyUser({userid,userName}){
        let usertickets=[]
        // let userName=''

        // for(let j=0;j<userData;j++){
        //     if(userData[i].id===userid){
        //         userName=userData[i].name 
        //         break
        //     }
        // }

        for (let i = 0;i<ticketData.length;i++){
            if(ticketData[i].userId===userid){
                usertickets=[...usertickets,ticketData[i]]
                continue
            }
        }

        if (orderby==='priority'){
            usertickets.sort((a,b)=>b.priority-a.priority)
           
        }

        else{
            usertickets.sort((a,b)=> a.title.localeCompare(b.title))
        }
        return(
            <div className="Group-Container">
                <div className="Group-Heading">{userName}</div>
                {
                    usertickets.map((ticket,index)=>{
                        return(
                            <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                        )
                    })
                }
                    
            </div> 
        )
    }


    function CallUser(){
        const Groups=[]
        
        for (let i=0;i<userData.length;i++){
            let newGroup=ticketsbyUser({userid:userData[i].id,userName:userData[i].name})
            Groups.push(newGroup)
        }
        
        return(Groups)
    }

    return(
        <div className="Groups-Container">
            <CallUser/>
        </div>
        
    )
}


export default GroupbyUsers;