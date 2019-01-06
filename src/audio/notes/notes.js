const sineTestNote = {
  "name": "440 hz",
  "params": {
    "fundamental": 440,
  },
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": {
        "values": [
          {
            "type": "exponential",
            "value": 1,
            "timeFrom": "start",
            "time": 0.03,
          },
          {
            "type": "linear",
            "value": 1,
            "timeFrom": "end",
            "time": 0.1,
          }
        ]
      },
      "connections": [
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
  ]
};

export default sineTestNote;
