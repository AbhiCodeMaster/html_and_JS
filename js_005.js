const user1 = {
    name : "Mayank",
    introduce(){
        console.log(`hello! my name is ${this.name}`);
    }
}

const user2 ={
    name : "naman",
    introduce(){
        console.log(`hello! my name is ${this.name}`);
    }
}

const user3 ={
    name : "abhishek",
    intorduce(){
        console.log(`hello! my name is ${this.name}`);
    }
}

user1.introduce();
user2.introduce();