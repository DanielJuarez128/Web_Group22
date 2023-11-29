const emailTransport = require("../config/email.config");

const controllers = {};

controllers.sendMail =  async(req, res, next) => {
    try {
        const { origen, destinatario, asunto, contenido } = req.body;
        const mailBody = {
            from: origen,
            to: destinatario,
            subject: asunto,
            text: contenido
        };
        // Enviar el correo electrónico
        const email = await emailTransport.sendMail(mailBody);
        if (!email){
            return res.status(503).json({ error: "Error al enviar el correo" })
        }
        return res.status(200).json({ message: "Correo enviado", email })
    } catch (error) {
        next(error);
    }
};

