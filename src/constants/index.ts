import { IFormatDateTime, IFormatSunriseSunsetTime } from "@/types";

export const cities: string[] = [
  "Aghavnadzor",
  "Aghavnatun",
  "Aghveran",
  "Akhnidzor",
  "Aknalich",
  "Akhaltsikhe",
  "Akhuryan",
  "Akunk",
  "Alapars",
  "Alaverdi",
  "Aragats",
  "Aragatsavan",
  "Arazap",
  "Archis",
  "Areni",
  "Arevabuyr",
  "Arevashat",
  "Argavand",
  "Argel",
  "Arinj",
  "Arshaluys",
  "Artamet",
  "Artsvaberd",
  "Artik",
  "Aruj",
  "Ashtarak",
  "Ashnak",
  "Azatan",
  "Azatamut",
  "Azatavan",
  "Bagaran",
  "Baghramyan",
  "Bagratashen",
  "Bagrevand",
  "Balahovit",
  "Berd",
  "Byurakan",
  "Byuravan",
  "Byureghavan",
  "Chambarak",
  "Charektar",
  "Dashtavan",
  "Dastakert",
  "Ddmashen",
  "Dilijan",
  "Ditavan",
  "Dzoragyugh",
  "Dzorakap",
  "Dzorashen",
  "Eghvard",
  "Eghegnadzor",
  "Eghegis",
  "Ejmiatsin",
  "Fioletovo",
  "Garni",
  "Getap",
  "Gexarr",
  "Ghazanchi",
  "Ghukasavan",
  "Gogaran",
  "Goghovit",
  "Goravan",
  "Goris",
  "Gorovit",
  "Gosh",
  "Gyulagarak",
  "Haghartsin",
  "Hampiravan",
  "Hatsavan",
  "Hayanist",
  "Haykavan",
  "Hayravank",
  "Hnaberd",
  "Hoktember",
  "Horom",
  "Hyeankyan",
  "Ijevan",
  "Jajur",
  "Janfida",
  "Jermuk",
  "Jrashen",
  "Kachachkut",
  "Kajaran",
  "Kamaris",
  "Kamo",
  "Karbi",
  "Karchaghbyur",
  "Karin",
  "Kasakh",
  "Katnarat",
  "Kedashen",
  "Khachik",
  "Khashtarak",
  "Khndzorut",
  "Khorkhor",
  "Kotayk",
  "Kotayk",
  "Lanjaghbyur",
  "Lernapat",
  "Marmarashen",
  "Martakert",
  "Masis",
  "Martuni",
  "Meghri",
  "Meghradzor",
  "Meghrashat",
  "Metsamor",
  "Noyemberyan",
  "Nor Hachn",
  "Noratus",
  "Saravan",
  "Sarigyugh",
  "Sisian",
  "Shamlugh",
  "Sotk",
  "Spitak",
  "Talin",
  "Taronik",
  "Tashir",
  "Tatev",
  "Tegh",
  "Tumanyan",
  "Tsovagyugh",
  "Tsaghkadzor",
  "Vardenis",
  "Vayk",
  "Vayots Dzor",
  "Voskevaz",
  "Yeghegnadzor",
  "Yeghegnut",
  "Yeghvard",
  "Yeranos",
  "Yeraskh",
  "Zvartnots",
];

export const biggestCities: string[] = [
  "Yerevan",
  "Gyumri",
  "Vanadzor",
  "Vagharshapat",
  "Hrazdan",
  "Abovyan",
  "Kapan",
  "Ararat",
  "Armavir",
  "Stepanavan",
  "Gavar",
  "Artashat",
];

export const formatDateTime = (dt_txt: string): IFormatDateTime => {
  const date = new Date(dt_txt);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return { dayOfWeek, time };
};

export const formatSunriseSunsetTime = (timestamp: number): IFormatSunriseSunsetTime => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const sunDayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  const sunTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return { sunDayOfWeek, sunTime };
};
