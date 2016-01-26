/**
 * Created by user1016 on 2016/1/13.
 */
"use strict";
class login{
    constructor(){

    }

    loginin(req,res){
        res.render('index',{title :"love"});
    }

    logout(){
        console.log(".................out")
    }

}

module .exports = new login();