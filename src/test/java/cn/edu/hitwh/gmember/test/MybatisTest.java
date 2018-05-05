package cn.edu.hitwh.gmember.test;

import cn.edu.hitwh.gmember.mapper.AdminMapper;
import cn.edu.hitwh.gmember.pojo.Admin;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class MybatisTest {
    public static void main(String[] args){
        String admin_id="001";
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
        Admin admin=adminMapper.findAdminById(admin_id);
        System.out.println("Admin:"+admin.toString());


        /*
        StudentMapper studentMapper=session.getMapper(StudentMapper.class);
        Student student=studentMapper.selectAll();
        System.out.println("学生姓名："+student.getStu_name());
        student=studentMapper.findStuById(stu_id);
        System.out.println("成功啊："+student.getStu_name());
        session.close();
        */

//        try{
//            System.out.println("========================================第二个try=====================================");
//            AdminMapper adminMapper=session.getMapper(AdminMapper.class);
//            Admin admin=adminMapper.findAdminById("001");
//            System.out.println("查找结果为：");
//            System.out.println("查找结果为："+admin.toString());
//            session.commit();
//        }catch (Exception e){
//            System.out.println("========================================第二个catch=====================================");
//            session.rollback();
//        }finally {
//            System.out.println("========================================finally=====================================");
//            session.close();
//        }
    }
}
