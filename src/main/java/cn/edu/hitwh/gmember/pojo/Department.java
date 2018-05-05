package cn.edu.hitwh.gmember.pojo;

public class Department {
    private int dep_id;
    private String dep_name;

    public Department(){}
    public Department(int dep_id,String dep_neme){
        this.dep_id=dep_id;
        this.dep_name=dep_neme;
    }

    public int getDep_id() {
        return dep_id;
    }

    public void setDep_id(int dep_id) {
        this.dep_id = dep_id;
    }

    public String getDep_name() {
        return dep_name;
    }

    public void setDep_name(String dep_name) {
        this.dep_name = dep_name;
    }

    @Override
    public String toString() {
        return "Department{"+"dep_id="+dep_id+",dep_name='"+dep_name+'\''+'}';
    }
}
