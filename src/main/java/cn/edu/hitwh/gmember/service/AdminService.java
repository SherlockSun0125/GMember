package cn.edu.hitwh.gmember.service;

import cn.edu.hitwh.gmember.dao.AdminDao;
import cn.edu.hitwh.gmember.pojo.Admin;

public class AdminService {
    private AdminDao adminDao=new AdminDao();

    public Admin login(Admin admin){
        try{
            return adminDao.findAdmin(admin.getAdmin_name(),admin.getAdmin_password());
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

}
