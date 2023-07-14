import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    const body = await req.json()

    // create ses client
    const sesClient = new SESClient({
        region: process.env.REGION,
        credentials: {
            accessKeyId: process.env.ACCESS_KEY_ID || '',
            secretAccessKey: process.env.SECRET_ACCESS_KEY|| '' }
        })

        const { name, subject, email, message } = body;

        const text = `Name: ${name}\nSubject: ${subject}\nEmail: ${email}\nMessage: ${message}`

        const verified_email = process.env.EMAIL || ''

        const mailOptions = {
            Destination: {
                ToAddresses: [verified_email],
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: text
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'New message from your site',
                }
            },
            Source: verified_email,
        }

        // sending the email
        try {
            const sendEmailCommand = new SendEmailCommand(mailOptions);
        await sesClient.send(sendEmailCommand);
        return NextResponse.json({
            message: 'Email Sent Successfully',
            isMailSent: true
        });
        }
        catch (error) {
            console.error(error);
            return NextResponse.json({
                message: 'Email Sending Failed',
                isMailSent: false
            });
        }
}

