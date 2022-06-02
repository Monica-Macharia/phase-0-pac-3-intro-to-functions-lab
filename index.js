function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase( ));
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    let goodanswer = "YES INDEED!";
    let rudeanswer = "I can\'t hear you!";
    let niceanswer = "I would love to!";
    if(string.toLowerCase(string) === string) {
         return rudeanswer;
    }
    else if(string.toUpperCase(string) === string) {
        return goodanswer;
    }
    else if("Let\'s have dinner together!" === string) {
        return niceanswer
    }
}
