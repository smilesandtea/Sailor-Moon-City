var c = document.getElementById('canvas')
ctx = canvas.getContext("2d");
var s = sprinkler.create(c) 
var audio = new Audio('sailor_moon_sound_1.mp3');


function lunaDrop(message) {
    audio.play();

    var images = [
        'luna-pixel.png',
        'luna-pixel.png'
      ]
      var stop = s.start(images, {
        ddyMin: 200,
        ddyMax: 200
      })
      setTimeout(function(){
        stop();
      }, 2000)
}




ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command === "sailorcity" &&
        ( !rewardId || flags.broadcaster || flags.mod ) ) {
        lunaDrop( message );
    }
    if( flags.customReward && extra.customRewardId === rewardId ) {
        lunaDrop( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "36b10ba5-7851-4e9e-854d-607fe16e45ab" ) {
        lunaDrop( message );
    }
};
ComfyJS.Init( "smilesandteaa" );