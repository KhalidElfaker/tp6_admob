import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private admobFree: AdMobFree) {}

  showPub(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting:true,
      autoShow: true,

     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

  showRewardVideo(){
    const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting:true,
      autoShow: true,

     };
     this.admobFree.rewardVideo.config(rewardVideoConfig);
     
     this.admobFree.rewardVideo.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }
  showInterstitial(){
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting:true,  
      autoShow: true,

     };
     this.admobFree.interstitial.config(interstitialConfig);
     
     this.admobFree.interstitial.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

}
