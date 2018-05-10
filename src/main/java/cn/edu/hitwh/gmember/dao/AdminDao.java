package cn.edu.hitwh.gmember.dao;

import cn.edu.hitwh.gmember.mapper.AdminMapper;
import cn.edu.hitwh.gmember.pojo.Admin;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class AdminDao {
    public Admin findAdmin(String admin_name,String admin_pwd){
        String resource = "MyBatisConfig.xml";
        Reader reader=null;
        SqlSession session;
        try {
            reader= Resources.getResourceAsReader(resource);
        }catch (IOException e){
            e.printStackTrace();
        }
        SqlSessionFactory sqlSessionFactory=new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
        AdminMapper adminMapper=session.getMapper(AdminMapper.class);
        Admin admin=adminMapper.findAdmin(admin_name,admin_pwd);
//        System.out.println("id为"+id+"的教师信息为"+teacher.toString());
        session.close();
        return admin;
    }
}
