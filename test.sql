create database students;
use students;
create table student(Rollno varchar(20),name varchar(20),email varchar(30),phonenum integer(10),branch varchar(30));
insert into student values('2211cs010174','srinath','srinath@gmail.com','9502187687','cse');
insert into student values('2211cs010152','guna','guna@gmail.com','6502154623','cse');
insert into student values('2211cs010113','vinesh','vinesh@gmail.com','829076545','cse');
select*from students;
