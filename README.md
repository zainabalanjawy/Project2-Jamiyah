
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
##### A basic design for the game, it contains the process starting from the start modal, moving through the game and ending by the result modal.

![Wireframe](/imgs/wireframe.png)
<br>
<br>

### UserStories
##### A user story is a general explanation of functionalities written from the perspective of the user. It moves through differnt process till it reach to the testing and the deployment part. 

![Wireframe](/imgs/userStories.png)
<br>

### Planning
##### The planning part started with structure the components needed for the HTML file. Then, a list of css properties where applied for each of the elements declered in the HTML file. Finally, it ended with the logical part, which is applying the functions on the elements declered. 
<br>

## Development
<hr>

### Instructions
##### A list of instructions where given to the user to declare the idea, which are basicly the main functions of the game. The developer has to logicly declare and apply them.
<br>

### Functions
##### In the Javascript file, a list of functions where executed, which are:
##### 1. Set the turn depanding on the icon choice. 
##### 2. Roll the dice.
##### 3. Move the counter depending on number shown on the dice.
##### 4. Move the counter up when landing on a ladder.
##### 5. Move the counter down when landing on a snake.
##### 6. Show the winner when reach to the crown counter. 

##### Some of functions where needed to apply a problem-solving strategy like: 
##### 1. Picking a random number when rolling the dice. 
  ```sh
  function rollDice()
{
    let roll = Math.floor(Math.random()*6)+1;
   return roll
}
  ```

##### 2. Move the counter need to check the postion for the rows and coloumns, then call the function in a loop. 
  ```sh
if(getTurnIcon.position().left<num)
{
getTurnIcon.animate({"top":"-=80px"},function(){
moveIcon(getTurnIcon,++counter,num)}});
}
        
  ```

##### 3. Adding audio file to play when roll the dice. 
  ```sh
var roll_sound = document.createElement('audio');
roll_sound.setAttribute('src', '/sounds/roll.mp3');

 roll_sound.play()
        
  ```

##### 4. Adding effects on buttons when hover
  ```sh
#start-btn{
    background-color:#430d4b;
    color: #f5d5e0;
    width: 10vw;
    height: 2vw;
    margin: 10px;
}
#start-btn:hover {
    background-color: #a14ca4;
  }
        
  ```
## Futurework
<hr>

##### 1. Apply AI technologies to let the player play with the computer.  
##### 2. Use Local storage to save data locally to allow websites to continue after page refresh or loss of internet connectivity. 
##### 3. Add extra icons for players using Font awsome Library  

<br>


## Resources
#### 1.[Wireframes](https://www.figma.com/file/ovGUmUf88tiJMdVLRq5Arv/Project02%3AJamiyah?type=design&node-id=0%3A1&t=PcodiLVyraNACL51-1)

#### 2.[User Stories](https://trello.com/invite/b/T3Wmjld3/ATTI56029954509c17209bff882e97906a644B96B25A/project02)