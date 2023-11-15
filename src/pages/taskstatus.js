import { useEffect, useState } from "react";
import React from "react";
import Card from "../components/card/card";
import './group.css'



function GroupbyStatus({ticketData=[],orderby}){

    const [BackLog,setBackLog]=useState([])
    const [Todo,setTodo]=useState([])
    const [Inprog,setInprog]=useState([])
    const [Done,setDone]=useState([])
    const [Cancel,setCancel]=useState([])
    const [Loading,setLoading]=useState(false)
    
    
   
    
    useEffect(() => {
        let cBackLog=[]
        let cTodo=[]
        let cInprog=[]
        let cDone=[]
        let cCancel=[]
        
        for (let i = 0;i<ticketData.length;i++){
            if(ticketData[i].status==='Backlog'){
                cBackLog=[...cBackLog,ticketData[i]]
                continue
            }
            if(ticketData[i].status==='Todo'){
               cTodo=[...cTodo,ticketData[i]]
                continue
            }
            if(ticketData[i].status==='In progress'){
                cInprog=[...cInprog,ticketData[i]]
                continue
            }
            if(ticketData[i].status==='Done'){
                cDone=[...cDone,ticketData[i]]
                continue
            }
            if(ticketData[i].status==='Cancelled'){
                cCancel=[...cCancel,ticketData[i]]
                continue
            }
        }
        if (orderby==='priority'){
            cBackLog.sort((a,b)=>b.priority-a.priority)
            cTodo.sort((a,b)=>b.priority-a.priority)
            cInprog.sort((a,b)=>b.priority-a.priority) 
        }

        else{
            cBackLog.sort((a,b)=> a.title.localeCompare(b.title))
            cTodo.sort((a,b)=> a.title.localeCompare(b.title))
            cInprog.sort((a,b)=> a.title.localeCompare(b.title))
            
        }
        setBackLog(cBackLog)
        setTodo(cTodo)
        setInprog(cInprog)
        setLoading(true)

        
      }, [ticketData,orderby]);
    

      


    return(
        <div className="Groups-Container">
            <div className="Group-Container">
                <div className="Group-Heading">BackLog</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        BackLog.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
                
                
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">To Do</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Todo.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">In Progress</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                       Inprog.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">Done</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                       Done.map((ticket,index)=>{
                            return(
                                <Card key={index}  id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">Cancelled</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Cancel.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
        </div>
    )
}


export default GroupbyStatus;