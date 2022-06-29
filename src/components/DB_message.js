import { createContext, useContext, useState } from "react";

const DBContext = createContext(null);

function DBProvider({children}) {
    let [messages,setMessages] = useState([
        {name:'task 1', orderNumber: 10456, dueDate: '21/07/2022', star:false,creator:'Dave',sendTo:"Anonymous",chosen:true,taskDescription:'related to medicine'},
        {name:'task 2', orderNumber: 10356, dueDate: '17/02/2022', star:false,creator:'Kyle',sendTo:"Anonymous",chosen:false,taskDescription:'related to mechanism'},
        {name:'task 3', orderNumber: 10646, dueDate: '24/08/2022', star:false,creator:'Qazi',sendTo:"Anonymous",chosen:false,taskDescription:'related to biology'},
        {name:'task 4', orderNumber: 12346, dueDate: '18/06/2018', star:false,creator:'vishuwas',sendTo:"Anonymous",chosen:false,taskDescription:'related to physics'},
        {name:'task 5', orderNumber: 10376, dueDate: '14/03/2019', star:false,creator:'Josh',sendTo:"Anonymous",chosen:false,taskDescription:'related to computor science'},
        {name:'task 6', orderNumber: 19375, dueDate: '28/10/2019', star:false,creator:'Mosh',sendTo:"Anonymous",chosen:false,taskDescription:'related to chemistry'},
        {name:'task 7', orderNumber: 10789, dueDate: '11/04/2020', star:false,creator:'Umar',sendTo:"Anonymous",chosen:false,taskDescription:'related to zoo'},
        {name:'task 8', orderNumber: 13243, dueDate: '31/12/2022', star:false,creator:'John',sendTo:"Anonymous",chosen:false,taskDescription:'related to human anatomy'},
        {name:'task 9', orderNumber: 17890, dueDate: '23/04/2020', star:false,creator:'Grey',sendTo:"Anonymous",chosen:false,taskDescription:'related to surgery'},
        {name:'task 10', orderNumber: 78903, dueDate: '21/03/2021', star:false,creator:'Dave',sendTo:"Anonymous",chosen:false,taskDescription:'related to news'},
        {name:'task 11', orderNumber: 89320, dueDate: '25/02/2021', star:false,creator:'Hello',sendTo:"Anonymous",chosen:false,taskDescription:'related to spotlights life'},
        {name:'task 12', orderNumber: 37489, dueDate: '22/05/2022', star:false,creator:'Dave',sendTo:"Anonymous",chosen:false,taskDescription:'related to super cars'},
        {name:'task 13', orderNumber: 38393, dueDate: '21/06/2022', star:false,creator:'Ninja',sendTo:"Anonymous",chosen:false,taskDescription:'related to books'},
    ])

    let [id,setId] = useState(10456);

    function markStar(id) {
        let arr = messages.map(item => {
             return id == item.orderNumber ? {...item, star: !item.star} : {...item} 
            });

         setMessages(arr);   
    }

    function findChosen(id) {
        let arr = messages.map(item => {
             return item.orderNumber === id ? {...item,chosen:true} : {...item,chosen:false}
             });
        
        setMessages(arr);
    }

    return(
        <DBContext.Provider value={{messages,markStar,id,setId,findChosen}}>{children}</DBContext.Provider>
    )
}

export default DBProvider;

export const useDB = () => {
    return useContext(DBContext)
}