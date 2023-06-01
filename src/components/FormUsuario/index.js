
import { Container } from '@mui/material';
import './form-usuario.css'

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';


import React, { useState } from 'react';

const FormUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [rol, setRol] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nombre,
      apellidos,
      email,
      clave,
      rol,
      usuario,
    };

    try {
      const response = await fetch('https://apisdelta.azurewebsites.net/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        console.log('Usuario creado correctamente');
        // Agregar aquí la redirección a la página de inicio de sesión en caso de ser cliente y en caso de ser usuario administrador a la lista de usuarios

      } else {

        console.error('Error al crear el usuario');
        // Errores a manejar....
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
      // Corregir esto, agregar el manejo de errores, pendiente!!!!
    }
  };

  return (
    <Container maxWidth="md">
      <form className="form" onSubmit={handleSubmit}>


        <TextField
          required
          id="nombre"
          label="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          margin="normal"
        />



        <TextField
          required
          id="apellidos"
          label="Apellidos"
          type="text"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          fullWidth
          margin="normal"
        />




        <TextField
          required
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />




        <TextField
          required
          id="clave"
          label="Clave"
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          required
          id="rol"
          label="Rol"
          type="number"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          fullWidth
          margin="normal"
        />



        <TextField
          required
          id="nick-usuario"
          label="Usuario"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Box sx={{ '& > :not(style)': { m: 5 } }}>
          <Button size="large" variant="contained" type="submit">
            Registrarse
          </Button>
          <Button size="large" variant="contained" type="submit" color='error'>
            Cancelar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormUsuario;
