package cn.edu.hitwh.gmember.pojo;

public class NotiSection {
    private int noti_section_id;
    private String noti_section_name;

    public NotiSection() {
    }

    public NotiSection(int noti_section_id, String noti_section_name) {
        this.noti_section_id = noti_section_id;
        this.noti_section_name = noti_section_name;
    }

    public int getNoti_section_id() {
        return noti_section_id;
    }

    public void setNoti_section_id(int noti_section_id) {
        this.noti_section_id = noti_section_id;
    }

    public String getNoti_section_name() {
        return noti_section_name;
    }

    public void setNoti_section_name(String noti_section_name) {
        this.noti_section_name = noti_section_name;
    }

    @Override
    public String toString() {
        return "NotiSection{"+
                "noti_section_id="+noti_section_id+
                ",noti_section_name='"+noti_section_name+'\'' +
                '}';
    }
}

