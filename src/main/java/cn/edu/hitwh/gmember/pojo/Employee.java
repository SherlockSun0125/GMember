package cn.edu.hitwh.gmember.pojo;

public class Employee {
    private String emp_id;
    private String emp_name;
    private String emp_pwd;
    private String emp_sex;
    private int emp_age;
    private String emp_phone;
    private String emp_mail;
    private String com_id;

    public Employee()   {}

    public Employee(String emp_id, String emp_name, String emp_pwd, String emp_sex, int emp_age, String emp_phone, String emp_mail, String com_id) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_pwd = emp_pwd;
        this.emp_sex = emp_sex;
        this.emp_age = emp_age;
        this.emp_phone = emp_phone;
        this.emp_mail = emp_mail;
        this.com_id = com_id;
    }

    public void setEmp_id(String emp_id) {
        this.emp_id = emp_id;
    }

    public void setEmp_name(String emp_name) {
        this.emp_name = emp_name;
    }

    public void setEmp_pwd(String emp_pwd) {
        this.emp_pwd = emp_pwd;
    }

    public void setEmp_sex(String emp_sex) {
        this.emp_sex = emp_sex;
    }

    public void setEmp_age(int emp_age) {
        this.emp_age = emp_age;
    }

    public void setEmp_phone(String emp_phone) {
        this.emp_phone = emp_phone;
    }

    public void setEmp_mail(String emp_mail) {
        this.emp_mail = emp_mail;
    }

    public void setCom_id(String com_id) {
        this.com_id = com_id;
    }

    public String getEmp_id() {
        return emp_id;
    }

    public String getEmp_name() {
        return emp_name;
    }

    public String getEmp_pwd() {
        return emp_pwd;
    }

    public String getEmp_sex() {
        return emp_sex;
    }

    public int getEmp_age() {
        return emp_age;
    }

    public String getEmp_phone() {
        return emp_phone;
    }

    public String getEmp_mail() {
        return emp_mail;
    }

    public String getCom_id() {
        return com_id;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "emp_id='" + emp_id + '\'' +
                ", emp_name='" + emp_name + '\'' +
                ", emp_pwd='" + emp_pwd + '\'' +
                ", emp_sex='" + emp_sex + '\'' +
                ", emp_age=" + emp_age +
                ", emp_phone='" + emp_phone + '\'' +
                ", emp_mail='" + emp_mail + '\'' +
                ", com_id=" + com_id + '\''+
                '}';
    }
}
