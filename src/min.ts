// Define a global variable 'Module' with a method 'onRuntimeInitialized':
const Module = {
  onRuntimeInitialized() {
    // this is our application:
    console.log(cv.getBuildInformation())
  }
}
// Load 'opencv.js' assigning the value to the global variable 'cv'
import { cv } from './turn';