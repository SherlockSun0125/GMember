package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class Post {
    private String post_id;
    private String post_title;
    private String post_content;
    private Date post_time=new Date();
    private String post_author_id;
    private int post_section_id;
    private Date post_change_time=new Date();
    private int post_top;
    private String post_pic1;
    private String post_pic2;
    private String post_pic3;
    private String post_pic4;
    private String post_pic5;

    public Post() {
    }

    public Post(String post_id, String post_title, String post_content, Date post_time, String post_author_id, int post_section_id, Date post_change_time, int post_top, String post_pic1, String post_pic2, String post_pic3, String post_pic4, String post_pic5) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_content = post_content;
        this.post_time = post_time;
        this.post_author_id = post_author_id;
        this.post_section_id = post_section_id;
        this.post_change_time = post_change_time;
        this.post_top = post_top;
        this.post_pic1 = post_pic1;
        this.post_pic2 = post_pic2;
        this.post_pic3 = post_pic3;
        this.post_pic4 = post_pic4;
        this.post_pic5 = post_pic5;
    }

    public void setPost_id(String post_id) {
        this.post_id = post_id;
    }

    public void setPost_title(String post_title) {
        this.post_title = post_title;
    }

    public void setPost_content(String post_content) {
        this.post_content = post_content;
    }

    public void setPost_time(Date post_time) {
        this.post_time = post_time;
    }

    public void setPost_author_id(String post_author_id) {
        this.post_author_id = post_author_id;
    }

    public void setPost_section_id(int post_section_id) {
        this.post_section_id = post_section_id;
    }

    public void setPost_change_time(Date post_change_time) {
        this.post_change_time = post_change_time;
    }

    public void setPost_top(int post_top) {
        this.post_top = post_top;
    }

    public void setPost_pic1(String post_pic1) {
        this.post_pic1 = post_pic1;
    }

    public void setPost_pic2(String post_pic2) {
        this.post_pic2 = post_pic2;
    }

    public void setPost_pic3(String post_pic3) {
        this.post_pic3 = post_pic3;
    }

    public void setPost_pic4(String post_pic4) {
        this.post_pic4 = post_pic4;
    }

    public void setPost_pic5(String post_pic5) {
        this.post_pic5 = post_pic5;
    }

    public String getPost_id() {
        return post_id;
    }

    public String getPost_title() {
        return post_title;
    }

    public String getPost_content() {
        return post_content;
    }

    public Date getPost_time() {
        return post_time;
    }

    public String getPost_author_id() {
        return post_author_id;
    }

    public int getPost_section_id() {
        return post_section_id;
    }

    public Date getPost_change_time() {
        return post_change_time;
    }

    public int getPost_top() {
        return post_top;
    }

    public String getPost_pic1() {
        return post_pic1;
    }

    public String getPost_pic2() {
        return post_pic2;
    }

    public String getPost_pic3() {
        return post_pic3;
    }

    public String getPost_pic4() {
        return post_pic4;
    }

    public String getPost_pic5() {
        return post_pic5;
    }

    @Override
    public String toString() {
        return "Post{" +
                "post_id='" + post_id + '\'' +
                ", post_title='" + post_title + '\'' +
                ", post_content='" + post_content + '\'' +
                ", post_time=" + post_time +
                ", post_author_id='" + post_author_id + '\'' +
                ", post_section_id=" + post_section_id +
                ", post_change_time=" + post_change_time +
                ", post_top=" + post_top +
                ", post_pic1='" + post_pic1 + '\'' +
                ", post_pic2='" + post_pic2 + '\'' +
                ", post_pic3='" + post_pic3 + '\'' +
                ", post_pic4='" + post_pic4 + '\'' +
                ", post_pic5='" + post_pic5 + '\'' +
                '}';
    }
}
