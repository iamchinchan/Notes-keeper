import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]=useState([]);

//newNote will be an object containing title and content

function addNote(newNote){
    setNotes(prevNotes=>{
      return(
        [...prevNotes,newNote]
      );
    })
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return(
        prevNotes.filter((value,index)=>{
          return id!==index
        })
      );
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNote} />
      {notes.map((item,index)=>
        <Note deleteParticularNote={deleteNote} key={index} id={index} title={item.title} content={item.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;
