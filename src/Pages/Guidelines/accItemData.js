export const itemdata = [
  {
  title: "Texture",
  content: [
      {
        header:"Resolution",
        preferences:"Hero assets：最大4096*4096 \nHero assets以外的物件：不超過2048*2048",
        why:"若需穿梭多個場景時，過大的貼圖會造成載入緩慢",
        notes:"根據使用貼圖的Actor佔畫面大小，規劃貼圖的尺寸"
      },
      {
        header:"Mipmap",
        preferences:"FromTextureGroup",
        why:"- 若設為No Mipmap，會增加貼圖載入時間 \n- 較遠處的物件不需要高解析度版本的貼圖",
        notes:""
      },
      {
        header:"Maximum Texture Size",
        preferences:"視情況最大2048",
        why:"較遠處的物件不需要高解析度版本的貼圖",
        notes:""
      },
      {
        header:"LOD Bias",
        preferences:"0，視情況調整為1或2",
        why:"",
        notes:"較遠處的物件不需要高解析度版本的貼圖"
      },
    ],
  },
  {
    title: "Lighting",
    content: [
      {
        header:"Lightmap Resolution",
        preferences:"請確保Lightmap Resolution Debug View Mode中所有物件為藍/綠/綠橘，以綠色為佳",
        why:"過高的Lightmap Res會使Build Lighting時間太長",
        notes:""
      },
      {
        header:"Light Type",
        preferences:"盡量用Spotlight取代Point Light",
        why:"1盞Point Light=6盞Spotlight，較耗效能",
        notes:""
      },
      {
        header:"Light Movability",
        preferences:"視情況規劃欲使用的燈光種類",
        why:"已Build Lighting後的Static Light較Movable輕量",
        notes:""
      },
      {
        header:"Cast Shadow",
        preferences:"只保留必要的陰影，其餘一律Disable",
        why:"",
        notes:""
      },
      {
        header:"Cast Static Shadow",
        preferences:"若燈光為Movable，則Disable",
        why:"",
        notes:""
      },
      {
        header:"Cast Dynamic Shadow",
        preferences:"若燈光為Static，則Disable",
        why:"",
        notes:""
      },
      {
        header:"Light Complexity",
        preferences:"應保持大面積綠~紅色",
        why:"",
        notes:""
      },
      {
        header:"Light Channels",
        preferences:"所有Static Lights的Light Channel應為0",
        why:"Light Channel 0以外的燈光在build lighting之後會失效，但Movable Lights可以使用",
        notes:""
      },
    ],
  },
  {
    title: "Scene",
    content: [
      {
        header:"Scene",
        preferences:"不要用",
        why:"目前nDisplay不支援Nanite",
        notes:"根據使用貼圖的Actor佔畫面大小，規劃貼圖的尺寸"
      },
      {
        header:"Scene Scale",
        preferences:"請以真實世界比例製作",
        why:"拍攝時，若虛擬場景非真實比例，演員站在台上會看起來比例不對",
        notes:""
      },
      {
        header:"Auto Exposure",
        preferences:"Off",
        why:"真實攝影機不會像人眼瞳孔一樣，適應亮處到暗處而改變Iris，因此Exposure應為固定數值",
        notes:"Project Settings>Engine>Rendering>Auto Exposure"
      },
      {
        header:"FPS",
        preferences:"原始場景: 90+ FPS \nEnable NDC Preview: 40~50+ FPS",
        why:"因場景透過nDisplay投播至大型螢幕（LED）等於將一個場景render多次，故效能會大幅下降。需在製作場景時請務必開啟NDC Preview隨時進行檢測FPS是否符合規範",
        notes:""
      },
      {
        header:"前景物件",
        preferences:"細節要足夠，貼圖解析度也要夠高，前景看得太清楚了",
        why:"",
        notes:""
      },
      {
        header:"色彩",
        preferences:"物件/特效/燈光不建議使用過飽和的色彩",
        why:"過度飽和的色彩在LED上顯色會不好看，甚至有過曝等情形發生",
        notes:""
      },
      {
        header:"Emissive",
        preferences:"不建議使用純色色塊",
        why:"拍起來不好看，真實燈箱、燈條應有明暗細節",
        notes:"可參考Lightbox"
      },
      {
        header:"Reflection Capture Actors",
        preferences:"不要用",
        why:"Screen Space Reflection會隨著鏡頭移動而變化或移動，可能會因運鏡而造成視覺上的bug，例如運鏡時，某些原本有Reflection的地方變得沒有Reflection，或是有Reflection快速閃動等嚴重問題。",
        notes:"包含Box Reflection Capture, Planar Reflection, Sphere Reflection Capture"
      },
      {
        header:"SkyCreator",
        preferences:"不要用",
        why:"1. 許多參數不方便客製化修改 \n2. 高機率在投播時發生閃爍問題",
        notes:"待測試"
      },
      {
        header:"場景",
        preferences:"不會拍攝到的物件可以刪除",
        why:"節省效能",
        notes:""
      },
      {
        header:"面數",
        preferences:"保持合理面數",
        why:"節省效能",
        notes:"在LED牆上只佔100px x 100px的物件不需要高達20萬面"
      },
      {
        header:"LOD",
        preferences:"Level中的物件務必設定LOD，Screen Size設定在合理的範圍。",
        why:"節省效能",
        notes:"Screen Size設定的太小的話，遠景可能也是LOD0，對效能幫助有限。"
      },
      {
        header:"ISM/HISM",
        preferences:"請確定運鏡後才做，避免現場不方便修改",
        why:"節省效能",
        notes:""
      },
      {
        header:"Ray Tracing",
        preferences:"不要用",
        why:"Ray Tracing在投播時的效能消耗非常大",
        notes:""
      },
    ],
  },
  {
    title: "Post Processing",
    content: [
      {
        header:"Min Brightness",
        preferences:"1",
        why:"真實攝影機不會像人眼瞳孔一樣，適應亮處到暗處而改變Iris，因此Exposure應為固定數值",
        notes:""
      },
      {
        header:"Max Brightness",
        preferences:"1",
        why:"真實攝影機不會像人眼瞳孔一樣，適應亮處到暗處而改變Iris，因此Exposure應為固定數值",
        notes:""
      },
      {
        header:"Depth of Field",
        preferences:"Off",
        why:"",
        notes:""
      },
      {
        header:"Vignette",
        preferences:"0.0",
        why:"真實攝影機本身就可能帶有Vignette，PPV的Vignette疊加上去可能會拍起來不真實",
        notes:""
      },
      {
        header:"Chromatic Aberration",
        preferences:"0.0",
        why:"真實攝影機本身就可能帶有Chromatic Aberration，PPV的Chromatic Aberration疊加上去可能會拍起來不真實",
        notes:""
      },
      {
        header:"Grain",
        preferences:"0.0",
        why:"LED背景應模擬真實場景，不應帶有此類質感",
        notes:""
      },
      {
        header:"Flare",
        preferences:"0.0",
        why:"LED背景應模擬真實場景，不應帶有此類效果",
        notes:""
      },
      {
        header:"Ambient Occlusion",
        preferences:"室內景可開（<=1）\n室外景建議不要開，或數值<=0.5",
        why:"UE的AO屬於Screeen Space，會隨著鏡頭移動而改變，可能會因運鏡而造成視覺上的bug，例如運鏡時，某些原本有AO的地方變得沒有AO。但室內景等中型場景此缺陷較不明顯，故開放使用。\n大型室外場景（如樹林、宇宙、沙漠等）因效能考量，則須關閉AO ",
        notes:""
      },
      {
        header:"Screen Space Reflection",
        preferences:"0.0",
        why:"Screen Space Reflection會隨著鏡頭移動而變化或移動，可能會因運鏡而造成視覺上的bug，例如運鏡時，某些原本有Reflection的地方變得沒有Reflection，或是有Reflection快速閃動等嚴重問題。",
        notes:""
      },
      {
        header:"Unbound",
        preferences:"On",
        why:"",
        notes:""
      },
      {
        header:"Bloom",
        preferences:"<=1",
        why:"",
        notes:""
      }
    ],
  },
  {
    title: "Materials",
    content: [
        {
          header:"Material Instance",
          preferences:"Level中所有物件請務必使用MI",
          why:"",
          notes:""
        },
        {
          header:"Render After DOF",
          preferences:"Translucent \/ Masked Material請務必設定為On",
          why:"",
          notes:""
        },
        {
          header:"Cast Ray Traced Shadows",
          preferences:"Disabled",
          why:"",
          notes:""
        },
        {
          header:"Used with Static Lighting",
          preferences:"若為Translucent，則Disabled",
          why:"",
          notes:""
        },
      ],
  },
  {
    title: "Animations",
    content: [
        {
          header:"Tick",
          preferences:"盡量少用Tick",
          why:"等同於每一幀都在更新，會很消耗效能",
          notes:""
        },
        {
          header:"動態",
          preferences:"建議使用Sequence",
          why:"方便現場修改或整合觸發方式",
          notes:"Loop動態可考慮用Panner、WPO等Shader作法"
        },
        {
          header:"FPS",
          preferences:"30FPS",
          why:"配合LED的refresh rate（30FPS）",
          notes:"Sequencer、序列圖檔、fbx、abc等動態都請以30FPS製作"
        },
        {
          header:"ABC",
          preferences:"太耗效能了，請盡量少用",
          why:"",
          notes:"若是不需透視的遠處物件可考慮用序列圖檔做成flipbook"
        },
      ],
    }
]