app.get('/enviar-correo', (req, res) => {
    // Detalles del correo electrónico
    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to: 'destinatario@gmail.com',
      subject: 'Alguien desea contactarte',
      text: 'Hola, te saludamos de UNISHOP. Al usuario [] le interesa tu artículo [], puedes contactarte con esta persona por medio de su correo []',
    };
  
    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Correo electrónico enviado: ' + info.response);
    });
  });