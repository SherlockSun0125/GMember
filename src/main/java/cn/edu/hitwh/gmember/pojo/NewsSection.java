package cn.edu.hitwh.gmember.pojo;

public class NewsSection {
    private int news_section_id;
    private String news_section_name;

    public NewsSection(){}

    public NewsSection(int news_section_id,String news_section_name){
        this.news_section_id=news_section_id;
        this.news_section_name=news_section_name;
    }

    public int getNews_section_id() {
        return news_section_id;
    }

    public void setNews_section_id(int news_section_id) {
        this.news_section_id = news_section_id;
    }

    public String getNews_section_name() {
        return news_section_name;
    }

    public void setNews_section_name(String news_section_name) {
        this.news_section_name = news_section_name;
    }

    @Override
    public String toString() {
        return "NewsSection{"+"new_section_id="+news_section_id+",new_section_name='"+news_section_name+'\''+'}';
    }
}
