import { HttpException, HttpStatus } from '@nestjs/common';
import nodemailer from 'nodemailer';

import { appConfig } from '../config/appConfig.js';

export class EmailService {
  public name = 'EmailService';

  public static async sendEmail(subject: string, html: string, to_email: string): Promise<void> {
    try {
      const mail_transport = nodemailer.createTransport({
        host: appConfig.smtp.SMTP_HOST,
        port: appConfig.smtp.SMTP_PORT,
        auth: { user: appConfig.smtp.SMTP_USER, pass: appConfig.smtp.SMTP_PASSWORD },
      });

      const res = await mail_transport.sendMail({
        from: appConfig.email.EMAIL_FROM,
        to: to_email,
        replyTo: appConfig.email.EMAIL_FROM,
        subject: subject,
        html: html,
      });

      console.log('email log', { res });
    } catch (error: unknown) {
      console.error('[EmailService] - sendEmail - error:', error);
      throw new HttpException('Fail to send email', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error,
        description: '[EmailService] - sendEmail - error',
      });
    }
  }
}
