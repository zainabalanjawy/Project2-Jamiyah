
# Project02 - Jamiyah
<img src="../Project2-Jamiyah/public/imgs/Jamiyah.png" alt="jamiyah logo" style="align-content=center">


## Table of contents
1. [Introduction](##Introduction)
    * [1.2 Purpose](###Purpose)
2. [Technologies](###Technologies)
3. [Design](##Design)
    * [3.1 Wireframe](###Wireframe)
    * [3.2 UserStories](###UserStories)
4. [Planning](##Planning)
5. [Development](##Development)
    * [5.1 Instructions](##Instructions)
    * [5.2 Functions](##Functions)
6. [Future work](##Futurework)
7. [Resources](##Resources)


## Introduction
<hr>

### Description
##### A platform that allows users to join or create Jamiyahs where they can contribute with a set amount of money which will be summed and given to each member monthly.
<br>

### Purpose
##### Build a full-stack application using NodeJS, HTML, CSS, JS and NoSQL.
<br>

## Technologies
<hr>

##### 1. ![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

##### 2. ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
##### 3. ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
##### 4.![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

##### 5. ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

##### 6. ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
##### 7. <img src="https://i0.wp.com/blog.fontawesome.com/wp-content/uploads/2020/08/jSfmJLBr.png?resize=720%2C240&ssl=1" alt="font-awsome" width="100px" height="40px"/>
<br>

## Design
<hr>

### Wireframe
##### A basic design for Jamiyah, it contains account authorization, a process of creating updating and deleting Jamiyah's. viewing and updating user profile. furthermore, account balance can be viewd.

![Wireframe](/imgs/wireframe.png)
<br>
<br>

### UserStories
##### A user story is a general explanation of functionalities written from the perspective of the user. It moves through differnt process till it reach to the testing and the deployment part. 

![Wireframe](/imgs/userStories.png)
<br>

### Planning
##### The planning part started with structure the components needed for the views and controllers file. Then, a list of css properties where applied for each of the elements declered in the views and controllers file. Finally, it ended with the logical part, which is applying the functions on the elements declered. 
<br>

## Development
<hr>

### definition
##### A graph of definitions where given to the user to declare the idea, which are basicly the main functions of the app. The developer has to logicly declare and apply them.
<br>

### Functions
##### In the controller file, a list of functions where executed, which are:
##### 1. Signup, Signin, signout, and forget password. 
##### 2. Create, update, and delete Jamiyah.
##### 3. View jamiyah details.
##### 4. View and edit user profile
##### 5. View and edit user account balance.

##### Some of functions where needed to apply a problem-solving strategy like: 
##### 1. Image uplaod function. 
 `const multer = require('multer');
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })`

##### 2.viewing User history 
const updateEndedJamiyahs = async function () {
  const jamiyahs = await Jamiyah.find({ isEnded: false });
  const now = new Date();
  for (const jamiyah of jamiyahs) {
    if (jamiyah.endDate <= now) {
      jamiyah.isEnded = true;
      await History.create({
        jamiyah: jamiyah._id,
        endDate: jamiyah.endDate,
      });
      await jamiyah.save();
    }
  }
};

##### 3. show participants turn in each months.
<ul class="timeline" name="participants">
                <% jamiyah.participants.forEach(a => {%>
                    <% month++ %>
                    <% users.forEach(b => {%>
                    <% if(a.equals(b._id)) { %>
                        <% if(today+1 === month) { %>
                    <li class="selected" value="<%= b._id %>" data-year=<%=month.toString() %>  data-text="<%= b.name %>"></li>
                    <%} else{%>
                    <li value="<%= b._id %>" data-year=<%=month.toString() %>  data-text="<%= b.name %>"></li>
                <%}}}) %>
                    <%}) %>
            </ul>

##### 4.To take id user from htps query
const jamiyah = await Jamiyah.findById(req.query.id);

##### 5. Unique Random generator for a unique security code
## Futurework
<hr>

##### 1. Implement A Payment Gateway, and automatic payments.   
##### 2. Alerts to inform when actions succeed or fail.
##### 3. Add a search bar. 
##### 4. Handling Edge Cases on things like duration or amount inputs. 
##### 5. Make adding participants with an invite to give the choice of accepting or reclining the Jamiyah.

<br>


## Resources
#### 1.[Wireframes](https://www.figma.com/file/ovGUmUf88tiJMdVLRq5Arv/Project02%3AJamiyah?type=design&node-id=0%3A1&t=PcodiLVyraNACL51-1)

#### 2.[User Stories](https://trello.com/invite/b/T3Wmjld3/ATTI56029954509c17209bff882e97906a644B96B25A/project02)
