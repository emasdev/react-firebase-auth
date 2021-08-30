import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  function showPassword(e){
    var input = document.getElementById("password-input");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">IDM Cloud</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control id="password-input" type="password" ref={passwordRef} required />
              <input className="d-inline" type="checkbox" onClick={showPassword}/>
              <small>Mostrar contraseña</small>      
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Ingresar
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">¿Olvido su contraseña?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        ¿Aun no esta registrado como usuario IDM cloud? <Link to="/signup">Crear Usuario</Link>
      </div>
    </>
  )
}