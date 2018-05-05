package cn.edu.hitwh.gmember.pojo;

public class Teacher {
    private String tea_id;
    private String tea_name;
    private String tea_pwd;
    private int tea_sex;
    private int tea_age;
    private int dep_id;
    private String tea_phone;
    private String tea_mail;

    public Teacher() {}

    public Teacher(String tea_id, String tea_name, String tea_pwd, int tea_sex, int tea_age, int dep_id, String tea_phone, String tea_mail) {
        this.tea_id = tea_id;
        this.tea_name = tea_name;
        this.tea_pwd = tea_pwd;
        this.tea_sex = tea_sex;
        this.tea_age = tea_age;
        this.dep_id = dep_id;
        this.tea_phone = tea_phone;
        this.tea_mail = tea_mail;
    }

    public void setTea_id(String tea_id) {
        this.tea_id = tea_id;
    }

    public void setTea_name(String tea_name) {
        this.tea_name = tea_name;
    }

    public void setTea_pwd(String tea_pwd) {
        this.tea_pwd = tea_pwd;
    }

    public void setTea_sex(int tea_sex) {
        this.tea_sex = tea_sex;
    }

    public void setTea_age(int tea_age) {
        this.tea_age = tea_age;
    }

    public void setDep_id(int dep_id) {
        this.dep_id = dep_id;
    }

    public void setTea_phone(String tea_phone) {
        this.tea_phone = tea_phone;
    }

    public void setTea_mail(String tea_mail) {
        this.tea_mail = tea_mail;
    }

    public String getTea_id() {
        return tea_id;
    }

    public String getTea_name() {
        return tea_name;
    }

    public String getTea_pwd() {
        return tea_pwd;
    }

    public int getTea_sex() {
        return tea_sex;
    }

    public int getTea_age() {
        return tea_age;
    }

    public int getDep_id() {
        return dep_id;
    }

    public String getTea_phone() {
        return tea_phone;
    }

    public String getTea_mail() {
        return tea_mail;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "tea_id='" + tea_id + '\'' +
                ", tea_name='" + tea_name + '\'' +
                ", tea_pwd='" + tea_pwd + '\'' +
                ", tea_sex=" + tea_sex +
                ", tea_age=" + tea_age +
                ", dep_id=" + dep_id +
                ", tea_phone='" + tea_phone + '\'' +
                ", tea_mail='" + tea_mail + '\'' +
                '}';
    }
}
