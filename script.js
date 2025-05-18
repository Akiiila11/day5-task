// 1. Create Resume data using JSON format
let data = [
  {
    name: "Akilandeshwari V",
    description: "FrontEnd Developer",
    contact: {
      mobile: 1234567890,
      email: "akilavenkatraj2001@gmail.com"
    },
    Address: {
      doorno: 997,
      street: "Sukrawarpet Street",
      district: "Coimbatore",
      state: "Tamilnadu",
      country: "India"
    },
    Education: {
      HSC: {
        name: "svv matric",
        location: "coimbatore",
        percentage: 67
      },
      UG: {
        name: "KGCAS",
        dept: "B.sc.Computer Science",
        location: "coimbatore",
        percentage: 80
      },
      PG: {
        name: "PSGR",
        dept: "M.sc.Computer Science",
        location: "coimbatore",
        percentage: 85
      }
    },
    Skills: {
      languages: ["Javascript", "Java", "HTML", "CSS"],
      Tools: ["Git", "Powerbi", "Tableau", "UIpath"],
      Interests: "Webdevelopment"
    }
  }];
let a = JSON.stringify(data);
// console.log(a);
let resume = JSON.parse(a);
console.log(resume);

// 2. For the above JSON, iterate over all for loops
// FOR LOOP 
for(let i=0;i<resume.length;i++){
  console.log(resume[i]);
}

// FOR IN LOOP 
for(let key in resume){
  console.log(resume[key].Skills);
}

// FOR OF LOOP 
for(let obj of resume){
  console.log(obj.Skills.languages);
}

// FOR EACH 
resume.forEach((ele)=>console.log(ele.Skills.Tools));