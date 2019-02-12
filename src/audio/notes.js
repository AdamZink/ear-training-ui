const DEFAULT_PARAMS = [
  {
    "name": "fundamental",
    "default": 440
  },
  {
    "name": "duration",
    "default": 0.25
  },
];

const ENVELOPE_PROPERTIES = {
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
};

const KEYBOARD_ENVELOPE_PROPERTIES = {
  "values": [
    {
      "type": "exponential",
      "value": 1,
      "timeFrom": "start",
      "time": 0.02,
    },
    {
      "type": "exponential",
      "value": 0.0001,
      "timeFrom": "start",
      "time": 2,
    }
  ]
};

export const keyboardNote = {
  "name": "Keyboard",
  "params": DEFAULT_PARAMS,
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": KEYBOARD_ENVELOPE_PROPERTIES,
      "connections": [
        {
          "name": "Oscillator",
          "type": "oscillator",
          "properties": {
            "type": "sine",
            "multiple": 1
          }
        }
      ]
    }
  ]
};

export const sineTestNote = {
  "name": "Sine demo",
  "params": DEFAULT_PARAMS,
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": ENVELOPE_PROPERTIES,
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
};

export const squareTestNote = {
  "name": "Square demo",
  "params": DEFAULT_PARAMS,
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": ENVELOPE_PROPERTIES,
      "connections": [
        {
          "name": "Square",
          "type": "oscillator",
          "properties": {
            "type": "square",
            "multiple": 1
          }
        }
      ]
    }
  ]
};

export const sawtoothTestNote = {
  "name": "Sawtooth demo",
  "params": DEFAULT_PARAMS,
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": ENVELOPE_PROPERTIES,
      "connections": [
        {
          "name": "Sawtooth",
          "type": "oscillator",
          "properties": {
            "type": "sawtooth",
            "multiple": 1
          }
        }
      ]
    }
  ]
};

export const triangleTestNote = {
  "name": "Triangle demo",
  "params": DEFAULT_PARAMS,
  "graph": [
    {
      "name": "Envelope",
      "type": "gain",
      "properties": ENVELOPE_PROPERTIES,
      "connections": [
        {
          "name": "Triangle",
          "type": "oscillator",
          "properties": {
            "type": "triangle",
            "multiple": 1
          }
        }
      ]
    }
  ]
};
