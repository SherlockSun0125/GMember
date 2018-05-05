package cn.edu.hitwh.gmember.pojo;

public class StuLevel {
    private int stu_level_id;
    private String stu_level_name;

    public StuLevel(){}

    public StuLevel(int stu_level_id,String stu_level_name){
        this.stu_level_id=stu_level_id;
        this.stu_level_name=stu_level_name;
    }

    public void setStu_level_id(int stu_level_id) {
        this.stu_level_id = stu_level_id;
    }

    public int getStu_level_id() {
        return stu_level_id;
    }

    public void setStu_level_name(String stu_level_name) {
        this.stu_level_name = stu_level_name;
    }

    public String getStu_level_name() {
        return stu_level_name;
    }

    @Override
    public String toString() {
        return "StuLevel{"+
                "stu_level_id="+stu_level_id+
                ",stu_level_name='"+stu_level_name+'\''+
                '}';
    }
}
