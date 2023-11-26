import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs'
import yaml from 'yaml'
import * as robot from 'robotjs'
import { findImage, screenCaptureToFile } from '../src/capture';
import Jimp from 'jimp';
import { join } from 'node:path'


// describe("converter", async () => {
  // it("should convert yaml to ts", async () => {
  //   expect(parseStep("./test/converter.yaml")).toEqual(`
  //     [
  //       {
  //         "pos": {
  //           "x": 0,
  //           "y": 0,
  //         },
  //         "type": "move",
  //       },
  //       {
  //         "pos": {
  //           "x": 200,
  //           "y": 200,
  //         },
  //         "type": "click",
  //       },
  //       {
  //         "text": "good",
  //         "type": "input",
  //       },
  //       {
  //         "text": "good",
  //         "type": "type",
  //       },
  //       {
  //         "img": "test2.png",
  //         "type": "click",
  //       },
  //     ]
  //   `)
  // })
  // it("should excute", async () => {
  //   const steps: Step[] = parseStep("./test/converter.yaml");
  //   for (const step of steps) {
  //     await executeStep(step)
  //   }
  // })
// })