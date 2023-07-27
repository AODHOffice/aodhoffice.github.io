var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0981970741523437,
        "pitch": 0.10766744618358182,
        "fov": 1.5236129272033658
      },
      "linkHotspots": [
        {
          "yaw": 2.5381204836991333,
          "pitch": 0.19092499899196724,
          "rotation": 0,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3817552910981341,
          "pitch": 0.20886528201858745,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": 3.120513011965402,
          "pitch": 0.20862486384483248,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6835433762395233,
          "pitch": 0.23912151036613594,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": -0.08993784346050049,
          "pitch": 0.24409395365168685,
          "rotation": 0,
          "target": "3-dressing-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dressing-room",
      "name": "Dressing Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Test VT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
