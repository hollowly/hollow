<?php
/*
Student类，属性：学号、姓名、专业课程(数组)、函数：构造函数、析构函数、输出函数；
Course类，属性：课程名称，课程代码，课程类型（理论、实践），课程学分，函数：构造函数、析构函数、输出函数；
每个学生对象学习至少三门课程，创建多个学生对象，并输出每个学生所学习的课程信息。 */
class student{
    var $id;
    var $name;
    var $course=array();
    function __construct($id,$name,$course)
    {
        $this->id=$id;
        $this->name=$name;
        $this->course= explode(',',$course);
    }
    function __destruct(){ }
    function output(){
        echo '学号：',$this->id,'，姓名：',$this->name,'，专业课程有：';
        for($j= 0; $j< sizeof($this->course); $j++) {
            echo $this->course[$j],'，';
        }

        if(sizeof($this->course) < 3) {
            die('<br> 不足3门课程，无课程信息');
        }
        echo '<br>';
    }
}
class course extends student{
     public $courseName;
     public $courseid;
     public $courseclass;
     public $coursecredit;
    function __construct($id,$name,$course,$courseid,$courseclass,$coursecredit){
        parent::__construct($id, $name, $course);
        $this->courseid=explode(',',$courseid) ;
        $this->courseclass=explode(',',$courseclass) ;
        $this->coursecredit=explode(',',$coursecredit);
    }
    function output() {
        parent::output();
        for($j = 0; $j < sizeof($this->course); $j++) {
            echo '课程名称：',$this->course[$j],'，课程代码：',$this->courseid[$j],'，课程类型：',$this->courseclass[$j],'，课程学分：',$this->coursecredit[$j],'<br>';
        }
    }
    function __destruct() { }
}

$student1 = new student ('19301219','小单','php,c++,专业英语','01,02,03','理论,理论,实践','55,65,75');
$student1->output();

$student2 = new student ('19301218','小陈','Java,c++,高数','04,02,05,06','理论,理论,实践,实践','85,86,75,90');
$student2->output();

$student3 = new student ('19301217','小霞','php,计算机,js框架','08,09,','理论,实践','90,96');
$student3->output();

?>