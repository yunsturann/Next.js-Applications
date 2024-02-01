"use server";
import nodemailer from "nodemailer";

export async function sendMail({ name, email, subject, body }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // create transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // verify auth
  try {
    const testResult = await transport.verify();
    if (!testResult) {
      throw new Error("Test result is false ", testResult);
    }
  } catch (error) {
    throw new Error("not authorized!");
  }

  // send email
  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject,
      html: `From ${email}
             <h2>From ${name}</h2>
             ${body}`,
    });
  } catch (error) {
    throw new Error("The mail could not be send!");
  }
}
