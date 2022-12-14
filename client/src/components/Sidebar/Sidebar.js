import classes from './Sidebar.module.css'
import CreateUser from '../User/CreateUser';
const Sidebar = () =>{
    // const onClickHandler=()=>{
    //     const obj ={
    //         title:"Create",
    //         action:"Add"
    //     }
    //     console.log(obj)
    // }
    const deleteHandler =(event)=>{
        console.log(event)
        return(
            <div>
            <CreateUser/>
            </div>
        )
    }
    return(
        <div className={classes.sidebarWrapper}>
        <div className={classes.sidebar}>
        <ul>
        {/*<li><button onClick={onClickHandler}>Create</button></li>*/}
        <li><button >Update</button></li>
        <li><button onClick={deleteHandler}>Delete</button></li>
        <li><button>Fetch</button></li>
        </ul>
        </div>
        </div>
    )
}
export default Sidebar;