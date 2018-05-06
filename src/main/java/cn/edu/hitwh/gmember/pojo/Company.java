package cn.edu.hitwh.gmember.pojo;

public class Company {
    private String com_id;
    private String com_name;
    private String com_info;
    private int com_type_id;

    public Company() {
    }

    public Company(String com_id, String com_name, String com_info, int com_type_id) {
        this.com_id = com_id;
        this.com_name = com_name;
        this.com_info = com_info;
        this.com_type_id = com_type_id;
    }

}
