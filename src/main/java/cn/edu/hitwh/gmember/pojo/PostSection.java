package cn.edu.hitwh.gmember.pojo;

public class PostSection {
    private int post_section_id;
    private String post_section_name;

    public PostSection(){}

    public PostSection(int post_section_id,String post_section_name){
        this.post_section_id=post_section_id;
        this.post_section_name=post_section_name;
    }

    public int getPost_section_id() {
        return post_section_id;
    }

    public void setPost_section_id(int post_section_id) {
        this.post_section_id = post_section_id;
    }

    public String getPost_section_name() {
        return post_section_name;
    }

    public void setPost_section_name(String post_section_name) {
        this.post_section_name = post_section_name;
    }

    @Override
    public String toString() {
        return "PostSection{"+
                "post_section_id="+post_section_id+
                ",post_section_name='"+post_section_name+'\''+
                '}';
    }
}
