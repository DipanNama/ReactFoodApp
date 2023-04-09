import React ,{ useState } from "react";

const Contact = () => {
  // const [formStatus, setFormStatus] = React.useState('Send')
  const [user, setUser] = useState({
    name : "",
    email : "",
    message : "",
  })

  let name,value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name] : value})
  }
  const onSubmit = async (e) => {
    // setFormStatus('Submitting...')
    e.preventDefault()

    const {name, email, message} = user
    const res = fetch("https://fooddelivery-db98d-default-rtdb.firebaseio.com/contactData.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
    if(res){
      setUser({
        name : "",
        email : "",
        message : "",
      })
      alert("Message sent successfully")
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="container p-5">
        <h2 className="mb-3">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" name="name" type="text" id="name" value={user.name} required onChange={getUserData}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" name="email" type="email" id="email" value={user.email} required onChange={getUserData}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" name="message" id="message" value={user.message} required onChange={getUserData}/>
          </div>
          <button className="btn btn-danger" type="submit">
            {/* {formStatus} */}
            Send
          </button>
        </form>
      </div>
    </div>
  )
}


export default Contact;
