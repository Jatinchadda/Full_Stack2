package com._aml2b.demo_websocket.model;

public class ChatMessage {
    private String from;
    private String content;
    private String type;

    public ChatMessage() {}

    public String getFrom() { return from; }
    public void setFrom(String from) { this.from = from; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}
