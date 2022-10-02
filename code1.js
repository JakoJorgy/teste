gdjs.historialCode = {};
gdjs.historialCode.GDvoltarMenuObjects1= [];
gdjs.historialCode.GDvoltarMenuObjects2= [];
gdjs.historialCode.GDdir1Objects1= [];
gdjs.historialCode.GDdir1Objects2= [];
gdjs.historialCode.GDdir12Objects1= [];
gdjs.historialCode.GDdir12Objects2= [];
gdjs.historialCode.GDdir13Objects1= [];
gdjs.historialCode.GDdir13Objects2= [];
gdjs.historialCode.GDdir15Objects1= [];
gdjs.historialCode.GDdir15Objects2= [];
gdjs.historialCode.GDdir14Objects1= [];
gdjs.historialCode.GDdir14Objects2= [];
gdjs.historialCode.GDdir16Objects1= [];
gdjs.historialCode.GDdir16Objects2= [];
gdjs.historialCode.GDdir17Objects1= [];
gdjs.historialCode.GDdir17Objects2= [];
gdjs.historialCode.GDdir19Objects1= [];
gdjs.historialCode.GDdir19Objects2= [];
gdjs.historialCode.GDdir110Objects1= [];
gdjs.historialCode.GDdir110Objects2= [];
gdjs.historialCode.GDdir18Objects1= [];
gdjs.historialCode.GDdir18Objects2= [];
gdjs.historialCode.GDesq1Objects1= [];
gdjs.historialCode.GDesq1Objects2= [];
gdjs.historialCode.GDcapaHistorialObjects1= [];
gdjs.historialCode.GDcapaHistorialObjects2= [];

gdjs.historialCode.conditionTrue_0 = {val:false};
gdjs.historialCode.condition0IsTrue_0 = {val:false};
gdjs.historialCode.condition1IsTrue_0 = {val:false};


gdjs.historialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("voltarMenu"), gdjs.historialCode.GDvoltarMenuObjects1);

gdjs.historialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.historialCode.GDvoltarMenuObjects1.length;i<l;++i) {
    if ( gdjs.historialCode.GDvoltarMenuObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.historialCode.condition0IsTrue_0.val = true;
        gdjs.historialCode.GDvoltarMenuObjects1[k] = gdjs.historialCode.GDvoltarMenuObjects1[i];
        ++k;
    }
}
gdjs.historialCode.GDvoltarMenuObjects1.length = k;}if (gdjs.historialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "index", false);
}}

}


{


{
{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("capaHistorial"), gdjs.historialCode.GDcapaHistorialObjects1);

gdjs.historialCode.condition0IsTrue_0.val = false;
{
}if (gdjs.historialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.historialCode.GDcapaHistorialObjects1 */
{for(var i = 0, len = gdjs.historialCode.GDcapaHistorialObjects1.length ;i < len;++i) {
    gdjs.historialCode.GDcapaHistorialObjects1[i].setAnimationName("capaHist");
}
}}

}


{


gdjs.historialCode.condition0IsTrue_0.val = false;
{
gdjs.historialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.historialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("capaHistorial"), gdjs.historialCode.GDcapaHistorialObjects1);
{for(var i = 0, len = gdjs.historialCode.GDcapaHistorialObjects1.length ;i < len;++i) {
    gdjs.historialCode.GDcapaHistorialObjects1[i].flipX(true);
}
}}

}


{


gdjs.historialCode.condition0IsTrue_0.val = false;
{
gdjs.historialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.historialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("capaHistorial"), gdjs.historialCode.GDcapaHistorialObjects1);
{for(var i = 0, len = gdjs.historialCode.GDcapaHistorialObjects1.length ;i < len;++i) {
    gdjs.historialCode.GDcapaHistorialObjects1[i].flipX(false);
}
}}

}


{


{
}

}


};

gdjs.historialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.historialCode.GDvoltarMenuObjects1.length = 0;
gdjs.historialCode.GDvoltarMenuObjects2.length = 0;
gdjs.historialCode.GDdir1Objects1.length = 0;
gdjs.historialCode.GDdir1Objects2.length = 0;
gdjs.historialCode.GDdir12Objects1.length = 0;
gdjs.historialCode.GDdir12Objects2.length = 0;
gdjs.historialCode.GDdir13Objects1.length = 0;
gdjs.historialCode.GDdir13Objects2.length = 0;
gdjs.historialCode.GDdir15Objects1.length = 0;
gdjs.historialCode.GDdir15Objects2.length = 0;
gdjs.historialCode.GDdir14Objects1.length = 0;
gdjs.historialCode.GDdir14Objects2.length = 0;
gdjs.historialCode.GDdir16Objects1.length = 0;
gdjs.historialCode.GDdir16Objects2.length = 0;
gdjs.historialCode.GDdir17Objects1.length = 0;
gdjs.historialCode.GDdir17Objects2.length = 0;
gdjs.historialCode.GDdir19Objects1.length = 0;
gdjs.historialCode.GDdir19Objects2.length = 0;
gdjs.historialCode.GDdir110Objects1.length = 0;
gdjs.historialCode.GDdir110Objects2.length = 0;
gdjs.historialCode.GDdir18Objects1.length = 0;
gdjs.historialCode.GDdir18Objects2.length = 0;
gdjs.historialCode.GDesq1Objects1.length = 0;
gdjs.historialCode.GDesq1Objects2.length = 0;
gdjs.historialCode.GDcapaHistorialObjects1.length = 0;
gdjs.historialCode.GDcapaHistorialObjects2.length = 0;

gdjs.historialCode.eventsList0(runtimeScene);
return;

}

gdjs['historialCode'] = gdjs.historialCode;
