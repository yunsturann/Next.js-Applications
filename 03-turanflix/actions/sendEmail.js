"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (prevState, formData) => {
  const { username, email, subject, message } = Object.fromEntries(formData);
  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

  //CREATE TRANSPORT
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // verify auth
  try {
    await transport.verify();
  } catch (error) {
    return { error: "Invalid SMTP credentials" };
  }

  //SEND EMAIL
  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject,
      html: ` <h1>${username}</h1>
            <h2>${email}</h2>
            <p>${message}</p>
            `,
    });
    return { success: true };
  } catch (error) {
    return { error: "Failed to send email" };
  }
};
