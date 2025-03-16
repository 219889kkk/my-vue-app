# 使用官方的Nginx镜像作为基础镜像
FROM nginx:alpine

# 将你的静态文件复制到Nginx的html目录中
COPY ./ /usr/share/nginx/html

# 暴露默认的HTTP端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]

