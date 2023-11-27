# EasyAuto

_One yaml, and everything done!
Just leave repeated work to the computer._

## 🚀 Features

- Easy config, just a few line and then everything done!
- Image search, powered by opencv
- Automation, use it to simplify your repeated work.

## 🦄 Usage
npm
```
npm install
//create a yaml
npm run start
```

pnpm
```
pnpm install
//create a yaml
pnpm run start
```

## Config
Config.yaml contains all the step you want to execute.

A step seem like this:
```yaml
- type: "click"
  img: "foo.png"

- type: "move"
  pos:
    x: 0.0
    y: 0.0

- type: "click"
  pos:
    x: 200
    y: 200

- type: "key"
  text: "<Keyboard Key>"

- type: "type"
  text: "good"

- type: "wait"
  time: 5

```

## Keyboard Key
| Key               | Description                             | Notes              |
|-----------------------|-----------------------------------------|--------------------|
| **backspace**         |                                         |                    |
| **delete**            |                                         |                    |
| **enter**             |                                         |                    |
| **tab**               |                                         |                    |
| **escape**            |                                         |                    |
| **up**                | Up arrow key                            |                    |
| **down**              | Down arrow key                          |                    |
| **right**             | Right arrow key                         |                    |
| **left**              | Left arrow key                          |                    |
| **home**              |                                         |                    |
| **end**               |                                         |                    |
| **pageup**            |                                         |                    |
| **pagedown**          |                                         |                    |
| **f1**                |                                         |                    |
| **f2**                |                                         |                    |
| **f3**                |                                         |                    |
| **f4**                |                                         |                    |
| **f5**                |                                         |                    |
| **f6**                |                                         |                    |
| **f7**                |                                         |                    |
| **f8**                |                                         |                    |
| **f9**                |                                         |                    |
| **f10**               |                                         |                    |
| **f11**               |                                         |                    |
| **f12**               |                                         |                    |
| **command**           |                                         |                    |
| **alt**               |                                         |                    |
| **control**           |                                         |                    |
| **shift**             |                                         |                    |
| **right_shift**       |                                         |                    |
| **space**             |                                         |                    |
| **printscreen**       |                                         | No Mac support     |
| **insert**            |                                         | No Mac support     |
| **audio_mute**        | Mute the volume                         |                    |
| **audio_vol_down**    | Lower the volume                        |                    |
| **audio_vol_up**      | Increase the volume                     |                    |
| **audio_play**        | Play                                    |                    |
| **audio_stop**        | Stop                                    |                    |
| **audio_pause**       | Pause                                   |                    |
| **audio_prev**        | Previous Track                          |                    |
| **audio_next**        | Next Track                              |                    |
| **audio_rewind**      |                                         | Linux only         |
| **audio_forward**     |                                         | Linux only         |
| **audio_repeat**      |                                         | Linux only         |
| **audio_random**      |                                         | Linux only         |
| **numpad_0**          |                                         | No Linux support   |
| **numpad_1**          |                                         | No Linux support   |
| **numpad_2**          |                                         | No Linux support   |
| **numpad_3**          |                                         | No Linux support   |
| **numpad_4**          |                                         | No Linux support   |
| **numpad_5**          |                                         | No Linux support   |
| **numpad_6**          |                                         | No Linux support   |
| **numpad_7**          |                                         | No Linux support   |
| **numpad_8**          |                                         | No Linux support   |
| **numpad_9**          |                                         | No Linux support   |
| **lights_mon_up**     | Turn up monitor brightness              | No Windows support |
| **lights_mon_down**   | Turn down monitor brightness            | No Windows support |
| **lights_kbd_toggle** | Toggle keyboard backlight on/off        | No Windows support |
| **lights_kbd_up**     | Turn up keyboard backlight brightness   | No Windows support |
| **lights_kbd_down**   | Turn down keyboard backlight brightness | No Windows support |


## License

[MIT](./LICENSE) License © 2023-PRESENT [Muffeter](https://github.com/Muffeter)