import Jimp from 'jimp';
import { cv } from 'opencv-wasm'
import { join } from 'node:path';
import * as robot from 'robotjs';

export const screenCaptureToFile = (robotScreenPic: robot.Bitmap): Promise<Jimp> => {
  return new Promise((resolve, reject) => {
    try {
      const image: Jimp = new Jimp(robotScreenPic.width, robotScreenPic.height);
      let pos = 0;
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        /* eslint-disable no-plusplus */
        image.bitmap.data[idx + 2] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = robotScreenPic.image.readUInt8(pos++);
        /* eslint-enable no-plusplus */
      });
      resolve(image);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

interface Point {
  x: number;
  y: number;
}

type PointPair = [Point, Point];
export const findImage = async (srcImg: Jimp, templImg: Jimp): Promise<PointPair[]> => {

  let src = cv.matFromImageData(srcImg.bitmap);
  let templ = cv.matFromImageData(templImg.bitmap);

  let processedImage = new cv.Mat();
  let mask = new cv.Mat();

  cv.matchTemplate(src, templ, processedImage, cv.TM_CCORR_NORMED, mask);

  let result = cv.minMaxLoc(processedImage, mask);
  let maxPoint = result.maxLoc;
  let point: Point = new cv.Point(maxPoint.x + src.cols, maxPoint.y + src.rows);
  let points: PointPair[] = []
  points.push([maxPoint, point])

  if (process.env.DEBUG) {
    console.log(points);
    let color = new cv.Scalar(0, 255, 0, 255);
    cv.rectangle(templ, point, maxPoint, color, 2, cv.LINE_8, 0);
    new Jimp({
      width: templ.cols,
      height: templ.rows,
      data: Buffer.from(templ.data)
    })
      .write(join(__dirname, 'template-matching.png'));
  }
  return points;
}