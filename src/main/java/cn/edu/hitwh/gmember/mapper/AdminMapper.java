package cn.edu.hitwh.gmember.mapper;

import cn.edu.hitwh.gmember.pojo.Admin;
import org.apache.ibatis.annotations.Param;

public interface AdminMapper {
    public Admin findAdmin(@Param(value = "admin_id") String admin_id, @Param(value = "admin_pwd") String admin_pwd);
}
