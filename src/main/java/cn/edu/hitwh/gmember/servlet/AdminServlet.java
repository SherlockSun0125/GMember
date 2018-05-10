package cn.edu.hitwh.gmember.servlet;

import cn.edu.hitwh.gmember.pojo.Admin;
import cn.edu.hitwh.gmember.service.AdminService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AdminServlet extends HttpServlet {
    private AdminService adminService=new AdminService();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String adminid=(String)req.getSession().getAttribute("adminid");
        System.out.println("=========================================================="+adminid);
        req.getSession().setAttribute("adminid","00001");
        System.out.println("=========================================================="+req.getSession().getAttribute("adminid"));
    }

    public  String adminLogin(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String adminid=request.getParameter("adminid");
        String adminpwd=request.getParameter("adminpwd");
        System.out.println("+++++++++++++++++++"+adminid);
        System.out.println("+++++++++++++++++++"+adminpwd);
        Admin admin=new Admin();
        admin.setAdmin_id(adminid);
        admin.setAdmin_password(adminpwd);
        Admin adminLogin=adminService.login(admin);
        if (adminLogin==null){
            request.setAttribute("msg","用户名或密码错误");
            return "/adminLogin.jsp";
        }else{
            request.getSession().setAttribute("admin",admin);
            return "r:/admin/index.jsp";
        }

    }
}
