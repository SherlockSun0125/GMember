package cn.edu.hitwh.gmember.mapper;

import cn.edu.hitwh.gmember.pojo.Student;

public interface StudentMapper {
    public Student findStuById(String id);
    public Student selectAll();
}
