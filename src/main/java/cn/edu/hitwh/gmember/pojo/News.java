package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class News {
    private String news_id;
    private Date news_time=new Date();
    private String author_id;
    private String news_title;
    private String news_content;
    private int news_section_id;
    private int news_readtimes;
    private String news_pic1;
    private String news_pic2;
    private String news_pic3;
    private String news_pic4;
    private String news_pic5;

    public News(){}

    public News(String news_id, Date news_time, String author_id, String news_title, String news_content, int news_section_id, int news_readtimes, String news_pic1, String news_pic2, String news_pic3, String news_pic4, String news_pic5) {
        this.news_id = news_id;
        this.news_time = news_time;
        this.author_id = author_id;
        this.news_title = news_title;
        this.news_content = news_content;
        this.news_section_id = news_section_id;
        this.news_readtimes = news_readtimes;
        this.news_pic1 = news_pic1;
        this.news_pic2 = news_pic2;
        this.news_pic3 = news_pic3;
        this.news_pic4 = news_pic4;
        this.news_pic5 = news_pic5;
    }

    public void setNews_id(String news_id) {
        this.news_id = news_id;
    }

    public void setNews_time(Date news_time) {
        this.news_time = news_time;
    }

    public void setAuthor_id(String author_id) {
        this.author_id = author_id;
    }

    public void setNews_title(String news_title) {
        this.news_title = news_title;
    }

    public void setNews_content(String news_content) {
        this.news_content = news_content;
    }

    public void setNews_section_id(int news_section_id) {
        this.news_section_id = news_section_id;
    }

    public void setNews_readtimes(int news_readtimes) {
        this.news_readtimes = news_readtimes;
    }

    public void setNews_pic1(String news_pic1) {
        this.news_pic1 = news_pic1;
    }

    public void setNews_pic2(String news_pic2) {
        this.news_pic2 = news_pic2;
    }

    public void setNews_pic3(String news_pic3) {
        this.news_pic3 = news_pic3;
    }

    public void setNews_pic4(String news_pic4) {
        this.news_pic4 = news_pic4;
    }

    public void setNews_pic5(String news_pic5) {
        this.news_pic5 = news_pic5;
    }

    public String getNews_id() {
        return news_id;
    }

    public Date getNews_time() {
        return news_time;
    }

    public String getAuthor_id() {
        return author_id;
    }

    public String getNews_title() {
        return news_title;
    }

    public String getNews_content() {
        return news_content;
    }

    public int getNews_section_id() {
        return news_section_id;
    }

    public int getNews_readtimes() {
        return news_readtimes;
    }

    public String getNews_pic1() {
        return news_pic1;
    }

    public String getNews_pic2() {
        return news_pic2;
    }

    public String getNews_pic3() {
        return news_pic3;
    }

    public String getNews_pic4() {
        return news_pic4;
    }

    public String getNews_pic5() {
        return news_pic5;
    }

    @Override
    public String toString() {
        return "News{" +
                "news_id='" + news_id + '\'' +
                ", news_time=" + news_time +
                ", author_id='" + author_id + '\'' +
                ", news_title='" + news_title + '\'' +
                ", news_content='" + news_content + '\'' +
                ", news_section_id=" + news_section_id +
                ", news_readtimes=" + news_readtimes +
                ", news_pic1='" + news_pic1 + '\'' +
                ", news_pic2='" + news_pic2 + '\'' +
                ", news_pic3='" + news_pic3 + '\'' +
                ", news_pic4='" + news_pic4 + '\'' +
                ", news_pic5='" + news_pic5 + '\'' +
                '}';
    }
}
