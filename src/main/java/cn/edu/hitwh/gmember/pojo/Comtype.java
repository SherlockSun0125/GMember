package cn.edu.hitwh.gmember.pojo;

public class Comtype {
    private int comtype_id;
    private String contype_name;

    public Comtype() {
    }

    public Comtype(int comtype_id, String contype_name) {
        this.comtype_id = comtype_id;
        this.contype_name = contype_name;
    }

    public void setComtype_id(int comtype_id) {
        this.comtype_id = comtype_id;
    }

    public void setContype_name(String contype_name) {
        this.contype_name = contype_name;
    }

    public int getComtype_id() {
        return comtype_id;
    }

    public String getContype_name() {
        return contype_name;
    }

    @Override
    public String toString() {
        return "Comtype{" +
                "comtype_id=" + comtype_id +
                ", contype_name='" + contype_name + '\'' +
                '}';
    }
}
