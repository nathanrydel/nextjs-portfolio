"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * The `sendEmail` function is an asynchronous function that sends an email using the Resend API.
 * It takes a `FormData` object as input, which contains the sender's email and the message to be sent.
 *
 * @param formData - A `FormData` object containing the sender's email and the message to be sent.
 * @returns A promise that resolves to an object containing the email data if successful, or an object containing an error message if there's an error.
 */
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "contact@nathanrydel.dev",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};