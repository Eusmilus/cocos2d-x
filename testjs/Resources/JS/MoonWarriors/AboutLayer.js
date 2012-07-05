var AboutLayer = function(){
    this._layer = cc.Layer.create();
    this.init = function () {
        var bRet = false;
        {
            cc.log("AboutLayer 1---------------------");
            var sp = cc.Sprite.create(s_loading);
            sp.setAnchorPoint(cc.PointZero());
            this._layer.addChild(sp, 0, 1);
cc.log("AboutLayer 2---------------------");
            var cacheImage = cc.TextureCache.sharedTextureCache().addImage(s_menuTitle)
            var title = cc.Sprite.create(cacheImage, cc.RectMake(0, 34, 100, 34));
            title.setPosition(cc.ccp(winSize.width / 2, winSize.height - 120));
            this._layer.addChild(title);
cc.log("AboutLayer 3---------------------");
            var about = cc.LabelTTF.create("\n \n This showcase utilizes many features from Cocos2d-html5 engine, including: Parallax background, tilemap, actions, ease, frame animation, schedule, Labels, keyboard Dispatcher, Scene Transition. Art and audio is copyrighted by Enigmata Genus Revenge, you may not use any copyrigted material without permission. This showcase is licensed under GPL",cc.SizeMake(winSize.width * 0.85 ,100),cc.TEXT_ALIGNMENT_LEFT,"Arial",14)
            about.setPosition(cc.ccp(winSize.width/2,winSize.height/2 + 20));
            this._layer.addChild(about);
cc.log("AboutLayer 4---------------------");
            var author = cc.LabelTTF.create("Programmer: \n Shengxiang Chen",cc.SizeMake(winSize.width * 0.85 ,100),cc.TEXT_ALIGNMENT_LEFT,"Arial",14)
            author.setPosition(cc.ccp(winSize.width/2,140));
            this._layer.addChild(author);
cc.log("AboutLayer 5---------------------");
            author = cc.LabelTTF.create("Dingping Lv",cc.SizeMake(winSize.width * 0.85 ,100),cc.TEXT_ALIGNMENT_CENTER,"Arial",14)
            author.setPosition(cc.ccp(winSize.width/2,120));
            this._layer.addChild(author);
cc.log("AboutLayer 6---------------------");
            author = cc.LabelTTF.create("Effects animation: \n Hao Wu",cc.SizeMake(winSize.width * 0.85 ,100),cc.TEXT_ALIGNMENT_LEFT,"Arial",14)
            author.setPosition(cc.ccp(winSize.width/2,100));
            this._layer.addChild(author);
cc.log("AboutLayer 7---------------------");
            author = cc.LabelTTF.create("Quality Assurance: \n Sean Lin",cc.SizeMake(winSize.width * 0.85 ,80),cc.TEXT_ALIGNMENT_LEFT,"Arial",14)
            author.setPosition(cc.ccp(winSize.width/2,80));
            this._layer.addChild(author);
cc.log("AboutLayer 8---------------------");
            var label = cc.LabelTTF.create("Go back", "Arial", 14);
            var back = cc.MenuItemLabel.create(label, this, this.backCallback);
            var menu = cc.Menu.create(back);
            menu.setPosition(cc.ccp(winSize.width/2,50));
            this._layer.addChild(menu);
cc.log("AboutLayer 9---------------------");            
            bRet = true;
        }

        return bRet;
    };
    this.backCallback = function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2,scene));
    }
};

AboutLayer.create = function () {
    var sg = new AboutLayer();
    if (sg && sg.init()) {
        return sg._layer;
    }
    return null;
};