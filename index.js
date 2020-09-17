function School(){
    const school = {
        school_name : "Wichieanmatu",
        location : "Trang",
        std_number : "3000",
        boss_name : "Yupa",
        getAllInformations: function(){
            console.log(this.school_name)
            console.log(this.location)
            console.log(this.std_number)
        }
    }
    return school
}

function Student(){
    let school = School()
    const student = {
        changeSchool : function(params) {
            if(params == null){
                return school.school_name
            }
            else{
                school.school_name = params
                return school.school_name
            }
        },
        changeLoation : function(params){
            if(params == null){
                return school.location
            }
            else{
                school.location = params
                return school.location
            }
        },
        changeStdNum : function(params){
            if(params == null){
                return school.std_number
            }
            else{
                school.std_number = params
                return school.std_number
            }
        },
        getSchoolInfo: function(){
            return school.getAllInformations()
        }
    }
    return student
}

function StudentInfo(){
    let std = new Student()
    const personal_info = {
        personal_school : function(){
            return std
        },
        name : "",
        id : 0,
        grade : "",
        age : 0,
        setName : function(name){
            this.name = name
            return name
        },
        setId : function(id){
            this.id = id
            return id
        },
        setGrade : function(grade){
            this.grade = grade
            return grade
        },
        setAge : function(age){
            this.age = age
            return age
        },
        getPersonalInfo : function(){
            console.log("name is ",this.name)
            console.log("id is ",this.id)
            console.log("grade is ",this.grade)
            console.log("age is ",this.age)
        }
    }
    return personal_info
}

//Using
let game = new StudentInfo()
game.setName("Bunyawat")
game.setId(37204)
game.setGrade("M5")
game.setAge(16)
game.getPersonalInfo()
let info = game.personal_school()
info.changeSchool("PKW")
info.changeLoation("Phuket")
info.changeStdNum(2000)
info.getSchoolInfo()