package org.takeback.util.mail;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.takeback.util.exception.CodedBaseRuntimeException;

import javax.mail.internet.MimeMessage;
import java.util.Date;

public class MailHelper {

    @Autowired
    private JavaMailSenderImpl mailSender;

    private static MailHelper mailHelper;

    private MailHelper(){
        mailHelper = this;
    }

    public static MailHelper instance(){
        return mailHelper;
    }

    /**
     * 发送一封有html格式的mail
     */
    public void sendHtmlMail(String title, String content, String receiver){
        sendHtmlMail(new Mail(title, content, receiver));
    }

    public void sendHtmlMail(Mail mail){
        if(mailSender == null){
            throw new IllegalArgumentException("mailSender is null, did not define this in spring as a bean ?");
        }

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        try {
            mimeMessageHelper.setSentDate(new Date());
            mimeMessageHelper.setFrom(mailSender.getUsername());
            mimeMessageHelper.setTo(mail.getReceiver());
            mimeMessageHelper.setSubject(mail.getTitle());
            mimeMessageHelper.setText(mail.getContent(), true);
            mailSender.send(mimeMessage);
        } catch (Exception e) {
            throw new CodedBaseRuntimeException("send mail to " + mail.getReceiver() + "failed");
        }
    }


    /**
     * 发送邮件
     * @param mail
     */
    public void send(Mail mail){
        System.out.println(mailSender);
        if(mailSender == null){
            throw new IllegalArgumentException("mailSender is null, did not define this in spring as a bean ?");
        }
        SimpleMailMessage smm = new SimpleMailMessage();
        smm.setSentDate(new Date());
        smm.setFrom(mailSender.getUsername());
        smm.setTo(mail.getReceiver());
        smm.setSubject(mail.getTitle());
        smm.setText(mail.getContent());
        mailSender.send(smm);
    }

    public void send(String title, String content, String receiver){
        send(new Mail(title, content, receiver));
    }

}
