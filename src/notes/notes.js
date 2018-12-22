const sineTestNote = {
  "name": "440 hz",
  "params": {
    "fundamental": 440,
  },
  "graph": [
    {
      "name": "Oscillator Gain",
      "type": "gain",
      "properties": {
        "value": 0.25
      },
      "connections": [
        {
          "name": "Sine",
          "type": "oscillator",
          "properties": {
            "type": "sine",
            "multiple": 1
          }
        }
      ]
    }
  ]
}

export default sineTestNote;
