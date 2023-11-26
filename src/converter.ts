import { readFileSync } from 'node:fs'
import yaml from 'yaml'
import * as robot from 'robotjs'
import { findImage, screenCaptureToFile } from '../src/capture';
import Jimp from 'jimp';
import { join } from 'node:path'


interface Move {
  type: "move";
  pos: {
    x: number;
    y: number;
  }
}

interface ClickPos {
  type: "click";
  pos?: {
    x: number;
    y: number;
  }
}

interface ClickImg {
  type: "click";
  img: string;
}

type Click = ClickPos | ClickImg;

interface Input {
  type: "input";
  text: string;
}

interface Wait {
  type: "wait";
  time: number;
}

interface Type {
  type: "type";
  text: string;
}

type Step = Move | Click | Input | Wait | Type;

const keyTop = [
  "backspace", "delete", "enter", "tab", "escape", "up", "down", "right", "left", "home", "end", "pageup", "pagedown",
  "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12",
  "command", "alt", "control", "shift", "right_shift", "space", "printscreen", "insert",
  "audio_mute", "audio_vol_down", "audio_vol_up", "audio_play", "audio_stop", "audio_pause", "audio_prev", "audio_next", "audio_rewind", "audio_forward", "audio_repeat", "audio_random",
  "numpad_0", "numpad_1", "numpad_2", "numpad_3", "numpad_4", "numpad_5", "numpad_6", "numpad_7", "numpad_8", "numpad_9",
  "lights_mon_up", "lights_mon_down", "lights_kbd_toggle", "lights_kbd_up", "lights_kbd_down"
]

const parseStep = (path: string) => {
  const yamlFile = readFileSync(path, "utf-8");
  const steps = yaml.parse(yamlFile);
  return steps
}

const executeStep = async (step: Step) => {
  switch (step.type) {
    case "move":
      robot.moveMouse(step.pos.x, step.pos.y);
      break;
    case "click":
      if ("img" in step) {
        const img = await Jimp.read(join(__dirname, "test2.png"))
        console.log("here");
        const templ = await screenCaptureToFile(robot.screen.capture());
        const points = await findImage(img, templ)
        const [p1, p2] = points[0]
        robot.moveMouse((p1.x + p2.x) / 2, (p1.y + p2.y) / 2)

      } else if ("pos" in step) {
        robot.moveMouse(step.pos!.x, step.pos!.y);
        robot.mouseClick();
      } else {
        robot.mouseClick();
      }
      break;
    case "input":
      if (!keyTop.includes(step.text)) {
        new Error("unknown key");
        break
      }
      robot.keyTap(step.text);
      break;
    case "wait":
      await new Promise((r) => { setTimeout(() => { r }, Math.max(0, step.time)) });
      return;
    case "type":
      robot.typeString(step.text);
      break;
    default:
      throw new Error("unknown type");
  }
}
