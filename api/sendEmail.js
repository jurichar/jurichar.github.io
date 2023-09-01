import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message, name } = req.body;

    const content = {
      to: "joricha001@gmail.com",
      from: email,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p>${message} </p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).json({ message: "Message envoyé avec succès" });
    } catch (error) {
      console.log("ERROR", error);
      res.status(400).send("Erreur lors de l'envoi du message");
    }
  } else {
    res.status(400).send("Méthode non prise en charge");
  }
}