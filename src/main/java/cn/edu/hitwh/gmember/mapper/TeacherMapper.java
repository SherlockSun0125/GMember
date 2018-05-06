package cn.edu.hitwh.gmember.mapper;

import cn.edu.hitwh.gmember.pojo.Teacher;

public interface TeacherMapper {
    public Teacher findTeaById(String id);
    public Teacher selectAll();
}
