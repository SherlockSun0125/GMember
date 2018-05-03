package cn.edu.hitwh.gmember.test;

import cn.edu.hitwh.gmember.model.Admin;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class MybatisTest {
    public static void main(String[] args){
        String resource = "file:///config/MyBatisConfig.xml";
        Reader reader=null;
        SqlSession session;
        try {
            reader= Resources.getResourceAsReader(resource);

        }catch (IOException e){
            e.printStackTrace();
        }
        SqlSessionFactory sqlMapper=new SqlSessionFactoryBuilder().build(reader);
        session=sqlMapper.openSession();
        Admin admin=session.selectOne("findAdminById","001");
        System.out.println(admin.getAdmin_name());
        session.close();
    }
}
