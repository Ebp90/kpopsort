dataSetVersion = "2022-01-13";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to choose the groups you want to appear",
    checked: false,
    sub: [
      { name: "Aespa", key: "Aespa" },
      { name: "ALICE", key: "ALICE" },
      { name: "AOA", key: "AOA" },
      { name: "Apink", key: "Apink" },
      { name: "Billlie", key: "Billlie" },
      { name: "Brave Girls", key: "Brave Girls" },
      { name: "Cherry Bullet", key: "Cherry Bullet" },
      //{ name: "CLASS:y", key: "CLASS:y" },
      { name: "CSR", key: "CSR" },
      { name: "Dreamcatcher", key: "Dreamcatcher" },
      { name: "DreamNote", key: "DreamNote" },
      { name: "EVERGLOW", key: "EVERGLOW" },
      { name: "fromis_9", key: "fromis_9" },
      { name: "GFRIEND", key: "GFRIEND" },
      { name: "H1-KEY", key: "H1-KEY" },
      { name: "ITZY", key: "ITZY" },
      { name: "IVE", key: "IVE" },
      { name: "IZ*ONE", key: "IZ*ONE" },
      { name: "Kep1er", key: "Kep1er" },
      { name: "Lapillus", key: "Lapillus" },
      { name: "LE SSERAFIM", key: "LE SSERAFIM" },
      { name: "LIGHTSUM", key: "LIGHTSUM" },
      { name: "LOONA", key: "LOONA" },
      { name: "Lovelyz", key: "Lovelyz" },
      { name: "MAMAMOO", key: "MAMAMOO" },
      { name: "MOMOLAND", key: "MOMOLAND" },
      { name: "NewJeans", key: "NewJeans" },
      { name: "NiziU", key: "NiziU" },
      { name: "NMIXX", key: "NMIXX" },
      { name: "OH MY GIRL", key: "OH MY GIRL" },
      { name: "PIXY", key: "PIXY" },
      { name: "Red Velvet", key: "Red Velvet" },
      { name: "Rocket Punch", key: "Rocket Punch" },
      { name: "STAYC", key: "STAYC" },
      { name: "TRI.BE", key: "TRI.BE" },
      { name: "TWICE", key: "TWICE" },
      { name: "VIVIZ", key: "VIVIZ" },
      { name: "Weeekly", key: "Weeekly" },
      { name: "Weki Meki", key: "Weki Meki" },
      { name: "WJSN", key: "WJSN" },
      { name: "G-I-DLE", key: "G-I-DLE" },
      { name: "Woo!Ah!", key: "Woo!Ah!" },
      { name: "SNSD", key: "SNSD" },
      { name: "Soloist", key: "Soloist" },
    ]
  },
  {
    name: "Filter by Generations",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "Stage 2", key: "st2" },
      { name: "Stage 3", key: "st3" },
      { name: "Stage 4", key: "st4" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
{
    name: "Karina",
    img: "Karina_aespa.jpg",
    opts: {
    series: ["aespa"],
    stage: ["st4"]
    }
  },
{
    name: "Winter",
    img: "Winter_aespa.jpg",
    opts: {
    series: ["aespa"],
    stage: ["st4"]
    }
  },
{
    name: "Ningning",
    img: "Ningning_aespa.jpg",
    opts: {
    series: ["aespa"],
    stage: ["st4"]
    }
  },
{
    name: "Giselle",
    img: "Giselle_aespa.jpg",
    opts: {
    series: ["aespa"],
    stage: ["st4"]
    }
  },
{
    name: "Sohee",
    img: "Sohee_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Do-A",
    img: "Do_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Yukyung",
    img: "Yukyung_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Yeonje",
    img: "Yeonje_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Karin",
    img: "Karin_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "EJ",
    img: "EJ_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Chaejeong",
    img: "Chaejeong_ALICE.jpg",
    opts: {
    series: ["ALICE"],
    stage: ["st3"]
    }
  },
{
    name: "Seolhyun",
    img: "Seolhyun_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Jimin",
    img: "Jimin_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Hyejeong",
    img: "Hyejeong_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Yuna",
    img: "Yuna_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Chanmi",
    img: "Chanmi_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Youkyung",
    img: "Youkyung_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Mina",
    img: "Mina_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "ChoA",
    img: "ChoA_AOA.jpg",
    opts: {
    series: ["AOA"],
    stage: ["st3"]
    }
  },
{
    name: "Chorong",
    img: "Chorong_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Hayoung",
    img: "Hayoung_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Eunji",
    img: "Eunji_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Bomi",
    img: "Bomi_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Namjoo",
    img: "Namjoo_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Yookyung",
    img: "Yookyung_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Naeun",
    img: "Naeun_Apink.jpg",
    opts: {
    series: ["Apink"],
    stage: ["st3"]
    }
  },
{
    name: "Suhyeon",
    img: "Suhyeon_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Tsuki",
    img: "Tsuki_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Haram",
    img: "Haram_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Moon",
    img: "Moon_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Sheon",
    img: "Sheon_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Siyoon",
    img: "Siyoon_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Haruna",
    img: "Haruna_Billlie.jpg",
    opts: {
    series: ["Billlie"],
    stage: ["st4"]
    }
  },
{
    name: "Yuna",
    img: "Yuna_Brave-Girls.jpg",
    opts: {
    series: ["Brave-Girls"],
    stage: ["st2"]
    }
  },
{
    name: "Eunji",
    img: "Eunji_Brave-Girls.jpg",
    opts: {
    series: ["Brave-Girls"],
    stage: ["st2"]
    }
  },
{
    name: "Yujeong",
    img: "Yujeong_Brave-Girls.jpg",
    opts: {
    series: ["Brave-Girls"],
    stage: ["st2"]
    }
  },
{
    name: "Minyoung",
    img: "Minyoung_Brave-Girls.jpg",
    opts: {
    series: ["Brave-Girls"],
    stage: ["st2"]
    }
  },
{
    name: "Jiwon",
    img: "Jiwon_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Yuju",
    img: "Yuju_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Remi",
    img: "Remi_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "May",
    img: "May_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Haeyoon",
    img: "Haeyoon_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Bora",
    img: "Bora_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Chaerin",
    img: "Chaerin_Cherry-Bullet.jpg",
    opts: {
    series: ["Cherry-Bullet"],
    stage: ["st4"]
    }
  },
{
    name: "Seoyeon",
    img: "Seoyeon_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Sihyeon",
    img: "Sihyeon_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Yuna",
    img: "Yuna_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Yeham",
    img: "Yeham_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Geumhee",
    img: "Geumhee_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Duna",
    img: "Duna_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "Sua",
    img: "Sua_CSR.jpg",
    opts: {
    series: ["CSR"],
    stage: ["st4"]
    }
  },
{
    name: "JiU",
    img: "JiU_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Yoohyeon",
    img: "Yoohyeon_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Gahyeon",
    img: "Gahyeon_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "SuA",
    img: "SuA_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Siyeon",
    img: "Siyeon_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Handong",
    img: "Handong_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Dami",
    img: "Dami_Dreamcatcher.jpg",
    opts: {
    series: ["Dreamcatcher"],
    stage: ["st3"]
    }
  },
{
    name: "Youi",
    img: "Youi_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Miso",
    img: "Miso_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Eunjo",
    img: "Eunjo_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Sumin",
    img: "Sumin_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Boni",
    img: "Boni_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Lara",
    img: "Lara_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Habin",
    img: "Habin_DreamNote.jpg",
    opts: {
    series: ["DreamNote"],
    stage: ["st4"]
    }
  },
{
    name: "Yiren",
    img: "Yiren_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "Aisha",
    img: "Aisha_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "Sihyeon",
    img: "Sihyeon_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "Mia",
    img: "Mia_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "Onda",
    img: "Onda_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "E:U",
    img: "E_EVERGLOW.jpg",
    opts: {
    series: ["EVERGLOW"],
    stage: ["st4"]
    }
  },
{
    name: "Saerom",
    img: "Saerom_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Jisun",
    img: "Jisun_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Chaeyoung",
    img: "Chaeyoung_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Jiwon",
    img: "Jiwon_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Hayoung",
    img: "Hayoung_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Nagyung",
    img: "Nagyung_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Jiheon",
    img: "Jiheon_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Seoyeon",
    img: "Seoyeon_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Gyuri",
    img: "Gyuri_fromis-9.jpg",
    opts: {
    series: ["fromis-9"],
    stage: ["st4"]
    }
  },
{
    name: "Eunha",
    img: "Eunha_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND"],
    stage: ["st4"]
    }
  },
{
    name: "Umji",
    img: "Umji_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND"],
    stage: ["st3"]
    }
  },
{
    name: "SinB",
    img: "SinB_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND"],
    stage: ["st3"]
    }
  },
{
    name: "Yuju",
    img: "Yuju_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND", "Soloist"],
    stage: ["st3"]
    }
  },
{
    name: "Sowon",
    img: "Sowon_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND"],
    stage: ["st3"]
    }
  },
{
    name: "Yerin",
    img: "Yerin_GFRIEND.jpg",
    opts: {
    series: ["GFRIEND"],
    stage: ["st3"]
    }
  },
{
    name: "Yel",
    img: "Yel_H1-KEY.jpg",
    opts: {
    series: ["H1-KEY"],
    stage: ["st4"]
    }
  },
{
    name: "Riina",
    img: "Riina_H1-KEY.jpg",
    opts: {
    series: ["H1-KEY"],
    stage: ["st4"]
    }
  },
{
    name: "Seoi",
    img: "Seoi_H1-KEY.jpg",
    opts: {
    series: ["H1-KEY"],
    stage: ["st4"]
    }
  },
{
    name: "Hwiseo",
    img: "Hwiseo_H1-KEY.jpg",
    opts: {
    series: ["H1-KEY"],
    stage: ["st4"]
    }
  },
{
    name: "Sitala",
    img: "Sitala_H1-KEY.jpg",
    opts: {
    series: ["H1-KEY"],
    stage: ["st4"]
    }
  },
{
    name: "Yeji",
    img: "Yeji_ITZY.jpg",
    opts: {
    series: ["ITZY"],
    stage: ["st4"]
    }
  },
{
    name: "Ryujin",
    img: "Ryujin_ITZY.jpg",
    opts: {
    series: ["ITZY"],
    stage: ["st4"]
    }
  },
{
    name: "Yuna",
    img: "Yuna_ITZY.jpg",
    opts: {
    series: ["ITZY"],
    stage: ["st4"]
    }
  },
{
    name: "Chaeryeong",
    img: "Chaeryeong_ITZY.jpg",
    opts: {
    series: ["ITZY"],
    stage: ["st4"]
    }
  },
{
    name: "Lia",
    img: "Lia_ITZY.jpg",
    opts: {
    series: ["ITZY"],
    stage: ["st4"]
    }
  },
  {
      name: "Wonyoung",
      img: "Wonyoung_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Yujin",
      img: "Yujin_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Leeseo",
      img: "Leeseo_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Gaeul",
      img: "Gaeul_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Liz",
      img: "Liz_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Rei",
      img: "Rei_IVE.jpg",
      opts: {
      series: ["IVE"],
      stage: ["st4"]
      }
    },
  {
      name: "Sakura",
      img: "Sakura_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Chaewon",
      img: "Chaewon_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Minju",
      img: "Minju_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Eunbi",
      img: "Eunbi_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE", "Soloist"],
      stage: ["st4"]
      }
    },
  {
      name: "Chaeyeon",
      img: "Chaeyeon_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Yena",
      img: "Yena_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE", "Soloist"],
      stage: ["st4"]
      }
    },
  {
      name: "Hyewon",
      img: "Hyewon_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Yuri",
      img: "Yuri_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Nako",
      img: "Nako_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Hitomi",
      img: "Hitomi_IZ-ONE.jpg",
      opts: {
      series: ["IZ-ONE"],
      stage: ["st4"]
      }
    },
  {
      name: "Huening",
      img: "Huening_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Hikaru",
      img: "Hikaru_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Xiaoting",
      img: "Xiaoting_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Yujin",
      img: "Yujin_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Dayeon",
      img: "Dayeon_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Chaehyun",
      img: "Chaehyun_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Youngeun",
      img: "Youngeun_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Yeseo",
      img: "Yeseo_Kep1er.jpg",
      opts: {
      series: ["Kep1er"],
      stage: ["st4"]
      }
    },
  {
      name: "Chanty",
      img: "Chanty_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Bessie",
      img: "Bessie_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Yue",
      img: "Yue_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Shana",
      img: "Shana_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Haeun",
      img: "Haeun_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Seowon",
      img: "Seowon_Lapillus.jpg",
      opts: {
      series: ["Lapillus"],
      stage: ["st4"]
      }
    },
  {
      name: "Sakura",
      img: "Sakura_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Chaewon",
      img: "Chaewon_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Yunjin",
      img: "Huh_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Kazuha",
      img: "Kazuha_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Eunchae",
      img: "Eunchae_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Garam",
      img: "Garam_LE-SSERAFIM.jpg",
      opts: {
      series: ["LE-SSERAFIM"],
      stage: ["st4"]
      }
    },
  {
      name: "Sangah",
      img: "Sangah_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Nayoung",
      img: "Nayoung_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Hina",
      img: "Hina_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Chowon",
      img: "Chowon_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Yujeong",
      img: "Yujeong_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Juhyeon",
      img: "Juhyeon_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Huiyeon",
      img: "Huiyeon_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "Jian",
      img: "Jian_LIGHTSUM.jpg",
      opts: {
      series: ["LIGHTSUM"],
      stage: ["st4"]
      }
    },
  {
      name: "HeeJin",
      img: "HeeJin_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Olivia Hye",
      img: "Olivia_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Yves",
      img: "Yves_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "JinSoul",
      img: "JinSoul_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "ViVi",
      img: "ViVi_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Hyunjin",
      img: "Hyunjin_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Kim Lip",
      img: "Kim_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "HaSeul",
      img: "HaSeul_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Yeojin",
      img: "Yeojin_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Choerry",
      img: "Choerry_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Gowon",
      img: "Go_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Chuu",
      img: "Chuu_LOONA.jpg",
      opts: {
      series: ["LOONA"],
      stage: ["st4"]
      }
    },
  {
      name: "Mijoo",
      img: "Mijoo_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Jisoo",
      img: "Jisoo_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Yein",
      img: "Yein_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Sujeong",
      img: "Sujeong_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Jiae",
      img: "Jiae_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Kei",
      img: "Kei_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Jin",
      img: "Jin_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Lee",
      img: "Lee_Lovelyz.jpg",
      opts: {
      series: ["Lovelyz"],
      stage: ["st3"]
      }
    },
  {
      name: "Hwasa",
      img: "Hwasa_MAMAMOO.jpg",
      opts: {
      series: ["MAMAMOO"],
      stage: ["st3"]
      }
    },
  {
      name: "Solar",
      img: "Solar_MAMAMOO.jpg",
      opts: {
      series: ["MAMAMOO"],
      stage: ["st3"]
      }
    },
  {
      name: "Moonbyul",
      img: "Moonbyul_MAMAMOO.jpg",
      opts: {
      series: ["MAMAMOO"],
      stage: ["st3"]
      }
    },
  {
      name: "Wheein",
      img: "Wheein_MAMAMOO.jpg",
      opts: {
      series: ["MAMAMOO"],
      stage: ["st3"]
      }
    },
  {
      name: "Nancy",
      img: "Nancy_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "JooE",
      img: "JooE_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "Ahin",
      img: "Ahin_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "Jane",
      img: "Jane_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "Hyebin",
      img: "Hyebin_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "Nayun",
      img: "Nayun_MOMOLAND.jpg",
      opts: {
      series: ["MOMOLAND"],
      stage: ["st3"]
      }
    },
  {
      name: "Haerin",
      img: "Haerin_NewJeans.jpg",
      opts: {
      series: ["NewJeans"],
      stage: ["st4"]
      }
    },
  {
      name: "Hanni",
      img: "Hanni_NewJeans.jpg",
      opts: {
      series: ["NewJeans"],
      stage: ["st4"]
      }
    },
  {
      name: "Minji",
      img: "Minji_NewJeans.jpg",
      opts: {
      series: ["NewJeans"],
      stage: ["st4"]
      }
    },
  {
      name: "Hyein",
      img: "Hyein_NewJeans.jpg",
      opts: {
      series: ["NewJeans"],
      stage: ["st4"]
      }
    },
  {
      name: "Danielle",
      img: "Danielle_NewJeans.jpg",
      opts: {
      series: ["NewJeans"],
      stage: ["st4"]
      }
    },
  {
      name: "Nina",
      img: "Nina_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Rima",
      img: "Rima_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Maya",
      img: "Maya_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Mayuka",
      img: "Mayuka_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Mako",
      img: "Mako_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Ayaka",
      img: "Ayaka_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Miihi",
      img: "Miihi_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Rio",
      img: "Rio_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Riku",
      img: "Riku_NiziU.jpg",
      opts: {
      series: ["NiziU"],
      stage: ["st4"]
      }
    },
  {
      name: "Lily",
      img: "Lily_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Sullyoon",
      img: "Sullyoon_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Haewon",
      img: "Haewon_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Kyujin",
      img: "Kyujin_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "BAE",
      img: "BAE_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Jiwoo",
      img: "Jiwoo_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Jinni",
      img: "Jinni_NMIXX.jpg",
      opts: {
      series: ["NMIXX"],
      stage: ["st4"]
      }
    },
  {
      name: "Arin",
      img: "Arin_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "YooA",
      img: "YooA_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "Yubin",
      img: "Yubin_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "Mimi",
      img: "Mimi_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "Hyojung",
      img: "Hyojung_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "Seunghee",
      img: "Seunghee_OH-MY-GIRL.jpg",
      opts: {
      series: ["OH-MY-GIRL"],
      stage: ["st3"]
      }
    },
  {
      name: "Lola",
      img: "Lola_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Sua",
      img: "Sua_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Dia",
      img: "Dia_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Dajeong",
      img: "Dajeong_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Rinji",
      img: "Rinji_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Satbyeol",
      img: "Satbyeol_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Ella",
      img: "Ella_PIXY.jpg",
      opts: {
      series: ["PIXY"],
      stage: ["st4"]
      }
    },
  {
      name: "Irene",
      img: "Irene_Red-Velvet.jpg",
      opts: {
      series: ["Red-Velvet"],
      stage: ["st3"]
      }
    },
  {
      name: "Seulgi",
      img: "Seulgi_Red-Velvet.jpg",
      opts: {
      series: ["Red-Velvet"],
      stage: ["st3"]
      }
    },
  {
      name: "Wendy",
      img: "Wendy_Red-Velvet.jpg",
      opts: {
      series: ["Red-Velvet"],
      stage: ["st3"]
      }
    },
  {
      name: "Joy",
      img: "Joy_Red-Velvet.jpg",
      opts: {
      series: ["Red-Velvet"],
      stage: ["st3"]
      }
    },
  {
      name: "Yeri",
      img: "Yeri_Red-Velvet.jpg",
      opts: {
      series: ["Red-Velvet"],
      stage: ["st3"]
      }
    },
  {
      name: "Yeonhee",
      img: "Yeonhee_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Juri",
      img: "Juri_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Dahyun",
      img: "Dahyun_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Yunkyoung",
      img: "Yunkyoung_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Suyun",
      img: "Suyun_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Sohee",
      img: "Sohee_Rocket-Punch.jpg",
      opts: {
      series: ["Rocket-Punch"],
      stage: ["st4"]
      }
    },
  {
      name: "Isa",
      img: "Isa_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "Sumin",
      img: "Sumin_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "Sieun",
      img: "Sieun_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "Yoon",
      img: "Yoon_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "J",
      img: "J_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "Seeun",
      img: "Seeun_STAYC.jpg",
      opts: {
      series: ["STAYC"],
      stage: ["st4"]
      }
    },
  {
      name: "Jia",
      img: "Jia_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "HyunBin",
      img: "HyunBin_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "Kelly",
      img: "Kelly_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "Mire",
      img: "Mire_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "JinHa",
      img: "JinHa_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "SoEun",
      img: "SoEun_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "SongSun",
      img: "SongSun_TRI-BE.jpg",
      opts: {
      series: ["TRI-BE"],
      stage: ["st4"]
      }
    },
  {
      name: "Sana",
      img: "Sana_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Momo",
      img: "Momo_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Dahyun",
      img: "Dahyun_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Tzuyu",
      img: "Tzuyu_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Nayeon",
      img: "Nayeon_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Mina",
      img: "Mina_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Jihyo",
      img: "Jihyo_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Chaeyoung",
      img: "Chaeyoung_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
  {
      name: "Jeongyeon",
      img: "Jeongyeon_TWICE.jpg",
      opts: {
      series: ["TWICE"],
      stage: ["st3"]
      }
    },
   {
       name: "Zoa",
       img: "Zoa_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Jihan",
       img: "Jihan_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Soojin",
       img: "Soojin_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Jaehee",
       img: "Jaehee_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Monday",
       img: "Monday_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Soeun",
       img: "Soeun_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Jiyoon",
       img: "Jiyoon_Weeekly.jpg",
       opts: {
       series: ["Weeekly"],
       stage: ["st4"]
       }
     },
   {
       name: "Doyeon",
       img: "Doyeon_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Elly",
       img: "Elly_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Yoojung",
       img: "Yoojung_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Sei",
       img: "Sei_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["ste"]
       }
     },
   {
       name: "Rina",
       img: "Rina_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Lua",
       img: "Lua_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Lucy",
       img: "Lucy_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Suyeon",
       img: "Suyeon_Weki-Meki.jpg",
       opts: {
       series: ["Weki-Meki"],
       stage: ["st3"]
       }
     },
   {
       name: "Cheng Xiao",
       img: "Cheng_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Bona",
       img: "Bona_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Luda",
       img: "Luda_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Eunseo",
       img: "Eunseo_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Yeonjung",
       img: "Yeonjung_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Dawon",
       img: "Dawon_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Yeoreum",
       img: "Yeoreum_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Seola",
       img: "Seola_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Exy",
       img: "Exy_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Soobin",
       img: "Soobin_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Mei",
       img: "Mei_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Xuan Yi",
       img: "Xuan_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
   {
       name: "Dayoung",
       img: "Dayoung_WJSN.jpg",
       opts: {
       series: ["WJSN"],
       stage: ["st3"]
       }
     },
     {
         name: "Yuqi",
         img: "Yuqi_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Soyeon",
         img: "Soyeon_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Miyeon",
         img: "Miyeon_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Shuhua",
         img: "Shuhua_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Minnie",
         img: "Minnie_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Soojin",
         img: "Soojin_G-I-DLE.jpg",
         opts: {
         series: ["G-I-DLE"],
         stage: ["st4"]
         }
       },
     {
         name: "Taeyeon",
         img: "Taeyeon_Girls-Generation.jpg",
         opts: {
         series: ["SNSD", "Soloist"],
         stage: ["st2"]
         }
       },
     {
         name: "Yoona",
         img: "Yoona_Girls-Generation.jpg",
         opts: {
         series: ["SNSD"],
         stage: ["st2"]
         }
       },
     {
         name: "Tiffany",
         img: "Tiffany_Girls-Generation.jpg",
         opts: {
         series: ["SNSD"],
         stage: ["st2"]
         }
       },
     {
         name: "Hyoyeon",
         img: "Hyoyeon_Girls-Generation.jpg",
         opts: {
         series: ["SNSD", "Soloist"],
         stage: ["st2"]
         }
       },
     {
         name: "Sunny",
         img: "Sunny_Girls-Generation.jpg",
         opts: {
         series: ["SNSD"],
         stage: ["st2"]
         }
       },
     {
         name: "Sooyoung",
         img: "Sooyoung_Girls-Generation.jpg",
         opts: {
         series: ["SNSD"],
         stage: ["st2"]
         }
       },
   {
           name: "Yuri",
           img: "Yuri_SNSD.jpg",
           opts: {
           series: ["SNSD"],
           stage: ["st2"]
           }
         },

 {
         name: "Sunmi",
         img: "Sunmi.jpg",
         opts: {
         series: ["Soloist"],
         stage: ["st2"]
         }
       },
        {
                name: "Nana",
                img: "Nana_Wooah.jpg",
                opts: {
                series: ["Woo!Ah!"],
                stage: ["st4"]
                }
              },
 {
                name: "Sora",
                img: "Sora_Wooah.jpg",
                opts: {
                series: ["Woo!Ah!"],
                stage: ["st4"]
                }
              },
               {
                              name: "Wooyeon",
                              img: "Wooyeon_Wooah.jpg",
                              opts: {
                              series: ["Woo!Ah!"],
                              stage: ["st4"]
                              }
                            },
                                    {
                                            name: "Lucy",
                                            img: "Lucy_Wooah.jpg",
                                            opts: {
                                            series: ["Woo!Ah!"],
                                            stage: ["st4"]
                                            }
                                          },
                                                  {
                                                          name: "Minseo",
                                                          img: "Minseo_Wooah.jpg",
                                                          opts: {
                                                          series: ["Woo!Ah!"],
                                                          stage: ["st4"]
                                                          }
                                                        },
{
         name: "BIBI",
         img: "Bibi.jpg",
         opts: {
         series: ["Soloist"],
         stage: ["st4"]
         }
       },
{
         name: "IU",
         img: "IU.jpg",
         opts: {
         series: ["Soloist"],
         stage: ["st2"]
         }
       },
{
         name: "Chungha",
         img: "Chungha.jpg",
         opts: {
         series: ["Soloist"],
         stage: ["st3"]
         }
       },
];
