package cn.edu.hitwh.gmember.test;

import cn.edu.hitwh.gmember.mapper.TeacherMapper;
import cn.edu.hitwh.gmember.pojo.Teacher;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class MybatisTest {
    public static void main(String[] args){
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
//        AdminMapper adminMapper=session.getMapper(AdminMapper.class);
//        Admin admin=adminMapper.findAdminById(admin_id);
//        System.out.println("Admin:"+admin.toString());


//        StudentMapper studentMapper=session.getMapper(StudentMapper.class);
//        Student student2=studentMapper.findStuById(id);
//        System.out.println("编号为"+id+"的学生为"+student2.getStu_name());
        TeacherMapper teacherMapper=session.getMapper(TeacherMapper.class);
        String id="2001";
        Teacher teacher=teacherMapper.findTeaById(id);
        System.out.println("id为"+id+"的教师信息为"+teacher.toString());
        session.close();

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
