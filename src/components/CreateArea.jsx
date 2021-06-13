import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';


function CreateArea(props) {

const[isExpanded,setExpanded]=useState(false);


  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function addNew(event){
    props.addNewNote(newNote);
    setNewNote(newNote=>{
      return(
        {
          title:"",
          content:"",
        }
      );
    });
    event.preventDefault();
    
  }
function expand(){
  setExpanded(true);
}

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="create-note">
       {isExpanded &&  <input
          name="title"
          onChange={handleChange}
          value={newNote.title}
          placeholder="Title"
        />}
        <textarea
        onClick={expand}
          name="content"
          onChange={handleChange}
          value={newNote.content}
          placeholder="Take a note..."
          rows={isExpanded ?3:1}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={addNew}
        >
          < AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
