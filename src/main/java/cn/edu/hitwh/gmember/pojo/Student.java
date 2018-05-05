package cn.edu.hitwh.gmember.pojo;

import java.util.Date;

public class Student {
    private String stu_id;
    private String stu_name;
    private String stu_pwd;
    private int stu_sex;
    private int stu_age;
    private int dep_id;
    private Date stu_entrol_time=new Date();
    private String stu_phone;
    private String stu_mail;
    private int stu_level_id;
    private String emp_id;

    public Student(){}
    public Student(String stu_id, String stu_name, String stu_pwd, int stu_sex, int stu_age, int dep_id, Date stu_entrol_time, String stu_phone, String stu_mail, int stu_level_id, String emp_id) {
        this.stu_id = stu_id;
        this.stu_name = stu_name;
        this.stu_pwd = stu_pwd;
        this.stu_sex = stu_sex;
        this.stu_age = stu_age;
        this.dep_id = dep_id;
        this.stu_entrol_time = stu_entrol_time;
        this.stu_phone = stu_phone;
        this.stu_mail = stu_mail;
        this.stu_level_id = stu_level_id;
        this.emp_id = emp_id;
    }

    public void setStu_id(String stu_id) {
        this.stu_id = stu_id;
    }

    public void setStu_name(String stu_name) {
        this.stu_name = stu_name;
    }

    public void setStu_pwd(String stu_pwd) {
        this.stu_pwd = stu_pwd;
    }

    public void setStu_sex(int stu_sex) {
        this.stu_sex = stu_sex;
    }

    public void setStu_age(int stu_age) {
        this.stu_age = stu_age;
    }

    public void setDep_id(int dep_id) {
        this.dep_id = dep_id;
    }

    public void setStu_entrol_time(Date stu_entrol_time) {
        this.stu_entrol_time = stu_entrol_time;
    }

    public void setStu_phone(String stu_phone) {
        this.stu_phone = stu_phone;
    }

    public void setStu_mail(String stu_mail) {
        this.stu_mail = stu_mail;
    }

    public void setStu_level_id(int stu_level_id) {
        this.stu_level_id = stu_level_id;
    }

    public void setEmp_id(String emp_id) {
        this.emp_id = emp_id;
    }

    public String getStu_id() {

        return stu_id;
    }

    public String getStu_name() {
        return stu_name;
    }

    public String getStu_pwd() {
        return stu_pwd;
    }

    public int getStu_sex() {
        return stu_sex;
    }

    public int getStu_age() {
        return stu_age;
    }

    public int getDep_id() {
        return dep_id;
    }

    public Date getStu_entrol_time() {
        return stu_entrol_time;
    }

    public String getStu_phone() {
        return stu_phone;
    }

    public String getStu_mail() {
        return stu_mail;
    }

    public int getStu_level_id() {
        return stu_level_id;
    }

    public String getEmp_id() {
        return emp_id;
    }

    @Override
    public String toString() {
        return "Student{" +
                "stu_id='" + stu_id + '\'' +
                ", stu_name='" + stu_name + '\'' +
                ", stu_pwd='" + stu_pwd + '\'' +
                ", stu_sex='" + stu_sex + '\'' +
                ", stu_age=" + stu_age +
                ", dep_id=" + dep_id +
                ", stu_entrol_time=" + stu_entrol_time +
                ", stu_phone='" + stu_phone + '\'' +
                ", stu_mail='" + stu_mail + '\'' +
                ", stu_level_id=" + stu_level_id +
                ", emp_id='" + emp_id + '\'' +
                '}';
    }
}
