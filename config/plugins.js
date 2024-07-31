module.exports = ({ env }) => ({
  // Configura el plugin de correo electrónico
  email: {
    provider: "smtp",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.hostinger.com"), // SMTP Host de Hostinger
      port: env.int("SMTP_PORT", 465), // Puerto SMTP (usualmente 587 para TLS)
      secure: true, // Cambia a true si usas el puerto 465
      auth: {
        user: env("SMTP_USERNAME", "marcos.moreira@intilightec.com"), // Tu correo electrónico
        pass: env("SMTP_PASSWORD", "Ceyp*7010"), // Tu contraseña de correo
      },
      // Otras opciones de TLS si es necesario
      tls: {
        rejectUnauthorized: false,
      },
    },
    settings: {
      defaultFrom: "marcos.moreira@intilightec.com", // Remitente predeterminado
      defaultReplyTo: "marcos.moreira@intilightec.com", // Responder a este correo
    },
  },
});
