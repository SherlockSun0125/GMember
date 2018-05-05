package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class Notification {
    private String noti_id;
    private Date noti_time=new Date();
    private String author_id;
    private String noti_title;
    private String noti_content;
    private int noti_section_id;
    private int noti_readtimes;
    private String noti_pic1;
    private String noti_pic2;
    private String noti_pic3;
    private String noti_pic4;
    private String noti_pic5;

    public Notification()  {}

    public Notification(String noti_id, Date noti_time, String author_id, String noti_title, String noti_content, int noti_section_id, int noti_readtimes, String noti_pic1, String noti_pic2, String noti_pic3, String noti_pic4, String noti_pic5) {
        this.noti_id = noti_id;
        this.noti_time = noti_time;
        this.author_id = author_id;
        this.noti_title = noti_title;
        this.noti_content = noti_content;
        this.noti_section_id = noti_section_id;
        this.noti_readtimes = noti_readtimes;
        this.noti_pic1 = noti_pic1;
        this.noti_pic2 = noti_pic2;
        this.noti_pic3 = noti_pic3;
        this.noti_pic4 = noti_pic4;
        this.noti_pic5 = noti_pic5;
    }

    public void setNoti_id(String noti_id) {
        this.noti_id = noti_id;
    }

    public void setNoti_time(Date noti_time) {
        this.noti_time = noti_time;
    }

    public void setAuthor_id(String author_id) {
        this.author_id = author_id;
    }

    public void setNoti_title(String noti_title) {
        this.noti_title = noti_title;
    }

    public void setNoti_content(String noti_content) {
        this.noti_content = noti_content;
    }

    public void setNoti_section_id(int noti_section_id) {
        this.noti_section_id = noti_section_id;
    }

    public void setNoti_readtimes(int noti_readtimes) {
        this.noti_readtimes = noti_readtimes;
    }

    public void setNoti_pic1(String noti_pic1) {
        this.noti_pic1 = noti_pic1;
    }

    public void setNoti_pic2(String noti_pic2) {
        this.noti_pic2 = noti_pic2;
    }

    public void setNoti_pic3(String noti_pic3) {
        this.noti_pic3 = noti_pic3;
    }

    public void setNoti_pic4(String noti_pic4) {
        this.noti_pic4 = noti_pic4;
    }

    public void setNoti_pic5(String noti_pic5) {
        this.noti_pic5 = noti_pic5;
    }

    public String getNoti_id() {
        return noti_id;
    }

    public Date getNoti_time() {
        return noti_time;
    }

    public String getAuthor_id() {
        return author_id;
    }

    public String getNoti_title() {
        return noti_title;
    }

    public String getNoti_content() {
        return noti_content;
    }

    public int getNoti_section_id() {
        return noti_section_id;
    }

    public int getNoti_readtimes() {
        return noti_readtimes;
    }

    public String getNoti_pic1() {
        return noti_pic1;
    }

    public String getNoti_pic2() {
        return noti_pic2;
    }

    public String getNoti_pic3() {
        return noti_pic3;
    }

    public String getNoti_pic4() {
        return noti_pic4;
    }

    public String getNoti_pic5() {
        return noti_pic5;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "noti_id='" + noti_id + '\'' +
                ", noti_time=" + noti_time +
                ", author_id='" + author_id + '\'' +
                ", noti_title='" + noti_title + '\'' +
                ", noti_content='" + noti_content + '\'' +
                ", noti_section_id=" + noti_section_id +
                ", noti_readtimes=" + noti_readtimes +
                ", noti_pic1='" + noti_pic1 + '\'' +
                ", noti_pic2='" + noti_pic2 + '\'' +
                ", noti_pic3='" + noti_pic3 + '\'' +
                ", noti_pic4='" + noti_pic4 + '\'' +
                ", noti_pic5='" + noti_pic5 + '\'' +
                '}';
    }
}
