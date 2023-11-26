import { describe, expect, it } from 'vitest';
import { findImage, screenCaptureToFile } from '../src/capture';
import robot from 'robotjs';

import Jimp from 'jimp';
import { cv } from 'opencv-wasm';

describe("capture", async () => {
  it("should generate a img file", async () => {
    const image = await screenCaptureToFile(robot.screen.capture());
    image.write("./test/generate.png");
  })
})



describe("diff", () => {
  it("should diff two img", async () => {
    const img1 = await Jimp.read("./test/test.png");
    const img2 = await Jimp.read("./test/test2.png");
    const points = await findImage(img1, img2)
    const [p1, p2] = points[0]
    console.log(p1, p2);
    // expect(p1).toEqual(
    //   {
    //     "x": 1890,
    //     "y": 47,
    //   },
    // )
    // expect(p2).toEqual(
    //   {
    //     "x": 1942,
    //     "y": 93,
    //   },
    // )
  })

  // it("should diff two img", async () => {

  //   const img1 = await Jimp.read("./test/test.png");
  //   const img2 = await Jimp.read("./test/test2.png");
  //   let src = cv.matFromImageData(img1.bitmap);
  //   let templ = cv.matFromImageData(img2.bitmap);
  //   let dst = new cv.Mat();
  //   let mask = new cv.Mat();
  //   for (let i = 0; i < 10; i++) {
  //     cv.matchTemplate(src, templ, dst, cv.TM_CCORR_NORMED, mask);
  //     let result = cv.minMaxLoc(dst, mask);
  //     let maxPoint = result.maxLoc;
  //     let color = new cv.Scalar(255, 0, 0, 255);
  //     let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
  //     cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
  //     new Jimp({
  //       width: src.cols,
  //       height: src.rows,
  //       data: Buffer.from(src.data)
  //     })
  //       .write(__dirname + `/test-output/template${i}.png`);
  //   }
  //   src.delete(); dst.delete(); mask.delete();
  // })
})


