package org.takeback.util.mail;

public class Mail {

    private String title;
    private String content;
    private String receiver;

    public Mail(String title, String content, String receiver) {
        this.title = title;
        this.content = content;
        this.receiver = receiver;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }
}
