import React,{useState,useEffect} from "react";
import Card from "../components/card/card";
import './group.css'



function GroupbyPriority({ticketData=[],orderby}){

    const [Priority0,setPriority0]=useState([])
    const [Priority1,setPriority1]=useState([])
    const [Priority2,setPriority2]=useState([])
    const [Priority3,setPriority3]=useState([])
    const [Priority4,setPriority4]=useState([])
    const [Loading,setLoading]=useState(false)

    useEffect(() => {
        let cPriority0=[]
        let cPriority1=[]
        let cPriority2=[]
        let cPriority3=[]
        let cPriority4=[]
        
        for (let i = 0;i<ticketData.length;i++){
            if(ticketData[i].priority===0){
                cPriority0=[...cPriority0,ticketData[i]]
                continue
            }
            if(ticketData[i].priority===1){
                cPriority1=[...cPriority1,ticketData[i]]
                continue
            }
            if(ticketData[i].priority===2){
                cPriority2=[...cPriority2,ticketData[i]]
                continue
            }
            if(ticketData[i].priority===3){
                cPriority3=[...cPriority3,ticketData[i]]
                continue
            }
            if(ticketData[i].priority===4){
                cPriority4=[...cPriority4,ticketData[i]]
                continue
            }
        }


        cPriority0.sort((a,b)=> a.title.localeCompare(b.title))
        cPriority1.sort((a,b)=> a.title.localeCompare(b.title))
        cPriority2.sort((a,b)=> a.title.localeCompare(b.title))
        cPriority3.sort((a,b)=> a.title.localeCompare(b.title))
        cPriority4.sort((a,b)=> a.title.localeCompare(b.title))
            
            
        
        setPriority0(cPriority0)
        setPriority1(cPriority1)
        setPriority2(cPriority2)
        setPriority3(cPriority3)
        setPriority4(cPriority4)
        setLoading(true)

        
      }, [ticketData]);


    return(
        <div className="Groups-Container">
            <div className="Group-Container">
                <div className="Group-Heading">Urgent</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Priority4.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">High</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Priority3.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">Medium</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Priority2.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">Low</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Priority1.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
            <div className="Group-Container">
                <div className="Group-Heading">No Priority</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        Priority0.map((ticket,index)=>{
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


export default GroupbyPriority;