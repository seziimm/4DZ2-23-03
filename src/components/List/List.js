import React from "react";

const List = ({list}) => {
    console.log(list,'list')
    return(
        <div>
            {list.map(task => <p key={task.id}>{task.title}</p> )}
        </div>
    )
}
 export default List;