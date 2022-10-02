gdjs.indexCode = {};
gdjs.indexCode.GDInicioObjects1= [];
gdjs.indexCode.GDInicioObjects2= [];
gdjs.indexCode.GDSobreObjects1= [];
gdjs.indexCode.GDSobreObjects2= [];
gdjs.indexCode.GDbvObjects1= [];
gdjs.indexCode.GDbvObjects2= [];
gdjs.indexCode.GDsimularViajemObjects1= [];
gdjs.indexCode.GDsimularViajemObjects2= [];
gdjs.indexCode.GDFundoObjects1= [];
gdjs.indexCode.GDFundoObjects2= [];
gdjs.indexCode.GDHistorialObjects1= [];
gdjs.indexCode.GDHistorialObjects2= [];
gdjs.indexCode.GDsobreSondaObjects1= [];
gdjs.indexCode.GDsobreSondaObjects2= [];

gdjs.indexCode.conditionTrue_0 = {val:false};
gdjs.indexCode.condition0IsTrue_0 = {val:false};
gdjs.indexCode.condition1IsTrue_0 = {val:false};


gdjs.indexCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("simularViajem"), gdjs.indexCode.GDsimularViajemObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.indexCode.GDsimularViajemObjects1.length !== 0 ? gdjs.indexCode.GDsimularViajemObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("simularViajem"), gdjs.indexCode.GDsimularViajemObjects1);

gdjs.indexCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.indexCode.GDsimularViajemObjects1.length;i<l;++i) {
    if ( gdjs.indexCode.GDsimularViajemObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.indexCode.condition0IsTrue_0.val = true;
        gdjs.indexCode.GDsimularViajemObjects1[k] = gdjs.indexCode.GDsimularViajemObjects1[i];
        ++k;
    }
}
gdjs.indexCode.GDsimularViajemObjects1.length = k;}if (gdjs.indexCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "simularViajem", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Historial"), gdjs.indexCode.GDHistorialObjects1);

gdjs.indexCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.indexCode.GDHistorialObjects1.length;i<l;++i) {
    if ( gdjs.indexCode.GDHistorialObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.indexCode.condition0IsTrue_0.val = true;
        gdjs.indexCode.GDHistorialObjects1[k] = gdjs.indexCode.GDHistorialObjects1[i];
        ++k;
    }
}
gdjs.indexCode.GDHistorialObjects1.length = k;}if (gdjs.indexCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "historial", false);
}}

}


{


{
}

}


};

gdjs.indexCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.indexCode.GDInicioObjects1.length = 0;
gdjs.indexCode.GDInicioObjects2.length = 0;
gdjs.indexCode.GDSobreObjects1.length = 0;
gdjs.indexCode.GDSobreObjects2.length = 0;
gdjs.indexCode.GDbvObjects1.length = 0;
gdjs.indexCode.GDbvObjects2.length = 0;
gdjs.indexCode.GDsimularViajemObjects1.length = 0;
gdjs.indexCode.GDsimularViajemObjects2.length = 0;
gdjs.indexCode.GDFundoObjects1.length = 0;
gdjs.indexCode.GDFundoObjects2.length = 0;
gdjs.indexCode.GDHistorialObjects1.length = 0;
gdjs.indexCode.GDHistorialObjects2.length = 0;
gdjs.indexCode.GDsobreSondaObjects1.length = 0;
gdjs.indexCode.GDsobreSondaObjects2.length = 0;

gdjs.indexCode.eventsList0(runtimeScene);
return;

}

gdjs['indexCode'] = gdjs.indexCode;
