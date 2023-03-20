import '../../App.css'
//npm i socket.io-client (versión para react)
import io from 'socket.io-client'
import {useState, useEffect} from 'react'
import axios from 'axios'
//Conexión para escuchar y enviar eventos
const socket = io('http://localhost:3002')


function ChatDos() {

  const [username, setUsername] = useState('')
  const [disabled, setDisabled] = useState(false)

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [storedMessages, setStoredMessages] = useState([])

  const url = "http://localhost:3002/api/chat/"

  useEffect(() =>{
    const receivedMessage = (message) =>{
      //console.log(message)
      setMessages([message, ...messages])
    
    }
    socket.on('message', receivedMessage)

    //Desuscribimos el estado del componente cuando ya no es necesario utilizarlo
    return () => {
      socket.off('message', receivedMessage)
    }
    

  }, [messages])

  //Cargamos los mensajes guardados en la BDD la primera vez
useEffect(() => {

    fetch(url + "messages")
    .then((resp) => resp.json())
    .then((data) => {setStoredMessages(data)})

}, [])

    // axios.get(url + "messages")
    //     .then(res => {
    //     setStoredMessages(res.messages.data);
    // })

  

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault()

    //Enviamos el mensaje sólo si se ha establecido un username
      //console.log(message)
      //Enviamos el mensaje al servidor
      socket.emit('message', message, username)

      //Nuestro mensaje
      const newMessage = {
        body: message,
        from: 'Yo'
      }
      //Añadimos el mensaje y el resto de mensajes enviados
      setMessages([newMessage, ...messages])
      //Limpiamos el mensaje
      setMessage('')

      //Petición http por POST para guardar el artículo:
      axios.post(url + 'save', {
        message: message,
        from: username
      })
    
  }

  const usernameSubmit = (e) => {
    e.preventDefault()
    setUsername(username)
    //console.log(username)
    setDisabled(true)
  }

  return (
    <div className="App">
      <div className="container mt-3">

              <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="text-center mb-3">CHAT</h5>

                {/* username */}

                <form onSubmit={usernameSubmit}>
                  <div className="d-flex mb-3">
                    <input type="text" className="form-control" id="username" placeholder="Username..." disabled={disabled} onChange={e => setUsername(e.target.value)} value={username} required/>
                    <button className="btn btn-success mx-3" type="submit" id="btn-username" disabled={disabled}>Establecer</button>
                  </div>
                </form>

                {/* chat form */}

                <form onSubmit={handlerSubmit}>
                  <div className="d-flex">
                    <input type="text" className="form-control" placeholder="Mensaje..." onChange={e => setMessage(e.target.value)} value={message}/>
                    <button className="btn btn-success mx-3" type="submit">Enviar</button>
                  </div>
                </form> 
              </div>
            </div>

            {/* chat messages */}

            <div className="card mt-3 mb-3 shadow border-0" id="content-chat">
              <div className="card-body">

                {messages.map((message, index) => (
                  <div key={index} className={`d-flex p-3 ${message.from === "Yo" ? "justify-content-end" : "justify-content-start"}`}>
                    <div className={`card mb-3 shadow border-1 ${message.from === "Yo" ? "bg-success bg-opacity-25" : "bg-light"}`}>
                      <div className="card-body">
                        <small className="">{message.from}: {message.body}</small>
                      </div>
                    </div>
                  </div>

                ))}

                {/* chat stored messages */}
                <small className="text-center text-muted">... Mensajes guardados ...</small>
                {storedMessages.map((message, index) => (
                  <div key={index} className={`d-flex p-3 ${message.from}`}>
                    <div className={`card mb-3 shadow border-1 ${message.from}`}>
                      <div className="card-body">
                        <small className="text-muted"><strong>{message.from}</strong>: {message.message}</small>
                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>
      </div>
    </div>
  );
}

export default ChatDos;