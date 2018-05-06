package cn.edu.hitwh.gmember.mapper;

import cn.edu.hitwh.gmember.pojo.Student;

import java.util.Enumeration;

public interface StudentMapper {
    public Student findStuById(String id);
    public Enumeration<Student> selectAll();
}
