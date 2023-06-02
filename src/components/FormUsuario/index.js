import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form-usuario.css';
import { Container } from '@mui/material';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

const FormUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [rol, setRol] = useState('');
  const [usuario, setUsuario] = useState('');

  const navigate = useNavigate();

  const handleCancelar = () => {
    navigate('/');
  };

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

        alert('Registro Exitoso');
        // Redireccionar
        navigate('/listar-usuarios');
      } else {
        console.error('Error al crear el usuario');

      }
    } catch (error) {
      console.error('Error en la solicitud', error);

    }
  };


  return (
    <Container className="form" maxWidth="md">
      <h1>Registre sus datos</h1>
      <form onSubmit={handleSubmit}>
        <p className='mensaje'>Los campos marcados con * son obligatorios</p>
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
          type="text"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          id="usuario"
          label="Usuario"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          fullWidth
          margin="normal"
        />
        {/* Agregar un espacio para el campo repetir clave y los campos Rol y Usuario deben ser modificados*/}

        <Box sx={{ '& > :not(style)': { m: 5 } }}>
          <Button
            size="large"
            variant="contained"
            type="submit">
            Registrarse
          </Button>

          <Button
            size="large"
            variant="contained"
            onClick={handleCancelar}
            color='error'>
            Cancelar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormUsuario;