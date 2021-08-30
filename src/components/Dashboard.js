import React, { useState } from 'react'
import { Card, Alert, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Perfil</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {currentUser && <p><strong>Email: </strong>{currentUser.email}</p>}
          <p>Email Verificado: {(currentUser.emailVerified).toString}</p>
          <p>Si tu correo no esta verificado aun no podra hacer uso de la aplicación. Entre a su correo y autorice su cuenta.</p>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Actualizar Perfil
          </Link>
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>
    </>
  )
}
