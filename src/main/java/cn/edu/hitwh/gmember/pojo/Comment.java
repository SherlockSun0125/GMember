package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class Comment {
    private String comment_id;
    private String post_id;
    private String comment_content;
    private Date comment_time=new Date();
    private String comment_author_id;
    private String comment_pic;

    public Comment() {
    }

    public Comment(String comment_id, String post_id, String comment_content, Date comment_time, String comment_author_id, String comment_pic) {
        this.comment_id = comment_id;
        this.post_id = post_id;
        this.comment_content = comment_content;
        this.comment_time = comment_time;
        this.comment_author_id = comment_author_id;
        this.comment_pic = comment_pic;
    }

    public void setComment_id(String comment_id) {
        this.comment_id = comment_id;
    }

    public void setPost_id(String post_id) {
        this.post_id = post_id;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public void setComment_time(Date comment_time) {
        this.comment_time = comment_time;
    }

    public void setComment_author_id(String comment_author_id) {
        this.comment_author_id = comment_author_id;
    }

    public void setComment_pic(String comment_pic) {
        this.comment_pic = comment_pic;
    }

    public String getComment_id() {
        return comment_id;
    }

    public String getPost_id() {
        return post_id;
    }

    public String getComment_content() {
        return comment_content;
    }

    public Date getComment_time() {
        return comment_time;
    }

    public String getComment_author_id() {
        return comment_author_id;
    }

    public String getComment_pic() {
        return comment_pic;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "comment_id='" + comment_id + '\'' +
                ", post_id='" + post_id + '\'' +
                ", comment_content='" + comment_content + '\'' +
                ", comment_time=" + comment_time +
                ", comment_author_id='" + comment_author_id + '\'' +
                ", comment_pic='" + comment_pic + '\'' +
                '}';
    }
}
