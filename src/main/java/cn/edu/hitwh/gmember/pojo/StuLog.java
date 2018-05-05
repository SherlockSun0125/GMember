package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class StuLog {
    private String stu_log_id;
    private String stu_id;
    private String stu_log_content;
    private Date stu_log_time=new Date();
    private Date stu_log_change_time=new Date();
    private String stu_log_pic;

    public StuLog() {
    }

    public StuLog(String stu_log_id, String stu_id, String stu_log_content, Date stu_log_time, Date stu_log_change_time, String stu_log_pic) {
        this.stu_log_id = stu_log_id;
        this.stu_id = stu_id;
        this.stu_log_content = stu_log_content;
        this.stu_log_time = stu_log_time;
        this.stu_log_change_time = stu_log_change_time;
        this.stu_log_pic = stu_log_pic;
    }

    public void setStu_log_id(String stu_log_id) {
        this.stu_log_id = stu_log_id;
    }

    public void setStu_id(String stu_id) {
        this.stu_id = stu_id;
    }

    public void setStu_log_content(String stu_log_content) {
        this.stu_log_content = stu_log_content;
    }

    public void setStu_log_time(Date stu_log_time) {
        this.stu_log_time = stu_log_time;
    }

    public void setStu_log_change_time(Date stu_log_change_time) {
        this.stu_log_change_time = stu_log_change_time;
    }

    public void setStu_log_pic(String stu_log_pic) {
        this.stu_log_pic = stu_log_pic;
    }

    public String getStu_log_id() {
        return stu_log_id;
    }

    public String getStu_id() {
        return stu_id;
    }

    public String getStu_log_content() {
        return stu_log_content;
    }

    public Date getStu_log_time() {
        return stu_log_time;
    }

    public Date getStu_log_change_time() {
        return stu_log_change_time;
    }

    public String getStu_log_pic() {
        return stu_log_pic;
    }

    @Override
    public String toString() {
        return "StuLog{" +
                "stu_log_id='" + stu_log_id + '\'' +
                ", stu_id='" + stu_id + '\'' +
                ", stu_log_content='" + stu_log_content + '\'' +
                ", stu_log_time=" + stu_log_time +
                ", stu_log_change_time=" + stu_log_change_time +
                ", stu_log_pic='" + stu_log_pic + '\'' +
                '}';
    }
}
