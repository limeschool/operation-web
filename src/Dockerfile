# 基础镜像
FROM nginx
# 删除原有的default.conf文件
RUN rm /etc/nginx/conf.d/default.conf
# 增加自定义default.conf文件到对应目录
ADD default.conf /etc/nginx/conf.d/
# 将dist目录下的文件复制到nginx内的目录下，与上文对应
COPY dist/ /usr/share/nginx/html/
