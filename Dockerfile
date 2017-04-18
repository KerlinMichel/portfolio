FROM nginx
COPY . /usr/share/html
COPY ./api-demos /usr/share/html/apis
