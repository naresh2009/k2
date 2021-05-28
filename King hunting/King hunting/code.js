var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2cffe690-c7de-4d3c-ba29-f9ae0e2af7d1","2bea6e23-bb10-4f3a-a1c8-59ac6f22e84d","d9dc0cf7-29d8-4b4e-8d23-27427ac184c2","10a1221b-f752-447e-9ed7-8fc41304d970","6889196c-2892-441e-bede-9f46e4a0699a","86b58545-5e86-4893-9ba8-2deeb72efea6","dbd72797-2ee3-4f01-831a-e79de07de35e","6b48791d-ba89-42ea-8b75-99550267d8b0","f222d056-97e9-4e72-93cf-f5b211b3fa28","ed10e770-9a5f-4b05-a4e1-65a1bde5e3a1","20ef2a90-4943-4c25-8160-75949064f3fa","e8f026d9-e4d6-4cda-add9-787472e792b9","46fcaf5c-fb5c-4342-b444-c052fe4ac3c1","633717eb-ff42-4a8e-8f13-836f24514115","b3f41450-382a-44e4-b4be-e344a50825a4","2a17163f-109b-4577-b464-04894ba24a1c","b0d2175a-bb70-47cb-8842-4e17608ddb13","6d2e0077-71ea-42d4-9447-21715faf6e27","71f9109e-f9ee-463d-8b7f-2684fe21e7be","eaf5c1e5-3e70-4a69-a5f5-a8f20e2059a1","c6216faf-6425-49da-860a-2d57901c9d08"],"propsByKey":{"2cffe690-c7de-4d3c-ba29-f9ae0e2af7d1":{"name":"animal1","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2cffe690-c7de-4d3c-ba29-f9ae0e2af7d1.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"1wCtuz4Xp8atxBDAWk84LCdQYZ2IWcZU","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2cffe690-c7de-4d3c-ba29-f9ae0e2af7d1.png"},"2bea6e23-bb10-4f3a-a1c8-59ac6f22e84d":{"name":"shoot","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2bea6e23-bb10-4f3a-a1c8-59ac6f22e84d.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"7LWkaRIQdOYmyS9j5cwBKgdZHxnP6Wgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2bea6e23-bb10-4f3a-a1c8-59ac6f22e84d.png"},"d9dc0cf7-29d8-4b4e-8d23-27427ac184c2":{"name":"hunting","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/d9dc0cf7-29d8-4b4e-8d23-27427ac184c2.png","frameSize":{"x":353,"y":425},"frameCount":1,"looping":true,"frameDelay":4,"version":"ijmRBx9fGBWgENudd77DJhcOx5nAHMZY","loadedFromSource":true,"saved":true,"sourceSize":{"x":353,"y":425},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/d9dc0cf7-29d8-4b4e-8d23-27427ac184c2.png"},"10a1221b-f752-447e-9ed7-8fc41304d970":{"name":"king","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":4,"looping":true,"frameDelay":5,"version":"JJl6Wlsbpa86arM6GrxfPneOZOFMth3T","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1000},"rootRelativePath":"assets/10a1221b-f752-447e-9ed7-8fc41304d970.png"},"6889196c-2892-441e-bede-9f46e4a0699a":{"name":"gun","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6889196c-2892-441e-bede-9f46e4a0699a.png","frameSize":{"x":1069,"y":233},"frameCount":1,"looping":true,"frameDelay":4,"version":"BKdmzvfndA4tw8SeNi6BjxQbkYnOCyTD","loadedFromSource":true,"saved":true,"sourceSize":{"x":1069,"y":233},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6889196c-2892-441e-bede-9f46e4a0699a.png"},"86b58545-5e86-4893-9ba8-2deeb72efea6":{"name":"coin","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/86b58545-5e86-4893-9ba8-2deeb72efea6.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"dS8MN_qgNgc9dpmU74nl0gInhf7UbcpJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/86b58545-5e86-4893-9ba8-2deeb72efea6.png"},"dbd72797-2ee3-4f01-831a-e79de07de35e":{"name":"animal2","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/dbd72797-2ee3-4f01-831a-e79de07de35e.png","frameSize":{"x":306,"y":165},"frameCount":1,"looping":true,"frameDelay":4,"version":"73bFJQaAjvg9Q3iHX1xc4e9AS5hmHBAo","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":165},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/dbd72797-2ee3-4f01-831a-e79de07de35e.png"},"6b48791d-ba89-42ea-8b75-99550267d8b0":{"name":"animal3","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6b48791d-ba89-42ea-8b75-99550267d8b0.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"BzIOjcvjDp2TUVOhQLttQORk0bXhXTdg","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6b48791d-ba89-42ea-8b75-99550267d8b0.png"},"f222d056-97e9-4e72-93cf-f5b211b3fa28":{"name":"animal4","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/f222d056-97e9-4e72-93cf-f5b211b3fa28.png","frameSize":{"x":284,"y":177},"frameCount":1,"looping":true,"frameDelay":4,"version":"jEc8nNw.bgieU.q5rO6WnsiHk9UXsDQq","loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":177},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/f222d056-97e9-4e72-93cf-f5b211b3fa28.png"},"ed10e770-9a5f-4b05-a4e1-65a1bde5e3a1":{"name":"animal5","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/ed10e770-9a5f-4b05-a4e1-65a1bde5e3a1.png","frameSize":{"x":259,"y":194},"frameCount":1,"looping":true,"frameDelay":4,"version":"AQKllmHgdswvjOfLVzog44piYA8OZRTg","loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":194},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/ed10e770-9a5f-4b05-a4e1-65a1bde5e3a1.png"},"20ef2a90-4943-4c25-8160-75949064f3fa":{"name":"animal6","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/20ef2a90-4943-4c25-8160-75949064f3fa.png","frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":4,"version":"Y0IeufZwi2V0FAGYkvA4XjcGhzjA_AeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/20ef2a90-4943-4c25-8160-75949064f3fa.png"},"e8f026d9-e4d6-4cda-add9-787472e792b9":{"name":"image1","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/e8f026d9-e4d6-4cda-add9-787472e792b9.png","frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":4,"version":"Tzpu4MggKSE2_sbvDutxjWQ3R7c3iVw.","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/e8f026d9-e4d6-4cda-add9-787472e792b9.png"},"46fcaf5c-fb5c-4342-b444-c052fe4ac3c1":{"name":"over","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/46fcaf5c-fb5c-4342-b444-c052fe4ac3c1.png","frameSize":{"x":254,"y":198},"frameCount":1,"looping":true,"frameDelay":4,"version":"ts12HVDdj5VIhfjYWAVg_kYOc_3HOi_K","loadedFromSource":true,"saved":true,"sourceSize":{"x":254,"y":198},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/46fcaf5c-fb5c-4342-b444-c052fe4ac3c1.png"},"633717eb-ff42-4a8e-8f13-836f24514115":{"name":"restart","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/633717eb-ff42-4a8e-8f13-836f24514115.png","frameSize":{"x":481,"y":519},"frameCount":1,"looping":true,"frameDelay":4,"version":"BWZxbrnqxsrSqHD8kEOWBrU7kXgxZfFz","loadedFromSource":true,"saved":true,"sourceSize":{"x":481,"y":519},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/633717eb-ff42-4a8e-8f13-836f24514115.png"},"b3f41450-382a-44e4-b4be-e344a50825a4":{"name":"bulet","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/b3f41450-382a-44e4-b4be-e344a50825a4.png","frameSize":{"x":222,"y":227},"frameCount":1,"looping":true,"frameDelay":4,"version":"Fzjcp1iZA1NUsPP2b5dLfKu_HmbYIPBa","loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":227},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/b3f41450-382a-44e4-b4be-e344a50825a4.png"},"2a17163f-109b-4577-b464-04894ba24a1c":{"name":"you win","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2a17163f-109b-4577-b464-04894ba24a1c.png","frameSize":{"x":211,"y":215},"frameCount":1,"looping":true,"frameDelay":4,"version":"HoQeoZtetRiJp_yT6Jm3S8sJbCWHPVit","loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":215},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/2a17163f-109b-4577-b464-04894ba24a1c.png"},"b0d2175a-bb70-47cb-8842-4e17608ddb13":{"name":"gb2","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/b0d2175a-bb70-47cb-8842-4e17608ddb13.png","frameSize":{"x":297,"y":169},"frameCount":1,"looping":true,"frameDelay":4,"version":"ODShX8oGYo55hoNJ5ZpBFr.3qTalAeyv","loadedFromSource":true,"saved":true,"sourceSize":{"x":297,"y":169},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/b0d2175a-bb70-47cb-8842-4e17608ddb13.png"},"6d2e0077-71ea-42d4-9447-21715faf6e27":{"name":"hello","sourceUrl":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6d2e0077-71ea-42d4-9447-21715faf6e27.png","frameSize":{"x":305,"y":179},"frameCount":1,"looping":true,"frameDelay":4,"version":"TPGhq1SvnGGPfP0LnganXO4r5noWHQg4","loadedFromSource":true,"saved":true,"sourceSize":{"x":305,"y":179},"rootRelativePath":"assets/v3/animations/T_JCLoS0xDc1pWXnQqUr2imgB1RE-mf3du22lSsaWKw/6d2e0077-71ea-42d4-9447-21715faf6e27.png"},"71f9109e-f9ee-463d-8b7f-2684fe21e7be":{"name":"button1","sourceUrl":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/71f9109e-f9ee-463d-8b7f-2684fe21e7be.png","frameSize":{"x":218,"y":108},"frameCount":1,"looping":true,"frameDelay":4,"version":"tmXGuXNBnhI38iNFt0pPHvkIl2_1MDKd","loadedFromSource":true,"saved":true,"sourceSize":{"x":218,"y":108},"rootRelativePath":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/71f9109e-f9ee-463d-8b7f-2684fe21e7be.png"},"eaf5c1e5-3e70-4a69-a5f5-a8f20e2059a1":{"name":"play_button","sourceUrl":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/eaf5c1e5-3e70-4a69-a5f5-a8f20e2059a1.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"j9tZAM4iL2DsHsrjrtZsKtrbD8TcEV_v","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/eaf5c1e5-3e70-4a69-a5f5-a8f20e2059a1.png"},"c6216faf-6425-49da-860a-2d57901c9d08":{"name":"ribbon","sourceUrl":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/c6216faf-6425-49da-860a-2d57901c9d08.png","frameSize":{"x":318,"y":159},"frameCount":1,"looping":true,"frameDelay":4,"version":"rvX7vgHKHxAJGHgcL1mZ6zWqSiasjcft","loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":159},"rootRelativePath":"assets/v3/animations/RnwxkeBgU61DE1mSTgZVu6FOeL8qiGjbIdodpX15oiI/c6216faf-6425-49da-860a-2d57901c9d08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hu = createSprite(200, 200);
hu.setAnimation("hunting");
hu.scale=1.1;

var button = createSprite(187, 287);
button.setAnimation("play_button");
button.scale = 0.2;

var gameState =0;

var coinValue=0;
var diamondValue=0;

var ribbon = createSprite(194, 26);
ribbon.setAnimation("ribbon");





var gb2 = createSprite(200, 200);
gb2.setAnimation("gb2");
gb2.scale=2.5;
gb2.velocityX=-3;
gb2.visible=false;

var king = createSprite(50, 350);
king.setAnimation("king");
king.visible=false;
king.scale=0.4;



var gun = createSprite(70, 320);
gun.setAnimation("gun");
gun.visible=false;
gun.scale=0.1;


var hello = createSprite(70, 25);
hello.setAnimation("hello");
hello.visible=false;

var coin = createSprite(170, 17);
coin.setAnimation("coin");
coin.visible=false;
coin.scale=0.15;

var image1 = createSprite(270,17);
image1.setAnimation("image1");
image1.visible=false;
image1.scale=0.2;

var shoot = createSprite(350, 30);
shoot.setAnimation("shoot");
shoot.visible=false;
shoot.scale=0.3;

var animalGroup = createGroup();
var buletGroup=createGroup();


  
 var win = createSprite(200, 200);
  win.setAnimation("you win");
  win.visible=false;
  
  var button1 = createSprite(192,361);
button1.setAnimation("button1");
   button1.scale=0.5;
   button1.visible=false;
    


function draw() {
  background("white");
 
  if(mousePressedOver(button)){
    gameState = 1;
  }
      if (gameState===1){
    
     if(gb2.x<100){
  gb2.x=300;
}

    hu.visible=false;
    button.visible=false;
    gb2.visible=true;
    king.visible=true;
    gun.visible=true;
    hello.visible=true;
    coin.visible=true;
    image1.visible=true;
    shoot.visible=true;
    //playSound("assets/SingleHorseWhinny-EE100701.mp3");
  
  
  if(mousePressedOver(shoot)){
   var bulet = createSprite(63, 340);
   bulet.setAnimation("bulet");
    bulet.scale=0.1;
    bulet.velocityX=5;
    buletGroup.add(bulet);
    playSound("assets/12-Gauge-Pump-Action-Shotgun-Far-Gunshot-D-www.fesliyanstudios.com.mp3");
    
   
   
   
  }
  
animals();
  
if(buletGroup.isTouching(animalGroup)){
  animalGroup.destroyEach();
  coinValue=coinValue+10;
  
}

if(animalGroup.isTouching(king)){
  coinValue=coinValue-20;
  animalGroup.destroyEach();
  
  
  
}
if (coinValue===100 ){
    gameState=2;
    diamondValue=diamondValue+5;
    shoot.visible=false;
  king.visible=false;
  gun.visible=false;
  gb2.velocityX=0;
  animalGroup.visible=false;
  animalGroup.destroyEach();
  win.visible=true;
  button1.visible=true;
  
  playSound("assets/category_achievements/vibrant_game_slot_machine_win_5.mp3");
    
}
}
if(gameState===2){
if(mousePressedOver(button1)){
  
  win.visible=false;
  button1.visible=false;
  gameState=1;
  if(gb2.x<100){
  gb2.x=300;
}
gb2.velocityX=-3;
  
  coinValue=0;
}
}




  
  
drawSprites();
fill("white");
text(coinValue,190,20);
text(diamondValue,291,20);





}

function animals(){
  if(frameCount%100===0){
    var animal = createSprite(400, 370);
    rand=Math.round(randomNumber(1,6));
     animal.setAnimation("animal"+rand);
    animal.velocityX=-4;
    animal.scale=0.5;
    animalGroup.add(animal);
     
     
     
     
  }
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
