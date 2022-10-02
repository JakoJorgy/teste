gdjs.sobreSondaCode = {};
gdjs.sobreSondaCode.GDSondaParkerObjects1= [];
gdjs.sobreSondaCode.GDSondaParkerObjects2= [];
gdjs.sobreSondaCode.GDProximoObjects1= [];
gdjs.sobreSondaCode.GDProximoObjects2= [];
gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1= [];
gdjs.sobreSondaCode.GDdescriaoDoParkeObjects2= [];
gdjs.sobreSondaCode.GDproximoObjects1= [];
gdjs.sobreSondaCode.GDproximoObjects2= [];
gdjs.sobreSondaCode.GDvoltarObjects1= [];
gdjs.sobreSondaCode.GDvoltarObjects2= [];

gdjs.sobreSondaCode.conditionTrue_0 = {val:false};
gdjs.sobreSondaCode.condition0IsTrue_0 = {val:false};
gdjs.sobreSondaCode.condition1IsTrue_0 = {val:false};


gdjs.sobreSondaCode.eventsList0 = function(runtimeScene) {

{


gdjs.sobreSondaCode.condition0IsTrue_0.val = false;
{
gdjs.sobreSondaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sobreSondaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.sobreSondaCode.GDvoltarObjects1);
{for(var i = 0, len = gdjs.sobreSondaCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDvoltarObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("proximo"), gdjs.sobreSondaCode.GDproximoObjects1);

gdjs.sobreSondaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sobreSondaCode.GDproximoObjects1.length;i<l;++i) {
    if ( gdjs.sobreSondaCode.GDproximoObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.sobreSondaCode.condition0IsTrue_0.val = true;
        gdjs.sobreSondaCode.GDproximoObjects1[k] = gdjs.sobreSondaCode.GDproximoObjects1[i];
        ++k;
    }
}
gdjs.sobreSondaCode.GDproximoObjects1.length = k;}if (gdjs.sobreSondaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("descriaoDoParke"), gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1);
/* Reuse gdjs.sobreSondaCode.GDproximoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.sobreSondaCode.GDvoltarObjects1);
{for(var i = 0, len = gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1[i].setAnimationName("d2");
}
}{for(var i = 0, len = gdjs.sobreSondaCode.GDproximoObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDproximoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.sobreSondaCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDvoltarObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.sobreSondaCode.GDvoltarObjects1);

gdjs.sobreSondaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sobreSondaCode.GDvoltarObjects1.length;i<l;++i) {
    if ( gdjs.sobreSondaCode.GDvoltarObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.sobreSondaCode.condition0IsTrue_0.val = true;
        gdjs.sobreSondaCode.GDvoltarObjects1[k] = gdjs.sobreSondaCode.GDvoltarObjects1[i];
        ++k;
    }
}
gdjs.sobreSondaCode.GDvoltarObjects1.length = k;}if (gdjs.sobreSondaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("descriaoDoParke"), gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1);
gdjs.copyArray(runtimeScene.getObjects("proximo"), gdjs.sobreSondaCode.GDproximoObjects1);
/* Reuse gdjs.sobreSondaCode.GDvoltarObjects1 */
{for(var i = 0, len = gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1[i].setAnimationName("d1");
}
}{for(var i = 0, len = gdjs.sobreSondaCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDvoltarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.sobreSondaCode.GDproximoObjects1.length ;i < len;++i) {
    gdjs.sobreSondaCode.GDproximoObjects1[i].hide(false);
}
}}

}


};

gdjs.sobreSondaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sobreSondaCode.GDSondaParkerObjects1.length = 0;
gdjs.sobreSondaCode.GDSondaParkerObjects2.length = 0;
gdjs.sobreSondaCode.GDProximoObjects1.length = 0;
gdjs.sobreSondaCode.GDProximoObjects2.length = 0;
gdjs.sobreSondaCode.GDdescriaoDoParkeObjects1.length = 0;
gdjs.sobreSondaCode.GDdescriaoDoParkeObjects2.length = 0;
gdjs.sobreSondaCode.GDproximoObjects1.length = 0;
gdjs.sobreSondaCode.GDproximoObjects2.length = 0;
gdjs.sobreSondaCode.GDvoltarObjects1.length = 0;
gdjs.sobreSondaCode.GDvoltarObjects2.length = 0;

gdjs.sobreSondaCode.eventsList0(runtimeScene);
return;

}

gdjs['sobreSondaCode'] = gdjs.sobreSondaCode;
