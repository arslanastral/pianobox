/**
 *  THIS IS AN EDITED VERSION. Original can be found at:
 * https://github.com/nbrosowsky/tonejs-instruments
 */
import * as Tone from "tone";

const SampleLibrary = {
  minify: false,
  baseUrl:
    "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/",
  list: [
    "bass-electric",
    "bassoon",
    "cello",
    "clarinet",
    "contrabass",
    "casio",
    "flute",
    "female-voice-aa",
    "female-voice-oo",
    "french-horn",
    "guitar-acoustic",
    "guitar-electric",
    "guitar-nylon",
    "harmonium",
    "harp",
    "organ",
    "piano",
    "saxophone",
    "trombone",
    "trumpet",
    "tuba",
    "violin",
    "xylophone",
  ],
  onload: null,

  load: function (arg) {
    var t, rt, i;
    arg ? (t = arg) : (t = {});
    t.instruments = t.instruments || this.list;
    t.baseUrl = t.baseUrl || this.baseUrl;
    t.onload = t.onload || this.onload;

    rt = {};

    // if an array of instruments is passed...
    if (Array.isArray(t.instruments)) {
      for (i = 0; i <= t.instruments.length - 1; i++) {
        var newT = this[t.instruments[i]];
        //Minimize the number of samples to load
        if (this.minify === true || t.minify === true) {
          var minBy = 1;
          if (Object.keys(newT).length >= 17) {
            minBy = 2;
          }
          if (Object.keys(newT).length >= 33) {
            minBy = 4;
          }
          if (Object.keys(newT).length >= 49) {
            minBy = 6;
          }

          var filtered = Object.keys(newT).filter(function (_, i) {
            return i % minBy != 0;
          });
          filtered.forEach(function (f) {
            delete newT[f];
          });
        }

        rt[t.instruments[i]] = new Tone.Sampler(newT, {
          baseUrl: t.baseUrl + t.instruments[i] + "/",
          onload: t.onload,
        });
      }

      return rt;

      // if a single instrument name is passed...
    } else {
      newT = this[t.instruments];

      //Minimize the number of samples to load
      if (this.minify === true || t.minify === true) {
        minBy = 1;
        if (Object.keys(newT).length >= 17) {
          minBy = 2;
        }
        if (Object.keys(newT).length >= 33) {
          minBy = 4;
        }
        if (Object.keys(newT).length >= 49) {
          minBy = 6;
        }

        filtered = Object.keys(newT).filter(function (_, i) {
          return i % minBy != 0;
        });
        filtered.forEach(function (f) {
          delete newT[f];
        });
      }

      var s = new Tone.Sampler(newT, {
        baseUrl: t.baseUrl + t.instruments + "/",
        onload: t.onload,
      });

      return s;
    }
  },

  "bass-electric": {
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
    "A#5": "As5.mp3",
    "C#2": "Cs2.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    "C#5": "Cs5.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    E5: "E5.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    G5: "G5.mp3",
  },

  bassoon: {
    A3: "A3.mp3",
    C2: "C2.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    E3: "E3.mp3",
    G1: "G1.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    A1: "A1.mp3",
    A2: "A2.mp3",
  },

  cello: {
    E3: "E3.mp3",
    E4: "E4.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    "G#4": "Gs4.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
    B2: "B2.mp3",
    B3: "B3.mp3",
    B4: "B4.mp3",
    C2: "C2.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D4: "D4.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    E2: "E2.mp3",
  },

  clarinet: {
    D3: "D3.mp3",
    D4: "D4.mp3",
    D5: "D5.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    "F#5": "Fs5.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
    D2: "D2.mp3",
  },

  contrabass: {
    C1: "C1.mp3",
    "C#2": "Cs2.mp3",
    D1: "D1.mp3",
    E1: "E1.mp3",
    E2: "E2.mp3",
    "F#0": "Fs0.mp3",
    "F#1": "Fs1.mp3",
    G0: "G0.mp3",
    "G#1": "Gs1.mp3",
    "G#2": "Gs2.mp3",
    A1: "A1.mp3",
    "A#0": "As0.mp3",
    B2: "B2.mp3",
  },
  casio: {
    A1: "A1.mp3",
    A2: "A2.mp3",
    "A#1": "As1.mp3",
    B1: "B1.mp3",
    C2: "C2.mp3",
    "C#2": "Cs2.mp3",
    D2: "D2.mp3",
    "D#2": "Ds2.mp3",
    E2: "E2.mp3",
    F2: "F2.mp3",
    "F#2": "Fs2.mp3",
    G2: "G2.mp3",
    "G#1": "Gs1.mp3",
  },

  flute: {
    A5: "A5.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    E5: "E5.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
  },
  "female-voice-aa": {
    A5: "aa_A5.mp3",
    "D#4": "aa_Db4.mp3",
    "D#5": "aa_Db5.mp3",
    "E#4": "aa_Eb4.mp3",
    F5: "aa_F5.mp3",
    C6: "aa_C6.mp3",
    A3: "aa_A3.mp3",
    A4: "aa_A4.mp3",
  },
  "female-voice-oo": {
    A5: "oo_A5.mp3",
    "D#4": "oo_Db4.mp3",
    "D#5": "oo_Db5.mp3",
    C6: "oo_C6.mp3",
    A3: "oo_A3.mp3",
    A4: "oo_A4.mp3",
  },
  "french-horn": {
    D2: "D2.mp3",
    D4: "D4.mp3",
    "D#1": "Ds1.mp3",
    F2: "F2.mp3",
    F4: "F4.mp3",
    G1: "G1.mp3",
    A0: "A0.mp3",
    A2: "A2.mp3",
    C1: "C1.mp3",
    C3: "C3.mp3",
  },

  "guitar-acoustic": {
    F3: "F3.mp3",
    "F#1": "Fs1.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    G1: "G1.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    "G#1": "Gs1.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    A1: "A1.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    "A#1": "As1.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    B1: "B1.mp3",
    B2: "B2.mp3",
    B3: "B3.mp3",
    C2: "C2.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    "C#2": "Cs2.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    D1: "D1.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D4: "D4.mp3",
    "D#1": "Ds1.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    E1: "E1.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    F1: "F1.mp3",
    F2: "F2.mp3",
  },

  "guitar-electric": {
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    "D#5": "Ds5.mp3",
    E2: "E2.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "F#5": "Fs5.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    A5: "A5.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
    "C#2": "Cs2.mp3",
  },

  "guitar-nylon": {
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "F#5": "Fs5.mp3",
    G3: "G3.mp3",
    G5: "G3.mp3",
    "G#2": "Gs2.mp3",
    "G#4": "Gs4.mp3",
    "G#5": "Gs5.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    A5: "A5.mp3",
    "A#5": "As5.mp3",
    B1: "B1.mp3",
    B2: "B2.mp3",
    B3: "B3.mp3",
    B4: "B4.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    "C#5": "Cs5.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D5: "D5.mp3",
    "D#4": "Ds4.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    E5: "E5.mp3",
  },

  harmonium: {
    C2: "C2.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    "C#2": "Cs2.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    "C#5": "Cs5.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D4: "D4.mp3",
    D5: "D5.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    "G#4": "Gs4.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
  },

  harp: {
    C5: "C5.mp3",
    D2: "D2.mp3",
    D4: "D4.mp3",
    D6: "D6.mp3",
    D7: "D7.mp3",
    E1: "E1.mp3",
    E3: "E3.mp3",
    E5: "E5.mp3",
    F2: "F2.mp3",
    F4: "F4.mp3",
    F6: "F6.mp3",
    F7: "F7.mp3",
    G1: "G1.mp3",
    G3: "G3.mp3",
    G5: "G5.mp3",
    A2: "A2.mp3",
    A4: "A4.mp3",
    A6: "A6.mp3",
    B1: "B1.mp3",
    B3: "B3.mp3",
    B5: "B5.mp3",
    B6: "B6.mp3",
    C3: "C3.mp3",
  },

  organ: {
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
    "D#1": "Ds1.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    "D#5": "Ds5.mp3",
    "F#1": "Fs1.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "F#5": "Fs5.mp3",
    A1: "A1.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    A5: "A5.mp3",
    C1: "C1.mp3",
    C2: "C2.mp3",
  },

  piano: {
    A0: "A0.mp3",
    A1: "A1.mp3",
    A2: "A2.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    A5: "A5.mp3",
    A6: "A6.mp3",
    "A#0": "As0.mp3",
    "A#1": "As1.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
    "A#5": "As5.mp3",
    "A#6": "As6.mp3",
    B0: "B0.mp3",
    B1: "B1.mp3",
    B2: "B2.mp3",
    B3: "B3.mp3",
    B4: "B4.mp3",
    B5: "B5.mp3",
    B6: "B6.mp3",
    C0: "C0.mp3",
    C1: "C1.mp3",
    C2: "C2.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
    C7: "C7.mp3",
    "C#0": "Cs0.mp3",
    "C#1": "Cs1.mp3",
    "C#2": "Cs2.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    "C#5": "Cs5.mp3",
    "C#6": "Cs6.mp3",
    D0: "D0.mp3",
    D1: "D1.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D4: "D4.mp3",
    D5: "D5.mp3",
    D6: "D6.mp3",
    "D#0": "Ds0.mp3",
    "D#1": "Ds1.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    "D#5": "Ds5.mp3",
    "D#6": "Ds6.mp3",
    E0: "E0.mp3",
    E1: "E1.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    E5: "E5.mp3",
    E6: "E6.mp3",
    F0: "F0.mp3",
    F1: "F1.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    F5: "F5.mp3",
    F6: "F6.mp3",
    "F#0": "Fs0.mp3",
    "F#1": "Fs1.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "F#5": "Fs5.mp3",
    "F#6": "Fs6.mp3",
    G0: "G0.mp3",
    G1: "G1.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    G5: "G5.mp3",
    G6: "G6.mp3",
    "G#0": "Gs0.mp3",
    "G#1": "Gs1.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    "G#4": "Gs4.mp3",
    "G#5": "Gs5.mp3",
    "G#6": "Gs6.mp3",
  },

  saxophone: {
    "D#4": "Ds4.mp3",
    E2: "E2.mp3",
    E3: "E3.mp3",
    E4: "E4.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    G2: "G2.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    "G#4": "Gs4.mp3",
    A3: "A3.mp3",
    A4: "A4.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    B2: "B2.mp3",
    B3: "B3.mp3",
    C3: "C3.mp3",
    C4: "C4.mp3",
    "C#2": "Cs2.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    D4: "D4.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
  },

  trombone: {
    "A#2": "As2.mp3",
    C2: "C2.mp3",
    C3: "C3.mp3",
    "C#1": "Cs1.mp3",
    "C#3": "Cs3.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    "D#1": "Ds1.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    F1: "F1.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    "G#1": "Gs1.mp3",
    "G#2": "Gs2.mp3",
    "A#0": "As0.mp3",
    "A#1": "As1.mp3",
  },

  trumpet: {
    C5: "C5.mp3",
    D4: "D4.mp3",
    "D#3": "Ds3.mp3",
    F2: "F2.mp3",
    F3: "F3.mp3",
    F4: "F4.mp3",
    G3: "G3.mp3",
    A2: "A2.mp3",
    A4: "A4.mp3",
    "A#3": "As3.mp3",
    C3: "C3.mp3",
  },

  tuba: {
    "A#1": "As1.mp3",
    "A#2": "As2.mp3",
    D2: "D2.mp3",
    D3: "D3.mp3",
    "D#1": "Ds1.mp3",
    F0: "F0.mp3",
    F1: "F1.mp3",
    F2: "F2.mp3",
    "A#0": "As0.mp3",
  },

  violin: {
    A3: "A3.mp3",
    A4: "A4.mp3",
    A5: "A5.mp3",
    A6: "A6.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
    C7: "C7.mp3",
    E4: "E4.mp3",
    E5: "E5.mp3",
    E6: "E6.mp3",
    G4: "G4.mp3",
    G5: "G5.mp3",
    G6: "G6.mp3",
  },

  xylophone: {
    C7: "C7.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
    G5: "G5.mp3",
    G6: "G6.mp3",
    C4: "C4.mp3",
    C5: "C5.mp3",
    C6: "C6.mp3",
  },

  tubular_bells: {
    21: "A0.mp3",
    22: "Bb0.mp3",
    23: "B0.mp3",
    24: "C1.mp3",
    25: "Db1.mp3",
    26: "D1.mp3",
    27: "Eb1.mp3",
    28: "E1.mp3",
    29: "F1.mp3",
    30: "Gb1.mp3",
    31: "G1.mp3",
    32: "Ab1.mp3",
    33: "A1.mp3",
    34: "Bb1.mp3",
    35: "B1.mp3",
    36: "C2.mp3",
    37: "Db2.mp3",
    38: "D2.mp3",
    39: "Eb2.mp3",
    40: "E2.mp3",
    41: "F2.mp3",
    42: "Gb2.mp3",
    43: "G2.mp3",
    44: "Ab2.mp3",
    45: "A2.mp3",
    46: "Bb2.mp3",
    47: "B2.mp3",
    48: "C3.mp3",
    49: "Db3.mp3",
    50: "D3.mp3",
    51: "Eb3.mp3",
    52: "E3.mp3",
    53: "F3.mp3",
    54: "Gb3.mp3",
    55: "G3.mp3",
    56: "Ab3.mp3",
    57: "A3.mp3",
    58: "Bb3.mp3",
    59: "B3.mp3",
    60: "C4.mp3",
    61: "Db4.mp3",
    62: "D4.mp3",
    63: "Eb4.mp3",
    64: "E4.mp3",
    65: "F4.mp3",
    66: "Gb4.mp3",
    67: "G4.mp3",
    68: "Ab4.mp3",
    69: "A4.mp3",
    70: "Bb4.mp3",
    71: "B4.mp3",
    72: "C5.mp3",
    73: "Db5.mp3",
    74: "D5.mp3",
    75: "Eb5.mp3",
    76: "E5.mp3",
    77: "F5.mp3",
    78: "Gb5.mp3",
    79: "G5.mp3",
    80: "Ab5.mp3",
    81: "A5.mp3",
    82: "Bb5.mp3",
    83: "B5.mp3",
    84: "C6.mp3",
    85: "Db6.mp3",
    86: "D6.mp3",
    87: "Eb6.mp3",
    88: "E6.mp3",
    89: "F6.mp3",
    90: "Gb6.mp3",
    91: "G6.mp3",
    92: "Ab6.mp3",
    93: "A6.mp3",
    94: "Bb6.mp3",
    95: "B6.mp3",
    96: "C7.mp3",
    97: "Db7.mp3",
    98: "D7.mp3",
    99: "Eb7.mp3",
    100: "E7.mp3",
    101: "F7.mp3",
    102: "Gb7.mp3",
    103: "G7.mp3",
    104: "Ab7.mp3",
    105: "A7.mp3",
    106: "Bb7.mp3",
    107: "B7.mp3",
    108: "C8.mp3",
  },
};

export default SampleLibrary;
