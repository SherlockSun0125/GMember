package cn.edu.hitwh.gmember.pojo;

public class Company {
    private int com_id;
    private String com_name;
    private String com_info;
    private int com_type_id;

    public Company() {
    }

    public Company(int com_id, String com_name, String com_info, int com_type_id) {
        this.com_id = com_id;
        this.com_name = com_name;
        this.com_info = com_info;
        this.com_type_id = com_type_id;
    }

    public void setCom_id(int com_id) {
        this.com_id = com_id;
    }

    public int getCom_id() {
        return com_id;
    }

    public String getCom_name() {
        return com_name;
    }

    public String getCom_info() {
        return com_info;
    }

    public int getCom_type_id() {
        return com_type_id;
    }

    @Override
    public String toString() {
        return "Company{" +
                "com_id=" + com_id +
                ", com_name='" + com_name + '\'' +
                ", com_info='" + com_info + '\'' +
                ", com_type_id=" + com_type_id +
                '}';
    }
}
