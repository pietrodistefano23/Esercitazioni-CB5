import { useState,useEffect } from "react";
import { POST } from "../../utils/http";
import './index.css' 

const NewMessage = () => {
  const [name,setName] = useState('');
  const [text,setText] = useState('');
  const [img,setImg] = useState('');
  const [messagePost, setMessagePost] = useState({});

const onChangeName = (e) => setName(e.target.value);
const onChangeText = (e) => setText(e.target.value);
const onChangeImg = (e) => setImg(e.target.value);


 const onSubmitHandler = (e) =>{
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: img,
      firstName: name,
      body: text,
    });
 } 
 useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost])

    return (
        <div className="NewMessage">
                <form onSubmit={onSubmitHandler}>
                    
                    <input 
                    type="text"
                    value={name}
                    onChange = {onChangeName}
                    required 
                    placeholder="Inserisci il tuo nome, ex @unknow ..."
                     />
                     
                     <input 
                    type="text"
                    value={text}
                    onChange ={onChangeText}
                    required 
                    placeholder= 'how you feel?'
                     />
                    <input 
                    type="text" 
                    value={img}
                    onChange= {onChangeImg}
                    placeholder="scegli la tua immagine"
                    required

                    />
                    <input className="sub" type="submit" value={'send'}/>

                </form>
        </div>
    )
}

export default NewMessage;