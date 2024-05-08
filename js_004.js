var user = {
    firstname : "Mayank",
    lastname : "likhina",
    age : 23,
    isloggedist :true,
    courseList : [],
    purchaseCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstname} is enrolled in a total of ${this.courseList.length} course`
    } 
    
}

//console.log(user.getCourseCount());

user.purchaseCourse("React");
user.purchaseCourse("java");
user.purchaseCourse("javaScript");
user.purchaseCourse("python");
console.log(user.getCourseCount());


//console.log(user.age);
//console.log(user["isloggedin"]);
//console.table(user); 
